import { ReactNode } from "react";

interface TelemedPageWrapProps {
    children: ReactNode;
}

function TelemedPageWrap({ children }: TelemedPageWrapProps) {
    return (
        <div className="min-h-[85vh] bg-gray-50 p-4 md:p-5">
            {children}
        </div>
    );
}


export default TelemedPageWrap;