import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About page of my-commerce" },
  ];
}

export default function About() {
  return (
    <div>
      <p>About</p>
    </div>
  );
}
