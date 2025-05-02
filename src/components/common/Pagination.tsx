
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="self-center flex items-center gap-2 mt-[15px]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="justify-center items-center border border-[color:var(--Grey-5,#B3B3B3)] flex w-9 h-9 bg-white px-2 rounded-md border-solid disabled:opacity-50"
      >
        <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/772955949a85712a045bfbeb8ce3aa8704c0d930?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" />
      </button>

      <div className="flex min-w-60 gap-0.5 text-sm text-[#CCC] font-normal whitespace-nowrap text-center leading-none">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "min-h-9 w-9 px-3 rounded-md",
              currentPage === page
                ? "text-[#6B047C] border border-[#6B047C]"
                : "text-[#CCC] bg-white",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="justify-center items-center border border-[color:var(--Grey-5,#B3B3B3)] flex w-9 h-9 bg-white px-2 rounded-md border-solid disabled:opacity-50"
      >
        <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/99bab619302c941d2192d214324f23eff85f2de8?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5" />
      </button>
    </div>
  );
};
