import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
