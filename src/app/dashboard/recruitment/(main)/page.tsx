import { routes } from "@/constants/routes";
import Link from "next/link";
import { BiBriefcase, BiBuilding, BiGlobe } from "react-icons/bi";
import { BsFileText } from "react-icons/bs";

export default function Recruitment() {
  const jobSeekerLinks = [
    {
      href: routes.RECRUITMENT_PREVIEW_RESUME,
      title: "Resume",
      description: "Create and manage your professional resume",
      icon: BsFileText,
    },
    {
      href: routes.RECRUITMENT_JOBS,
      title: "Jobs",
      description: "Browse and apply for job opportunities",
      icon: BiBriefcase,
    },
    {
      href: routes.RECRUITMENT_PREVIEW_FOREIGN_RESUME,
      title: "Foreign Resume",
      description: "Tailor your resume for international opportunities",
      icon: BiGlobe,
    },
  ];

  const employerLink = {
    href: routes.RECRUITMENT_EMPLOYER,
    title: "Employers Portal",
    description: "Post jobs, manage applications, and find top talent",
    icon: BiBuilding,
  };

  return (
    <div className="min-h-[80vh] rounded-xl bg-gray-50">
      <div className="mx-auto max-w-6xl p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Recruitment Portal
        </h1>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            For Employers
          </h2>
          <Link href={employerLink.href}>
            <div className="flex items-center rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <employerLink.icon className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {employerLink.title}
                </h3>
                <p className="text-gray-600">{employerLink.description}</p>
              </div>
              <div className="ml-auto">
                <span className="font-medium text-yellow-600 hover:text-yellow-700">
                  Enter portal &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            For Job Seekers
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobSeekerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                    <link.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {link.title}
                  </h3>
                  <p className="flex-grow text-gray-600">{link.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="font-medium text-yellow-600 hover:text-yellow-700">
                      Learn more &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
