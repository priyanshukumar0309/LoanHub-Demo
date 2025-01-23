import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-volvo-primary mb-6">About the Product</h2>
          <div className="space-y-6">
            {/* Product Description */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Platform Overview</h3>
              <p className="text-lg text-gray-700">
                Our platform brings all the leasing and loan options to one place, allowing you to compare and select the best offers for your needs. With an intuitive and user-friendly interface, our service streamlines the process of finding financing solutions for your car, helping you make an informed decision. Whether you're looking for car leasing, loans, or personalized finance options, we've got it all in one spot.
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg text-gray-700 font-semibold">
                    Compare Multiple Financing Options
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>View leasing and loan offers from various providers with detailed breakdowns of interest rates, terms, and conditions.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg text-gray-700 font-semibold">
                    Personalized Recommendations
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Get recommendations tailored to your financial profile, ensuring the best options for you.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg text-gray-700 font-semibold">
                    Real-time Application Tracking
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>Track your loan or lease application status in real-time, so you're always up-to-date with your process.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg text-gray-700 font-semibold">
                    One-Stop Platform
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>All financing options are available in one place, saving you time and effort when comparing providers.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* How It Works */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-volvo-primary text-white">1</Badge>
                  </div>
                  <div className="text-lg text-gray-700">
                    <h4 className="font-semibold">Step 1: Enter Your Information</h4>
                    <p>Simply input your financial details, including your budget, income, and credit score, to help us provide the best options for you.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-volvo-primary text-white">2</Badge>
                  </div>
                  <div className="text-lg text-gray-700">
                    <h4 className="font-semibold">Step 2: Compare Offers</h4>
                    <p>View various leasing and loan offers from multiple providers, complete with interest rates, terms, and monthly payments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Badge className="bg-volvo-primary text-white">3</Badge>
                  </div>
                  <div className="text-lg text-gray-700">
                    <h4 className="font-semibold">Step 3: Apply and Get Approved</h4>
                    <p>Once you've selected the best option, apply directly through the platform, and track your application's progress.</p>
                  </div>
                </div>
              </div>
            </section>

           
          </div>
        </CardContent>
      </Card>
    </div>
  );
};