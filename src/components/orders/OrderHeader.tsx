
import { SearchInput } from "@/components/common/SearchInput";
import { Bell } from "lucide-react";

export const OrderHeader = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 border-b border-[#E6E6E6]">
      <div className="flex items-center gap-10">
        <div className="text-[#1A011E] text-2xl font-bold">Logo</div>
        <div className="text-base">
          Welcome, <span className="font-medium text-[#1A011E]">Wisdom</span>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="w-64">
          <SearchInput />
        </div>

        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="absolute -top-1 -right-1 bg-[#E05C58] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              3
            </div>
            <Bell className="h-6 w-6 text-[#808080]" />
          </div>
          
          <div className="relative">
            <div className="absolute -top-1 -right-1 bg-[#E05C58] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              3
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9026 8.85114L13.4593 12.4642C12.6198 13.1302 11.4387 13.1302 10.5992 12.4642L6.11841 8.85114" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <img 
            src="public/lovable-uploads/062b49fd-e57c-4a4e-97ac-a22f5cd58c89.png" 
            className="w-10 h-10 rounded-full object-cover" 
            alt="User profile"
          />
          
          <button className="flex items-center justify-between gap-2 text-[#6B047C] border border-[#6B047C] px-3 py-2 rounded-lg font-medium">
            <span>Quick actions</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#6B047C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
