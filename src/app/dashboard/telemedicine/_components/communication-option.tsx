interface CommunicationOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CommunicationOption({
  icon,
  title,
  description,
}: CommunicationOptionProps) {
  return (
    <div className="flex items-center space-x-2 rounded-lg bg-gray-50 p-2">
      <div className="rounded-lg bg-white p-2">{icon}</div>
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
}

export default CommunicationOption;
