import Link from "next/link";
import { Card, CardContent } from "@/components/card";
import TelemedicineLayoutTemplate from "@/app/dashboard/telemedicine/(main)/template";
import { routes } from "@/constants/routes";

interface Note {
  id: string;
  title: string;
  timestamp: string;
}

const notes: Note[] = [
  {
    id: "1",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "2",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "3",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "4",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "5",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "6",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "7",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
  {
    id: "8",
    title: "Getting Started with Mr. John Paul",
    timestamp: "9/4/2023 . 9:00AM",
  },
];

const id = "fj";

export default function NotesPage() {
  return (
    <TelemedicineLayoutTemplate>
      <div className="min-h-screen">
        <h1 className="mb-6 text-2xl font-bold">Notes</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {notes.map((note) => (
            <Link
              href={`${routes.TELEMEDICINE_APPOINTMENTS}/${id}/${note.id}`}
              key={note.id}
              className="block"
            >
              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="p-4">
                  <h2 className="mb-2 text-lg font-semibold">{note.title}</h2>
                  <p className="text-sm text-gray-500">{note.timestamp}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </TelemedicineLayoutTemplate>
  );
}
