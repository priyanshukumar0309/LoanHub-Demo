import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const aboutPage = () => {
  const navigate = useNavigate();

  
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold text-volvo-primary mb-6">About the Product</h2>
          <div className="space-y-6">
            {/* Product Description */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Product Overview</h3>
              <p className="text-lg text-gray-700">
                Our innovative product brings together advanced technology and user-friendly design, providing you with the best experience. Built for reliability and durability, it is tailored to meet the needs of both everyday users and professionals alike. Whether you're driving around the city or embarking on an adventure, this product guarantees comfort, efficiency, and style.
              </p>
            </section>

            {/* Product Features */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>High-quality construction for long-lasting performance</li>
                <li>State-of-the-art technology for enhanced user experience</li>
                <li>Eco-friendly and energy-efficient design</li>
                <li>Compatible with a wide range of devices</li>
                <li>Easy setup and intuitive controls</li>
              </ul>
            </section>

            {/* Product Specifications */}
            <section>
              <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">Dimensions:</span>
                  <span className="text-gray-700">120cm x 50cm x 40cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">Weight:</span>
                  <span className="text-gray-700">15 kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">Power Consumption:</span>
                  <span className="text-gray-700">200W</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">Warranty:</span>
                  <span className="text-gray-700">2 years</span>
                </div>
              </div>
            </section>

            
          </div>
        </CardContent>
      </Card>
    </div>
  );
};