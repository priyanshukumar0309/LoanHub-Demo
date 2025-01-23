import { Car, Menu } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Header = () => {
  return (
    <header className="bg-volvo-primary text-white py-4 px-6 flex items-center justify-between flex-wrap z-10">
      {/* Logo */}
      <a href="/" className="flex items-center space-x-2">
        <Car className="w-8 h-8" />
        <span className="text-xl font-semibold">Car LoanHub</span>
      </a>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center z-1">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="bg-volvo-primary text-white p-2 rounded-md focus:outline-none">
            <Menu className="w-6 h-6" />
          </DropdownMenu.Trigger>

          {/* Dropdown Content for Mobile */}
          <DropdownMenu.Content className="bg-white text-black rounded-lg shadow-lg mt-2 w-48 p-2 z-1">
            <DropdownMenu.Item className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md">
              <a href="/">Home</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md">
              <a href="/calculator">Calculator</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-md">
              <a href="/about">About</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0 z-1">
        <a href="/" className="hover:text-volvo-accent transition-colors">
          Home
        </a>
        <a href="/calculator" className="hover:text-volvo-accent transition-colors">
          Calculator
        </a>
        <a href="/about" className="hover:text-volvo-accent transition-colors">
          About
        </a>
      </nav>
    </header>
  );
};