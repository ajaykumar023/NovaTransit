import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#hero"
            className="hover:text-blue-600 transition duration-200"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-blue-600 transition duration-200"
          >
            Features
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition duration-200"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition duration-200"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">

          <ThemeToggle />

          <Button asChild>
            <Link to="/login">
              Login
            </Link>
          </Button>

        </div>
      </div>
    </header>
  );
}