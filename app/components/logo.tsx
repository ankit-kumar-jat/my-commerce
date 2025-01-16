import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/" className="inline-flex font-extrabold text-xl uppercase">
      <span className="text-primary">My.</span>
      <span className="text-muted-foreground">C</span>
    </Link>
  );
}

export { Logo };
