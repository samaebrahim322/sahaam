import { createFileRoute, Link } from "@tanstack/react-router";
import { FileSignature, Stamp, PlaneLanding, UserCheck, Check, MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { SiteImage } from "@/components/SiteImage";
import { Faq } from "@/components/Faq";
import { contact } from "@/lib/site";
import { imageAssets } from "@/lib/image-assets";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدمات الاستقدام | شركة سهم للاستقدام" },
      { name: "description", content: "تعرّف على خدمات شركة سهم للاستقدام: تعاقد الاستقدام، إصدار التأشيرة، وصول العمالة، واختيار العمالة المنزلية المناسبة في السعودية." },
      { property: "og:title", content: "خدمات الاستقدام من شركة سهم" },
      { property: "og:description", content: "حلول استقدام متكاملة من التعاقد حتى وصول العمالة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const items = [
  { icon: FileSignature, title: "تعاقد الاستقدام", intro: "البداية الصحيحة لرحلة الاستقدام.", body: "نساعدك في إتمام عقد الاستقدام بخطوات واضحة، مع شرح التفاصيل والمتطلبات قبل البدء حتى تكون على علم بكل مرحلة.", points: ["شرح واضح لبنود التعاقد", "إجراءات عبر القنوات المعتمدة", "متابعة من فريق خدمة العملاء"] },
  { icon: Stamp, title: "إصدار التأشيرة", intro: "خطوات منظمة لاستكمال التأشيرة.", body: "نرافقك في خطوات إصدار التأشيرة ونوضح لك المستندات المطلوبة، لتسير إجراءات طلبك بسلاسة.", points: ["توضيح المستندات المطلوبة", "مساعدة في استكمال الطلب", "تحديثات مستمرة على حالة الطلب"] },
  { icon: PlaneLanding, title: "وصول العمالة", intro: "متابعة حتى اللحظة الأخيرة.", body: "لا تنتهي خدمتنا عند التعاقد؛ نتابع طلبك أولًا بأول حتى وصول العمالة إلى المملكة.", points: ["متابعة الطلب حتى الوصول", "تواصل مباشر مع فريق سهم", "خبرة تمتد لأكثر من 15 عامًا"] },
  { icon: UserCheck, title: "اختيار العمالة", intro: "الاختيار المناسب لأسرتك.", body: "نساعدك في اختيار العمالة المنزلية الأنسب لاحتياجاتك من بين دول الاستقدام المتاحة وبأسعار معلنة.", points: ["سبع دول استقدام متاحة", "أسعار واضحة ومعلنة", "استشارة لاختيار الأنسب"] },
];

const faqs = [
  { q: "هل يمكنني طلب أكثر من خدمة؟", a: "نعم، خدماتنا متكاملة وتغطي رحلة الاستقدام من التعاقد حتى الوصول." },
  { q: "كيف أعرف حالة طلبي؟", a: "يتابع فريق خدمة العملاء طلبك باستمرار، ويمكنك التواصل معنا هاتفيًا أو عبر واتساب في أي وقت." },
  { q: "كم تستغرق مدة إصدار التأشيرة؟", a: "تختلف المدة حسب الدولة وطبيعة الطلب، وسيوضح لك فريقنا التفاصيل عند التواصل." },
];

function ServicesPage() {
  return (
    <>
      <PageBanner title="خدمات الاستقدام من شركة سهم" crumb="خدماتنا">
        حلول متكاملة في استقدام العمالة المنزلية تجعل كل خطوة أوضح وأسهل.
      </PageBanner>
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-5">
          {items.map(({ icon: I, title, intro, body, points }, i) => (
            <article key={title} className="grid gap-8 rounded-[2rem] border border-border bg-card p-8 shadow-card md:grid-cols-[auto_1fr_1fr] md:p-10">
              <span className="grid size-16 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground"><I className="size-7" /></span>
              <div>
                <p className="text-sm font-bold text-primary">0{i + 1} — {intro}</p>
                <h2 className="mt-2 text-2xl font-extrabold text-navy">{title}</h2>
                <p className="mt-3 leading-8 text-muted-foreground">{body}</p>
              </div>
              <div className="rounded-2xl bg-secondary p-6">
                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-medium text-navy"><Check className="size-5 text-primary" />{p}</li>
                  ))}
                </ul>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:text-accent">اطلب الخدمة ←</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <SiteImage src={imageAssets.consultation} alt="فريق سهم يقدم الاستشارة لعميلة" className="aspect-[3/4] w-full rounded-3xl object-cover" loading="lazy" />
            <SiteImage src={imageAssets.home} alt="منزل سعودي مرتب" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2 className="mb-8 mt-3 text-3xl font-extrabold text-navy">أسئلة عن خدماتنا</h2>
            <Faq items={faqs} />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-navy px-8 py-14 text-center text-navy-foreground">
          <h2 className="text-3xl font-extrabold">ابدأ طلب الاستقدام اليوم</h2>
          <p className="mt-3 text-navy-foreground/75">فريق سهم جاهز للإجابة على استفساراتك.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="btn-primary"><MessageCircle className="size-5" /> تواصل عبر واتساب</a>
            <Link to="/" hash="countries" className="inline-flex items-center rounded-full border border-navy-foreground/30 px-7 py-3 font-bold hover:bg-navy-foreground/10">دول الاستقدام</Link>
          </div>
        </div>
      </section>
    </>
  );
}
