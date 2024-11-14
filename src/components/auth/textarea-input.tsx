type TextAreaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  icon?: React.ReactNode;
  name: string;
};

export default function TextAreaInput({
  label,
  icon,
  name,
  ...props
}: TextAreaInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-grey-800 mb-2.5 inline-block font-medium"
      >
        {label}
      </label>
      <div className="text-grey-500 relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2">{icon}</div>
        <textarea
          className={`h-48 w-full py-2.5 pl-11 text-sm placeholder:font-light focus:outline-none lg:text-base ${
            icon === undefined && "pl-3.5"
          } border-grey-400 rounded-lg border pr-3.5`}
          {...props}
        />
      </div>
    </div>
  );
}
