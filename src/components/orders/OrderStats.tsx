
import { OrderStats as OrderStatsType } from "@/types/orders";

interface OrderStatsProps {
  stats: OrderStatsType;
}

export const OrderStatsDisplay = ({ stats }: OrderStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-0 md:gap-4 rounded-lg border border-[#F2F2F2] bg-white mt-8">
      <div className="flex items-center gap-3 p-4 border-r border-[#CCC]">
        <div className="p-2 bg-[#F2F2F2] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#1A011E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#1A011E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 13H13" stroke="#1A011E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 17H11" stroke="#1A011E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-[#1A011E] text-base font-bold">{stats.totalOrders}</div>
          <div className="text-[#808080] text-sm">Total order</div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 border-r border-[#CCC]">
        <div className="p-2 bg-[#F2F2F2] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM12 10C10.35 10 9 8.65 9 7C9 5.35 10.35 4 12 4C13.65 4 15 5.35 15 7C15 8.65 13.65 10 12 10Z" fill="#1A011E"/>
            <path d="M12 22C14.67 22 17.3 21.02 19.05 19.05C20.25 17.73 17.71 16.8 16.76 16.47C13.42 15.34 10.56 15.34 7.24 16.47C6.29 16.8 3.75 17.73 4.95 19.05C6.7 21.02 9.33 22 12 22Z" fill="#1A011E"/>
          </svg>
        </div>
        <div>
          <div className="text-[#1A011E] text-base font-bold">{stats.receivedOrders}</div>
          <div className="text-[#808080] text-sm">Received order</div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 border-r border-[#CCC]">
        <div className="p-2 bg-[#F2F2F2] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V5" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.5 9.09H20.5" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6947 13.7H15.7037" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15.6947 16.7H15.7037" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9955 13.7H12.0045" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.9955 16.7H12.0045" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.29431 13.7H8.30329" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.29431 16.7H8.30329" stroke="#1A011E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-[#1A011E] text-base font-bold">{stats.pendingOrders}</div>
          <div className="text-[#808080] text-sm">Pending orders</div>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4">
        <div className="p-2 bg-[#F2F2F2] rounded-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.00977 14.5099C8.18977 15.3099 9.10977 15.9999 9.93977 15.9999H14.4198C16.0398 15.9999 17.3598 14.5599 17.2398 12.8899L16.9698 8.73994C16.8698 7.64994 15.8198 6.80994 14.7298 6.91994C14.4698 6.94994 14.2198 6.76994 14.1698 6.50994L13.9298 5.27994C13.8098 4.70994 13.3098 4.28994 12.7298 4.28994H11.2998C10.7098 4.28994 10.2198 4.70994 10.0898 5.27994L9.84977 6.50994C9.79977 6.76994 9.54977 6.94994 9.29977 6.91994C8.20977 6.80994 7.15977 7.64994 7.05977 8.73994L6.88977 11.1799" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V18" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 22H14" stroke="#1A011E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-[#1A011E] text-base font-bold">{stats.cashSpent}</div>
          <div className="text-[#808080] text-sm">Cash spent</div>
        </div>
      </div>
    </div>
  );
};
