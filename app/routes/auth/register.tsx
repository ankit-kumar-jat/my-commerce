import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Login() {
  return (
    <div className="container mx-auto px-4 my-8">
      <p>Register/Create new account page</p>
    </div>
  );
}
