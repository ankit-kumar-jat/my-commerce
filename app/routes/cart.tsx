import type { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function MyCart() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>Cart</h1>
    </div>
  );
}
