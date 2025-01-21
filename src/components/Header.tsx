import { Car } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-volvo-primary text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Car className="w-8 h-8" />
        <span className="text-xl font-semibold">Volvo LoanHub</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="/" className="hover:text-volvo-accent transition-colors">Home</a>
        <a href="/calculator" className="hover:text-volvo-accent transition-colors">Calculator</a>
        <a href="#" className="hover:text-volvo-accent transition-colors">About</a>
      </nav>
    </header>
  );
};