import { Link, NavLink } from "react-router";
import { SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";
import { Logo } from "~/components/logo";

function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex-wrap p-4 flex gap-2 md:flex-nowrap justify-between items-center border-b-2">
        <div className="order-0">
          <Logo />
        </div>
        <div className="flex gap-4 order-3 md:order-1 w-full md:w-auto">
          <NavLink to="/search" className="font-medium opacity-85">
            Categories
          </NavLink>
          <NavLink to="/search" className="font-medium opacity-85">
            Deals
          </NavLink>
          <NavLink to="/search" className="font-medium opacity-85">
            New
          </NavLink>
        </div>
        <div className="flex gap-2 order-2 -mr-2" title="Search">
          <Link to="/search" className="p-2">
            <SearchIcon />
          </Link>
          <Link to="/my-cart" className="p-2" title="My Cart">
            <ShoppingBagIcon />
          </Link>
          <Link to="/my-profile" className="p-2" title="My Account">
            <UserIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
