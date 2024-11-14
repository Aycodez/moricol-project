import { cn } from "@/util/cn";
import { cva } from "class-variance-authority";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "text";
  size?: "fit" | "full";
};

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva("rounded-lg leading-[18.2px]", {
  variants: {
    variant: {
      primary:
        "py-3.5 px-4 bg-primary-500 text-white border border-primary-500 hover:bg-primary-500/80 hover:border-primary-500/80 transition-color duration-300",
      outline: "py-3.5 px-4 border border-[#E6E7EC]",
      text: "font-medium text-primary-500",
    },
    size: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "full",
  },
});
