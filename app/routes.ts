import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/main-layout.tsx", [
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("cart", "routes/cart.tsx"),
    route("profile", "routes/profile.tsx"),

    route("about", "routes/about.tsx"),
    route("terms", "routes/terms.tsx"),
    route("privacy-policy", "routes/privacy-policy.tsx"),
  ]),
  layout("routes/auth/layout.tsx", [
    route("login", "routes/auth/login.tsx"),
    route("register", "routes/auth/register.tsx"),
    route("forgot-password", "routes/auth/forgot-password.tsx"),
    route("reset-password", "routes/auth/reset-password.tsx"),
  ]),

  route("healthcheck", "routes/healthcheck.tsx"),
] satisfies RouteConfig;
