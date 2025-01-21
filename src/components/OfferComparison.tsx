import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Building } from "lucide-react";

export const OfferComparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {};

  const offers = [
    {
      bank: "Santander",
      rate: "3.9%",
      monthly: ((formData.carPrice - formData.downPayment) * (1 + 0.039)) / formData.term,
      term: formData.term,
    },
    {
      bank: "UniCredit",
      rate: "4.2%",
      monthly: ((formData.carPrice - formData.downPayment) * (1 + 0.042)) / formData.term,
      term: formData.term,
    },
    {
      bank: "BNP Paribas",
      rate: "4.5%",
      monthly: ((formData.carPrice - formData.downPayment) * (1 + 0.045)) / formData.term,
      term: formData.term,
    },
  ];

  const handleSelectOffer = (offer: typeof offers[0]) => {
    navigate("/terms", { state: { offer } });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-volvo-primary mb-8">Compare Financing Offers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <Building className="w-6 h-6 text-volvo-primary" />
              <h3 className="text-xl font-semibold">{offer.bank}</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Interest Rate</p>
                <p className="text-2xl font-bold text-volvo-primary">{offer.rate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>
                <p className="text-2xl font-bold text-volvo-primary">
                  €{Math.round(offer.monthly).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Loan Term</p>
                <p className="text-lg">{offer.term} months</p>
              </div>
              <Button 
                className="w-full bg-volvo-primary hover:bg-volvo-primary/90"
                onClick={() => handleSelectOffer(offer)}
              >
                Select Offer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};