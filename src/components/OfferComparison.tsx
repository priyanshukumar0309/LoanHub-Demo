import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";

export const OfferComparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state?.customerData;

  const offers = [
    {
      bank: "Santander",
      logo: "/placeholder.svg",
      rate: "3.5%",
      monthly: 450,
      term: 60,
    },
    {
      bank: "UniCredit",
      logo: "/placeholder.svg",
      rate: "3.8%",
      monthly: 460,
      term: 60,
    },
    {
      bank: "BNP Paribas",
      logo: "/placeholder.svg",
      rate: "4.0%",
      monthly: 470,
      term: 60,
    },
  ];

  const handleSelectOffer = (offer: any) => {
    navigate("/terms", { 
      state: { 
        offer,
        customerData 
      } 
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-volvo-primary mb-6">Compare Financing Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{offer.bank}</CardTitle>
                <img 
                  src={offer.logo} 
                  alt={`${offer.bank} logo`} 
                  className="h-8 w-auto object-contain"
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-lg font-semibold">Interest Rate</p>
                <p>{offer.rate}</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Monthly Payment</p>
                <p>€{Math.round(offer.monthly).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Term</p>
                <p>{offer.term} months</p>
              </div>
              <Button 
                onClick={() => handleSelectOffer(offer)}
                className="w-full bg-volvo-primary hover:bg-volvo-primary/90"
              >
                Select This Offer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};