import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, useLocation } from "react-router-dom";

export const FinanceCalculator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const customerData = location.state;

  const [formData, setFormData] = useState({
    carPrice: "45000",
    downPayment: "5000",
    income: "3500",
    term: "48",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/offers", { 
      state: {
        ...formData,
        customerData
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-volvo-primary mb-6">
        Finance Calculator
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="carPrice">Car Price (€)</Label>
          <Input
            id="carPrice"
            type="number"
            placeholder="Enter car price"
            value={formData.carPrice}
            onChange={(e) => setFormData({ ...formData, carPrice: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="downPayment">Down Payment (€)</Label>
          <Input
            id="downPayment"
            type="number"
            placeholder="Enter down payment"
            value={formData.downPayment}
            onChange={(e) => setFormData({ ...formData, downPayment: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="income">Monthly Income (€)</Label>
          <Input
            id="income"
            type="number"
            placeholder="Enter monthly income"
            value={formData.income}
            onChange={(e) => setFormData({ ...formData, income: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="term">Loan Term (months)</Label>
          <Input
            id="term"
            type="number"
            placeholder="Enter loan term"
            value={formData.term}
            onChange={(e) => setFormData({ ...formData, term: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-volvo-primary hover:bg-volvo-primary/90 text-white py-6"
        >
          Calculate Offers
        </Button>
      </form>
    </div>
  );
};