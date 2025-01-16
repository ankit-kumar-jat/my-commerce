import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms and Conditions | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Terms() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>Terms and Conditions</h1>
    </div>
  );
}
