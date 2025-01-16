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
    <div className="container mx-auto px-4 my-8">
      <p>Hero section will be a carousel slider</p>
      <p>Top categories</p>
      <p>Newely launced</p>
      <p>Top brands</p>
      <p>Top Picks for you</p>
      <p>other</p>
    </div>
  );
}
