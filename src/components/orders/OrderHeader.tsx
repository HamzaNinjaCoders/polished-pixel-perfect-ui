import { SearchInput } from "@/components/common/SearchInput";

export const OrderHeader = () => {
  return (
    <header className="border-b-[color:var(--Grey-2,#E6E6E6)] flex w-full items-stretch gap-5 overflow-hidden flex-wrap justify-between bg-white px-[23px] py-5 rounded-[8px_0px_0px_0px] border-b border-solid">
      <div className="flex items-stretch gap-[40px_50px] leading-[1.3]">
        <div className="text-[#1A011E] text-[32px] font-semibold">Logo</div>
        <div className="text-[#808080] text-xl font-medium tracking-[-0.4px] basis-auto mt-[13px]">
          Welcome, <span className="text-[#1A011E]">Wisdom</span>
        </div>
      </div>

      <div className="flex items-stretch gap-10 flex-wrap">
        <SearchInput />

        <div className="flex items-center gap-8 grow shrink basis-auto">
          <div className="self-stretch flex items-center gap-4 my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/24f935c93f78c2beb026cb558365811158fb7076?placeholderIfAbsent=true" className="aspect-[1] object-contain w-10" />
            <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/4b2ca32d5fc8838f5c46613099ccd4560d89a3bd?placeholderIfAbsent=true" className="aspect-[1] object-contain w-10" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/97679ca7b058b71652b99dd62fc94cd5d1cff4d3?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 rounded-lg"
            />
          </div>

          <button className="justify-center items-center border border-[#6B047C] flex gap-2 text-base text-[#6B047C] font-medium tracking-[-0.32px] p-2 rounded-lg">
            Quick actions
            <img src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/6794f3c44eb075266aa8953188c02d12a6ff35f9?placeholderIfAbsent=true" className="aspect-[2] object-contain w-8" />
          </button>
        </div>
      </div>
    </header>
  );
};
