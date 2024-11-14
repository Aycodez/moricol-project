"use client";

import { ChatCircles, File, StarSVG } from "@/components/svgs";
import Image from "next/image";
import CourseTimeLecturesSection from "../components/time-lecture-section";
import CurriculumCard from "../components/curriculum-card";
import { BiDownload } from "react-icons/bi";
import PrevPageBtn from "./prev-page-btn";
import { useState } from "react";

const courseDescriptionDetailLink = [
  {
    name: "Overview",
    link: "overview",
  },
  {
    name: "Lectures Notes",
    link: "notes",
  },
  {
    name: "Attach File",
    link: "files",
  },
  {
    name: "Comments",
    link: "comments",
  },
];

export default function CourseDetail({ params }: { params: { id: string } }) {
  console.log(params);

  const [activeLink, setActiveLink] = useState("overview");

  const FiveStar = ({ className }: { className?: string }) => (
    <ul className="flex shrink-0">
      {Array(5)
        .fill("")
        .map((_, i) => (
          <li key={i}>
            <StarSVG fill="#FD8E1F" className={className} />
          </li>
        ))}
    </ul>
  );

  return (
    <main className="pb-20">
      <section className="flex items-center justify-between bg-[#F5F7FA] px-8 py-5">
        <div className="flex gap-x-4">
          <PrevPageBtn />
          <div>
            <h1 className="mb-3 text-lg font-medium text-[#1D2026]">
              Complete Website Responsive Design: from Figma to Webflow to
              Website Design
            </h1>
            <CourseTimeLecturesSection />
          </div>
        </div>
        <p className="text-2xl text-primary-500">PRICE: ₦20,000</p>
      </section>

      <section className="mb-16 flex items-start justify-between gap-x-6 px-14 py-6">
        {/* Right hand side */}
        <div className="grid gap-y-10">
          {/* Heading */}
          <div>
            {/* <Breadcrumb /> */}
            <div className="mb-3 text-sm">
              Home <span className="mx-2">{">"}</span> Online{" "}
              <span className="mx-2">{">"}</span>
            </div>

            <h2 className="mb-6 text-3xl font-semibold">
              Complete Website Responsive Design: from Figma to Webflow to
              Website Design
            </h2>

            <div className="flex justify-between">
              <article className="flex items-center gap-x-3">
                <div className="flex">
                  <div className="relative h-[50px] w-[50px] overflow-hidden rounded-full border-[3px] border-white">
                    <Image fill src="/images/client.jpg" alt="" />
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-sm text-[#6E7485]">Instructor</p>
                  <h3 className="text-medium flex items-center gap-x-1.5 text-[#1D2026]">
                    <span>Dianne Russell</span>{" "}
                    <div className="h-1.5 w-1.5 rounded-full bg-[#1D2026]" />{" "}
                    <span>Kristin Watson</span>
                  </h3>
                </div>
              </article>
              <div className="flex items-center gap-x-2">
                <FiveStar className="h-6 w-6" />
                <p className="font-medium text-[#1D2026]">
                  4.8{" "}
                  <span className="text-sm font-normal text-[#6E7485]">
                    {" "}
                    (451,444 Rating)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Course image */}
          <div className="relative h-[492px] w-full">
            <Image
              fill
              src="/images/client.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Links */}
          <section>
            <ul className="flex gap-x-6 border-b border-b-[#E9EAF0]">
              {courseDescriptionDetailLink.map(({ name, link }, i) => (
                <li key={i} className="w-full">
                  <button
                    className={`inline-block w-full border-b-2 pb-5 text-center ${activeLink === link ? "border-b-[#FF6636]" : "border-b-transparent"}`}
                    onClick={() => setActiveLink(link)}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Description */}
          {activeLink === "overview" && (
            <section>
              <h3 className="mb-5 text-2xl font-semibold text-[#1D2026]">
                Lectures Description
              </h3>
              <div className="grid gap-y-5 text-sm text-[#4E5566]">
                <p>
                  We cover everything you need to build your first website. From
                  creating your first page through to uploading your website to
                  the internet. We’ll use the world’s most popular (and Level 2)
                  web design tool called Visual Studio Code. There are exercise
                  files you can download and then work along with me. At the end
                  of each video I have a downloadable version of where we are in
                  the process so that you can compare your project with mine.
                  This will enable you to see easily where you might have a
                  problem. We will delve into all the good stuff such as how to
                  create your very own mobile burger menu from scratch learning
                  some basic JavaScript and jQuery.
                </p>
                <p>
                  If that all sounds a little too fancy - don’t worry, this
                  course is aimed at people new to web design and who have never
                  coded before. We’ll start right at the beginning and work our
                  way through step by step.
                </p>
              </div>
            </section>
          )}

          {/* Lecture Notes */}
          {activeLink === "notes" && (
            <section>
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-[#1D2026]">
                  Lectures Note
                </h3>
                <button className="flex items-center gap-x-2 bg-primary-100 px-4 py-3 font-medium text-primary-500">
                  <BiDownload /> Download Notes
                </button>
              </div>
              <div className="grid gap-y-5 text-sm text-[#4E5566]">
                <p>
                  We cover everything you need to build your first website. From
                  creating your first page through to uploading your website to
                  the internet. We’ll use the world’s most popular (and Level 2)
                  web design tool called Visual Studio Code. There are exercise
                  files you can download and then work along with me. At the end
                  of each video I have a downloadable version of where we are in
                  the process so that you can compare your project with mine.
                  This will enable you to see easily where you might have a
                  problem. We will delve into all the good stuff such as how to
                  create your very own mobile burger menu from scratch learning
                  some basic JavaScript and jQuery.
                </p>
                <p>
                  If that all sounds a little too fancy - don’t worry, this
                  course is aimed at people new to web design and who have never
                  coded before. We’ll start right at the beginning and work our
                  way through step by step.
                </p>
              </div>
            </section>
          )}

          {/* Attach Files (01) */}
          {activeLink === "files" && (
            <section>
              <h3 className="mb-5 text-2xl font-semibold text-[#1D2026]">
                Attach Files <span className="font-normal">(01)</span>
              </h3>
              <AttachementCard />
            </section>
          )}

          {activeLink === "comments" && (
            <section>
              <CommentSection />
            </section>
          )}
        </div>

        <section className="w-full max-w-[524px] shrink-0">
          <div className="mb-3.5 flex items-center justify-between font-semibold">
            <h3 className="text-[#1D2026]">Course contents</h3>
            <p className="text-xs text-[#23BD33]">15% Completed</p>
          </div>
          <div className="mb-4 bg-[#E9EAF0]">
            <div className="h-[3px] w-1/4 bg-[#23BD33]"></div>
          </div>
          <div className="border text-xs">
            <CurriculumCard />
            <CurriculumCard />
          </div>
        </section>
      </section>
    </main>
  );
}

function AttachementCard() {
  return (
    <article className="flex items-center justify-between bg-[#F5F7FA] p-6">
      <div className="flex items-center gap-x-3">
        <File className="h-12 w-12" />
        <div>
          <h3 className="mb-1 font-medium text-[#1D2026]">
            Create acount on webo
          </h3>
          <p className="text-sm text-[#6E7485]">12.6 MB</p>
        </div>
      </div>
      <button className="bg-primary-500 px-6 py-3 font-semibold text-white">
        Download File
      </button>
    </article>
  );
}

const CommentSection = () => {
  const comments = [
    {
      id: 1,
      author: "Jane Doe",
      avatar: "/api/placeholder/40/40",
      content: "This is an example comment. It could be about anything!",
      timestamp: "1 week ago",
      isAdmin: false,
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "/api/placeholder/40/40",
      content:
        "Here's another comment. Notice how it's structured similarly to the others.",
      timestamp: "1 week ago",
      isAdmin: true,
    },
    {
      id: 3,
      author: "Alice Johnson",
      avatar: "/api/placeholder/40/40",
      content: "Great discussion everyone! Keep the comments coming.",
      timestamp: "1 week ago",
      isAdmin: false,
    },
  ];

  return (
    <div>
      <h3 className="mb-5 text-2xl font-semibold text-[#1D2026]">
        Comments <span className="font-normal">(01)</span>
      </h3>

      {comments.map((comment) => (
        <div key={comment.id} className="mb-4 flex space-x-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/images/client.jpg"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex-1">
            <div className="mb-3 flex items-center space-x-2">
              <span className="text-sm font-medium text-[#1D2026]">
                {comment.author}
              </span>
              {comment.isAdmin && (
                <span className="bg-[#564FFD] px-1.5 py-1 text-xs text-white">
                  ADMIN
                </span>
              )}
              <span className="h-1 w-1 rounded-full bg-[#6E7485]"></span>
              <span className="text-xs text-[#6E7485]">
                {comment.timestamp}
              </span>
            </div>
            <p className="mb-3 mt-1 text-sm">{comment.content}</p>
            <button className="flex items-center gap-x-2 text-sm text-[#8C94A3]">
              <ChatCircles />
              REPLY
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
