import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/main-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    // route("terms", "routes/terms.tsx"),
    // route("privacy-policy", "routes/priv.tsx"),
  ]),
  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
