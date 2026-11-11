import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiteImage } from "@/components/SiteImage";
import { imageAssets } from "@/lib/image-assets";
import { contact } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="inline-block rounded-2xl bg-card p-2">
            <SiteImage src={imageAssets.logo} alt="شعار شركة سهم للاستقدام" className="h-24 w-24 object-contain" />
          </div>
          <p className="mt-5 text-sm leading-7 text-navy-foreground/70">
            شركة سهم للاستقدام — حلول متكاملة في استقدام العمالة المنزلية في المملكة العربية السعودية بخبرة تمتد لأكثر من 15 عامًا.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">الرئيسية</h3>
          <ul className="space-y-2.5 text-sm text-navy-foreground/70">
            <li><Link to="/" hash="aboutUs" className="hover:text-primary">من نحن</Link></li>
            <li><Link to="/" hash="countries" className="hover:text-primary">دول الاستقدام</Link></li>
            <li><Link to="/" hash="faq" className="hover:text-primary">الأسئلة الشائعة</Link></li>
            <li><Link to="/" hash="contact" className="hover:text-primary">تواصل معنا</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">روابط</h3>
          <ul className="space-y-2.5 text-sm text-navy-foreground/70">
            <li><Link to="/services" className="hover:text-primary">خدماتنا</Link></li>
            <li><Link to="/employees" className="hover:text-primary">فريق العمل</Link></li>
            <li><Link to="/join-us" className="hover:text-primary">انضم إلينا</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /><a href={`tel:${contact.phone}`} dir="ltr">{contact.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-primary" /><a href={`tel:${contact.phone2}`} dir="ltr">{contact.phone2}</a></li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-primary" /><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-primary" /><a href={contact.maps} target="_blank" rel="noreferrer">موقعنا على الخريطة</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} شركة سهم للاستقدام. جميع الحقوق محفوظة.</p>
          <p>سياسة الخصوصية · الشروط والأحكام</p>
        </div>
      </div>
    </footer>
  );
}
