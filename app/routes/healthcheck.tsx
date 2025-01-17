import type { Route } from "./+types/healthcheck";

export function loader(_: Route.LoaderArgs) {
  return Response.json(
    { status: "OK" },
    { headers: { "Cache-Control": "no-store" } }
  );
}
