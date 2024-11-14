import Image from "next/image";

export default function ReviewCard() {
  return (
    <article className="border-b border-b-gray-300 px-10 pb-6 text-xs text-[#777A95] last:border-none">
      <div className="gap mb-1 flex items-center gap-x-12">
        <Profile />
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer vulputate blandit arcu
          amet. Enim vel orci non habitant euismod aliquam eget. Gravida laoreet
          pellentesque arcu velit. Massa quis arcu arcu neque pellentesque sit
          morbi consequat ut. Duis pretium.
        </p>
      </div>
      <p className="text-right">2023-05-18</p>
    </article>
  );
}

function Profile() {
  return (
    <article className="flex shrink-0 items-center gap-x-2">
      <Image
        src="/images/client.jpg"
        alt=""
        width={48}
        height={48}
        className="h-12 w-auto rounded-xl"
      />
      <div>
        <h3 className="text-base font-medium text-gray-700">Bolaji Samuel</h3>
        <div>⭐⭐⭐⭐⭐</div>
      </div>
    </article>
  );
}
