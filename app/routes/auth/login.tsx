import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Login() {
  return (
    <div className="container mx-auto px-4 my-8">
      <p>Login page</p>
    </div>
  );
}
