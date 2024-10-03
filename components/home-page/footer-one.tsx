"use client";

import * as z from "zod";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"; // Import useState for handling the success message
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  details: z.string().min(1, {
    message: "Please enter some details.",
  }),
});

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for submission success

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      details: "",
    },
  });

  // Define a submit handler.
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
        setIsSubmitted(true); // Set success state to true
        form.reset(); // Optionally reset form fields
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsSubmitted(false); // You could set an error state here
      });
  }

  return (
    <footer>
          <h3 className="text-4xl not-prose flex flex-col gap-6 mt-5 mb-5 text-center">
            <Balancer>
              Contact 
            </Balancer>
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

            <Button type="submit">Submit</Button>
          </form>
        </Form>
        {isSubmitted && (
          <div className="bg-green-100 text-green-800 p-4 mt-4 rounded">
            Your form has been successfully submitted!
          </div>
        )}
      </div>
    </footer>
  );
}
