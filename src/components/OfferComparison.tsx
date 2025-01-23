import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'; // Assuming this is used to detect screen size


export const OfferComparison = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state?.customerData;
  const financeData = location.state?.financeData;
  const [activeTab, setActiveTab] = useState("traditional");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const financingCategories = {
    traditional: {
      title: "Loan",
      description: "Fixed monthly payments with full ownership at the end",
      keyMetrics: ["Interest Rate", "Monthly Payment", "Term", "Down Payment", "Total Interest"]
    },
    lease: {
      title: "Leasing",
      description: "Lower monthly payments with flexible end-of-term options",
      keyMetrics: ["Monthly Payment", "Term", "Down Payment", "Residual Value", "Mileage Limit"]
    },
    balloon: {
      title: "Balloon Financing",
      description: "Reduced monthly payments with final balloon payment",
      keyMetrics: ["Interest Rate", "Monthly Payment", "Term", "Balloon Amount", "Total Cost"]
    }
  };

  const bankData = {
    traditional: [
      { name: "Intesa Sanpaolo", logo: "/intesa.jpeg" },
      { name: "UniCredit", logo: "/uni.png" },
      { name: "BNP Paribas", logo: "/bnp.svg" }
    ],
    lease: [
      { name: "Santander", logo: "/santander.svg" },
      { name: "Intesa Sanpaolo", logo: "/intesa.jpeg" }
    ],
    balloon: [
      { name: "UniCredit", logo: "/uni.png" },
      { name: "BNP Paribas", logo: "/bnp.svg" }
    ]
  };

  const calculateOfferDetails = (bank, category) => {
    const loanAmount = financeData.carPrice - financeData.downPayment;
    const term = financeData.term;
    const baseRate = Math.random() * (5 - 2) + 2;

    switch(category) {
      case "traditional":
        const monthlyRate = baseRate / 12 / 100;
        const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) / 
          (Math.pow(1 + monthlyRate, term) - 1);
        const totalInterest = (monthlyPayment * term) - loanAmount;
        
        return {
          bank: bank.name,
          logo: bank.logo,
          monthly: Math.round(monthlyPayment),
          rate: `${baseRate.toFixed(2)}%`,
          term,
          downPayment: financeData.downPayment,
          totalInterest: Math.round(totalInterest),
          totalCost: Math.round(monthlyPayment * term),
          highlights: [
            { label: "Interest Rate", value: `${baseRate.toFixed(2)}%` },
            { label: "Monthly Payment", value: `€ ${Math.round(monthlyPayment)}` },
            { label: "Total Interest", value: `€ ${Math.round(totalInterest)}` }
          ]
        };

      case "lease":
        const residualValue = financeData.carPrice * 0.4;
        const depreciationCost = (financeData.carPrice - residualValue) / term;
        const leasePayment = depreciationCost + (financeData.carPrice * 0.003);
        
        return {
          bank: bank.name,
          logo: bank.logo,
          monthly: Math.round(leasePayment),
          term,
          downPayment: financeData.downPayment,
          residualValue: Math.round(residualValue),
          mileageLimit: "15K km/year",
          totalCost: Math.round(leasePayment * term + financeData.downPayment),
          highlights: [
            { label: "Monthly Payment", value: `€ ${Math.round(leasePayment)}` },
            { label: "Mileage Limit", value: "15K km/year" },
            { label: "Residual Value", value: `€ ${Math.round(residualValue)}` }
          ]
        };

      case "balloon":
        const balloonAmount = loanAmount * 0.3;
        const reducedLoan = loanAmount - balloonAmount;
        const balloonRate = baseRate / 12 / 100;
        const balloonMonthly = (reducedLoan * balloonRate * Math.pow(1 + balloonRate, term)) /
          (Math.pow(1 + balloonRate, term) - 1);
        
        return {
          bank: bank.name,
          logo: bank.logo,
          monthly: Math.round(balloonMonthly),
          rate: `${baseRate.toFixed(2)}%`,
          term,
          downPayment: financeData.downPayment,
          balloonAmount: Math.round(balloonAmount),
          totalCost: Math.round(balloonMonthly * term + balloonAmount),
          highlights: [
            { label: "Monthly Payment", value: `€ ${Math.round(balloonMonthly)}` },
            { label: "Balloon Payment", value: `€ ${Math.round(balloonAmount)}` },
            { label: "Interest Rate", value: `${baseRate.toFixed(2)}%` }
          ]
        };
    }
  };

  const generateOffers = (category) => {
    return bankData[category].map(bank => calculateOfferDetails(bank, category));
  };

  const handleSelectOffer = (offer, category) => {
    const offerDetails = {
      category:category, // Add the category (e.g., "traditional", "lease", "balloon")
      bank: offer.bank,
      logo: offer.logo,
      monthly: offer.monthly,
      rate: offer.rate,
      term: offer.term,
      downPayment: offer.downPayment,
      totalCost: offer.totalCost,
      ...(category === "lease" && {
        residualValue: offer.residualValue,
        mileageLimit: offer.mileageLimit,
      }),
      ...(category === "balloon" && {
        balloonAmount: offer.balloonAmount,
      }),
    };

    navigate("/terms", { state: { offerDetails, customerData } });
  };

  const renderOfferCard = (offer) => {
    return (
      <Card className="border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-4">
            <img 
              src={offer.logo} 
              alt={`${offer.bank} logo`} 
              className="h-12 w-24 object-contain"
            />
          </div>
          <CardTitle className="text-xl font-bold text-volvo-primary">{offer.bank}</CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Highlight Box */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            {offer.highlights.map((highlight, index) => (
              <div key={index} className="mb-2 last:mb-0 flex justify-between items-center">
                <p className="text-sm text-gray-600">{highlight.label}</p>
                <p className="text-xl font-bold text-volvo-primary">{highlight.value}</p>
              </div>
            ))}
          </div>

          {/* Additional Details */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Term</span>
              <span className="font-semibold">{offer.term} months</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Down Payment</span>
              <span className="font-semibold">€ {offer.downPayment}</span>
            </div>
          </div>

          {/* End of Term Details */}
          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Total Cost</span>
              <span className="font-bold text-volvo-primary">€ {offer.totalCost}</span>
            </div>
            <p className="text-xs text-gray-500">
              {activeTab === "traditional" && "Full ownership after completion"}
              {activeTab === "lease" && "Option to buy, return, or upgrade"}
              {activeTab === "balloon" && `Final balloon payment: € ${offer.balloonAmount}`}
            </p>
          </div>

          <Button 
            onClick={() => handleSelectOffer(offer, activeTab)}
            className="w-full bg-volvo-primary hover:bg-volvo-primary/90 text-white py-2 rounded-lg transition-colors duration-200"
          >
            Select This Offer
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-volvo-primary mb-4">Compare Financing Options</h2>

      {/* Tab Section */}
      <Tabs defaultValue="traditional" className="w-full" onValueChange={setActiveTab}>
        {/* On mobile, use vertical tabs layout */}
        <TabsList
          className={`mb-8 flex ${isMobile ? 'flex-col' : 'flex-wrap space-x-4'} overflow-x-auto`}
        >
          {Object.entries(financingCategories).map(([key, category]) => (
            <TabsTrigger
              key={key}
              value={key}
              className={`px-8 py-2 whitespace-nowrap ${isMobile ? 'text-center' : ''}`}
            >
              {category.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        <TabsContent value={activeTab}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {generateOffers(activeTab).map((offer, index) => (
              <div key={index} className="w-full">
                {renderOfferCard(offer)}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};