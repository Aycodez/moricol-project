import TelemedicineLayoutTemplate from "@/app/dashboard/telemedicine/(main)/template";
import { Card, CardContent, CardFooter } from "@/components/card";
import { ShadButton } from "@/components/shadcn-button";

interface NoteDetailProps {
  timestamp: string;
  title: string;
  content: string;
}

const NoteDetail: React.FC<NoteDetailProps> = ({
  timestamp,
  title,
  content,
}) => {
  return (
    <div className="rounded-lg bg-gray-100">
      <Card className="rounded-0 mx-auto max-w-3xl border-0 shadow-none">
        <CardContent className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500">{timestamp}</p>
          </div>
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-sm font-semibold text-gray-500">TITLE</h2>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          <div>
            <h2 className="mb-2 text-center font-semibold text-gray-500">
              NOTES
            </h2>
            <p className="whitespace-pre-wrap text-gray-700">{content}</p>
          </div>
        </CardContent>
        <CardFooter>
          <ShadButton className="w-full bg-primary-500 text-white hover:bg-primary-600">
            DONE
          </ShadButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function NoteDetailView() {
  const noteData: NoteDetailProps = {
    timestamp: "9/4/2023 . 9:00AM",
    title: "Getting Started with Mr. John Paul",
    content: `Lorem ipsum dolor sit amet consectetur. Libero nunc turpis cursus eu laoreet. Nibh quis integer ligula gravida. Adipiscing elementum vulputate interdum quis habitant risus ac. Lacus ut pellentesque proin euismod turpis tristique eget scelerisque integer. Tortor suscipit curabitur interdum elementum ut id. Neque purus scelerisque sit ipsum tellus. Nulla pulvinar etiam cursus arcu leo. Nisi quis urna quisque eu in.
Urna quis blandit at in congue faucibus tortor vel erat. Massa molestie malesuada euismod viverra odio. Morbi scelerisque sed varius hendrerit mus pharetra elit. Aliquam aliquet quam lacus urna penatibus viverra eget mattis. Mi in sed sit consequat ipsum pellentesque vulputate pulvinar. Ullamcorper dui nunc lobortis feugiat sed.
Sed elementum aenean a egestas. Habitant vitae maecenas nunc aliquam sed libero in. Facilisi sapien pellentesque egestas non at purus et. Enim sit tristique facilisis purus. Enim metus proin et sed aenean tincidunt aliquam ipsum iaculis. Nunc euismod mattis phasellus ac nulla odio risus mauris ut. Sed amet arcu eu interdum. Dignissim tristique sed adipiscing in aliquam vel. Sit.`,
  };

  return (
    <TelemedicineLayoutTemplate>
      <NoteDetail {...noteData} />
    </TelemedicineLayoutTemplate>
  );
}
