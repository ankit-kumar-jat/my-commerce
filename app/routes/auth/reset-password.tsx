import { Label } from "~/components/ui/label";
import type { Route } from "./+types/reset-password";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Form, Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reset Password | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function ResetPassword() {
  return (
    <Form className="p-6 md:p-8" method="POST">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">New Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </div>
    </Form>
  );
}
