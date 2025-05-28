interface PaginationArrowsProps {
  currentPage: number;
  maxPage: number;
  onPrev: () => void;
  onNext: () => void;
}

function PaginationArrows({
  currentPage,
  maxPage,
  onPrev,
  onNext,
}: PaginationArrowsProps) {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="h-8 w-8 rounded bg-red-500 text-white disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <span className="flex justify-center h-8 w-8 rounded border border-gray-300 text-lg">
        {currentPage}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === maxPage}
        aria-label="Next page"
        className="h-8 w-8 rounded bg-red-500 text-white disabled:opacity-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

export default PaginationArrows;
