import { Header } from "@/components/Header";
import { aboutPage } from "@/components/aboutPage";

const aboutPage = () => {
  return (
    <div className="min-h-screen bg-volvo-accent">
      <Header />
      <aboutPage />
    </div>
  );
};

export default aboutPage;