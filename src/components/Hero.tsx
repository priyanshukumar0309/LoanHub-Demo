import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-volvo-primary text-white py-20 px-6 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Finance Your Volvo Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fadeIn">
          Discover personalized financing solutions from trusted partners.
          Compare rates and find the perfect plan for your new Volvo.
        </p>
        <Button 
          onClick={() => navigate("/calculator")}
          className="bg-white text-volvo-primary hover:bg-volvo-accent px-8 py-6 text-lg animate-fadeIn"
        >
          Start Your Application
        </Button>
      </div>
    </div>
  );
};