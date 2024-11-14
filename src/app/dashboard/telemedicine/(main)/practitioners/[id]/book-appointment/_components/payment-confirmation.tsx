"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/button";
import { Card, CardContent, CardFooter } from "@/components/card";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

export default function PaymentConfirmation({
  nextStep,
  //   prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const [showCVV, setShowCVV] = useState(false);

  return (
    <div className="mx-auto max-w-xl">
      <Card className="w-full border-0 px-0 shadow-none">
        <CardContent className="space-y-6 px-0 pt-6">
          {/* Doctor Information */}
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="/placeholder.svg?height=48&width=48"
                alt="Dr. Frank Ufondu"
              />
              <AvatarFallback>FU</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Dr. Frank Ufondu</h3>
              <p className="text-sm text-gray-500">
                General Doctor, Hisglory Specialist Hospitals.
              </p>
              <p className="text-sm text-gray-500">Today, 12:30pm (30mins)</p>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="mb-2 font-semibold">ORDER SUMMARY</h3>
            <div className="rounded-md bg-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">New Health Concern</p>
                  <p className="text-sm text-gray-500">With Dr. Frank Ufondu</p>
                  <p className="text-sm text-gray-500">
                    22nd Wed, October, 2023 at 12:30PM CAT
                  </p>
                </div>
                <p className="font-semibold">₦5,700</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between rounded-md bg-primary-500 p-2 text-white">
              <p className="font-semibold">Today&apos;s Total</p>
              <p className="font-semibold">₦5,700</p>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h3 className="mb-2 font-semibold">Select Payment Method</h3>
            <RadioGroup defaultValue="card" className="space-y-2">
              <div className="flex items-center space-x-2 rounded-md border p-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Credit Card, Debit Card & E-wallet</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Card Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardHolder">Card Holder&apos;s Name</Label>
              <Input id="cardHolder" placeholder="Card holder's Name" />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Numbers</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="0000 - 0000 - 0000 - 0000"
                  type={showCardNumber ? "text" : "password"}
                />
                <Button
                  variant="outline"
                  className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                  onClick={() => setShowCardNumber(!showCardNumber)}
                >
                  {showCardNumber ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Label htmlFor="expiration">Card Expiration</Label>
                <Input id="expiration" placeholder="MM / YY" />
              </div>
              <div className="flex-1">
                <Label htmlFor="cvv">CVV</Label>
                <div className="relative">
                  <Input
                    id="cvv"
                    placeholder="XXX"
                    type={showCVV ? "text" : "password"}
                  />
                  <Button
                    variant="outline"
                    className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                    onClick={() => setShowCVV(!showCVV)}
                  >
                    {showCVV ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="mb-2 font-semibold">Other Services</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="flex-1">
                <img
                  src="/placeholder.svg?height=20&width=20"
                  alt="PayPal"
                  className="mr-2 h-5 w-5"
                />
                Paypal
              </Button>
              <Button variant="outline" className="flex-1">
                <img
                  src="/placeholder.svg?height=20&width=20"
                  alt="Google Pay"
                  className="mr-2 h-5 w-5"
                />
                Google Pay
              </Button>
              <Button variant="outline" className="flex-1">
                <img
                  src="/placeholder.svg?height=20&width=20"
                  alt="Apple Pay"
                  className="mr-2 h-5 w-5"
                />
                Apple Pay
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={nextStep}
            className="w-full bg-primary-500 text-white hover:bg-primary-600"
          >
            Pay ₦5,700
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
