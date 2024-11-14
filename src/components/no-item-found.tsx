export default function NoItemsFound() {
  return (
    <div className="flex h-[400px] flex-col items-center justify-center rounded-lg bg-gray-50 p-8">
      <div className="mb-8 h-48 w-48">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <circle cx="100" cy="100" r="80" fill="#F0F0F0" />
          <path
            d="M100 50C72.3858 50 50 72.3858 50 100C50 127.614 72.3858 150 100 150C127.614 150 150 127.614 150 100C150 72.3858 127.614 50 100 50ZM87.5 112.5L75 125L100 150L125 125L112.5 112.5L100 125L87.5 112.5ZM112.5 87.5L125 75L100 50L75 75L87.5 87.5L100 75L112.5 87.5Z"
            fill="#E0E0E0"
          />
          <circle cx="100" cy="100" r="30" fill="#D1D5DB" />
          <path
            d="M105 95H95V85H105V95ZM105 115H95V100H105V115Z"
            fill="#9CA3AF"
          />
        </svg>
      </div>
      <h3 className="mb-2 text-2xl font-semibold text-gray-800">
        No Items Found
      </h3>
      <p className="mb-6 max-w-sm text-center text-gray-600">
        We couldn&apos;t find any items matching your search. Try adjusting your
        filters or search terms.
      </p>
    </div>
  );
}
