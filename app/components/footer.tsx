import {
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router";
import { Logo } from "~/components/logo";

function Footer() {
  return (
    <footer className="container mx-auto mt-12">
      <div className="border-t-2 px-4 py-8">
        <div className="flex-col md:flex-row flex gap-6 justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex-col sm:flex-row flex gap-4 justify-between md:justify-around grow ">
            <div className="space-y-3">
              <h2 className="font-bold text-lg">Shop</h2>
              <ul className="space-y-1 font-medium text-muted-foreground">
                <li>
                  <Link to="/">What's New</Link>
                </li>
                <li>
                  <Link to="/">Deals</Link>
                </li>
                <li>
                  <Link to="/">Brands</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-lg">Company</h2>
              <ul className="space-y-1 font-medium text-muted-foreground">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-lg">Support</h2>
              <ul className="space-y-1 font-medium text-muted-foreground">
                <li>
                  <Link to="/help">Help</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Delivery</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-lg">Contacts</h2>
              <div className="space-y-2">
                <a
                  href="tel:9876543210"
                  className="font-medium text-muted-foreground"
                >
                  +91 9876543210
                </a>
                <div>
                  <ul className="flex gap-2 text-muted-foreground">
                    <li>
                      <Link to="/">
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FacebookIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <YoutubeIcon />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <TwitchIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="my-2 text-center text-xs text-muted-foreground">
        &copy;2025 Ankit Kumar Jat
      </p>
    </footer>
  );
}

export { Footer };
