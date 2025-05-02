
import { OrderStats as OrderStatsType } from "@/types/orders";

interface OrderStatsProps {
  stats: OrderStatsType;
}

export const OrderStatsDisplay = ({ stats }: OrderStatsProps) => {
  return (
    <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] flex w-full gap-[40px_88px] text-base font-medium tracking-[-0.32px] flex-wrap bg-white mt-10 px-2 py-4 rounded-lg border-solid">
      <div className="self-stretch flex gap-2 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/befd9ff8b2a6721d4e6dfec0e73e8bd72e56191d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[52px] shrink-0"
        />
        <div className="w-20">
          <div className="text-[#1A011E] font-bold">{stats.totalOrders}</div>
          <div className="text-[#808080]">Total order</div>
        </div>
      </div>
      <div className="border bg-[#CCC] self-stretch w-0 shrink-0 h-10 my-auto border-[rgba(204,204,204,1)]" />
      <div className="self-stretch flex gap-2 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ed5447e831181afa3ff7be3b3ed95f3a29065c34?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[52px] shrink-0"
        />
        <div className="w-28">
          <div className="text-[#1A011E] font-bold">{stats.receivedOrders}</div>
          <div className="text-[#808080]">Received order</div>
        </div>
      </div>
      <div className="border bg-[#CCC] self-stretch w-0 shrink-0 h-10 my-auto border-[rgba(204,204,204,1)]" />
      <div className="self-stretch flex gap-2 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d85ae417303f0c10ea13877df77913af54c86d12?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[52px] shrink-0"
        />
        <div className="w-[89px]">
          <div className="text-[#1A011E] font-bold">{stats.pendingOrders}</div>
          <div className="text-[#808080]">Pending orders</div>
        </div>
      </div>
      <div className="border bg-[#CCC] self-stretch w-0 shrink-0 h-10 my-auto border-[rgba(204,204,204,1)]" />
      <div className="self-stretch flex gap-2 my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/d3632ade73ba8ed3fdaec235b15210bbe8a13809?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-[52px] shrink-0"
        />
        <div className="w-[89px]">
          <div className="text-[#1A011E] font-bold">{stats.cashSpent}</div>
          <div className="text-[#808080]">Cash spent</div>
        </div>
      </div>
    </div>
  );
};
