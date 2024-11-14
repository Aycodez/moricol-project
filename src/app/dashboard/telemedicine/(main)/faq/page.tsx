import {
  AccordionShadcn,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion-shad";
import TelemedPageWrap from "../../_components/telemed-page-wrap";

const faqItems = [
  {
    question: "Is telemedicine as effective as in-person medical visits?",
    answer:
      "Telemedicine can be highly effective for many types of medical consultations. While it may not be suitable for all situations, it offers convenience and accessibility for many common health concerns and follow-ups.",
  },
  {
    question:
      "What types of medical issues can be addressed through telemedicine?",
    answer:
      "Telemedicine can address a wide range of issues including minor illnesses, mental health consultations, chronic disease management, and follow-up appointments. However, emergencies or conditions requiring physical examination may need in-person visits.",
  },
  {
    question: "Can I use telemedicine for follow-up appointments?",
    answer:
      "Yes, telemedicine is often ideal for follow-up appointments, especially when physical examination is not necessary. It allows doctors to check on your progress, adjust treatments, and answer any questions you may have.",
  },
  {
    question:
      "How do I schedule a telemedicine appointment with Moricol Healthcare?",
    answer:
      "You can schedule a telemedicine appointment through our website or mobile app. Simply log in to your account, choose your preferred doctor and time slot, and follow the prompts to set up your virtual visit.",
  },
  {
    question: "Is telemedicine secure and private?",
    answer:
      "Yes, telemedicine platforms used by healthcare providers are required to be HIPAA-compliant, ensuring your personal health information is protected. All communications are encrypted and secure.",
  },
  {
    question: "Can I get a prescription through a telemedicine appointment?",
    answer:
      "In many cases, yes. Doctors can prescribe many medications during telemedicine appointments. However, there are some restrictions on prescribing certain controlled substances via telemedicine.",
  },
];

export default function FAQAccordion() {
  return (
    <TelemedPageWrap>
      <div className="mx-auto max-w-3xl p-4">
        <h1 className="mb-6 text-2xl font-bold">FAQs</h1>
        <AccordionShadcn type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionShadcn>
      </div>
    </TelemedPageWrap>
  );
}
