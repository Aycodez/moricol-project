export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/70">
      {children}
    </div>
  );
}
