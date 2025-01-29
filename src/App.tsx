import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomerDetails from "./pages/CustomerDetails";
import Calculator from "./pages/Calculator";
import Offers from "./pages/Offers";
import TermsAndConditions from "./pages/TermsAndConditions";
import Success from "./pages/Success";
import About from "./pages/About"
import PersonaPage from "./pages/FI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/FI" element={<PersonaPage />} />

          <Route path="/offers" element={<Offers />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/success" element={<Success />} />
          <Route path="/About" element={<About />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;