import { useState } from "react";
import { OrderHeader } from "@/components/orders/OrderHeader";
import { OrderSidebar } from "@/components/orders/OrderSidebar";
import { OrderStats } from "@/components/orders/OrderStats";
import { OrdersTable } from "@/components/orders/OrdersTable";
import type { Order, OrderStats as OrderStatsType } from "@/types/orders";

const mockStats: OrderStatsType = {
  totalOrders: 56,
  receivedOrders: 56,
  pendingOrders: 56,
  cashSpent: "$40,00",
};

const mockOrders: Order[] = [
  {
    id: "1",
    item: {
      name: "The 4 keys of law",
      image: "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ea8ab0db257586a5d5771f5aac3660063c076b8b?placeholderIfAbsent=true",
    },
    orderId: "HG324235",
    amount: "$24,000",
    category: "Books | Soft copy",
    status: "active",
    orderDate: "July 27, 2024",
    dueDate: "Nov 12, 2024",
  },
  // Add more mock orders as needed...
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="bg-white overflow-hidden">
      <OrderHeader />

      <div className="flex w-full max-w-[1416px] items-stretch gap-8 flex-wrap">
        <OrderSidebar />

        <main className="grow shrink-0 basis-0 w-fit my-auto">
          <div className="w-full">
            <div className="flex w-full gap-[40px_100px] leading-[1.3] justify-between flex-wrap">
              <div className="min-w-60 w-[583px]">
                <h1 className="text-[#1A011E] text-[32px] font-semibold tracking-[-0.64px]">
                  Orders
                </h1>
                <p className="text-[#808080] text-sm font-medium tracking-[-0.28px] mt-2">
                  All your orders are been showed here
                </p>
              </div>

              <button className="self-stretch rounded gap-2.5 text-sm text-white font-medium tracking-[-0.28px] w-[127px] bg-[#6B047C] pl-5 pr-[19px] py-4">
                Order an item
              </button>
            </div>

            <OrderStats stats={mockStats} />

            <div className="flex w-full items-center gap-[40px_100px] font-medium justify-between flex-wrap mt-10">
              <div className="self-stretch relative flex min-w-60 items-center gap-[40px_100px] text-[#808080] my-auto px-3.5">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`flex items-center gap-2 p-2 ${
                    activeTab === "all" ? "text-[#6B047C]" : "text-[#808080]"
                  }`}
                >
                  <span>All</span>
                  <span
                    className={`rounded px-2 py-0.5 ${
                      activeTab === "all" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                    }`}
                  >
                    124
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("active")}
                  className={`flex items-center gap-2 p-2 ${
                    activeTab === "active" ? "text-[#6B047C]" : "text-[#808080]"
                  }`}
                >
                  <span>Active order</span>
                  <span className="bg-[#F2F2F2] rounded px-2 py-0.5">43</span>
                </button>

                <button
                  onClick={() => setActiveTab("received")}
                  className={`flex items-center gap-2 p-2 ${
                    activeTab === "received"
                      ? "text-[#6B047C]"
                      : "text-[#808080]"
                  }`}
                >
                  <span>Received order</span>
                  <span className="bg-[#F2F2F2] rounded px-2 py-0.5">43</span>
                </button>

                <button
                  onClick={() => setActiveTab("cancelled")}
                  className={`flex items-center gap-2 p-2 ${
                    activeTab === "cancelled"
                      ? "text-[#6B047C]"
                      : "text-[#808080]"
                  }`}
                >
                  <span>Cancelled orders</span>
                  <span className="bg-[#F2F2F2] rounded px-2 py-0.5">43</span>
                </button>
              </div>

              <div className="self-stretch flex items-center gap-4 text-sm text-center leading-[1.3] justify-center my-auto">
                <span className="text-[#CCC]">Filter status:</span>
                <div className="items-center rounded border border-[#E6E6E6] flex gap-2 text-[#808080] whitespace-nowrap bg-white p-2">
                  <span>Ongoing</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/44786e790d25cf572bd7dc3ffc91ce049e9d5e9c?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-4"
                  />
                </div>
              </div>
            </div>

            <OrdersTable orders={mockOrders} />
          </div>
        </main>
      </div>
    </div>
  );
}
