import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation, useNavigate } from "react-router-dom";

export const OfferComparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state?.customerData;
  const financeData = location.state?.financeData;

  const calculateEMI = (loanAmount: number, rate: number, tenure: number) => {
    const monthlyRate = rate / 12 / 100; // Convert annual rate to monthly
    return (
      loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, tenure) /
      (Math.pow(1 + monthlyRate, tenure) - 1)
    );
  };

  const generateOffers = () => {
    const loanAmount = financeData.carPrice - financeData.downPayment;
    const term = financeData.term;

    // Bank data with logos
    const bankData = [
      { name: "Santander", logo: "/santander.svg" },
      { name: "UniCredit", logo: "/uni.png" },
      { name: "BNP Paribas", logo: "/bnp.svg" },
      { name: "Intesa Sanpaolo", logo: "/intesa.jpeg" }, // New option 1
      { name: "Revolut", logo: "/revolut.png" } // New option 2
    ];

    // Generate offers dynamically
    // Generate offers dynamically
    return bankData.map((bank) => {
      const rate = Math.random() * (5 - 2) + 2; // Random rate between 2% and 5%
      const emi = calculateEMI(loanAmount, rate, term);
      const totalPaid = Math.round(emi * term);

      return {
        bank: bank.name,
        logo: bank.logo,
        rate: `${rate.toFixed(2)}%`,
        monthly: Math.round(emi),
        term,
        loanAmount,
        downPayment: financeData.downPayment,
        totalPaid,
      };
    });
  };

  const offers = generateOffers();

  const handleSelectOffer = (offer: any) => {
    navigate("/terms", { state: { offer, customerData } });
  };

  // Function to find the offer with the minimum EMI
  const getOfferWithMinEMI = (offers: any[]) => {
    return offers.reduce((minOffer, currentOffer) => {
      return currentOffer.monthly < minOffer.monthly ? currentOffer : minOffer;
    });
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-volvo-primary mb-6">Compare Financing Offers</h2>

      {/* Offer Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {offers.map((offer, index) => {
        // Identify the offer with the minimum EMI
        const minEMIOffer = getOfferWithMinEMI(offers);
        const isMinEMI = offer.monthly === minEMIOffer.monthly;

        return (
          <Card
            key={index}
            className={`border border-gray-200 rounded-lg shadow-lg p-4 ${isMinEMI ? 'bg-green-100' : ''}`} // Apply green background for minimum EMI offer
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{offer.bank}</CardTitle>
                <img 
                  src={offer.logo} 
                  alt={`${offer.bank} logo`} 
                  className="h-10 w-20 object-contain" // Fixed size for the logo
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Interest Rate:</span>
                <span>{offer.rate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monthly Payment:</span>
                <span>€{offer.monthly.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Term:</span>
                <span>{offer.term} months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Loan Amount:</span>
                <span>€{offer.loanAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Down Payment:</span>
                <span>€{offer.downPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total Paid:</span>
                <span>€{offer.totalPaid.toLocaleString()}</span>
              </div>
              <Button 
                onClick={() => handleSelectOffer(offer)}
                className="w-full bg-volvo-primary hover:bg-volvo-primary/90"
              >
                Select This Offer
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
);
};