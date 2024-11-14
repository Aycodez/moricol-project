import PurchaseHistoryCard from "../../components/purchase-history-card";

export default function TrainingProfilePurchaseHistory() {
  return (
    <main className="px-14 py-12">
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-[#1D2026]">
          Purchase History
        </h2>

        <ul className="space-y-6">
          <li>
            <PurchaseHistoryCard />
          </li>
          <li>
            <PurchaseHistoryCard />
          </li>
          <li>
            <PurchaseHistoryCard />
          </li>
          <li>
            <PurchaseHistoryCard />
          </li>
        </ul>
      </section>
    </main>
  );
}
