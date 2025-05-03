
import { useState } from "react";
import { OrderHeader } from "@/components/orders/OrderHeader";
import { OrderSidebar } from "@/components/orders/OrderSidebar";
import { OrderStatsDisplay } from "@/components/orders/OrderStats";
import { OrdersTable } from "@/components/orders/OrdersTable";
import type { Order, OrderStats } from "@/types/orders";
import { ChevronDown } from "lucide-react";

const mockStats: OrderStats = {
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
    <div className="bg-white min-h-screen flex">
      <OrderSidebar />
      
      <div className="flex-1">
        <OrderHeader />

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#1A011E] text-2xl font-semibold">
                Orders
              </h1>
              <p className="text-[#808080] text-sm mt-1">
                All your orders are been showed here
              </p>
            </div>

            <button className="bg-[#6B047C] text-white px-5 py-3 rounded text-sm font-medium">
              Order an item
            </button>
          </div>

          <OrderStatsDisplay stats={mockStats} />

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center gap-2 py-1 ${
                  activeTab === "all" ? "text-[#6B047C]" : "text-[#808080]"
                }`}
              >
                <span className="font-medium">All</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  activeTab === "all" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                }`}>
                  124
                </span>
              </button>

              <button
                onClick={() => setActiveTab("active")}
                className={`flex items-center gap-2 py-1 ${
                  activeTab === "active" ? "text-[#6B047C]" : "text-[#808080]"
                }`}
              >
                <span className="font-medium">Active order</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  activeTab === "active" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                }`}>
                  43
                </span>
              </button>

              <button
                onClick={() => setActiveTab("received")}
                className={`flex items-center gap-2 py-1 ${
                  activeTab === "received" ? "text-[#6B047C]" : "text-[#808080]"
                }`}
              >
                <span className="font-medium">Received order</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  activeTab === "received" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                }`}>
                  43
                </span>
              </button>

              <button
                onClick={() => setActiveTab("cancelled")}
                className={`flex items-center gap-2 py-1 ${
                  activeTab === "cancelled" ? "text-[#6B047C]" : "text-[#808080]"
                }`}
              >
                <span className="font-medium">Cancelled orders</span>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  activeTab === "cancelled" ? "bg-[#F9F5FA]" : "bg-[#F2F2F2]"
                }`}>
                  43
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-[#CCC]">Filter status:</span>
              <div className="flex items-center gap-1 border border-[#E6E6E6] rounded px-3 py-1.5 text-sm text-[#808080]">
                <span>Ongoing</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          <OrdersTable orders={mockOrders} />
        </div>
      </div>
    </div>
  );
}
