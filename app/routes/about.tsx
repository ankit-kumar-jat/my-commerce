import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | My Commerce" },
    { name: "description", content: "About page of my-commerce" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>Search</h1>
    </div>
  );
}
