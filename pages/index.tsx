import Head from "next/head";
import { useState } from "react";
import type { ReactNode } from "react";

/**
 * A responsive container component that centers content and limits its width.
 */
const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
);

// Supported languages
type Lang = "en" | "th" | "zh";

// Translations for each language. Feel free to update these strings as needed.
const messages: Record<
  Lang,
  {
    nav: {
      home: string;
      services: string;
      pricing: string;
      works: string;
      how: string;
      faq: string;
      contact: string;
    };
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    servicesHeading: string;
    servicesSubheading: string;
    servicesItems: {
      creation: {
        title: string;
        list: string[];
      };
      management: {
        title: string;
        list: string[];
      };
      marketing: {
        title: string;
        comingSoon: string;
      };
      recruitment: {
        title: string;
        comingSoon: string;
      };
    };
    pricingHeading: string;
    pricingPlans: {
      name: string;
      price: string;
      highlight?: boolean;
    }[];
    howHeading: string;
    howSteps: { title: string; description: string }[];
    worksHeading: string;
    worksTestimonials: string[];
    faqHeading: string;
    faqs: { question: string; answer: string }[];
    contactHeading: string;
    contactPlaceholders: {
      name: string;
      email: string;
      message: string;
    };
    contactButton: string;
  }
> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      works: "Works",
      how: "How It Works",
      faq: "FAQ",
      contact: "Contact",
    },
    heroTitle: "Start Your Restaurant or Salon Website in Japan Today",
    heroSubtitle:
      "From website creation to ongoing management — OmiseWeb is your trusted partner for running a successful business in Japan.",
    ctaPrimary: "Get Started – Free Consultation",
    ctaSecondary: "See Pricing",
    servicesHeading: "Our Services",
    servicesSubheading:
      "Everything you need to launch and run your shop website in Japan.",
    servicesItems: {
      creation: {
        title: "Website Creation",
        list: [
          "Custom design for restaurants & salons",
          "Multilingual (EN/TH/CH)",
          "Online reservation system",
        ],
      },
      management: {
        title: "Website Management",
        list: ["Content updates", "Social media integration", "Security monitoring"],
      },
      marketing: {
        title: "Marketing Support",
        comingSoon: "Coming Soon",
      },
      recruitment: {
        title: "Recruitment Support",
        comingSoon: "Coming Soon",
      },
    },
    pricingHeading: "Choose the Right Plan",
    pricingPlans: [
      { name: "Ume", price: "From ¥50,000 / ¥0 monthly" },
      { name: "Take", price: "From ¥100,000 / ¥10,000 monthly", highlight: true },
      { name: "Matsu", price: "From ¥200,000 / ¥30,000 monthly" },
    ],
    howHeading: "How It Works",
    howSteps: [
      { title: "1. Contact Us", description: "Online form or LINE" },
      { title: "2. Consultation", description: "We listen to your needs" },
      { title: "3. Website Creation", description: "Ready in ~2 weeks" },
      { title: "4. Launch & Support", description: "Ongoing updates" },
    ],
    worksHeading: "Works & Testimonials",
    worksTestimonials: [
      'Restaurant Owner: "Now our international customers can easily make reservations."',
      'Salon Owner: "I can focus on my work while OmiseWeb updates my website."',
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Can I use the service if I don’t speak Japanese?",
        answer: "Yes, we provide English support.",
      },
      {
        question: "Is the website mobile-friendly?",
        answer: "Yes, responsive design is standard.",
      },
      {
        question: "Payment methods?",
        answer: "Credit card / Bank transfer.",
      },
    ],
    contactHeading: "Contact OmiseWeb",
    contactPlaceholders: {
      name: "Your Name",
      email: "Email",
      message: "Message",
    },
    contactButton: "Send",
  },
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการ",
      pricing: "ราคา",
      works: "ผลงาน",
      how: "วิธีการทำงาน",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อ",
    },
    heroTitle: "เริ่มต้นเว็บไซต์ร้านอาหารหรือซาลอนของคุณในญี่ปุ่นวันนี้",
    heroSubtitle:
      "ตั้งแต่การสร้างเว็บไซต์ไปจนถึงการบริหารอย่างต่อเนื่อง — OmiseWeb เป็นพันธมิตรที่เชื่อถือได้สำหรับธุรกิจของคุณในญี่ปุ่น",
    ctaPrimary: "เริ่มเลย – ปรึกษาฟรี",
    ctaSecondary: "ดูราคา",
    servicesHeading: "บริการของเรา",
    servicesSubheading:
      "ทุกสิ่งที่คุณต้องการเพื่อเริ่มและดำเนินเว็บไซต์ร้านค้าของคุณในญี่ปุ่น",
    servicesItems: {
      creation: {
        title: "สร้างเว็บไซต์",
        list: [
          "ออกแบบเฉพาะสำหรับร้านอาหารและซาลอน",
          "รองรับหลายภาษา (EN/TH/CH)",
          "ระบบจองออนไลน์",
        ],
      },
      management: {
        title: "การจัดการเว็บไซต์",
        list: [
          "ปรับปรุงเนื้อหา",
          "การเชื่อมต่อโซเชียลมีเดีย",
          "การตรวจสอบความปลอดภัย",
        ],
      },
      marketing: {
        title: "การสนับสนุนการตลาด",
        comingSoon: "เร็ว ๆ นี้",
      },
      recruitment: {
        title: "การสนับสนุนการสรรหา",
        comingSoon: "เร็ว ๆ นี้",
      },
    },
    pricingHeading: "เลือกแผนที่เหมาะสม",
    pricingPlans: [
      { name: "Ume", price: "เริ่มต้น ¥50,000 / ฟรีรายเดือน" },
      {
        name: "Take",
        price: "เริ่มต้น ¥100,000 / ¥10,000 ต่อเดือน",
        highlight: true,
      },
      { name: "Matsu", price: "เริ่มต้น ¥200,000 / ¥30,000 ต่อเดือน" },
    ],
    howHeading: "ขั้นตอนการทำงาน",
    howSteps: [
      { title: "1. ติดต่อเรา", description: "แบบฟอร์มออนไลน์หรือ LINE" },
      { title: "2. ปรึกษา", description: "เราฟังความต้องการของคุณ" },
      { title: "3. สร้างเว็บไซต์", description: "พร้อมในประมาณ 2 สัปดาห์" },
      { title: "4. เปิดตัว & สนับสนุน", description: "อัปเดตอย่างต่อเนื่อง" },
    ],
    worksHeading: "ผลงานและคำชม",
    worksTestimonials: [
      'เจ้าของร้านอาหาร: "ตอนนี้ลูกค้าต่างชาติสามารถจองได้ง่าย"',
      'เจ้าของซาลอน: "ฉันสามารถมุ่งมั่นกับงาน ในขณะที่ OmiseWeb อัปเดตเว็บไซต์ของฉัน"',
    ],
    faqHeading: "คำถามที่พบบ่อย",
    faqs: [
      {
        question: "ถ้าฉันไม่พูดภาษาญี่ปุ่นจะใช้บริการได้ไหม?",
        answer: "ได้ เรามีการสนับสนุนภาษาอังกฤษ",
      },
      {
        question: "เว็บไซต์รองรับมือถือหรือไม่?",
        answer: "ใช่ การออกแบบตอบสนองเป็นมาตรฐาน",
      },
      {
        question: "วิธีการชำระเงิน?",
        answer: "บัตรเครดิต / โอนเงินผ่านธนาคาร",
      },
    ],
    contactHeading: "ติดต่อ OmiseWeb",
    contactPlaceholders: {
      name: "ชื่อของคุณ",
      email: "อีเมล",
      message: "ข้อความ",
    },
    contactButton: "ส่ง",
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      pricing: "价格",
      works: "案例",
      how: "工作流程",
      faq: "常见问题",
      contact: "联系",
    },
    heroTitle: "今天就在日本启动您的餐厅或沙龙网站",
    heroSubtitle:
      "从网站创建到持续管理 —— OmiseWeb 是您在日本成功经营业务值得信赖的合作伙伴。",
    ctaPrimary: "立即开始 – 免费咨询",
    ctaSecondary: "查看价格",
    servicesHeading: "我们的服务",
    servicesSubheading:
      "启动和运营您的店铺网站在日本所需的一切。",
    servicesItems: {
      creation: {
        title: "网站创建",
        list: [
          "餐厅和沙龙定制设计",
          "多语言（EN/TH/CH）",
          "在线预订系统",
        ],
      },
      management: {
        title: "网站管理",
        list: ["内容更新", "社交媒体整合", "安全监控"],
      },
      marketing: {
        title: "营销支持",
        comingSoon: "敬请期待",
      },
      recruitment: {
        title: "招聘支持",
        comingSoon: "敬请期待",
      },
    },
    pricingHeading: "选择合适的计划",
    pricingPlans: [
      { name: "Ume", price: "起价 ¥50,000 / 免费月费" },
      {
        name: "Take",
        price: "起价 ¥100,000 / 每月 ¥10,000",
        highlight: true,
      },
      { name: "Matsu", price: "起价 ¥200,000 / 每月 ¥30,000" },
    ],
    howHeading: "工作流程",
    howSteps: [
      { title: "1. 联系我们", description: "在线表单或 LINE" },
      { title: "2. 咨询", description: "我们聆听您的需求" },
      { title: "3. 网站创建", description: "大约两周内准备就绪" },
      { title: "4. 上线及支持", description: "持续更新" },
    ],
    worksHeading: "案例与评价",
    worksTestimonials: [
      '餐厅老板：“现在我们的海外客户可以轻松预订。”',
      '沙龙老板：“我可以专心工作，而 OmiseWeb 更新我的网站。”',
    ],
    faqHeading: "常见问题",
    faqs: [
      {
        question: "如果我不会说日语还能使用服务吗？",
        answer: "可以，我们提供英文支持。",
      },
      {
        question: "网站是否适配手机?",
        answer: "是的，自适应设计是标准配置。",
      },
      {
        question: "付款方式？",
        answer: "信用卡 / 银行转账。",
      },
    ],
    contactHeading: "联系 OmiseWeb",
    contactPlaceholders: {
      name: "您的姓名",
      email: "电子邮件",
      message: "留言",
    },
    contactButton: "发送",
  },
};

/**
 * The main Home component.
 * Includes a responsive header with language selector and all sections of the page.
 */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const t = messages[lang];

  // List of available languages for the selector
  const languageOptions: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "th", label: "TH" },
    { code: "zh", label: "CH" },
  ];

  return (
    <>
      <Head>
        <title>OmiseWeb – Restaurant &amp; Salon Websites in Japan</title>
        <meta
          name="description"
          content="Start your restaurant or salon website in Japan today with OmiseWeb. Website creation, management, and support for international business owners."
        />
      </Head>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">
                O
              </div>
              <span className="text-lg font-bold tracking-tight">OmiseWeb</span>
            </a>
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="#home" onClick={() => setMenuOpen(false)}>
                {t.nav.home}
              </a>
              <a href="#services" onClick={() => setMenuOpen(false)}>
                {t.nav.services}
              </a>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                {t.nav.pricing}
              </a>
              <a href="#works" onClick={() => setMenuOpen(false)}>
                {t.nav.works}
              </a>
              <a href="#how" onClick={() => setMenuOpen(false)}>
                {t.nav.how}
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                {t.nav.faq}
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                {t.nav.contact}
              </a>
            </nav>
            {/* Language selector and CTA (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1">
                {languageOptions.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`text-sm px-2 py-1 rounded-md transition-colors ${
                      lang === code
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100"
                    }`}
                    aria-label={`Switch language to ${label}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                className="rounded-2xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
              >
                {t.ctaPrimary}
              </a>
            </div>
            {/* Mobile toggle button */}
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-200 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </Container>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200">
              <nav className="px-4 pt-4 pb-2 space-y-1 text-sm font-semibold text-slate-700">
                <a
                  href="#home"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.home}
                </a>
                <a
                  href="#services"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.services}
                </a>
                <a
                  href="#pricing"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.pricing}
                </a>
                <a
                  href="#works"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.works}
                </a>
                <a
                  href="#how"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.how}
                </a>
                <a
                  href="#faq"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.faq}
                </a>
                <a
                  href="#contact"
                  className="block py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
                {/* Mobile language selector */}
                <div className="flex items-center gap-1 pt-2">
                  {languageOptions.map(({ code, label }) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLang(code);
                      }}
                      className={`flex-1 text-sm px-2 py-1 rounded-md transition-colors ${
                        lang === code
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                      aria-label={`Switch language to ${label}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {/* Mobile CTA */}
                <a
                  href="#contact"
                  className="mt-3 block rounded-2xl bg-red-600 px-4 py-2 text-center font-semibold text-white hover:bg-red-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.ctaPrimary}
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white"
        >
          <Container className="py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl">
                  {t.heroTitle}
                </h1>
                <p className="mt-4 max-w-xl text-lg text-slate-200">
                  {t.heroSubtitle}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="rounded-2xl bg-red-600 px-5 py-3 text-center font-semibold text-white hover:bg-red-700"
                  >
                    {t.ctaPrimary}
                  </a>
                  <a
                    href="#pricing"
                    className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-center font-semibold text-slate-900 hover:bg-slate-50"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
                <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent grid place-items-center">
                  {/* Placeholder for hero image */}
                  Hero Image / Mockup
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">{t.servicesHeading}</h2>
            <p className="mt-3 text-center text-slate-600">
              {t.servicesSubheading}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Website Creation */}
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">{t.servicesItems.creation.title}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {t.servicesItems.creation.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Website Management */}
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">{t.servicesItems.management.title}</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  {t.servicesItems.management.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* Marketing Support */}
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">{t.servicesItems.marketing.title}</h3>
                <p className="text-xs text-red-600">
                  {t.servicesItems.marketing.comingSoon}
                </p>
              </div>
              {/* Recruitment Support */}
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">
                  {t.servicesItems.recruitment.title}
                </h3>
                <p className="text-xs text-red-600">
                  {t.servicesItems.recruitment.comingSoon}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">
              {t.pricingHeading}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl border ${
                    plan.highlight ? "border-red-600" : ""
                  } bg-white p-6`}
                >
                  <h3 className="font-bold">{plan.name}</h3>
                  <p>{plan.price}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section id="how" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">{t.howHeading}</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.howSteps.map((step, idx) => (
                <li
                  key={idx}
                  className="rounded-3xl border p-6 flex flex-col gap-2"
                >
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Works & Testimonials Section */}
        <section id="works" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">{t.worksHeading}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {t.worksTestimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border bg-white p-6 text-sm"
                >
                  {testimonial}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">{t.faqHeading}</h2>
            <div className="mt-6 max-w-2xl mx-auto space-y-4">
              {t.faqs.map((item, idx) => (
                <div key={idx} className="rounded-2xl border p-4 text-sm">
                  <strong>{item.question}</strong>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer / Contact Section */}
        <footer id="contact" className="border-t py-10">
          <Container>
            <h3 className="text-xl font-bold">{t.contactHeading}</h3>
            <form className="mt-4 grid gap-3 max-w-md">
              <input
                className="rounded-xl border px-4 py-2"
                placeholder={t.contactPlaceholders.name}
              />
              <input
                type="email"
                className="rounded-xl border px-4 py-2"
                placeholder={t.contactPlaceholders.email}
              />
              <textarea
                className="rounded-xl border px-4 py-2"
                rows={4}
                placeholder={t.contactPlaceholders.message}
              />
              <button
                type="submit"
                className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
              >
                {t.contactButton}
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500">
              © {new Date().getFullYear()} OmiseWeb LLC. All rights reserved.
            </p>
          </Container>
        </footer>
      </div>
    </>
  );
}
