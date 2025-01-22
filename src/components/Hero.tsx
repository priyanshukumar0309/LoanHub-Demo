import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-volvo-accent to-white">
      <div className="text-center space-y-8 p-6">
        <h1 className="text-5xl font-bold text-volvo-primary">
          Welcome to Volvo LoanHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Experience hassle-free car financing with competitive rates and flexible terms.
          Start your journey towards owning your dream Volvo today.
        </p>
        <Button 
          onClick={() => navigate("/customer-details")}
          className="bg-volvo-primary hover:bg-volvo-primary/90 text-white px-8 py-6 text-lg"
        >
          Start Application
        </Button>
      </div>
    </div>
  );
};