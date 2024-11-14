import Button from "@/components/button";
import { Textarea } from "@/components/textarea";
import { BiPhone } from "react-icons/bi";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import TelemedPageWrap from "../../_components/telemed-page-wrap";

export default function ContactUs() {
  return (
    <TelemedPageWrap>
      <div className="mx-auto max-w-2xl space-y-6 py-4">
        <h1 className="text-center text-2xl font-bold md:text-left">
          Contact Us
        </h1>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              How can we help you?
            </label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-[150px]"
            />
          </div>
          <p className="text-sm text-gray-500">
            Fill out the form above to send an email and one of our team members
            will address your issue as soon as possible.
          </p>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
            SEND
          </Button>
        </form>

        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>House 2, Road 4 Abraham Adesanya Estate ajah Lekki lagos</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Support@moricolhealth.com</span>
          </div>
          <div className="flex justify-center space-x-4">
            <FaFacebook className="h-6 w-6" />
            <BsInstagram className="h-6 w-6" />
            <BsTwitter className="h-6 w-6" />
            <BiPhone className="h-6 w-6" />
          </div>
        </div>
      </div>
    </TelemedPageWrap>
  );
}
