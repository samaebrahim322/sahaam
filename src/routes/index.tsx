import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileSignature, Stamp, PlaneLanding, UserCheck, ShieldCheck, Clock, Layers, Award,
  ArrowLeft, Phone, Mail, MapPin, MessageCircle, Users, Headset, CalendarCheck,
} from "lucide-react";
import { contact, countries, employees } from "@/lib/site";
import { Faq } from "@/components/Faq";
import { SiteImage } from "@/components/SiteImage";
import { imageAssets } from "@/lib/image-assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سهم للاستقدام | شركة استقدام العمالة المنزلية في المملكه السعودية" },
      { name: "description", content: "شركة سهم للاستقدام: خدمات استقدام العمالة المنزلية في السعودية بخبرة أكثر من 15 عامًا. استقدام من كينيا والفلبين وإثيوبيا والهند وغيرها بأسعار واضحة." },
      { property: "og:title", content: "سهم للاستقدام… ثقة تبدأ من الاختيار" },
      { property: "og:description", content: "خدمات استقدام العمالة المنزلية في السعودية مع متابعة مستمرة وأسعار معلنة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: FileSignature, title: "تعاقد الاستقدام", desc: "إتمام عقد الاستقدام بوضوح وسهولة عبر الإجراءات المعتمدة." },
  { icon: Stamp, title: "إصدار التأشيرة", desc: "مساعدتك في خطوات إصدار التأشيرة واستكمال المتطلبات." },
  { icon: PlaneLanding, title: "وصول العمالة", desc: "متابعة الطلب حتى وصول العمالة إلى المملكة." },
  { icon: UserCheck, title: "اختيار العمالة", desc: "مساعدتك في اختيار العمالة الأنسب لاحتياجات أسرتك." },
];

const steps = ["اختيار العمالة    Testing Git changes المناسبة", "تقديم الطلب", "استكمال إجراءات التعاقد", "متابعة الطلب حتى الوصول"];

const faqs = [
  { q: "كيف أقدّم طلب استقدام؟", a: "يمكنك التواصل معنا عبر الهاتف أو واتساب، وسيساعدك فريقنا في اختيار الدولة والعمالة المناسبة وتوضيح خطوات الطلب." },
  { q: "هل تساعدون في إصدار التأشيرة؟", a: "نعم، نرافقك في خطوات إصدار التأشيرة واستكمال المتطلبات اللازمة عبر القنوات الرسمية. تختلف المدة حسب كل طلب." },
  { q: "ما هي دول الاستقدام المتاحة؟", a: "نوفر الاستقدام من كينيا وبنجلاديش والفلبين والهند وإثيوبيا وسريلانكا وأوغندا، مع أسعار معلنة لكل دولة." },
  { q: "ما هي مراحل الاستقدام؟", a: "اختيار العمالة، ثم تقديم الطلب، ثم استكمال إجراءات التعاقد، ثم متابعة الطلب حتى الوصول." },
  { q: "كيف أتواصل مع الشركة؟", a: `عبر الهاتف ${contact.phoneDisplay} أو ${contact.phone2}، أو واتساب، أو البريد الإلكتروني ${contact.email}.` },
];

function SectionHead({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg leading-8 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <SiteImage
          src={imageAssets.home}
          alt="منزل سعودي أنيق ومرتب"
          className="absolute inset-0 h-full w-full object-cover object-[48%_center] contrast-[1.08] saturate-[1.06]"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero-veil absolute inset-0" />
        <div className="absolute inset-0 bg-background/20 md:hidden" />
        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-20 md:min-h-[720px]">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-1.5 text-sm font-bold text-primary backdrop-blur">
              <ShieldCheck className="size-4" /> شركة سهم للاستقدام
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.3] text-navy md:text-6xl">
              سهم للاستقدام…
              <span className="text-brand-gradient block">ثقة تبدأ من الاختيار</span>
            </h1>
            <p className="mt-6 text-lg leading-9 text-foreground/80">
              خدمات استقدام العمالة المنزلية في السعودية بخبرة تمتد لأكثر من 15 عامًا، مع حلول متكاملة ومتابعة مستمرة لمساعدتك في اختيار العمالة المناسبة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="btn-primary">اطلب استقدام <ArrowLeft className="size-4" /></Link>
              <Link to="/" hash="services" className="btn-outline bg-card/70">تعرّف على خدماتنا</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-navy">
              <span className="flex items-center gap-2"><Award className="size-5 text-primary" /> +15 عامًا خبرة</span>
              <span className="flex items-center gap-2"><Users className="size-5 text-primary" /> 1438 عامل وعاملة</span>
              <span className="flex items-center gap-2"><Clock className="size-5 text-primary" /> متابعة مستمرة</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="aboutUs" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] bg-brand-gradient opacity-90" />
            <SiteImage src={imageAssets.consultation} alt="موظفة خدمة عملاء في شركة سهم تساعد عميلة" className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" loading="lazy" />
            <div className="absolute -bottom-8 left-6 rounded-2xl bg-card px-6 py-4 shadow-soft">
              <p className="text-3xl font-black text-primary">+15</p>
              <p className="text-sm font-medium text-navy">عامًا من الخبرة</p>
            </div>
          </div>
          <div>
            <SectionHead eyebrow="من نحن" title="خبرة في الاستقدام… وثقة تستمر" />
            <p className="mt-5 text-lg leading-9 text-muted-foreground">
              انطلقت شركة سهم للاستقدام لتقديم حلول متكاملة في استقدام العمالة المنزلية، مع الحرص على المصداقية وجودة الخدمة وسهولة الإجراءات، بما يساعد عملاءنا على الوصول إلى الخيارات المناسبة لاحتياجاتهم.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { i: Award, t: "أكثر من 15 عامًا من الخبرة" },
                { i: Layers, t: "حلول استقدام متكاملة" },
                { i: Clock, t: "متابعة مستمرة للطلبات" },
                { i: ShieldCheck, t: "إجراءات عبر الجهات المختصة" },
              ].map(({ i: I, t }) => (
                <div key={t} className="flex items-center gap-3 rounded-2xl bg-secondary p-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-card"><I className="size-5" /></span>
                  <span className="font-bold text-navy">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-secondary py-24">
        <div className="pattern-dots absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionHead center eyebrow="خدماتنا" title="خدمات الاستقدام" sub="حلول متكاملة تجعل خطوات الاستقدام أكثر وضوحًا وسهولة." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: I, title, desc }, idx) => (
              <article key={title} className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-soft">
                <div className="flex items-start justify-between">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-primary-foreground"><I className="size-6" /></span>
                  <span className="text-4xl font-black text-border">0{idx + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-7 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="btn-outline bg-card">استكشف جميع خدماتنا <ArrowLeft className="size-4" /></Link>
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="countries" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead eyebrow="دول الاستقدام" title="اختر الدولة المناسبة لك" sub="تعرّف على خيارات الاستقدام والأسعار المعلنة." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((c) => (
              <article key={c.code} className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-soft">
                <div className="absolute -left-6 -top-6 size-24 rounded-full bg-secondary" />
                <div className="relative flex items-center justify-between">
                  <h3 className="text-xl font-bold text-navy">استقدام من {c.name}</h3>
                  <span className="rounded-lg bg-navy px-2 py-1 font-mono text-xs font-bold text-navy-foreground">{c.code}</span>
                </div>
                <p className="relative mt-6 text-4xl font-black text-primary">{c.price}<span className="mr-1 text-base font-bold text-muted-foreground">ر.س</span></p>
                <p className="relative mt-1 h-5 text-sm text-muted-foreground">{c.tax ?? ""}</p>
                <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="relative mt-5 flex items-center justify-center gap-2 rounded-full bg-secondary py-2.5 font-bold text-navy transition-colors hover:bg-primary hover:text-primary-foreground">
                  اطلب الآن <ArrowLeft className="size-4" />
                </a>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-3xl bg-brand-gradient p-6 text-primary-foreground">
              <h3 className="text-xl font-bold">لست متأكدًا من الاختيار؟</h3>
              <p className="mt-2 text-sm leading-7 opacity-90">تواصل معنا وسنساعدك في اختيار الدولة الأنسب لاحتياجك.</p>
              <a href={`tel:${contact.phone}`} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-card px-5 py-2.5 font-bold text-navy"><Phone className="size-4" /> اتصل بنا</a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHead center eyebrow="كيف نعمل" title="خطوات الاستقدام" />
          <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div className="absolute right-[12.5%] left-[12.5%] top-8 hidden h-0.5 bg-primary/30 md:block" />
            {steps.map((s, i) => (
              <li key={s} className="relative flex items-center gap-4 rounded-2xl bg-card p-5 shadow-card md:flex-col md:bg-transparent md:p-0 md:text-center md:shadow-none">
                <span className="grid size-16 shrink-0 place-items-center rounded-full border-4 border-secondary bg-brand-gradient text-2xl font-black text-primary-foreground">{i + 1}</span>
                <h3 className="font-bold text-navy md:mt-2 md:text-lg">{s}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground">
        <div className="absolute -left-20 top-0 size-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5">
          <h2 className="text-center text-3xl font-extrabold">سهم بالأرقام</h2>
          <div className="mt-12 grid gap-8 text-center sm:grid-cols-3">
            {[
              { i: Users, n: "1438", l: "عامل وعاملة" },
              { i: CalendarCheck, n: "+15", l: "عامًا من الخبرة" },
              { i: Headset, n: "3", l: "موظفي خدمة عملاء" },
            ].map(({ i: I, n, l }) => (
              <div key={l} className="rounded-3xl border border-navy-foreground/15 bg-navy-foreground/5 p-8 backdrop-blur">
                <I className="mx-auto size-8 text-primary" />
                <p className="mt-4 text-5xl font-black">{n}</p>
                <p className="mt-2 text-navy-foreground/75">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="clients_services" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="العملاء والخدمات" title="فريق سهم لخدمتك" />
            <Link to="/employees" className="btn-outline">عرض جميع الموظفين <ArrowLeft className="size-4" /></Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {employees.map((e) => (
              <article key={e.name} className="rounded-3xl border border-border bg-card p-8 text-center shadow-card">
                <div className="mx-auto grid size-24 place-items-center rounded-full bg-secondary text-3xl font-black text-primary ring-4 ring-primary/15">{e.initials}</div>
                <h3 className="mt-5 text-xl font-bold text-navy">{e.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">خدمة العملاء</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1.5fr]">
          <SectionHead eyebrow="الأسئلة الشائعة" title="إجابات على أكثر الأسئلة تكرارًا" sub="كل ما تحتاج معرفته عن الاستقدام مع شركة سهم." />
          <Faq items={faqs} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid overflow-hidden rounded-[2rem] shadow-soft lg:grid-cols-2">
            <div className="bg-brand-gradient p-10 text-primary-foreground md:p-14">
              <span className="text-sm font-bold opacity-90">تواصل معنا</span>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">جاهزون لخدمتك</h2>
              <p className="mt-4 leading-8 opacity-90">تواصل معنا لطلب الاستقدام أو للاستفسار عن أي خدمة.</p>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 font-bold text-navy transition-transform hover:-translate-y-0.5">
                <MessageCircle className="size-5 text-primary" /> تواصل عبر واتساب
              </a>
            </div>
            <div className="space-y-4 bg-card p-10 md:p-14">
              {[
                { i: Phone, l: "الهاتف", v: contact.phoneDisplay, h: `tel:${contact.phone}` },
                { i: Phone, l: "هاتف إضافي", v: contact.phone2, h: `tel:${contact.phone2}` },
                { i: Mail, l: "البريد الإلكتروني", v: contact.email, h: `mailto:${contact.email}` },
                { i: MapPin, l: "الموقع", v: "افتح الموقع على خرائط Google", h: contact.maps },
              ].map(({ i: I, l, v, h }) => (
                <a key={l} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border p-4 transition-colors hover:border-primary">
                  <span className="grid size-12 place-items-center rounded-xl bg-secondary text-primary"><I className="size-5" /></span>
                  <span>
                    <span className="block text-sm text-muted-foreground">{l}</span>
                    <span className="font-bold text-navy" dir={l.includes("هاتف") || l === "الهاتف" ? "ltr" : undefined}>{v}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
