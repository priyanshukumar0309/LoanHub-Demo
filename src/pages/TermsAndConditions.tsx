import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';


// Mock data for demonstration
const mockOffer = {
  category: "Traditional Loan",
  bank: "Santander",
  rate: "3.5%",
  monthly: 450,
  downPayment: 5000,
  term: 48,
  totalCost: 26600,
  loanAmount: 25000
};


const mockCustomerData = {
  fullName: "John Doe",
  email: "john@example.com",
  phone: "+39 123 456 7890",
  spidCode: "SPID123456"
};

const financeData = {
  model: "Volvo XC40",
  carPrice: 35000
};

const TermsAndConditions = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  
  // Using mock data for demonstration
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const offer = location.state?.offerDetails;
  const customerData = location.state?.customerData;
  
  const getFinanceTypeSpecificTerms = () => {
    switch (offer.category) {
      case "Leasing":
        return {
          title: "Leasing Terms",
          terms: [
            `Monthly lease payments of €${Math.round(offer.monthly)} include maintenance package`,
            "Vehicle must be maintained according to manufacturer's schedule",
            `End of term options: Buy for €12,000, return, or trade-in`,
            "Annual mileage limit of 20,000 km applies",
            "Excess wear and tear charges may apply"
          ]
        };
      case "Balloon Financing":
        return {
          title: "Balloon Finance Terms",
          terms: [
            `Monthly payments of €${Math.round(offer.monthly)} until term end`,
            `Final balloon payment of €${Math.round(offer.loanAmount * 0.3)} required`,
            "Option to refinance balloon payment available",
            "Early settlement requires balloon payment",
            "Vehicle ownership transfers after final payment"
          ]
        };
      default: // Traditional Loan
        return {
          title: "Loan Terms",
          terms: [
            `Fixed monthly payments of €${Math.round(offer.monthly)}`,
            "Full ownership rights transfer upon completion",
            "No mileage restrictions or condition requirements",
            "Early repayment option available",
            "Vehicle can be modified or sold during term"
          ]
        };
    }
  };

  const financeTypeTerms = getFinanceTypeSpecificTerms();

  const handleAgree = () => {
    navigate("/success", { state: { offer } });

  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {showSuccessAlert && (
        <Alert className="mb-4 bg-green-50 border-green-200">
          <AlertCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-600">
            Terms and conditions accepted successfully.
          </AlertDescription>
        </Alert>
      )}
      
      <Card className="max-w-4xl mx-auto ">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">Terms and Conditions</CardTitle>
        </CardHeader>
        
        <CardContent id="pdf-content" className="space-y-6 ">
          <section className=''>
            <h3 className="text-xl font-semibold mb-3">Customer Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p><strong>Full Name:</strong> {customerData?.fullName}</p>
              <p><strong>Email:</strong> {customerData?.email}</p>
              <p><strong>Phone:</strong> {customerData?.phone}</p>
              <p><strong>SPID Code:</strong> {customerData?.spidCode}</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Vehicle Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p><strong>Model:</strong> {financeData?.model}</p>
              <p><strong>Price:</strong> €{financeData?.carPrice}</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Finance Details</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p><strong>Type:</strong> {offer.category}</p>
              <p><strong>Bank:</strong> {offer.bank}</p>
              <p><strong>Interest Rate:</strong> {offer.rate}</p>
              <p><strong>Monthly Payment:</strong> €{Math.round(offer.monthly)}</p>
              <p><strong>Down Payment:</strong> €{offer.downPayment}</p>
              <p><strong>Term:</strong> {offer.term} months</p>

              {/* Conditionally display additional fields based on financing type */}
              {offer.category === "traditional" && (
                <>
                  <p><strong>Total Interest:</strong> €{offer.totalInterest}</p>
                </>
              )}

              {offer.category === "lease" && (
                <>
                  <p><strong>Residual Value:</strong> €{offer.residualValue}</p>
                  <p><strong>Mileage Limit:</strong> {offer.mileageLimit}</p>
                </>
              )}

              {offer.category === "balloon" && (
                <>
                  <p><strong>Balloon Payment:</strong> €{offer.balloonAmount}</p>
                </>
              )}

              <p><strong>Total Cost:</strong> €{offer.totalCost}</p>
            </div>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-3">{financeTypeTerms.title}</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <ul className="list-disc pl-6 space-y-2">
                {financeTypeTerms.terms.map((term, index) => (
                  <li key={index}>{term}</li>
                ))}
              </ul>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">General Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>This agreement is between you and {offer.bank} for vehicle financing.</li>
              <li>The interest rate is fixed at {offer.rate} for the entire term.</li>
              <li>Monthly payments are due on the same day each month.</li>
              <li>Late payments may incur additional fees and affect credit score.</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>14-day cooling-off period from agreement date</li>
              <li>Annual statements provided</li>
              <li>Full fee breakdown available on request</li>
            </ul>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 flex items-start">
            <AlertCircle className="text-blue-400 mr-2 flex-shrink-0" />
            <p className="text-sm text-blue-700">
              Please review all terms carefully. By clicking "I Agree", you confirm that you have read and understood all terms and conditions.
            </p>
          </div>
          
          <div className="flex justify-end space-x-4 mt-6">
          
            <Button 
              onClick={handleAgree}
              className="bg-green-600 hover:bg-green-500 text-white"
            >
              I Agree to the Terms and Conditions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;