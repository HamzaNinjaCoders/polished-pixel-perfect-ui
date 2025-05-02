import { Input } from "@/components/ui/input";

export const SearchInput = () => {
  return (
    <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] grow shrink basis-auto bg-neutral-50 my-auto px-2 py-2.5 rounded-lg border-solid">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ca922d2002191d58a707e268bf13a65777f10fe6?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
      />
      <Input
        type="text"
        placeholder="Search"
        className="border-0 bg-transparent text-[#CCC] placeholder:text-[#CCC] focus-visible:ring-0 p-0"
      />
    </div>
  );
};
