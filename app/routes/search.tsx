import type { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function Search() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>Search</h1>
    </div>
  );
}
