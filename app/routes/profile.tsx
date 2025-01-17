import type { Route } from "./+types/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Profile | My Commerce" },
    {
      name: "description",
      content: "One stop solutions for your shopping.",
    },
  ];
}

export default function MyProfile() {
  return (
    <div className="container mx-auto px-4 my-8">
      <h1>My Profile</h1>
    </div>
  );
}
