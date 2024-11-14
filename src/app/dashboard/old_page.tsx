import DashboardLayout from "@/components/dashboard/dashboard-layout";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Home,  Pill, Users, GraduationCap, Banknote, Phone } from "lucide-react"
import { TbMassage } from "react-icons/tb";
import Button from "@/components/button";

const links = [
  {
    name: "Homecare",
    link: routes.HOMECAREDASHBOARDHOME,
    SVGComponent: Home,
  },
  {
    name: "Telemedicine",
    link: routes.TELEMEDICINE_DASHBOARD,
    SVGComponent: Phone,
  },
  {
    name: "Pharmacy",
    link: routes.PHARMARCYDASHBOARD,
    SVGComponent: Pill,
  },
  {
    name: "Massage",
    link: routes.MASSAGEDASHBOARDHOME,
    SVGComponent: TbMassage,
  },
  {
    name: "Training",
    link: routes.TRAININGDASHBOARD,
    SVGComponent: GraduationCap,
  },
  {
    name: "Recruitment",
    link: routes.RECRUITMENTDASHBOARD,
    SVGComponent: Users,
  },
  {
    name: "Loans",
    link: routes.LOANDASHBOARDHOME,
    SVGComponent: Banknote,
  },
];

const sections = [
  {
    title: "Homecare",
    description: "Manage and schedule in-home care services",
    icon: <Home className="h-6 w-6" />,
    href: routes.HOMECAREDASHBOARDHOME,
  },
  {
    title: "Telemedicine",
    description: "Access virtual consultations with healthcare professionals",
    icon: <Phone className="h-6 w-6" />,
    href: routes.TELEMEDICINE_DASHBOARD,
  },
  {
    title: "Pharmacy",
    description: "Order and manage prescriptions and medications",
    icon: <Pill className="h-6 w-6" />,
    href: routes.PHARMARCYDASHBOARD,
  },
  {
    title: "Massage",
    description: "Book therapeutic massage sessions",
    icon: <TbMassage className="h-6 w-6" />,
    href: routes.MASSAGEDASHBOARDHOME,
  },
  {
    title: "Training",
    description: "Access health and wellness training programs",
    icon: <GraduationCap className="h-6 w-6" />,
    href: routes.TRAININGDASHBOARD,
  },
  {
    title: "Recruitment",
    description: "Find healthcare jobs or hire professionals",
    icon: <Users className="h-6 w-6" />,
    href: routes.RECRUITMENTDASHBOARD,
  },
  {
    title: "Loans",
    description: "Explore healthcare financing options",
    icon: <Banknote className="h-6 w-6" />,
    href: routes.LOANDASHBOARDHOME,
  },
]

export default function DashboardPage() {
  return (
     <DashboardLayout asideLinks={links}>

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary-700 mb-8">Welcome to your Moricol Dashboard</h1>
       <div className="min-h-screen bg-background">
     
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  {section.icon}
                </div>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{section.description}</CardDescription>
                <Button className="w-full">
                  <Link href={section.href}>Go to Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
      </div>
    </div>
        </DashboardLayout>

  );
}
