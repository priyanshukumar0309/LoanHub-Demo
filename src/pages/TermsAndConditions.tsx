import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const TermsAndConditions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const offer = location.state?.offer;
  const customerData = location.state?.customerData;

  if (!offer) {
    navigate("/offers");
    return null;
  }

  const handleAgree = () => {
    toast({
      title: "Terms Accepted",
      description: "You have successfully agreed to the terms and conditions.",
    });
    navigate("/success", { state: { offer } });
  };

  return (
    <div className="min-h-screen bg-volvo-accent">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <Card className="p-8">
          <h2 className="text-3xl font-bold text-volvo-primary mb-6">Terms and Conditions</h2>
          
          <div className="space-y-4 text-left mb-8">
            <h3 className="text-xl font-semibold">Customer Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Full Name: {customerData?.fullName}</p>
              <p>Email: {customerData?.email}</p>
              <p>Phone: {customerData?.phone}</p>
              <p>SPID Code: {customerData?.spidCode}</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">Loan Details</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Bank: {offer.bank}</p>
              <p>Interest Rate: {offer.rate}</p>
              <p>Monthly Payment: €{Math.round(offer.monthly).toLocaleString()}</p>
              <p>Term: {offer.term} months</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6">General Terms</h3>
            <p>1. This agreement is between you and {offer.bank} for vehicle financing.</p>
            <p>2. The interest rate is fixed at {offer.rate} for the entire loan term.</p>
            <p>3. Monthly payments of €{Math.round(offer.monthly).toLocaleString()} are due on the same day each month.</p>
            <p>4. Early repayment options are available subject to bank terms.</p>
            <p>5. Late payments may incur additional fees and affect your credit score.</p>
            
            <h3 className="text-xl font-semibold mt-6">Your Rights</h3>
            <p>• You have the right to cancel this agreement within 14 days.</p>
            <p>• You can request a full breakdown of fees and charges at any time.</p>
            <p>• You will receive annual statements of your loan account.</p>
          </div>
          <Button 
            onClick={handleAgree}
            className="w-full bg-volvo-primary hover:bg-volvo-primary/90"
          >
            I Agree to the Terms and Conditions
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;