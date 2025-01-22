import { Header } from "@/components/Header";
import { CustomerForm } from "@/components/CustomerForm";

const CustomerDetails = () => {
  return (
    <div className="min-h-screen bg-volvo-accent">
      <Header />
      <CustomerForm />
    </div>
  );
};

export default CustomerDetails;