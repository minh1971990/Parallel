"use client";

import * as z from "zod";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { IoMdSend } from "react-icons/io";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  details: z.string().min(1, {
    message: "Please enter some details.",
  }),
});

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setIsSubmitted(true);
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitted(false);
      });
  }

  return (
    <footer>
      <h3 className="text-4xl not-prose flex flex-col gap-6 mt-5 mb-5 text-center">
        <Balancer>Contact</Balancer>
      </h3>
      <div className="container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-96"
                      placeholder="example@parallel.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Input
                      className="md:w-170 md:h-200"
                      placeholder="What issues are you having?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button type="submit" className="hover-button">
              <IoMdSend/>
              Submit
            </button>
          </form>
        </Form>
        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 mt-4 rounded">
            Your form has been successfully submitted!
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-button {
          position: relative;
          z-index: 1;
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          color: black;
          background-color: yellow !important;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: color 0.3s ease;
          display: inline-flex; /* Ensures icon and text stay on the same line */
          align-items: center; /* Vertically centers icon and text */
          gap: 0.5rem;
        }

        .hover-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: #00bfff;
          transition: width 0.3s ease;
          z-index: -1;
        }

        .hover-button:hover::before {
          width: 100%;
        }

        .hover-button:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  );
}
