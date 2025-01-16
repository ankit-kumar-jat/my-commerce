import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>Privacy Policy</h1>
    </div>
  );
}
