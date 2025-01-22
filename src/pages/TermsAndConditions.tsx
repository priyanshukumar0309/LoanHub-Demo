import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import jsPDF from "jspdf";

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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Terms and Conditions", 10, 10);
    doc.setFontSize(12);
    console.log('print',customerData)
    doc.text(`
      Customer Information:
      Full Name: ${customerData.fullName || "N/A"}
      Email: ${customerData.email || "N/A"}
      Phone: ${customerData.phone || "N/A"}
      SPID Code: ${customerData.spidCode || "N/A"}
      
      Loan Details:
      Bank: ${offer.bank}
      Interest Rate: ${offer.rate}
      Monthly Payment: €${Math.round(offer.monthly).toLocaleString()}
      Term: ${offer.term} months
      
      General Terms:
      1. This agreement is between you and ${offer.bank} for vehicle financing.
      2. The interest rate is fixed at ${offer.rate} for the entire loan term.
      3. Monthly payments of €${Math.round(offer.monthly).toLocaleString()} are due on the same day each month.
      4. Early repayment options are available subject to bank terms.
      5. Late payments may incur additional fees and affect your credit score.
      
      Your Rights:
      • You have the right to cancel this agreement within 14 days.
      • You can request a full breakdown of fees and charges at any time.
      • You will receive annual statements of your loan account.
    `, 10, 20);
    doc.save("Terms_and_Conditions.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <Card className="p-8 shadow-md border border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h2>
          
          <div className="space-y-6 text-left text-gray-700">
            <section>
              <h3 className="text-xl font-semibold">Customer Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p><strong>Full Name:</strong> {customerData?.fullName || "N/A"}</p>
                <p><strong>Email:</strong> {customerData?.email || "N/A"}</p>
                <p><strong>Phone:</strong> {customerData?.phone || "N/A"}</p>
                <p><strong>SPID Code:</strong> {customerData?.spidCode || "N/A"}</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold">Loan Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p><strong>Bank:</strong> {offer.bank}</p>
                <p><strong>Interest Rate:</strong> {offer.rate}</p>
                <p><strong>Monthly Payment:</strong> €{Math.round(offer.monthly).toLocaleString()}</p>
                <p><strong>Term:</strong> {offer.term} months</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold">General Terms</h3>
              <ul className="list-disc pl-6">
                <li>This agreement is between you and {offer.bank} for vehicle financing.</li>
                <li>The interest rate is fixed at {offer.rate} for the entire loan term.</li>
                <li>Monthly payments of €{Math.round(offer.monthly).toLocaleString()} are due on the same day each month.</li>
                <li>Early repayment options are available subject to bank terms.</li>
                <li>Late payments may incur additional fees and affect your credit score.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold">Your Rights</h3>
              <ul className="list-disc pl-6">
                <li>You have the right to cancel this agreement within 14 days.</li>
                <li>You can request a full breakdown of fees and charges at any time.</li>
                <li>You will receive annual statements of your loan account.</li>
              </ul>
            </section>
          </div>
          
          <div className="mt-8 flex justify-between">
            <Button 
              onClick={handleDownloadPDF}
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              Download as PDF
            </Button>
            <Button 
              onClick={handleAgree}
              className="bg-green-600 text-white hover:bg-green-500"
            >
              I Agree to the Terms and Conditions
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsAndConditions;