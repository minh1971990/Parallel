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
    <footer id="submit-ticket" className="bg-[#1F2833]">
      <h3 className="parallel-text text-6xl lg:text-7xl not-prose flex flex-col gap-6 mt-5 mb-5 text-center text-[#66FCF1]">
        <Balancer>Contact</Balancer>
      </h3>
      <div className="card container p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col items-left">
                  <FormLabel className="mb-2 text-xl description-text text-[#66FCF1]">Email</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full h-16 p-4 rounded-md border border-[#66FCF1]/20 bg-[#0B0C10] text-[#C5C6C7] text-lg"
                      placeholder="example@parallel.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#66FCF1]" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem className="flex flex-col items-left">
                  <FormLabel className="mb-2 text-xl description-text text-[#66FCF1]">Details</FormLabel>
                  <FormControl>
                    <textarea
                      className="w-full h-32 p-4 rounded-md border border-[#66FCF1]/20 bg-[#0B0C10] text-[#C5C6C7] text-lg"
                      placeholder="What issues are you having?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-[#66FCF1]" />
                </FormItem>
              )}
            />

            <button type="submit" className="hover-button text-lg">
              <IoMdSend className="mr-2 text-xl" />
              Submit
            </button>
          </form>
        </Form>
        {isSubmitted && (
          <div className="bg-[#45A29E]/20 text-[#66FCF1] p-4 mt-4 rounded border border-[#66FCF1]/20 text-lg">
            Your form has been successfully submitted!
          </div>
        )}
      </div>

      <style jsx>{`
        .hover-button {
          font-family: 'Montserrat', sans-serif;
          position: relative;
          z-index: 1;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0B0C10;
          background-color: #66FCF1 !important;
          border: 2px solid #66FCF1;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
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
