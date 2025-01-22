import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CustomerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "John Anderson",
    email: "john.anderson@example.com",
    phone: "+46 70 123 4567",
    identificationNumber: "19800101-1234",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/calculator", { state: formData });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold text-volvo-primary mb-6">
        Customer Details
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="identificationNumber">Personal Identity Number</Label>
          <Input
            id="identificationNumber"
            value={formData.identificationNumber}
            onChange={(e) => setFormData({ ...formData, identificationNumber: e.target.value })}
            required
            className="border-volvo-secondary"
          />
        </div>
        <Button 
          type="submit"
          className="w-full bg-volvo-primary hover:bg-volvo-primary/90 text-white py-6"
        >
          Continue to Calculator
        </Button>
      </form>
    </div>
  );
};