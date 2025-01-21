import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const offer = location.state?.offer;

  if (!offer) {
    navigate("/offers");
    return null;
  }

  return (
    <div className="min-h-screen bg-volvo-accent">
      <Header />
      <div className="max-w-2xl mx-auto p-6">
        <Card className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-volvo-primary mb-4">Congratulations!</h2>
          <p className="text-lg mb-6">
            You have successfully accepted the financing offer from {offer.bank}.
          </p>
          <div className="space-y-2 mb-8 text-left">
            <p><strong>Interest Rate:</strong> {offer.rate}</p>
            <p><strong>Monthly Payment:</strong> €{Math.round(offer.monthly).toLocaleString()}</p>
            <p><strong>Term:</strong> {offer.term} months</p>
          </div>
          <p className="mb-6 text-gray-600">
            A representative will contact you shortly to complete the process.
          </p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-volvo-primary hover:bg-volvo-primary/90"
          >
            Return to Home
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Success;