import TextInput from "@/components/auth/text-input";
import Button from "@/components/button";
import PageToolBar from "@/components/dashboard/pharmacy-page-toolbar";
import FileInput from "@/components/file-input";
import { prescription } from "../action";

export default function Prescription() {
  return (
    <main>
      <PageToolBar />

      <section className="gray-container my-10 px-12 py-6">
        <p className="mb-9 text-center">
          To continue with this drug, You will need to provide your NIN and
          prescription from doctors about this particular medication
        </p>

        <form action={prescription}>
          <div className="mb-8 grid gap-y-4">
            <TextInput name="" label="Provide your NIN" />
            <TextInput name="" label="Name of attachment" />
            <FileInput title="" />
          </div>
          <Button>CONTINUE</Button>
        </form>
      </section>
    </main>
  );
}
