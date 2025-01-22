import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const FinanceCalculator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customerData = location.state;
  
  const [carPrice, setCarPrice] = useState(35000);
  const [downPayment, setDownPayment] = useState(5000);
  const [income, setIncome] = useState(4000);
  const [term, setTerm] = useState(60);

  const handleCalculate = () => {
    const financeData = {
      carPrice,
      downPayment,
      income,
      term,
    };
    navigate("/offers", { state: { financeData, customerData } });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-volvo-primary mb-6">Finance Calculator</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Car Price (€)</Label>
              <Input
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="border-volvo-secondary"
              />
              <Slider
                value={[carPrice]}
                onValueChange={(value) => setCarPrice(value[0])}
                max={100000}
                step={1000}
              />
            </div>

            <div className="space-y-2">
              <Label>Down Payment (€)</Label>
              <Input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="border-volvo-secondary"
              />
              <Slider
                value={[downPayment]}
                onValueChange={(value) => setDownPayment(value[0])}
                max={carPrice}
                step={500}
              />
            </div>

            <div className="space-y-2">
              <Label>Monthly Income (€)</Label>
              <Input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="border-volvo-secondary"
              />
              <Slider
                value={[income]}
                onValueChange={(value) => setIncome(value[0])}
                max={10000}
                step={100}
              />
            </div>

            <div className="space-y-2">
              <Label>Loan Term (months)</Label>
              <Input
                type="number"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="border-volvo-secondary"
              />
              <Slider
                value={[term]}
                onValueChange={(value) => setTerm(value[0])}
                min={12}
                max={84}
                step={12}
              />
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-volvo-primary hover:bg-volvo-primary/90"
            >
              Calculate Offers
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};