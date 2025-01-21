import { Header } from "@/components/Header";
import { FinanceCalculator } from "@/components/FinanceCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-volvo-accent">
      <Header />
      <FinanceCalculator />
    </div>
  );
};

export default Calculator;