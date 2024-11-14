import { ClockSvg, FolderSvg, PlaySVG } from "@/components/svgs";

export default function CourseTimeLecturesSection() {
  return (
    <ul className="text-s flex gap-x-4">
      <li className="flex items-center gap-x-1.5">
        <FolderSvg />6 sections
      </li>
      <li className="flex items-center gap-x-1.5">
        <PlaySVG stroke="#564FFD" className="h-[20px] w-[20px]" />
        22 lectures
      </li>
      <li className="flex items-center gap-x-1.5">
        <ClockSvg />
        19h 37m
      </li>
    </ul>
  );
}

// i also did he text-s here if it doesn't match we do same thing
