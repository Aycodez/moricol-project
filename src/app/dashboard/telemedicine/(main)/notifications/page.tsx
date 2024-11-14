import { Card, CardContent } from "@/components/card";
import { BiBell, BiCheckCircle } from "react-icons/bi";
import { GiAlarmClock } from "react-icons/gi";
import TelemedPageWrap from "../../_components/telemed-page-wrap";

interface Notification {
  id: number;
  type: "created" | "alarm" | "confirmed";
  title: string;
  description: string;
  date: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "created",
    title: "Appointment Created",
    description:
      "Your appointment has been successfully added in appointment list. Moricol will notice you before 15 minutes before your session starts.",
    date: "Today - 10 June, 2023",
  },
  {
    id: 2,
    type: "alarm",
    title: "Appointment alarm",
    description:
      "Your appointment will be start after 15 minutes. Stay close to your device.",
    date: "Today - 10 June, 2023",
  },
  {
    id: 3,
    type: "confirmed",
    title: "Appointment confirmed",
    description:
      "Your Appointment with Dr. Mahmud Nik is confirmed. You will have a session at 11:00 AM | 10 June, 2023",
    date: "Today - 10 June, 2023",
  },
  {
    id: 4,
    type: "created",
    title: "Appointment Created",
    description:
      "Your appointment has been successfully added in appointment list. Moricol will notice you before 15 minutes before your session starts.",
    date: "Monday - 10 June, 2023",
  },
  {
    id: 5,
    type: "alarm",
    title: "Appointment alarm",
    description:
      "Your appointment will be start after 15 minutes. Stay close to your device.",
    date: "Monday - 10 June, 2023",
  },
  {
    id: 6,
    type: "confirmed",
    title: "Appointment confirmed",
    description:
      "Your Appointment with Dr. Mahmud Nik is confirmed. You will have a session at 11:00 AM | 10 June, 2023",
    date: "Monday - 10 June, 2023",
  },
];

const NotificationIcon = ({ type }: { type: Notification["type"] }) => {
  switch (type) {
    case "created":
      return <BiBell className="h-6 w-6 text-blue-500" />;
    case "alarm":
      return <GiAlarmClock className="h-6 w-6 text-primary-500" />;
    case "confirmed":
      return <BiCheckCircle className="h-6 w-6 text-green-500" />;
    default:
      return null;
  }
};

export default function NotificationPage() {
  return (
    <TelemedPageWrap>
      <div className="mx-auto max-w-xl">
        <div className="space-y-4">
          {Object.entries(
            notifications.reduce(
              (acc, notification) => {
                if (!acc[notification.date]) {
                  acc[notification.date] = [];
                }
                acc[notification.date].push(notification);
                return acc;
              },
              {} as Record<string, Notification[]>,
            ),
          ).map(([date, groupedNotifications]) => (
            <div key={date} className="divide-y rounded-xl bg-white p-2">
              <h2 className="mb-2 px-2 text-sm text-gray-500">{date}</h2>
              {groupedNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="mb-2 rounded-none border-0 shadow-none"
                >
                  <CardContent className="flex items-start p-4">
                    <div className="mr-4 mt-1">
                      <NotificationIcon type={notification.type} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm text-gray-600">
                        {notification.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </div>
    </TelemedPageWrap>
  );
}
