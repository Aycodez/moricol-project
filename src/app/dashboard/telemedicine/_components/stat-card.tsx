interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
}

function StatCard({ icon, label, description }: StatCardProps) {
  return (
    <div className="flex items-center gap-x-2 sm:gap-x-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500">
        {icon}
      </div>
      <div className="text-white">
        <p className="font-semibold md:text-lg">{label}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default StatCard;
