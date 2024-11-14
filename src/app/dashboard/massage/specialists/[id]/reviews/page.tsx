import NavigateToPrevPage from "@/components/dashboard/prev-page";
import ReviewCard from "@/components/dashboard/review-card";

export default function MasseuseReview({ params }: { params: { id: string } }) {
  console.log(params);

  return (
    <main>
      <NavigateToPrevPage />
      <div className="grid gap-y-6 px-20 py-9">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </main>
  );
}
