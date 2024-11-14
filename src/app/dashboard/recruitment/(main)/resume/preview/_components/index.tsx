import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  editable?: boolean;
  editLink?: string;
}

export function Section({ title, children, editable = false, editLink }: SectionProps) {
  return (
    <div className="mb-6 rounded-lg bg-white p-2">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-bold">{title}</h2>
        {editable && (
          <div className="flex space-x-2">
            <Link href={editLink??'null'} className="cursor-pointer">
              <BiPencil className="h-6 w-6 text-yellow-500" />
            </Link>
            <BsTrash2 className="h-5 w-5 text-red-500" />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

interface ExperienceItemProps {
  title: string;
  date: string;
  description: string;
}

export function ExperienceItem({ title, date, description }: ExperienceItemProps) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  );
}

interface CertificationItemProps {
  title: string;
  subtitle: string;
  date: string;
}

export function CertificationItem({ title, subtitle, date }: CertificationItemProps) {
  return (
    <div className="mb-2">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

export function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <div className="mb-2 flex items-center">
      <span className="mr-2">{icon}</span>
      <span className="text-gray-600">{text}</span>
    </div>
  );
}

interface SkillItemProps {
  text: string;
}

export function SkillItem({ text }: SkillItemProps) {
  return (
    <div className="mb-2">
      <div className="h-2 w-full rounded bg-yellow-500"></div>
      <p className="mt-1 text-gray-600">{text}</p>
    </div>
  );
}

interface EducationItemProps {
  degree: string;
  school: string;
  date: string;
}

export function EducationItem({ degree, school, date }: EducationItemProps) {
  return (
    <div className="mb-2">
      <h3 className="font-semibold">{degree}</h3>
      <p className="text-gray-600">{school}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}

interface LanguageItemProps {
  text: string;
}

export function LanguageItem({ text }: LanguageItemProps) {
  return (
    <div className="mb-2 mr-2 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-gray-700">
      {text}
    </div>
  );
}

interface HobbyItemProps {
  text: string;
}

export function HobbyItem({ text }: HobbyItemProps) {
  return (
    <div className="mb-2 mr-2 inline-block rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-gray-700">
      {text}
    </div>
  );
}

interface ReferenceItemProps {
  name: string;
  email: string;
  phone: string;
}

export function ReferenceItem({ name, email, phone }: ReferenceItemProps) {
  return (
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
    </div>
  );
}
