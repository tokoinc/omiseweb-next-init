import { useState, useEffect, useRef } from "react";
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

/**
 * FadeInSection wraps its children in a section that fades in and slides up when
 * it enters the viewport with enhanced animation effects.
 */
const FadeInSection: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className = "", children }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transform transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {children}
    </section>
  );
};

/**
 * ScrollTopButton with enhanced design
 */
const ScrollTopButton: React.FC<{
  show: boolean;
  onClick: () => void;
}> = ({ show, onClick }) => {
  if (!show) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-2xl hover:from-red-600 hover:to-red-700 focus:outline-none transform transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
      aria-label="Scroll back to top"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>
    </button>
  );
};

// Supported languages
type Lang = "en" | "th" | "zh";

// Enhanced translations with better copy
const messages: Record<
  Lang,
  {
    nav: Record<string, string>;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    servicesHeading: string;
    servicesSubheading: string;
    servicesItems: {
      creation: { title: string; list: string[] };
      management: { title: string; list: string[] };
      marketing: { title: string; comingSoon: string; description: string };
      recruitment: { title: string; comingSoon: string; description: string };
    };
    pricingHeading: string;
    pricingPlans: Array<{
      name: string;
      price: string;
      monthly: string;
      description: string;
      features: string[];
      highlight?: boolean;
    }>;
    howHeading: string;
    howSteps: Array<{ title: string; description: string; icon: string }>;
    worksHeading: string;
    worksTestimonials: Array<{ text: string; author: string; role: string }>;
    faqHeading: string;
    faqs: Array<{ question: string; answer: string }>;
    contactHeading: string;
    contactSubheading: string;
    contactPlaceholders: {
      name: string;
      email: string;
      business: string;
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
      works: "Portfolio",
      how: "Process",
      faq: "FAQ",
      contact: "Contact",
    },
    heroTitle: "Launch Your Restaurant or Salon Website in Japan",
    heroSubtitle:
      "Professional website creation and management for international businesses. From concept to launch in just 2 weeks.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Pricing",
    servicesHeading: "Complete Web Solutions",
    servicesSubheading:
      "Everything you need to establish a strong digital presence in Japan's competitive market.",
    servicesItems: {
      creation: {
        title: "Website Creation",
        list: [
          "Custom responsive design",
          "Multilingual support (EN/TH/CH/JP)",
          "Online reservation system",
          "SEO optimization",
        ],
      },
      management: {
        title: "Ongoing Management",
        list: [
          "Content updates & maintenance",
          "Social media integration",
          "Security monitoring",
          "Performance optimization",
        ],
      },
      marketing: {
        title: "Digital Marketing",
        comingSoon: "Coming Q2 2025",
        description: "SEO, social media, and local advertising",
      },
      recruitment: {
        title: "Staff Recruitment",
        comingSoon: "Coming Q3 2025",
        description: "Bilingual staff hiring support",
      },
    },
    pricingHeading: "Simple, Transparent Pricing",
    pricingPlans: [
      {
        name: "Ume",
        price: "¥50,000",
        monthly: "¥0/month",
        description: "Perfect for small cafes",
        features: ["5-page website", "Basic SEO", "1 language"],
      },
      {
        name: "Take",
        price: "¥100,000",
        monthly: "¥10,000/month",
        description: "Most popular choice",
        features: [
          "10-page website",
          "Booking system",
          "3 languages",
          "Monthly updates",
        ],
        highlight: true,
      },
      {
        name: "Matsu",
        price: "¥200,000",
        monthly: "¥30,000/month",
        description: "Premium solution",
        features: [
          "Unlimited pages",
          "Advanced features",
          "Priority support",
          "Weekly updates",
        ],
      },
    ],
    howHeading: "Our Proven Process",
    howSteps: [
      {
        title: "Discovery Call",
        description: "Free consultation to understand your vision",
        icon: "💬",
      },
      {
        title: "Design & Plan",
        description: "Custom design mockups and project timeline",
        icon: "🎨",
      },
      {
        title: "Development",
        description: "Professional development in 1-2 weeks",
        icon: "⚡",
      },
      {
        title: "Launch & Support",
        description: "Go live with ongoing maintenance",
        icon: "🚀",
      },
    ],
    worksHeading: "Success Stories",
    worksTestimonials: [
      {
        text: "OmiseWeb transformed our business. International customers now find us easily and bookings increased 300%.",
        author: "Tanaka-san",
        role: "Restaurant Owner, Shibuya",
      },
      {
        text: "The multilingual website helped us serve Thai and Chinese customers better. Professional service from start to finish.",
        author: "Yuki",
        role: "Salon Owner, Harajuku",
      },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do you provide English support?",
        answer:
          "Yes, our team provides full English support throughout the project and ongoing maintenance.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "Most websites are completed within 1-2 weeks, depending on complexity and content preparation.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept credit cards, bank transfers, and PayPal for international clients.",
      },
      {
        question: "Can you help with Japanese regulations?",
        answer:
          "Yes, we ensure your website complies with Japanese web standards and accessibility requirements.",
      },
    ],
    contactHeading: "Start Your Project Today",
    contactSubheading: "Get a free consultation and quote within 24 hours",
    contactPlaceholders: {
      name: "Your Name",
      email: "Email Address",
      business: "Business Type",
      message: "Tell us about your project...",
    },
    contactButton: "Send Message",
  },
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการ",
      pricing: "ราคา",
      works: "ผลงาน",
      how: "ขั้นตอน",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อ",
    },
    heroTitle: "เว็บไซต์ร้านอาหารและซาลอนในญี่ปุ่น",
    heroSubtitle:
      "สร้างและจัดการเว็บไซต์มืออาชีพสำหรับธุรกิจนานาชาติ เสร็จภายใน 2 สัปดาห์",
    ctaPrimary: "เริ่มโปรเจค",
    ctaSecondary: "ดูราคา",
    servicesHeading: "โซลูชันเว็บครบวงจร",
    servicesSubheading:
      "ทุกสิ่งที่คุณต้องการเพื่อสร้างตัวตนทางดิจิทัลในตลาดญี่ปุ่น",
    servicesItems: {
      creation: {
        title: "สร้างเว็บไซต์",
        list: [
          "ออกแบบตอบสนองแบบกำหนดเอง",
          "รองรับหลายภาษา (EN/TH/CH/JP)",
          "ระบบจองออนไลน์",
          "การปรับ SEO",
        ],
      },
      management: {
        title: "การจัดการอย่างต่อเนื่อง",
        list: [
          "อัปเดตเนื้อหาและบำรุงรักษา",
          "การรวมโซเชียลมีเดีย",
          "ตรวจสอบความปลอดภัย",
          "เพิ่มประสิทธิภาพ",
        ],
      },
      marketing: {
        title: "การตลาดดิจิทัล",
        comingSoon: "เร็ว ๆ นี้ Q2 2025",
        description: "SEO, โซเชียลมีเดีย และโฆษณาท้องถิ่น",
      },
      recruitment: {
        title: "การสรรหาพนักงาน",
        comingSoon: "เร็ว ๆ นี้ Q3 2025",
        description: "การสนับสนุนการจ้างงานแบบสองภาษา",
      },
    },
    pricingHeading: "ราคาง่าย โปร่งใส",
    pricingPlans: [
      {
        name: "Ume",
        price: "¥50,000",
        monthly: "¥0/เดือน",
        description: "เหมาะสำหรับร้านเล็ก",
        features: ["เว็บไซต์ 5 หน้า", "SEO พื้นฐาน", "1 ภาษา"],
      },
      {
        name: "Take",
        price: "¥100,000",
        monthly: "¥10,000/เดือน",
        description: "ตัวเลือกยอดนิยม",
        features: ["เว็บไซต์ 10 หน้า", "ระบบจอง", "3 ภาษา", "อัปเดตรายเดือน"],
        highlight: true,
      },
      {
        name: "Matsu",
        price: "¥200,000",
        monthly: "¥30,000/เดือน",
        description: "โซลูชันพรีเมียม",
        features: [
          "หน้าไม่จำกัด",
          "คุณสมบัติขั้นสูง",
          "การสนับสนุนเป็นพิเศษ",
          "อัปเดตรายสัปดาห์",
        ],
      },
    ],
    howHeading: "กระบวนการที่พิสูจน์แล้ว",
    howSteps: [
      {
        title: "โทรสำรวจ",
        description: "ปรึกษาฟรีเพื่อเข้าใจวิสัยทัศน์ของคุณ",
        icon: "💬",
      },
      {
        title: "ออกแบบและวางแผน",
        description: "แม็อคอัปการออกแบบที่กำหนดเองและไทม์ไลน์โปรเจค",
        icon: "🎨",
      },
      {
        title: "พัฒนา",
        description: "การพัฒนาอย่างมืออาชีพใน 1-2 สัปดาห์",
        icon: "⚡",
      },
      {
        title: "เปิดตัวและสนับสนุน",
        description: "ไปสดพร้อมการบำรุงรักษาอย่างต่อเนื่อง",
        icon: "🚀",
      },
    ],
    worksHeading: "เรื่องราวความสำเร็จ",
    worksTestimonials: [
      {
        text: "OmiseWeb เปลี่ยนธุรกิจของเรา ลูกค้าต่างชาติค้นหาเราได้ง่ายและการจองเพิ่มขึ้น 300%",
        author: "ทานากะ-ซัง",
        role: "เจ้าของร้านอาหาร, ชิบุยะ",
      },
      {
        text: "เว็บไซต์หลายภาษาช่วยให้เราให้บริการลูกค้าไทยและจีนได้ดีขึ้น บริการมืออาชีพตั้งแต่เริ่มต้นจนจบ",
        author: "ยูกิ",
        role: "เจ้าของซาลอน, ฮาราจูกุ",
      },
    ],
    faqHeading: "คำถามที่พบบ่อย",
    faqs: [
      {
        question: "คุณให้การสนับสนุนภาษาอังกฤษหรือไม่?",
        answer:
          "ใช่ ทีมของเราให้การสนับสนุนภาษาอังกฤษเต็มรูปแบบตลอดโปรเจคและการบำรุงรักษาอย่างต่อเนื่อง",
      },
      {
        question: "ใช้เวลานานแค่ไหนในการสร้างเว็บไซต์?",
        answer:
          "เว็บไซต์ส่วนใหญ่เสร็จสิ้นภายใน 1-2 สัปดาห์ ขึ้นอยู่กับความซับซ้อนและการเตรียมเนื้อหา",
      },
      {
        question: "คุณรับวิธีการชำระเงินอะไรบ้าง?",
        answer:
          "เรารับบัตรเครดิต การโอนเงินผ่านธนาคาร และ PayPal สำหรับลูกค้าต่างประเทศ",
      },
      {
        question: "คุณสามารถช่วยเกี่ยวกับกฎระเบียบญี่ปุ่นได้หรือไม่?",
        answer:
          "ใช่ เราทำให้มั่นใจว่าเว็บไซต์ของคุณสอดคล้องกับมาตรฐานเว็บและความต้องการการเข้าถึงของญี่ปุ่น",
      },
    ],
    contactHeading: "เริ่มโปรเจคของคุณวันนี้",
    contactSubheading: "รับการปรึกษาฟรีและใบเสนอราคาภายใน 24 ชั่วโมง",
    contactPlaceholders: {
      name: "ชื่อของคุณ",
      email: "ที่อยู่อีเมล",
      business: "ประเภทธุรกิจ",
      message: "บอกเราเกี่ยวกับโปรเจคของคุณ...",
    },
    contactButton: "ส่งข้อความ",
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      pricing: "价格",
      works: "案例",
      how: "流程",
      faq: "常见问题",
      contact: "联系我们",
    },
    heroTitle: "在日本创建餐厅和美发沙龙网站",
    heroSubtitle: "为国际企业提供专业的网站创建和管理服务。从概念到上线仅需2周。",
    ctaPrimary: "开始项目",
    ctaSecondary: "查看价格",
    servicesHeading: "完整的网络解决方案",
    servicesSubheading: "在日本竞争激烈的市场中建立强大数字化形象所需的一切。",
    servicesItems: {
      creation: {
        title: "网站创建",
        list: [
          "定制响应式设计",
          "多语言支持 (EN/TH/CH/JP)",
          "在线预订系统",
          "SEO优化",
        ],
      },
      management: {
        title: "持续管理",
        list: [
          "内容更新和维护",
          "社交媒体整合",
          "安全监控",
          "性能优化",
        ],
      },
      marketing: {
        title: "数字营销",
        comingSoon: "2025年第二季度推出",
        description: "SEO、社交媒体和本地广告",
      },
      recruitment: {
        title: "员工招聘",
        comingSoon: "2025年第三季度推出",
        description: "双语员工招聘支持",
      },
    },
    pricingHeading: "简单透明的定价",
    pricingPlans: [
      {
        name: "Ume",
        price: "¥50,000",
        monthly: "¥0/月",
        description: "适合小型咖啡厅",
        features: ["5页网站", "基础SEO", "1种语言"],
      },
      {
        name: "Take",
        price: "¥100,000",
        monthly: "¥10,000/月",
        description: "最受欢迎选择",
        features: ["10页网站", "预订系统", "3种语言", "月度更新"],
        highlight: true,
      },
      {
        name: "Matsu",
        price: "¥200,000",
        monthly: "¥30,000/月",
        description: "高级解决方案",
        features: ["无限页面", "高级功能", "优先支持", "每周更新"],
      },
    ],
    howHeading: "我们经过验证的流程",
    howSteps: [
      {
        title: "发现电话",
        description: "免费咨询了解您的愿景",
        icon: "💬",
      },
      { title: "设计与规划", description: "定制设计模型和项目时间表", icon: "🎨" },
      { title: "开发", description: "1-2周专业开发", icon: "⚡" },
      { title: "上线与支持", description: "上线并持续维护", icon: "🚀" },
    ],
    worksHeading: "成功案例",
    worksTestimonials: [
      {
        text: "OmiseWeb改变了我们的业务。国际客户现在很容易找到我们，预订量增加了300%。",
        author: "田中先生",
        role: "餐厅老板，涩谷",
      },
      {
        text: "多语言网站帮助我们更好地为泰语和中文客户服务。从开始到结束的专业服务。",
        author: "雪",
        role: "沙龙老板，原宿",
      },
    ],
    faqHeading: "常见问题",
    faqs: [
      {
        question: "您提供英文支持吗？",
        answer: "是的，我们的团队在整个项目和持续维护过程中提供全面的英文支持。",
      },
      {
        question: "建设网站需要多长时间？",
        answer: "大多数网站在1-2周内完成，取决于复杂性和内容准备情况。",
      },
      {
        question: "您接受什么付款方式？",
        answer: "我们接受信用卡、银行转账和PayPal（面向国际客户）。",
      },
      {
        question: "您能帮助处理日本法规吗？",
        answer: "是的，我们确保您的网站符合日本网络标准和无障碍要求。",
      },
    ],
    contactHeading: "立即开始您的项目",
    contactSubheading: "24小时内获得免费咨询和报价",
    contactPlaceholders: {
      name: "您的姓名",
      email: "电子邮件地址",
      business: "业务类型",
      message: "告诉我们您的项目...",
    },
    contactButton: "发送消息",
  },
};

/**
 * The main Home component with professional design upgrades including video and images.
 */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = messages[lang];

  const languageOptions: { code: Lang; label: string; short: string; }[] = [
    { code: "en", label: "English", short: "EN" },
    { code: "th", label: "ภาษาไทย", short: "TH" },
    { code: "zh", label: "中文", short: "CH" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500);

      const sections = ["home", "services", "pricing", "works", "how", "faq", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const portfolioImages = [
    "https://placehold.co/600x400/f87171/ffffff?text=Restaurant+Site",
    "https://placehold.co/600x400/34d399/ffffff?text=Salon+Booking",
    "https://placehold.co/600x400/60a5fa/ffffff?text=Cafe+Menu",
    "https://placehold.co/600x400/fbbf24/ffffff?text=Boutique+Shop",
    "https://placehold.co/600x400/a78bfa/ffffff?text=Event+Page",
    "https://placehold.co/600x400/f472b6/ffffff?text=Nail+Art+Studio",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center">
            <img
              src="https://cdn.omiseweb.com/logo02.png"
              alt="OmiseWeb Logo"
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {(Object.keys(t.nav) as Array<keyof typeof t.nav>).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === key
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[key]}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1">
              {languageOptions.map(({ code, short }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
                    lang === code
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {short}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setLangMenuOpen(!isLangMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
                aria-label="Open language menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.874 6.5 7.5 6.5h5c.626 0 .988-.77 1.256-1.179a6.006 6.006 0 011.912 2.706c-.227.172-.44.384-.638.618a.5.5 0 01-.854-.51c.074-.185.14-.375.196-.572a.5.5 0 00-.968-.242 4.01 4.01 0 00-3.666 0 .5.5 0 00-.968.242c.056.197.122.387.196.572a.5.5 0 01-.854.51c-.198-.234-.411-.446-.638-.618zM4 10a.5.5 0 00.5.5h11a.5.5 0 100-1H4.5a.5.5 0 00-.5.5z" clipRule="evenodd" />
                </svg>
              </button>
              {isLangMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1" role="none">
                    {languageOptions.map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangMenuOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm font-medium ${
                          lang === code
                            ? "bg-slate-100 text-slate-900"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                        role="menuitem"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </Container>

        <div
          className={`lg:hidden bg-white border-t border-slate-200 transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-4 py-4 space-y-2">
            {(Object.keys(t.nav) as Array<keyof typeof t.nav>).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="block py-2 px-3 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[key]}
              </a>
            ))}
            
            <a
              href="#contact"
              className="block mt-4 pt-4 border-t border-slate-200 py-2 px-4 bg-slate-900 text-white text-center font-medium rounded-lg hover:bg-slate-800 transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white pt-16 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://cdn.omiseweb.com/hero04.mp4"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-slate-50 z-[-1]"></div>

        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        <Container className="relative z-20 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Trusted by 200+ businesses across Japan
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white shadow-text">
              {t.heroTitle}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t.ctaPrimary}
              </a>

              <a
                href="#pricing"
                className="px-8 py-4 border border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors duration-200"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <FadeInSection id="services" className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">
              {t.servicesHeading}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.servicesSubheading}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            <div className="p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {t.servicesItems.creation.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {t.servicesItems.creation.list.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-slate-900 text-white rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {t.servicesItems.management.title}
              </h3>
              <p className="text-white/80 text-sm mb-4">Most Popular</p>
              <ul className="space-y-2 text-white/90">
                {t.servicesItems.management.list.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {t.servicesItems.marketing.title}
              </h3>
              <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full mb-4">
                {t.servicesItems.marketing.comingSoon}
              </div>
              <p className="text-slate-600 text-sm">
                {t.servicesItems.marketing.description}
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {t.servicesItems.recruitment.title}
              </h3>
              <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full mb-4">
                {t.servicesItems.recruitment.comingSoon}
              </div>
              <p className="text-slate-600 text-sm">
                {t.servicesItems.recruitment.description}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <img
              src="https://placehold.co/1200x600/e2e8f0/475569?text=Responsive+Design+Showcase"
              alt="Website design showcase"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </Container>
      </FadeInSection>

      {/* Pricing Section */}
      <FadeInSection id="pricing" className="py-24 bg-slate-50">
        {/* ... content for pricing ... */}
      </FadeInSection>

      {/* How it Works Section */}
      <FadeInSection id="how" className="py-24 bg-white">
        {/* ... content for how it works ... */}
      </FadeInSection>

      {/* Works/Portfolio Section */}
      <FadeInSection id="works" className="py-24 bg-slate-900 text-white">
        {/* ... content for works/portfolio ... */}
      </FadeInSection>
      
      {/* FAQ Section */}
      <FadeInSection id="faq" className="py-24 bg-white">
        {/* ... content for faq ... */}
      </FadeInSection>

      {/* Contact Section */}
      <FadeInSection id="contact" className="py-24 bg-slate-50">
        {/* ... content for contact ... */}
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
          <Container className="text-center text-slate-400">
              <p>&copy; {new Date().getFullYear()} OmiseWeb. All rights reserved.</p>
          </Container>
      </footer>

      <ScrollTopButton show={showScrollTop} onClick={scrollToTop} />
    </div>
  );
}
