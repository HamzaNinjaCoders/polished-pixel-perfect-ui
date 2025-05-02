import { StatusBadge } from "@/components/common/StatusBadge";
import { Pagination } from "@/components/common/Pagination";
import { Order } from "@/types/orders";
import { useState } from "react";

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("Ongoing");

  return (
    <div className="rounded flex w-full flex-col overflow-hidden bg-neutral-50 mt-6 pr-[25px] pb-2">
      <div className="flex items-center flex-wrap">
        {/* Table Headers */}
        <div className="w-full grid grid-cols-[72px_245px_109px_136px_168px_137px_125px_125px_131px] text-xs font-medium bg-neutral-50 border-b border-[#E6E6E6]">
          <div className="p-5 text-[#1A011E]">S/N</div>
          <div className="p-5 text-[#1A011E]">Item</div>
          <div className="p-5 text-[#1A011E]">Order ID</div>
          <div className="p-5 text-[#1A011E]">Amount</div>
          <div className="p-5 text-[#1A011E]">Item category and type</div>
          <div className="p-5 text-[#1A011E]">Status</div>
          <div className="p-5 text-[#1A011E]">Order date</div>
          <div className="p-5 text-[#1A011E]">Due date</div>
          <div className="p-5 text-[#1A011E]">Action</div>
        </div>

        {/* Table Body */}
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="w-full grid grid-cols-[72px_245px_109px_136px_168px_137px_125px_125px_131px] text-xs font-medium bg-white border-b border-[#F2F2F2]"
          >
            <div className="p-6 text-[#808080]">{index + 1}</div>
            <div className="p-6 flex items-center gap-4">
              <div className="relative w-[77px] aspect-[1.833] rounded overflow-hidden">
                <img
                  src={order.item.image}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <span className="text-[#808080]">{order.item.name}</span>
            </div>
            <div className="p-6 text-[#808080]">{order.orderId}</div>
            <div className="p-6 text-[#808080]">{order.amount}</div>
            <div className="p-6 text-[#808080]">{order.category}</div>
            <div className="p-6">
              <StatusBadge status={order.status} />
            </div>
            <div className="p-6 text-[#808080]">{order.orderDate}</div>
            <div className="p-6 text-[#808080]">{order.dueDate}</div>
            <div className="p-6">
              <button className="text-[#6B047C] border border-[#6B047C] px-4 py-2 rounded-lg text-sm font-medium w-full">
                {order.status === "received" ? "Reorder" : "View"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
