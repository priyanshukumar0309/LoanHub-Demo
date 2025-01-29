import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, MapPin, Briefcase, Clock, Target, CheckCircle } from 'lucide-react';
import { Header } from "@/components/Header";

const PersonaPage = () => {
  return (
    <div className="min-h-screen bg-volvo-accent">
      {/* Header Section */}
      <Header />
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute -bottom-20 left-8">
            <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
              <img
                src="/fi.jpg"
                alt="David Thompson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-24 px-8 pb-8">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-3xl font-bold text-gray-900">David Thompson</h1>
            <Badge className="bg-blue-600">F&I Manager</Badge>
          </div>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>38 years old</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>Stockholm, Sweden</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={16} />
              <span>Volvo Dealership</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>10+ years experience</span>
            </div>
          </div>

          {/* Background & Responsibilities */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Background & Responsibilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">•</div>
                  <span>Works at a dealership, assisting customers with financing and insurance options.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">•</div>
                  <span>Acts as a bridge between customers, banks, and financial institutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">•</div>
                  <span>Helps structure loan and lease agreements based on customer needs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">•</div>
                  <span>Manages paperwork, approvals, and compliance with financial regulations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-blue-600">•</div>
                  <span>Balances between customer satisfaction and dealership profitability.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Pain Points */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Pain Points</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Manual & Time-Consuming Processes",
                    description: "Comparing different financing options takes too long, slowing down deal closures."
                  },
                  {
                    title: "Lack of Real-Time Updates",
                    description: "Interest rates, loan terms, and approval processes are often not updated in real-time, leading to delays."
                  },
                  {
                    title: "Complex Offerings Confuse Customers",
                    description: "Customers struggle to understand various financing plans, making decision-making difficult."
                  },
                  {
                    title: "Limited Integration with Banks & Lenders",
                    description: "F&I managers must manually check different lender portals, causing inefficiencies."
                  },
                  {
                    title: "Missed Upsell Opportunities",
                    description: "Without a structured way to showcase add-ons like insurance and warranty, potential revenue is lost."
                  }
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2 p-4 bg-red-50 rounded-lg">
                    <Target className="w-5 h-5 mt-1 text-red-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Solution Benefits */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">How This Solution Helps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Streamlined Offer Comparison",
                    description: "Provides an easy-to-use interface for quickly comparing financing and insurance options."
                  },
                  {
                    title: "Real-Time Data & Approvals",
                    description: "Fetches live rates, approvals, and lender terms, reducing processing time."
                  },
                  {
                    title: "Improved Customer Experience",
                    description: "Simplifies financial jargon, helping customers make informed decisions faster."
                  },
                  {
                    title: "Seamless Bank & Lender Integration",
                    description: "Connects directly with financial institutions for faster loan approvals and document management."
                  },
                  {
                    title: "Increases Upsell Conversions",
                    description: "Smart recommendations for insurance, warranties, and add-ons at the right stage of the customer journey."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 mt-1 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonaPage;