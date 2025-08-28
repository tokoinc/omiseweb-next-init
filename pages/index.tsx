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
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    </button>
  );
};

/**
 * Enhanced placeholder with gradient backgrounds
 */
const Placeholder = ({ height = "h-40", children = "Image Placeholder" }: { height?: string; children?: React.ReactNode }) => (
  <div
    className={`${height} w-full rounded-3xl bg-gradient-to-br from-slate-100 via-slate-50 to-white shadow-inner border border-slate-200/50 flex items-center justify-center text-slate-400 font-medium relative overflow-hidden group`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    <div className="relative z-10">{children}</div>
  </div>
);

/**
 * Floating card component for services
 */
const ServiceCard: React.FC<{
  title: string;
  children: React.ReactNode;
  delay?: number;
  highlight?: boolean;
}> = ({ title, children, delay = 0, highlight = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl border border-slate-200/50 bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${highlight ? "ring-2 ring-red-500/20 bg-gradient-to-br from-red-50/50 to-white" : ""} hover:-translate-y-2`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <h3 className="font-bold text-xl text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">{title}</h3>
        {children}
      </div>
    </div>
  );
};

/**
 * Animated background elements
 */
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-red-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
  </div>
);

// Supported languages
type Lang = "en" | "th" | "zh";

// Enhanced translations with better copy
const messages: Record<Lang, any> = {
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
          "SEO optimization"
        ],
      },
      management: {
        title: "Ongoing Management",
        list: ["Content updates & maintenance", "Social media integration", "Security monitoring", "Performance optimization"],
      },
      marketing: {
        title: "Digital Marketing",
        comingSoon: "Coming Q2 2025",
        description: "SEO, social media, and local advertising"
      },
      recruitment: {
        title: "Staff Recruitment",
        comingSoon: "Coming Q3 2025", 
        description: "Bilingual staff hiring support"
      },
    },
    pricingHeading: "Simple, Transparent Pricing",
    pricingPlans: [
      { name: "Ume", price: "¥50,000", monthly: "¥0/month", description: "Perfect for small cafes", features: ["5-page website", "Basic SEO", "1 language"] },
      { name: "Take", price: "¥100,000", monthly: "¥10,000/month", description: "Most popular choice", features: ["10-page website", "Booking system", "3 languages", "Monthly updates"], highlight: true },
      { name: "Matsu", price: "¥200,000", monthly: "¥30,000/month", description: "Premium solution", features: ["Unlimited pages", "Advanced features", "Priority support", "Weekly updates"] },
    ],
    howHeading: "Our Proven Process",
    howSteps: [
      { title: "Discovery Call", description: "Free consultation to understand your vision", icon: "💬" },
      { title: "Design & Plan", description: "Custom design mockups and project timeline", icon: "🎨" },
      { title: "Development", description: "Professional development in 1-2 weeks", icon: "⚡" },
      { title: "Launch & Support", description: "Go live with ongoing maintenance", icon: "🚀" },
    ],
    worksHeading: "Success Stories",
    worksTestimonials: [
      { text: "OmiseWeb transformed our business. International customers now find us easily and bookings increased 300%.", author: "Tanaka-san", role: "Restaurant Owner, Shibuya" },
      { text: "The multilingual website helped us serve Thai and Chinese customers better. Professional service from start to finish.", author: "Yuki", role: "Salon Owner, Harajuku" },
    ],
    faqHeading: "Frequently Asked Questions",
    faqs: [
      {
        question: "Do you provide English support?",
        answer: "Yes, our team provides full English support throughout the project and ongoing maintenance.",
      },
      {
        question: "How long does it take to build a website?",
        answer: "Most websites are completed within 1-2 weeks, depending on complexity and content preparation.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, bank transfers, and PayPal for international clients.",
      },
      {
        question: "Can you help with Japanese regulations?",
        answer: "Yes, we ensure your website complies with Japanese web standards and accessibility requirements.",
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
    heroSubtitle: "สร้างและจัดการเว็บไซต์มืออาชีพสำหรับธุรกิจนานาชาติ เสร็จภายใน 2 สัปดาห์",
    ctaPrimary: "เริ่มโปรเจค",
    ctaSecondary: "ดูราคา",
    servicesHeading: "โซลูชันเว็บครบวงจร",
    servicesSubheading: "ทุกสิ่งที่คุณต้องการเพื่อสร้างตัวตนทางดิจิทัลในตลาดญี่ปุ่น",
    servicesItems: {
      creation: {
        title: "สร้างเว็บไซต์",
        list: [
          "ออกแบบตอบสนองแบบกำหนดเอง",
          "รองรับหลายภาษา (EN/TH/CH/JP)",
          "ระบบจองออนไลน์",
          "การปรับ SEO"
        ],
      },
      management: {
        title: "การจัดการอย่างต่อเนื่อง",
        list: ["อัปเดตเนื้อหาและบำรุงรักษา", "การรวมโซเชียลมีเดีย", "ตรวจสอบความปลอดภัย", "เพิ่มประสิทธิภาพ"],
      },
      marketing: {
        title: "การตลาดดิจิทัล",
        comingSoon: "เร็ว ๆ นี้ Q2 2025",
        description: "SEO, โซเชียลมีเดีย และโฆษณาท้องถิ่น"
      },
      recruitment: {
        title: "การสรรหาพนักงาน",
        comingSoon: "เร็ว ๆ นี้ Q3 2025",
        description: "การสนับสนุนการจ้างงานแบบสองภาษา"
      },
    },
    pricingHeading: "ราคาง่าย โปร่งใส",
    pricingPlans: [
      { name: "Ume", price: "¥50,000", monthly: "¥0/เดือน", description: "เหมาะสำหรับร้านเล็ก", features: ["เว็บไซต์ 5 หน้า", "SEO พื้นฐาน", "1 ภาษา"] },
      { name: "Take", price: "¥100,000", monthly: "¥10,000/เดือน", description: "ตัวเลือกยอดนิยม", features: ["เว็บไซต์ 10 หน้า", "ระบบจอง", "3 ภาษา", "อัปเดตรายเดือน"], highlight: true },
      { name: "Matsu", price: "¥200,000", monthly: "¥30,000/เดือน", description: "โซลูชันพรีเมียม", features: ["หน้าไม่จำกัด", "คุณสมบัติขั้นสูง", "การสนับสนุนเป็นพิเศษ", "อัปเดตรายสัปดาห์"] },
    ],
    howHeading: "กระบวนการที่พิสูจน์แล้ว",
    howSteps: [
      { title: "โทรสำรวจ", description: "ปรึกษาฟรีเพื่อเข้าใจวิสัยทัศน์ของคุณ", icon: "💬" },
      { title: "ออกแบบและวางแผน", description: "แม็อคอัปการออกแบบที่กำหนดเองและไทม์ไลน์โปรเจค", icon: "🎨" },
      { title: "พัฒนา", description: "การพัฒนาอย่างมืออาชีพใน 1-2 สัปดาห์", icon: "⚡" },
      { title: "เปิดตัวและสนับสนุน", description: "ไปสดพร้อมการบำรุงรักษาอย่างต่อเนื่อง", icon: "🚀" },
    ],
    worksHeading: "เรื่องราวความสำเร็จ",
    worksTestimonials: [
      { text: "OmiseWeb เปลี่ยนธุรกิจของเรา ลูกค้าต่างชาติค้นหาเราได้ง่ายและการจองเพิ่มขึ้น 300%", author: "ทานากะ-ซัง", role: "เจ้าของร้านอาหาร, ชิบุยะ" },
      { text: "เว็บไซต์หลายภาษาช่วยให้เราให้บริการลูกค้าไทยและจีนได้ดีขึ้น บริการมืออาชีพตั้งแต่เริ่มต้นจนจบ", author: "ยูกิ", role: "เจ้าของซาลอน, ฮาราจูกุ" },
    ],
    faqHeading: "คำถามที่พบบ่อย",
    faqs: [
      {
        question: "คุณให้การสนับสนุนภาษาอังกฤษหรือไม่?",
        answer: "ใช่ ทีมของเราให้การสนับสนุนภาษาอังกฤษเต็มรูปแบบตลอดโปรเจคและการบำรุงรักษาอย่างต่อเนื่อง",
      },
      {
        question: "ใช้เวลานานแค่ไหนในการสร้างเว็บไซต์?",
        answer: "เว็บไซต์ส่วนใหญ่เสร็จสิ้นภายใน 1-2 สัปดาห์ ขึ้นอยู่กับความซับซ้อนและการเตรียมเนื้อหา",
      },
      {
        question: "คุณรับวิธีการชำระเงินอะไรบ้าง?",
        answer: "เรารับบัตรเครดิต การโอนเงินผ่านธนาคาร และ PayPal สำหรับลูกค้าต่างประเทศ",
      },
      {
        question: "คุณสามารถช่วยเกี่ยวกับกฎระเบียบญี่ปุ่นได้หรือไม่?",
        answer: "ใช่ เราทำให้มั่นใจว่าเว็บไซต์ของคุณสอดคล้องกับมาตรฐานเว็บและความต้องการการเข้าถึงของญี่ปุ่น",
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
          "SEO优化"
        ],
      },
      management: {
        title: "持续管理",
        list: ["内容更新和维护", "社交媒体整合", "安全监控", "性能优化"],
      },
      marketing: {
        title: "数字营销",
        comingSoon: "2025年第二季度推出",
        description: "SEO、社交媒体和本地广告"
      },
      recruitment: {
        title: "员工招聘",
        comingSoon: "2025年第三季度推出",
        description: "双语员工招聘支持"
      },
    },
    pricingHeading: "简单透明的定价",
    pricingPlans: [
      { name: "Ume", price: "¥50,000", monthly: "¥0/月", description: "适合小型咖啡厅", features: ["5页网站", "基础SEO", "1种语言"] },
      { name: "Take", price: "¥100,000", monthly: "¥10,000/月", description: "最受欢迎选择", features: ["10页网站", "预订系统", "3种语言", "月度更新"], highlight: true },
      { name: "Matsu", price: "¥200,000", monthly: "¥30,000/月", description: "高级解决方案", features: ["无限页面", "高级功能", "优先支持", "每周更新"] },
    ],
    howHeading: "我们经过验证的流程",
    howSteps: [
      { title: "发现电话", description: "免费咨询了解您的愿景", icon: "💬" },
      { title: "设计与规划", description: "定制设计模型和项目时间表", icon: "🎨" },
      { title: "开发", description: "1-2周专业开发", icon: "⚡" },
      { title: "上线与支持", description: "上线并持续维护", icon: "🚀" },
    ],
    worksHeading: "成功案例",
    worksTestimonials: [
      { text: "OmiseWeb改变了我们的业务。国际客户现在很容易找到我们，预订量增加了300%。", author: "田中先生", role: "餐厅老板，涩谷" },
      { text: "多语言网站帮助我们更好地为泰语和中文客户服务。从开始到结束的专业服务。", author: "雪", role: "沙龙老板，原宿" },
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
 * The main Home component with professional design upgrades.
 */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = messages[lang];

  // Enhanced language options
  const languageOptions: { code: Lang; label: string; flag: string }[] = [
    { code: "en", label: "EN", flag: "🇺🇸" },
    { code: "th", label: "TH", flag: "🇹🇭" },
    { code: "zh", label: "CH", flag: "🇨🇳" },
  ];

  // Enhanced scroll monitoring for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500);

      // Track active section
      const sections = ["home", "services", "pricing", "works", "how", "faq", "contact"];
      const currentSection = sections.find(section => {
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

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Enhanced Header with glassmorphism */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <Container className="flex h-20 items-center justify-between">
          {/* Logo with enhanced styling */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-black text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              O
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              OmiseWeb
            </span>
          </a>

          {/* Enhanced desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            {Object.entries(t.nav).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === key
                    ? "text-red-600 bg-red-50"
                    : "text-slate-700 hover:text-red-600 hover:bg-slate-50"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {activeSection === key && (
                  <div className="absolute inset-0 rounded-full bg-red-100 -z-10"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Enhanced language selector and CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-full">
              {languageOptions.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`text-sm px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    lang === code
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span>{flag}</span>
                  {label}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              className="relative px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">{t.ctaPrimary}</span>
            </a>
          </div>

          {/* Enhanced mobile menu button */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
              <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </Container>

        {/* Enhanced mobile menu */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/50 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="px-4 py-6 space-y-4">
            {Object.entries(t.nav).map(([key, label]) => (
              <a
                key={key}
                href={`#${key}`}
                className="block py-3 px-4 rounded-xl text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            
            {/* Mobile language selector */}
            <div className="flex gap-2 pt-4 border-t border-slate-200">
              {languageOptions.map(({ code, label, flag }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    lang === code
                      ? "bg-red-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <span>{flag}</span>
                  {label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="block mt-6 py-4 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white text-center font-semibold rounded-xl"
              onClick={() => setMenuOpen(false)}
            >
              {t.ctaPrimary}
            </a>
          </nav>
        </div>
      </header>

      {/* Enhanced Hero Section with animated background */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <FloatingElements />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <Container className="relative z-10 py-32 sm:py-40">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="text-white">
              <div className="mb-6 inline-flex items-center px-4 py-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full text-sm font-medium text-red-300">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                Now serving 200+ businesses in Japan
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-8">
                <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                {t.heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    {t.ctaPrimary}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all duration-300 text-center"
                >
                  {t.ctaSecondary}
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-sm border border-white/10 shadow-2xl">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center text-white/60 font-medium text-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    Website Preview
                  </div>
                </div>
                
                {/* Floating elements around the mockup */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Services Section */}
      <FadeInSection id="services" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-transparent to-red-50/30"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {t.servicesHeading}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.servicesSubheading}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 mb-16">
            <ServiceCard title={t.servicesItems.creation.title} delay={0}>
              <div className="space-y-3">
                {t.servicesItems.creation.list.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ServiceCard>

            <ServiceCard title={t.servicesItems.management.title} delay={200} highlight>
              <div className="space-y-3">
                {t.servicesItems.management.list.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ServiceCard>

            <ServiceCard title={t.servicesItems.marketing.title} delay={400}>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                  {t.servicesItems.marketing.comingSoon}
                </p>
                <p className="text-slate-600">{t.servicesItems.marketing.description}</p>
              </div>
            </ServiceCard>

            <ServiceCard title={t.servicesItems.recruitment.title} delay={600}>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block">
                  {t.servicesItems.recruitment.comingSoon}
                </p>
                <p className="text-slate-600">{t.servicesItems.recruitment.description}</p>
              </div>
            </ServiceCard>
          </div>

          <div className="text-center">
            <Placeholder height="h-80">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-slate-700">Service Showcase</p>
                <p className="text-slate-500 mt-2">Interactive demo coming soon</p>
              </div>
            </Placeholder>
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced Pricing Section */}
      <FadeInSection id="pricing" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 via-transparent to-slate-100/30"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {t.pricingHeading}
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {t.pricingPlans.map((plan: any, idx: number) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 ${
                  plan.highlight
                    ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl scale-105 border-2 border-red-400"
                    : "bg-white border border-slate-200 hover:shadow-xl"
                } transition-all duration-500 hover:-translate-y-2`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlight ? 'text-red-100' : 'text-slate-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className={`text-4xl font-black ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlight ? 'text-red-100' : 'text-slate-600'}`}> setup</span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? 'text-red-100' : 'text-slate-600'}`}>
                    {plan.monthly}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, featureIdx: number) => (
                    <li key={featureIdx} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlight ? 'bg-white/20' : 'bg-red-100'
                      }`}>
                        <svg className={`w-3 h-3 ${plan.highlight ? 'text-white' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={plan.highlight ? 'text-red-50' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block w-full py-3 px-6 rounded-2xl text-center font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-red-600 hover:bg-red-50 shadow-lg"
                      : "bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced How It Works Section */}
      <FadeInSection id="how" className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {t.howHeading}
            </h2>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.howSteps.map((step: any, idx: number) => (
              <div
                key={idx}
                className="group relative text-center p-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 hover:shadow-xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Connection line for desktop */}
                {idx < t.howSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-200 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced Works & Testimonials Section */}
      <FadeInSection id="works" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-50/20 via-transparent to-red-50/20"></div>
        
        <Container className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {t.worksHeading}
            </h2>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2 mb-16">
            {t.worksTestimonials.map((testimonial: any, idx: number) => (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                  "
                </div>
                
                <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.text}
                </blockquote>
                
                <footer className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </footer>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Placeholder height="h-64">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-slate-700">Client Portfolio</p>
                <p className="text-slate-500 mt-2">Featured work examples</p>
              </div>
            </Placeholder>
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced FAQ Section */}
      <FadeInSection id="faq" className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              {t.faqHeading}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {t.faqs.map((faq: any, idx: number) => (
              <div
                key={idx}
                className="group rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced Contact Section */}
      <FadeInSection id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white relative overflow-hidden">
        <FloatingElements />
        
        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.contactHeading}
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t.contactSubheading}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email Response</p>
                    <p className="text-slate-400">Within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/20 backdrop-blur-sm border border-red-500/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Project Timeline</p>
                    <p className="text-slate-400">1-2 weeks delivery</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder={t.contactPlaceholders.name}
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                    />
                    <input
                      type="email"
                      placeholder={t.contactPlaceholders.email}
                      className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder={t.contactPlaceholders.business}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300"
                  />
                  
                  <textarea
                    rows={5}
                    placeholder={t.contactPlaceholders.message}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-300 resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="group w-full py-4 px-8 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {t.contactButton}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </FadeInSection>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800">
        <Container className="py-16">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-black text-lg">
                  O
                </div>
                <span className="text-2xl font-bold">OmiseWeb</span>
              </div>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-md">
                Empowering international businesses in Japan with professional web solutions since 2023.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-slate-800 hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <nav className="space-y-3">
                {Object.entries(t.nav).map(([key, label]) => (
                  <a
                    key={key}
                    href={`#${key}`}
                    className="block text-slate-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>hello@omiseweb.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tokyo, Japan</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon-Fri: 9AM-6PM JST</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500">
              © {new Date().getFullYear()} OmiseWeb LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-red-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </Container>
      </footer>
      
      {/* Scroll-to-top floating button */}
      <ScrollTopButton show={showScrollTop} onClick={scrollToTop} />
    </div>
  );
}
