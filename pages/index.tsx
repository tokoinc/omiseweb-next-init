// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

// -----------------------------
// Simple bilingual copy (EN/JP)
// -----------------------------
const copy = {
  en: {
    brand: "OmiseWeb",
    tagline: "Start Your Restaurant or Salon Website in Japan Today",
    sub: "Built by a Japan‑based team. We create and operate fully localized websites that help you win in the Japanese market.",
    ctaPrimary: "Get Started – Free Consultation",
    ctaSecondary: "See Pricing",
    nav: ["Home", "Services", "Pricing", "Works", "How It Works", "FAQ", "Contact"],
    valueJPTitle: "Why a Japan‑native team matters",
    valueJPBullets: [
      "Copywriting & UX optimized for Japanese customers (tone, layout, mobile habits)",
      "Local platforms: LINE, Google Business Profile, Hotpepper/Beauty, Gurunavi, TableCheck integration",
      "Legal pages & compliance: 特定商取引法 / 価格の総額表示 / プライバシーポリシー",
      "Local SEO & listings: map pack, prefecture/city pages, holiday hours, reviews",
    ],
    servicesTitle: "Our Services",
    servicesSub: "Everything you need to launch and run your shop website in Japan.",
    s1: {
      h: "Website Creation",
      items: [
        "Custom design for restaurants & salons",
        "Bilingual (EN/JP) with future TH/ZH ready",
        "Online reservations / booking",
      ],
    },
    s2: {
      h: "Website Management",
      items: ["Content updates", "Social & LINE integration", "Security monitoring"],
    },
    s3: { h: "Marketing Support", tag: "Coming Soon" },
    s4: { h: "Recruitment Support", tag: "Coming Soon" },
    pricingTitle: "Choose the Right Plan",
    plans: [
      { name: "Starter (Ume)", price: "From ¥50,000 / ¥0 monthly", features: ["1‑page site", "EN/JP", "Basic contact form"] },
      { name: "Premium (Matsu)", price: "From ¥200,000 / ¥30,000 monthly", popular: true, features: ["Up to 10 pages", "Reservations/Booking", "Local SEO + GBP", "Monthly updates"] },
      { name: "Standard (Take)", price: "From ¥100,000 / ¥10,000 monthly", features: ["Up to 5 pages", "EN/JP", "Blog/News"] },
    ],
    howTitle: "How It Works",
    how: [
      { title: "Contact Us", desc: "Online form or LINE" },
      { title: "Consultation", desc: "We map your needs & competitors" },
      { title: "Website Creation", desc: "Design & build (~2 weeks)" },
      { title: "Launch & Support", desc: "Ongoing updates & growth" },
    ],
    worksTitle: "Works & Testimonials",
    t1: "Restaurant Owner: “Our international guests can now book in English and Japanese.”",
    t2: "Salon Owner: “I focus on customers while OmiseWeb keeps the site updated.”",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Can I use the service if I don’t speak Japanese?", a: "Yes, we provide English support and handle Japanese communication." },
      { q: "Is the website mobile‑friendly?", a: "Yes, responsive design is standard." },
      { q: "Payment methods?", a: "Credit card / Bank transfer are available." },
    ],
    contactTitle: "Contact OmiseWeb",
    footerNote: (year: number) => `© ${year} OmiseWeb LLC. All rights reserved.`,
    badgeJP: "Japan‑Native Team",
    badgeLocalize: "Deep Localization",
    badgeBilingual: "EN / JP",
    langLabel: "EN",
    langSwitch: "JP",
    seoDescription:
      "Start your restaurant or salon website in Japan today with OmiseWeb. Japan‑native team for localized website creation, management, and support for international owners.",
  },
  jp: {
    brand: "OmiseWeb",
    tagline: "日本で飲食店・サロンのホームページを、今日から",
    sub: "制作から運用まで日本人チームが担当。日本市場で“伝わる”ローカライズ前提のWebサイトを作ります。",
    ctaPrimary: "無料相談を予約",
    ctaSecondary: "料金を見る",
    nav: ["ホーム", "サービス", "料金", "制作実績", "進め方", "FAQ", "お問い合わせ"],
    valueJPTitle: "日本人チームの強み",
    valueJPBullets: [
      "日本の生活文脈に合ったコピー＆UI（言い回し・縦に流れる導線・スマホ最適）",
      "国内プラットフォーム対応：LINE・Google ビジネス プロフィール・Hotpepper/Beauty・ぐるなび・TableCheck 連携",
      "法令対応：特商法・総額表示・プライバシーポリシー・クッキーバナー",
      "ローカルSEO：地図枠、都道府県/市区ページ、営業時間・祝日対応、レビュー運用",
    ],
    servicesTitle: "サービス",
    servicesSub: "日本で集客できる“お店のサイト”に必要なものをすべて。",
    s1: {
      h: "サイト制作",
      items: ["飲食/サロン特化の設計", "日英バイリンガル", "予約/受付フォーム"],
    },
    s2: { h: "運用代行", items: ["文言/写真の更新", "SNS・LINE連携", "セキュリティ管理"] },
    s3: { h: "集客支援", tag: "準備中" },
    s4: { h: "採用支援", tag: "準備中" },
    pricingTitle: "料金プラン",
    plans: [
      { name: "梅（スターター）", price: "初期 ¥50,000〜 / 月額 ¥0", features: ["1ページ構成", "日英対応", "基本お問い合わせ"] },
      { name: "松（プレミアム）", price: "初期 ¥200,000〜 / 月額 ¥30,000", popular: true, features: ["10ページまで", "予約/決済 連携", "ローカルSEO", "毎月の更新代行"] },
      { name: "竹（スタンダード）", price: "初期 ¥100,000〜 / 月額 ¥10,000", features: ["5ページまで", "日英対応", "お知らせ/ブログ"] },
    ],
    howTitle: "進め方",
    how: [
      { title: "お問い合わせ", desc: "フォーム or LINE" },
      { title: "ヒアリング", desc: "要件と競合を整理" },
      { title: "制作", desc: "約2週間で公開" },
      { title: "運用開始", desc: "継続改善と集客" },
    ],
    worksTitle: "制作実績 / お客様の声",
    t1: "飲食店様：「英語と日本語で予約が増えました」",
    t2: "サロン様：「更新を任せられて接客に集中できています」",
    faqTitle: "よくあるご質問",
    faqs: [
      { q: "日本語が話せなくても大丈夫？", a: "はい。英語でのサポートと、日本側の諸手続き・連絡も代行します。" },
      { q: "スマホ最適ですか？", a: "もちろんです。レスポンシブ対応が標準です。" },
      { q: "支払い方法は？", a: "クレジットカード / 銀行振込に対応しています。" },
    ],
    contactTitle: "お問い合わせ",
    footerNote: (year: number) => `© ${year} OmiseWeb LLC.`,
    badgeJP: "日本人チーム",
    badgeLocalize: "ローカライズ対応",
    badgeBilingual: "EN / JP",
    langLabel: "JP",
    langSwitch: "EN",
    seoDescription:
      "日本人チームが制作・運用するローカライズ対応サイト。飲食店・サロン向けの予約導線と集客に強いホームページを提供します。",
  },
};

type Lang = keyof typeof copy;

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium">
    {children}
  </span>
);

const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const year = useMemo(() => new Date().getFullYear(), []);

  // JSON-LD for FAQ + Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OmiseWeb",
    url: "https://example.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://example.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Head>
        <title>OmiseWeb – Restaurant & Salon Websites in Japan</title>
        <meta name="description" content={t.seoDescription} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <Container className="flex h-16 items-center justify-between">
            <Link href="#" className="flex items-center gap-2" aria-label={t.brand}>
              <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-900 font-black text-white">O</div>
              <span className="text-lg font-bold tracking-tight">{t.brand}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex" aria-label="Main">
              {t.nav.map((label, i) => (
                <Link key={label} href={["#home","#services","#pricing","#works","#how","#faq","#contact"][i] || "#"}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* Language Switch */}
            <div className="flex items-center gap-3">
              <div className="hidden gap-2 md:flex">
                <Badge>{t.badgeJP}</Badge>
                <Badge>{t.badgeLocalize}</Badge>
                <Badge>{t.badgeBilingual}</Badge>
              </div>
              <button
                aria-label={`Switch language to ${copy[lang === "en" ? "jp" : "en"].langLabel}`}
                onClick={() => setLang(lang === "en" ? "jp" : "en")}
                className="rounded-2xl border px-3 py-1 text-sm font-semibold hover:bg-slate-50"
              >
                {t.langLabel} / {t.langSwitch}
              </button>
              <Link href="#contact" className="hidden rounded-2xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 md:inline-block">
                {t.ctaPrimary}
              </Link>
            </div>
          </Container>
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white">
          <Container className="py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl">{t.tagline}</h1>
                <p className="mt-4 max-w-xl text-lg text-slate-200">{t.sub}</p>
                <div className="mt-8 flex gap-3">
                  <Link href="#contact" className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">
                    {t.ctaPrimary}
                  </Link>
                  <Link href="#pricing" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50">
                    {t.ctaSecondary}
                  </Link>
                </div>

                {/* Trust micro‑copy */}
                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs/5 text-slate-300">
                  <Badge>Made in Japan</Badge>
                  <Badge>LINE/GBP/Hotpepper</Badge>
                  <Badge>Reservation‑ready</Badge>
                  <Badge>Speed, SEO, Security</Badge>
                </div>
              </div>

              <div className="rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
                <div className="grid h-64 w-full place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
                  {/* Replace with an actual mockup image */}
                  <span className="text-sm text-white/80">Hero Image / Mockup</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* JP localization value prop */}
        <section className="border-b bg-white py-16" aria-labelledby="value-jp">
          <Container>
            <h2 id="value-jp" className="text-center text-3xl font-bold">
              {t.valueJPTitle}
            </h2>
            <ul className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2">
              {t.valueJPBullets.map((b) => (
                <li key={b} className="rounded-2xl border p-4 text-sm leading-6 text-slate-700">
                  {b}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <Container>
            <h2 className="text-center text-3xl font-bold">{t.servicesTitle}</h2>
            <p className="mt-3 text-center text-slate-600">{t.servicesSub}</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">{t.s1.h}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {t.s1.items.map((i: string) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">{t.s2.h}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {t.s2.items.map((i: string) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{t.s3.h}</h3>
                  <span className="text-xs font-semibold text-red-600">{t.s3.tag}</span>
                </div>
              </div>
              <div className="rounded-3xl border p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{t.s4.h}</h3>
                  <span className="text-xs font-semibold text-red-600">{t.s4.tag}</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-center text-3xl font-bold">{t.pricingTitle}</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.plans.map((p) => (
                <div key={p.name} className={`rounded-3xl bg-white p-6 ${p.popular ? "border-2 border-red-600" : "border"}`}>
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold">{p.name}</h3>
                    {p.popular && <span className="rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-700">Most Popular</span>}
                  </div>
                  <p className="mt-2 text-slate-700">{p.price}</p>
                  {p.features && (
                    <ul className="mt-4 list-outside list-disc space-y-1 pl-5 text-sm text-slate-700">
                      {p.features.map((f: string) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  )}
                  <Link href="#contact" className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800">
                    {t.ctaPrimary}
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section id="how" className="py-20">
          <Container>
            <h2 className="text-center text-3xl font-bold">{t.howTitle}</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.how.map((step, idx) => (
                <li key={step.title} className="rounded-3xl border p-6">
                  <strong className="block">{idx + 1}. {step.title}</strong>
                  <p className="mt-1 text-slate-700">{step.desc}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Works & Testimonials */}
        <section id="works" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-center text-3xl font-bold">{t.worksTitle}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border bg-white p-6">{t.t1}</div>
              <div className="rounded-3xl border bg-white p-6">{t.t2}</div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <Container>
            <h2 className="text-center text-3xl font-bold">{t.faqTitle}</h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-4">
              {t.faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border p-4">
                  <strong className="block">{f.q}</strong>
                  <p className="mt-1 text-slate-700">{f.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t py-10">
          <Container>
            <h3 className="text-xl font-bold">{t.contactTitle}</h3>
            <form className="mt-4 grid max-w-md gap-3" aria-label="Contact form">
              <input className="rounded-xl border px-4 py-2" placeholder={lang === "en" ? "Your Name" : "お名前"} aria-label={lang === "en" ? "Your Name" : "お名前"} />
              <input type="email" className="rounded-xl border px-4 py-2" placeholder="Email" aria-label="Email" />
              <input className="rounded-xl border px-4 py-2" placeholder={lang === "en" ? "LINE ID (optional)" : "LINE ID（任意）"} aria-label="LINE ID" />
              <textarea className="rounded-xl border px-4 py-2" rows={4} placeholder={lang === "en" ? "Message" : "ご用件"} aria-label={lang === "en" ? "Message" : "ご用件"} />
              <button type="submit" className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">
                {t.ctaPrimary}
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500">{t.footerNote(year)}</p>
          </Container>
        </footer>

        {/* Sticky mobile contact bar (LINE first for JP) */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/95 p-2 sm:hidden">
          <Container className="flex items-center gap-2 p-0">
            <Link href="#contact" className="flex-1 rounded-xl bg-[#06C755] px-3 py-2 text-center font-semibold text-white">LINE</Link>
            <Link href="#contact" className="flex-1 rounded-xl bg-red-600 px-3 py-2 text-center font-semibold text-white">{t.ctaPrimary}</Link>
          </Container>
        </div>
      </div>
    </>
  );
}
