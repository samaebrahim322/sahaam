import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { SiteImage } from "@/components/SiteImage";
import { employees, contact } from "@/lib/site";
import { imageAssets } from "@/lib/image-assets";

export const Route = createFileRoute("/employees")({
  head: () => ({
    meta: [
      { title: "فريق العمل | شركة سهم للاستقدام" },
      { name: "description", content: "تعرّف على فريق خدمة العملاء في شركة سهم للاستقدام، جاهزون لمساعدتك في جميع خطوات استقدام العمالة المنزلية." },
      { property: "og:title", content: "فريق العمل في سهم للاستقدام" },
      { property: "og:description", content: "فريق خدمة عملاء سهم لخدمتك." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EmployeesPage,
});

function EmployeesPage() {
  return (
    <>
      <PageBanner title="فريق العمل في سهم للاستقدام" crumb="فريق العمل">
        فريق خدمة العملاء يرافقك في كل خطوة من خطوات الاستقدام.
      </PageBanner>
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((e) => (
            <article key={e.name} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-soft">
              <div className="h-24 bg-brand-gradient" />
              <div className="-mt-12 px-8 pb-8 text-center">
                <div className="mx-auto grid size-24 place-items-center rounded-full border-4 border-card bg-secondary text-3xl font-black text-primary">{e.initials}</div>
                <h2 className="mt-4 text-xl font-bold text-navy">{e.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">خدمة العملاء</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href={`tel:${contact.phone}`} className="flex items-center justify-center gap-2 rounded-full bg-secondary py-2.5 text-sm font-bold text-navy hover:bg-primary hover:text-primary-foreground"><Phone className="size-4" /> اتصال</a>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-bold text-primary-foreground hover:bg-accent"><MessageCircle className="size-4" /> واتساب</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-5">
          <SiteImage src={imageAssets.consultation} alt="خدمة العملاء في شركة سهم" className="h-80 w-full rounded-[2rem] object-cover" loading="lazy" />
          <div className="absolute inset-y-0 right-5 left-5 flex items-center rounded-[2rem] bg-navy/70 p-10">
            <div className="max-w-md text-navy-foreground">
              <h2 className="text-3xl font-extrabold">نسعد بخدمتك</h2>
              <p className="mt-3 leading-8 text-navy-foreground/80">تواصل مع فريقنا عبر الهاتف أو واتساب للحصول على المساعدة.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
