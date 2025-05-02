import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
}

const NavItem = ({ icon, label, isActive }: NavItemProps) => (
  <div className="flex flex-col items-center whitespace-nowrap mt-8 first:mt-0">
    <img src={icon} className="aspect-[1] object-contain w-8" />
    <div
      className={cn(
        "text-xs font-medium tracking-[-0.24px]",
        isActive ? "text-[#6B047C]" : "text-[#808080]",
      )}
    >
      {label}
    </div>
  </div>
);

export const OrderSidebar = () => {
  return (
    <nav className="border-r-[color:var(--Grey-2,#E6E6E6)] flex flex-col overflow-hidden text-xs text-[#808080] font-medium tracking-[-0.24px] leading-[1.3] bg-white pt-10 pb-[197px] px-[22px] rounded-[8px_0px_0px_0px] border-r border-solid">
      <div className="flex flex-col items-center">
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/19804ceccde80418d138e175fe5eb668b5bee4e1?placeholderIfAbsent=true" label="Discover" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ba75fb5272174e817f754e39e56b9fd10a879331?placeholderIfAbsent=true" label="Home" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/2fd0bf5b5be5952ce37e40e0357873cc22016dd7?placeholderIfAbsent=true" label="Work package" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/1c0df5b30d1744fc65547137feedfaf4178d14e9?placeholderIfAbsent=true" label="Orders" isActive />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/6845aba017c1c27b3109e5a36936a28bd36c6b2d?placeholderIfAbsent=true" label="Contacts" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/a84182496df1216de20f2db2a48d5d889d9cb3dc?placeholderIfAbsent=true" label="Events" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/5a098578c39d8b772c65f5e94a7eabfa3929b1b8?placeholderIfAbsent=true" label="Wallet" />
        <NavItem icon="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/33abbdfe986edc8560e020a4ce05ef6aaca4edfa?placeholderIfAbsent=true" label="More" />
      </div>
    </nav>
  );
};
