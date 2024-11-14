"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/card";
import { Textarea } from "@/components/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/radio-group";
import { Label } from "@/components/label";
import { ShadButton } from "@/components/shadcn-button";

export default function ReviewClient() {
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState("");
  const [recommend, setRecommend] = useState<"yes" | "no">("yes"); // Default to "yes"

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="mx-auto max-w-2xl p-4">
        <Card>
          <CardContent className="p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img
                  src="/images/client.jpg"
                  alt="Dr. Tierra Riley"
                  className="rounded-lg"
                />
                <span
                  style={{ fontFamily: "sans-serif" }}
                  className="absolute -left-4 -top-4 text-6xl text-primary-500"
                >
                  “
                </span>
                <span
                  style={{ fontFamily: "sans-serif" }}
                  className="absolute -bottom-12 -right-3 text-6xl text-blue-500"
                >
                  ”
                </span>
              </div>
            </div>

            <h2 className="mb-4 text-center text-xl font-semibold">
              How was your experience with{" "}
              <span className="text-primary-500">Dr. Tierra Riley</span>?
            </h2>

            <div className="mb-6 flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            <div className="mb-6">
              <Label htmlFor="review" className="mb-2 block">
                Write a review
              </Label>
              <div className="relative">
                <Textarea
                  id="review"
                  placeholder="Tell people about your experience"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="min-h-[150px]"
                />
                <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                  Max 450 Words
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="mb-2">
                Would you recommend Dr. Mahmud Nik to your friends?
              </p>
              <RadioGroup
                className="flex items-center gap-5"
                onValueChange={(value) => setRecommend(value as "yes" | "no")}
                value={recommend} // Set the value of the RadioGroup
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="yes"
                    id="yes"
                    className={recommend === "yes" ? "bg-primary-500" : ""}
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="no"
                    id="no"
                    className={recommend === "no" ? "bg-primary-500" : ""}
                  />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>

            <ShadButton className="w-full bg-primary-500 text-white hover:bg-primary-600">
              SUBMIT REVIEW
            </ShadButton>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
