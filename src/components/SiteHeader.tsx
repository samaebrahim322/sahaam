import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiteImage } from "@/components/SiteImage";
import { imageAssets } from "@/lib/image-assets";

const nav = [
  { label: "الرئيسية", hash: "top" },
  { label: "عنا", hash: "aboutUs" },
  { label: "خدماتنا", hash: "services" },
  { label: "دول الاستقدام", hash: "countries" },
  { label: "العملاء والخدمات", hash: "clients_services" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5">
        <Link to="/" className="shrink-0" aria-label="شركة سهم للاستقدام">
          <SiteImage src={imageAssets.logo} alt="شعار شركة سهم للاستقدام" className="h-16 w-16 object-contain" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link key={n.label} to="/" hash={n.hash} className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-primary">
              {n.label}
            </Link>
          ))}
          <Link to="/join-us" className="text-[15px] font-medium text-foreground/80 hover:text-primary" activeProps={{ className: "text-primary" }}>
            انضم إلينا
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/" hash="contact" className="btn-primary hidden !px-5 !py-2.5 text-sm sm:inline-flex">اطلب استقدام</Link>
          <button className="rounded-full p-2 text-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="القائمة">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          {nav.map((n) => (
            <Link key={n.label} to="/" hash={n.hash} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3 font-medium">
              {n.label}
            </Link>
          ))}
          <Link to="/join-us" onClick={() => setOpen(false)} className="block py-3 font-medium">انضم إلينا</Link>
          <Link to="/" hash="contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">اطلب استقدام</Link>
        </nav>
      )}
    </header>
  );
}
