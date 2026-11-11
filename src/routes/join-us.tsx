import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/join-us")({
  head: () => ({
    meta: [
      { title: "انضم إلى فريق سهم | شركة سهم للاستقدام" },
      { name: "description", content: "قدّم طلبك للانضمام إلى فريق شركة سهم للاستقدام." },
      { property: "og:title", content: "انضم إلى فريق سهم" },
      { property: "og:description", content: "نتطلع دائمًا لاستقبال الكفاءات الطموحة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
const label = "mb-2 block text-sm font-bold text-navy";

function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const cv = data.get("cv");
    const cvName = cv instanceof File ? cv.name : "";
    const body = [
      `الاسم: ${data.get("name")}`,
      `الجوال: ${data.get("phone")}`,
      `البريد الإلكتروني: ${data.get("email")}`,
      `الوظيفة المطلوبة: ${data.get("role") || "غير محددة"}`,
      `السيرة الذاتية: ${cvName}`,
      `الرسالة الإضافية: ${data.get("notes") || "لا توجد"}`,
      "",
      "يرجى إرفاق ملف السيرة الذاتية يدويًا قبل إرسال البريد الإلكتروني.",
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("طلب انضمام إلى فريق سهم")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageBanner title="انضم إلى فريق سهم" crumb="انضم إلينا">
        نتطلع دائمًا لاستقبال الكفاءات الطموحة. املأ النموذج التالي وأرسل طلبك للانضمام إلى فريقنا.
      </PageBanner>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <form
            onSubmit={submit}
            dir="rtl"
            className="space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8 lg:p-10"
          >
            <h2 className="text-2xl font-extrabold text-navy">نموذج التقديم</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="applicant-name" className={label}>الاسم الكامل *</label>
                <input
                  id="applicant-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="applicant-phone" className={label}>رقم الجوال *</label>
                <input
                  id="applicant-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="applicant-email" className={label}>البريد الإلكتروني *</label>
                <input
                  id="applicant-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="applicant-role" className={label}>الوظيفة المطلوبة</label>
                <input
                  id="applicant-role"
                  name="role"
                  type="text"
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="applicant-cv" className={label}>
                  رفع السيرة الذاتية (PDF, DOC, DOCX) *
                </label>
                <input
                  id="applicant-cv"
                  name="cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  className={`${field} file:me-3 file:rounded-lg file:border-0 file:bg-secondary file:px-3 file:py-2 file:font-bold file:text-navy`}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="applicant-notes" className={label}>رسالة إضافية</label>
                <textarea
                  id="applicant-notes"
                  name="notes"
                  rows={4}
                  className={`${field} resize-y`}
                />
              </div>
            </div>
            <label htmlFor="privacy-consent" className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
              <input
                id="privacy-consent"
                name="privacyConsent"
                type="checkbox"
                required
                className="mt-1 size-4 shrink-0 accent-primary"
              />
              <span>أوافق على استخدام بياناتي لغرض دراسة طلب الانضمام إلى فريق سهم. *</span>
            </label>
            <button type="submit" className="btn-primary w-full">
              <Send aria-hidden="true" className="size-4" />
              إرسال طلب الانضمام
            </button>
            {submitted && (
              <p role="status" className="text-sm text-muted-foreground">
                سيُفتح تطبيق البريد الإلكتروني لإرسال الطلب. أرفق السيرة الذاتية قبل الإرسال.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
