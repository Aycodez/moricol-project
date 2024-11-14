"use client";
import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import PageToolBar from "@/components/dashboard/pharmacy-page-toolbar";
import FileInput from "@/components/file-input";
import { useRouter, useParams } from "next/navigation";
import { routes } from "@/constants/routes";

export default function Prescription() {
  const router = useRouter();
  const { id } = useParams();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(routes.PHARMARCYPRODUCT + `/${id}`);
  };
  return (
    <main>
      <PageToolBar />

      <section className="gray-container my-10 px-12 py-6">
        <p className="mb-9 text-center">
          To continue with this drug, You will need to provide your NIN and
          prescription from doctors about this particular medication
        </p>

        <form>
          <div className="mb-8 grid gap-y-4">
            <TextInput name="" label="Provide your NIN" />
            <TextInput name="" label="Name of attachment" />
            <FileInput title="" />
          </div>
          <Button onClick={handleClick}>CONTINUE</Button>
        </form>
      </section>
    </main>
  );
}
