"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { ReactNode } from "react"

/**
 * A responsive container component that centers content and limits its width.
 */
const Container = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>

/**
 * FadeInSection wraps its children in a section that fades in and slides up when
 * it enters the viewport with enhanced animation effects.
 */
const FadeInSection: React.FC<{
  id?: string
  className?: string
  children: React.ReactNode
}> = ({ id, className = "", children }) => {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
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
  )
}

/**
 * ScrollTopButton with enhanced design
 */
const ScrollTopButton: React.FC<{
  show: boolean
  onClick: () => void
}> = ({ show, onClick }) => {
  if (!show) return null
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
  )
}

// Supported languages
type Lang = "en" | "th" | "zh"

// Enhanced translations with better copy
const messages: Record<
  Lang,
  {
    nav: Record<string, string>
    heroTitle: string
    heroSubtitle: string
    ctaPrimary: string
    ctaSecondary: string
    statsTitle: string
    stats: Array<{ value: string; label: string }>
    servicesHeading: string
    servicesSubheading: string
    servicesItems: {
      creation: { title: string; list: string[] }
      management: { title: string; list: string[] }
      marketing: { title: string; comingSoon: string; description: string }
      recruitment: { title: string; comingSoon: string; description: string }
    }
    pricingHeading: string
    pricingPlans: Array<{
      name: string
      price: string
      monthly: string
      description: string
      features: string[]
      highlight?: boolean
    }>
    howHeading: string
    howSteps: Array<{ title: string; description: string; icon: string }>
    teamHeading: string
    teamSubheading: string
    teamMembers: Array<{ name: string; role: string; bio: string }>
    caseStudiesHeading: string
    caseStudiesSubheading: string
    caseStudies: Array<{
      title: string
      client: string
      results: string
      description: string
    }>
    clientsHeading: string
    worksHeading: string
    worksTestimonials: Array<{ text: string; author: string; role: string; company: string }>
    faqHeading: string
    faqs: Array<{ question: string; answer: string }>
    contactHeading: string
    contactSubheading: string
    contactPlaceholders: {
      name: string
      email: string
      business: string
      message: string
    }
    contactButton: string
    footer: {
      tagline: string
      quickLinks: string
      services: string
      resources: string
      company: string
      legal: string
      contact: string
      followUs: string
      newsletter: string
      newsletterPlaceholder: string
      newsletterButton: string
      rights: string
      certifications: string
      description: string
      product: string
    }
  }
> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      portfolio: "Portfolio",
      team: "Team",
      faq: "FAQ",
      contact: "Contact",
    },
    heroTitle: "Launch Your Restaurant or Salon Website in Japan",
    heroSubtitle:
      "Professional website creation and management for international businesses. From concept to launch in just 2 weeks.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work",
    statsTitle: "Trusted by Leading Businesses Across Japan",
    stats: [
      { value: "500+", label: "Websites Launched" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "2 weeks", label: "Average Launch Time" },
      { value: "24/7", label: "Support Available" },
    ],
    servicesHeading: "Complete Web Solutions",
    servicesSubheading: "Everything you need to establish a strong digital presence in Japan's competitive market.",
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
        features: ["5-page website", "Basic SEO", "1 language", "Mobile responsive", "SSL certificate"],
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
          "Priority support",
          "Analytics dashboard",
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
          "Custom integrations",
          "Dedicated account manager",
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
    teamHeading: "Meet Our Expert Team",
    teamSubheading: "Dedicated professionals with years of experience in Japanese market",
    teamMembers: [
      { name: "Hiroshi Tanaka", role: "CEO & Founder", bio: "15+ years in web development" },
      { name: "Sarah Chen", role: "Lead Designer", bio: "Award-winning UI/UX specialist" },
      { name: "Alex Thompson", role: "Technical Director", bio: "Full-stack development expert" },
      { name: "Yuki Yamamoto", role: "Project Manager", bio: "Bilingual project coordination" },
    ],
    caseStudiesHeading: "Success Stories",
    caseStudiesSubheading: "Real results from real businesses",
    caseStudies: [
      {
        title: "Sakura Restaurant",
        client: "Traditional Japanese Cuisine",
        results: "+350% online reservations",
        description: "Complete digital transformation with multilingual booking system",
      },
      {
        title: "Beauty Lounge Tokyo",
        client: "Premium Salon Chain",
        results: "5x social media engagement",
        description: "Integrated booking and social media management platform",
      },
      {
        title: "Fusion Bistro",
        client: "International Restaurant",
        results: "280% ROI in 6 months",
        description: "SEO-optimized website with online ordering system",
      },
    ],
    clientsHeading: "Trusted by Industry Leaders",
    worksHeading: "Client Testimonials",
    worksTestimonials: [
      {
        text: "OmiseWeb transformed our business. International customers now find us easily and bookings increased 300%.",
        author: "Tanaka-san",
        role: "Owner",
        company: "Sakura Sushi Restaurant",
      },
      {
        text: "The multilingual website helped us serve Thai and Chinese customers better. Professional service from start to finish.",
        author: "Yuki Matsumoto",
        role: "Manager",
        company: "Beauty Salon Harajuku",
      },
      {
        text: "Their team understood our needs perfectly. The website looks amazing and our online presence has grown tremendously.",
        author: "Michael Lee",
        role: "CEO",
        company: "Fusion Kitchen Tokyo",
      },
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
    footer: {
      tagline: "Building Digital Success in Japan Since 2015",
      quickLinks: "Quick Links",
      services: "Services",
      resources: "Resources",
      company: "Company",
      legal: "Legal",
      contact: "Contact Us",
      followUs: "Follow Us",
      newsletter: "Stay Updated",
      newsletterPlaceholder: "Enter your email",
      newsletterButton: "Subscribe",
      rights: "All rights reserved.",
      certifications: "Certifications & Partners",
      description:
        "Your partner for digital success in Japan. We specialize in creating stunning websites and providing comprehensive online solutions for restaurants and salons.",
      product: "Product",
    },
  },
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการ",
      pricing: "ราคา",
      portfolio: "ผลงาน",
      team: "ทีม",
      faq: "คำถามที่พบบ่อย",
      contact: "ติดต่อ",
    },
    heroTitle: "เว็บไซต์ร้านอาหารและซาลอนในญี่ปุ่น",
    heroSubtitle: "สร้างและจัดการเว็บไซต์มืออาชีพสำหรับธุรกิจนานาชาติ เสร็จภายใน 2 สัปดาห์",
    ctaPrimary: "เริ่มโปรเจค",
    ctaSecondary: "ดูผลงาน",
    statsTitle: "ได้รับความไว้วางใจจากธุรกิจชั้นนำทั่วญี่ปุ่น",
    stats: [
      { value: "500+", label: "เว็บไซต์ที่เปิดตัว" },
      { value: "98%", label: "ความพึงพอใจของลูกค้า" },
      { value: "2 สัปดาห์", label: "ระยะเวลาเปิดตัวเฉลี่ย" },
      { value: "24/7", label: "การสนับสนุน" },
    ],
    servicesHeading: "โซลูชันเว็บครบวงจร",
    servicesSubheading: "ทุกสิ่งที่คุณต้องการเพื่อสร้างตัวตนทางดิจิทัลในตลาดญี่ปุ่น",
    servicesItems: {
      creation: {
        title: "สร้างเว็บไซต์",
        list: ["ออกแบบตอบสนองแบบกำหนดเอง", "รองรับหลายภาษา (EN/TH/CH/JP)", "ระบบจองออนไลน์", "การปรับ SEO"],
      },
      management: {
        title: "การจัดการอย่างต่อเนื่อง",
        list: ["อัปเดตเนื้อหาและบำรุงรักษา", "การรวมโซเชียลมีเดีย", "ตรวจสอบความปลอดภัย", "เพิ่มประสิทธิภาพ"],
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
        features: ["เว็บไซต์ 5 หน้า", "SEO พื้นฐาน", "1 ภาษา", "รองรับมือถือ", "ใบรับรอง SSL"],
      },
      {
        name: "Take",
        price: "¥100,000",
        monthly: "¥10,000/เดือน",
        description: "ตัวเลือกยอดนิยม",
        features: ["เว็บไซต์ 10 หน้า", "ระบบจอง", "3 ภาษา", "อัปเดตรายเดือน", "การสนับสนุนพิเศษ", "แดชบอร์ดวิเคราะห์"],
        highlight: true,
      },
      {
        name: "Matsu",
        price: "¥200,000",
        monthly: "¥30,000/เดือน",
        description: "โซลูชันพรีเมียม",
        features: ["หน้าไม่จำกัด", "คุณสมบัติขั้นสูง", "การสนับสนุนเป็นพิเศษ", "อัปเดตรายสัปดาห์", "การรวมที่กำหนดเอง", "ผู้จัดการบัญชีเฉพาะ"],
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
    teamHeading: "พบทีมผู้เชี่ยวชาญของเรา",
    teamSubheading: "ผู้เชี่ยวชาญที่ทุ่มเทพร้อมประสบการณ์หลายปีในตลาดญี่ปุ่น",
    teamMembers: [
      { name: "ฮิโรชิ ทานากะ", role: "CEO & ผู้ก่อตั้ง", bio: "15+ ปีในการพัฒนาเว็บ" },
      { name: "ซาราห์ เฉิน", role: "หัวหน้านักออกแบบ", bio: "ผู้เชี่ยวชาญ UI/UX ที่ได้รับรางวัล" },
      { name: "อเล็กซ์ ธอมป์สัน", role: "ผู้อำนวยการฝ่ายเทคนิค", bio: "ผู้เชี่ยวชาญการพัฒนาฟูลสแต็ก" },
      { name: "ยูกิ ยามาโมโตะ", role: "ผู้จัดการโครงการ", bio: "การประสานงานโครงการสองภาษา" },
    ],
    caseStudiesHeading: "เรื่องราวความสำเร็จ",
    caseStudiesSubheading: "ผลลัพธ์จริงจากธุรกิจจริง",
    caseStudies: [
      {
        title: "ร้านอาหารซากุระ",
        client: "อาหารญี่ปุ่นดั้งเดิม",
        results: "+350% การจองออนไลน์",
        description: "การเปลี่ยนแปลงดิจิทัลที่สมบูรณ์พร้อมระบบจองหลายภาษา",
      },
      {
        title: "บิวตี้เลาจน์โตเกียว",
        client: "เครือซาลอนพรีเมียม",
        results: "5x การมีส่วนร่วมในโซเชียลมีเดีย",
        description: "แพลตฟอร์มการจองและการจัดการโซเชียลมีเดียแบบรวม",
      },
      {
        title: "ฟิวชันบิสโตร",
        client: "ร้านอาหารนานาชาติ",
        results: "280% ROI ใน 6 เดือน",
        description: "เว็บไซต์ที่ปรับ SEO พร้อมระบบสั่งอาหารออนไลน์",
      },
    ],
    clientsHeading: "ได้รับความไว้วางใจจากผู้นำในอุตสาหกรรม",
    worksHeading: "คำรับรองจากลูกค้า",
    worksTestimonials: [
      {
        text: "OmiseWeb เปลี่ยนธุรกิจของเรา ลูกค้าต่างชาติค้นหาเราได้ง่ายและการจองเพิ่มขึ้น 300%",
        author: "ทานากะ-ซัง",
        role: "เจ้าของ",
        company: "ร้านอาหารซากุระซูชิ",
      },
      {
        text: "เว็บไซต์หลายภาษาช่วยให้เราให้บริการลูกค้าไทยและจีนได้ดีขึ้น บริการมืออาชีพตั้งแต่เริ่มต้นจนจบ",
        author: "ยูกิ มัตสึโมโตะ",
        role: "ผู้จัดการ",
        company: "ซาลอนความงามฮาราจูกุ",
      },
      {
        text: "ทีมของพวกเขาเข้าใจความต้องการของเราอย่างสมบูรณ์แบบ เว็บไซต์ดูน่าทึ่งและการปรากฏตัวออนไลน์ของเราเติบโตอย่างมาก",
        author: "ไมเคิล ลี",
        role: "CEO",
        company: "ฟิวชันคิทเช่นโตเกียว",
      },
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
    footer: {
      tagline: "สร้างความสำเร็จดิจิทัลในญี่ปุ่นตั้งแต่ปี 2015",
      quickLinks: "ลิงก์ด่วน",
      services: "บริการ",
      resources: "ทรัพยากร",
      company: "บริษัท",
      legal: "กฎหมาย",
      contact: "ติดต่อเรา",
      followUs: "ติดตามเรา",
      newsletter: "อัปเดตข่าวสาร",
      newsletterPlaceholder: "กรอกอีเมลของคุณ",
      newsletterButton: "สมัครสมาชิก",
      rights: "สงวนลิขสิทธิ์",
      certifications: "ใบรับรองและพันธมิตร",
      description:
        "Your partner for digital success in Japan. We specialize in creating stunning websites and providing comprehensive online solutions for restaurants and salons.",
      product: "Product",
    },
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      pricing: "价格",
      portfolio: "作品集",
      team: "团队",
      faq: "常见问题",
      contact: "联系我们",
    },
    heroTitle: "在日本创建餐厅和美发沙龙网站",
    heroSubtitle: "为国际企业提供专业的网站创建和管理服务。从概念到上线仅需2周。",
    ctaPrimary: "开始项目",
    ctaSecondary: "查看作品",
    statsTitle: "受到日本各地领先企业的信任",
    stats: [
      { value: "500+", label: "已发布网站" },
      { value: "98%", label: "客户满意度" },
      { value: "2周", label: "平均发布时间" },
      { value: "24/7", label: "支持服务" },
    ],
    servicesHeading: "完整的网络解决方案",
    servicesSubheading: "在日本竞争激烈的市场中建立强大数字化形象所需的一切。",
    servicesItems: {
      creation: {
        title: "网站创建",
        list: ["定制响应式设计", "多语言支持 (EN/TH/CH/JP)", "在线预订系统", "SEO优化"],
      },
      management: {
        title: "持续管理",
        list: ["内容更新和维护", "社交媒体整合", "安全监控", "性能优化"],
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
        features: ["5页网站", "基础SEO", "1种语言", "移动响应式", "SSL证书"],
      },
      {
        name: "Take",
        price: "¥100,000",
        monthly: "¥10,000/月",
        description: "最受欢迎选择",
        features: ["10页网站", "预订系统", "3种语言", "月度更新", "优先支持", "分析仪表板"],
        highlight: true,
      },
      {
        name: "Matsu",
        price: "¥200,000",
        monthly: "¥30,000/月",
        description: "高级解决方案",
        features: ["无限页面", "高级功能", "优先支持", "每周更新", "自定义集成", "专属客户经理"],
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
    teamHeading: "认识我们的专家团队",
    teamSubheading: "在日本市场拥有多年经验的专业人士",
    teamMembers: [
      { name: "田中宏", role: "CEO & 创始人", bio: "15年以上网站开发经验" },
      { name: "陈莎拉", role: "首席设计师", bio: "获奖UI/UX专家" },
      { name: "亚历克斯·汤普森", role: "技术总监", bio: "全栈开发专家" },
      { name: "山本雪", role: "项目经理", bio: "双语项目协调" },
    ],
    caseStudiesHeading: "成功案例",
    caseStudiesSubheading: "真实企业的真实成果",
    caseStudies: [
      {
        title: "樱花餐厅",
        client: "传统日本料理",
        results: "+350% 在线预订",
        description: "配备多语言预订系统的完整数字化转型",
      },
      {
        title: "东京美容休息室",
        client: "高级沙龙连锁",
        results: "5倍社交媒体参与度",
        description: "综合预订和社交媒体管理平台",
      },
      {
        title: "融合小酒馆",
        client: "国际餐厅",
        results: "6个月内280%投资回报率",
        description: "带有在线订餐系统的SEO优化网站",
      },
    ],
    clientsHeading: "受到行业领导者的信任",
    worksHeading: "客户评价",
    worksTestimonials: [
      {
        text: "OmiseWeb改变了我们的业务。国际客户现在很容易找到我们，预订量增加了300%。",
        author: "田中先生",
        role: "老板",
        company: "樱花寿司餐厅",
      },
      {
        text: "多语言网站帮助我们更好地为泰语和中文客户服务。从开始到结束的专业服务。",
        author: "松本雪",
        role: "经理",
        company: "原宿美容沙龙",
      },
      {
        text: "他们的团队完美地理解了我们的需求。网站看起来很棒，我们的在线存在感大大增长。",
        author: "迈克尔·李",
        role: "CEO",
        company: "东京融合厨房",
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
    footer: {
      tagline: "自2015年起在日本建立数字成功",
      quickLinks: "快速链接",
      services: "服务",
      resources: "资源",
      company: "公司",
      legal: "法律",
      contact: "联系我们",
      followUs: "关注我们",
      newsletter: "保持更新",
      newsletterPlaceholder: "输入您的电子邮件",
      newsletterButton: "订阅",
      rights: "版权所有",
      certifications: "认证与合作伙伴",
      description:
        "Your partner for digital success in Japan. We specialize in creating stunning websites and providing comprehensive online solutions for restaurants and salons.",
      product: "Product",
    },
  },
}

/**
 * The main Home component with professional design upgrades including video and images.
 */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en")
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isLangPopupOpen, setLangPopupOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const t = messages[lang]

  const languageOptions: { code: Lang; label: string; fullName: string }[] = [
    { code: "en", label: "EN", fullName: "English" },
    { code: "th", label: "TH", fullName: "ไทย (Thai)" },
    { code: "zh", label: "CH", fullName: "中文 (Chinese)" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowScrollTop(scrollY > 500)

      const sections = ["home", "services", "pricing", "portfolio", "team", "faq", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const portfolioImages = [
    { src: "https://placehold.co/600x400/1e293b/ffffff?text=Restaurant+Site", category: "Restaurant" },
    { src: "https://placehold.co/600x400/0f172a/ffffff?text=Salon+Booking", category: "Salon" },
    { src: "https://placehold.co/600x400/1e293b/ffffff?text=Cafe+Menu", category: "Cafe" },
    { src: "https://placehold.co/600x400/0f172a/ffffff?text=Boutique+Shop", category: "Retail" },
    { src: "https://placehold.co/600x400/1e293b/ffffff?text=Spa+Website", category: "Wellness" },
    { src: "https://placehold.co/600x400/0f172a/ffffff?text=Bar+Lounge", category: "Entertainment" },
  ]

  const clientLogos = [
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+1",
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+2",
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+3",
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+4",
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+5",
    "https://placehold.co/200x80/ffffff/1e293b?text=Client+6",
  ]

  const teamImages = [
    "https://placehold.co/400x400/1e293b/ffffff?text=CEO",
    "https://placehold.co/400x400/0f172a/ffffff?text=Designer",
    "https://placehold.co/400x400/1e293b/ffffff?text=Developer",
    "https://placehold.co/400x400/0f172a/ffffff?text=PM",
  ]

  const certifications = [
    "https://placehold.co/150x60/ffffff/1e293b?text=ISO+9001",
    "https://placehold.co/150x60/ffffff/1e293b?text=Google+Partner",
    "https://placehold.co/150x60/ffffff/1e293b?text=AWS+Certified",
    "https://placehold.co/150x60/ffffff/1e293b?text=SSL+Secured",
  ]

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-scale {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
          50% { box-shadow: 0 0 40px rgba(239, 68, 68, 0.8); }
        }
        .animate-fade-in-scale { animation: fade-in-scale 0.2s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .faq-answer {
            transition: max-height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0), opacity 0.3s ease-in-out;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
        }
        .faq-answer-open {
            max-height: 300px;
            opacity: 1;
        }
        .faq-icon {
            transition: transform 0.3s ease-in-out;
        }
        .faq-icon-open {
            transform: rotate(45deg);
        }
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col">
        <header className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-white/95 backdrop-blur-sm supports-[backdrop-filter]:bg-white/90">
          <Container className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center">
              <img src="https://cdn.omiseweb.com/logo02.png" alt="OmiseWeb Logo" className="h-8 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              {(Object.keys(t.nav) as Array<keyof typeof t.nav>).map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className={`px-3 py-2 rounded-lg transition-colors duration-200 ${activeSection === key ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1">
                {languageOptions.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${lang === code ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a
                href="#contact"
                className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Started
              </a>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setLangPopupOpen(true)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
                aria-label="Choose language"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20" />
                </svg>
              </button>
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
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
            className={`lg:hidden bg-white border-t border-slate-200 transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
          >
            <nav className="px-4 py-4">
              <div className="space-y-2">
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
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  className="block w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-center font-medium rounded-lg hover:from-red-600 hover:to-red-700 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        </header>

        {isLangPopupOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setLangPopupOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs mx-4 transform animate-fade-in-scale"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">
                  {lang === "en" ? "Choose Language" : lang === "th" ? "เลือกภาษา" : "选择语言"}
                </h3>
                <button
                  onClick={() => setLangPopupOpen(false)}
                  className="p-1 rounded-full text-slate-500 hover:bg-slate-100"
                  aria-label="Close language selection"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {languageOptions.map(({ code, fullName }) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code)
                      setLangPopupOpen(false)
                    }}
                    className={`w-full py-3 px-4 rounded-lg text-md font-medium text-left transition-colors duration-200 flex items-center justify-between ${lang === code ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}
                  >
                    <span>{fullName}</span>
                    {lang === code && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <main>
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
                e.currentTarget.style.display = "none"
              }}
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-black/60 z-10"></div>
            <Container className="relative z-20 py-20 sm:py-32">
              <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8 inline-flex items-center px-4 py-2 glass-effect text-white text-sm font-medium rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {t.statsTitle}
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white">
                  {t.heroTitle}
                </h1>
                <p className="text-xl sm:text-2xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto">
                  {t.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse-glow"
                  >
                    {t.ctaPrimary}
                  </a>
                  <a
                    href="#portfolio"
                    className="px-8 py-4 border border-white/50 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors duration-200"
                  >
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
            </Container>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </section>

          <FadeInSection className="py-16 bg-gradient-to-b from-slate-50 to-white">
            <Container>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {t.stats.map((stat, idx) => (
                  <div key={idx} className="hover-lift">
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="services" className="py-24 bg-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.servicesHeading}</h2>
                <p className="text-xl text-slate-600 leading-relaxed">{t.servicesSubheading}</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="group relative overflow-hidden rounded-xl hover-lift">
                  <img
                    src="https://placehold.co/400x300/f8fafc/1e293b?text=Web+Creation"
                    alt="Web Creation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{t.servicesItems.creation.title}</h3>
                    <ul className="space-y-2 text-slate-600">
                      {t.servicesItems.creation.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white hover-lift">
                  <img
                    src="https://placehold.co/400x300/0f172a/ffffff?text=Management"
                    alt="Management"
                    className="w-full h-48 object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="relative p-6">
                    <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      POPULAR
                    </div>
                    <h3 className="text-xl font-semibold mb-4 mt-8">{t.servicesItems.management.title}</h3>
                    <ul className="space-y-2 text-white/90">
                      {t.servicesItems.management.list.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl hover-lift">
                  <img
                    src="https://placehold.co/400x300/f8fafc/1e293b?text=Marketing"
                    alt="Marketing"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.servicesItems.marketing.title}</h3>
                    <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full mb-4">
                      {t.servicesItems.marketing.comingSoon}
                    </div>
                    <p className="text-slate-600 text-sm">{t.servicesItems.marketing.description}</p>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-xl hover-lift">
                  <img
                    src="https://placehold.co/400x300/f8fafc/1e293b?text=Recruitment"
                    alt="Recruitment"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{t.servicesItems.recruitment.title}</h3>
                    <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full mb-4">
                      {t.servicesItems.recruitment.comingSoon}
                    </div>
                    <p className="text-slate-600 text-sm">{t.servicesItems.recruitment.description}</p>
                  </div>
                </div>
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection className="py-24 bg-slate-50">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.caseStudiesHeading}</h2>
                <p className="text-xl text-slate-600">{t.caseStudiesSubheading}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {t.caseStudies.map((study, idx) => (
                  <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift">
                    <img
                      src={`https://placehold.co/400x250/1e293b/ffffff?text=${study.title.replace(" ", "+")}`}
                      alt={study.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{study.title}</h3>
                      <p className="text-sm text-slate-500 mb-3">{study.client}</p>
                      <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                        {study.results}
                      </div>
                      <p className="text-slate-600">{study.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="pricing" className="py-24 bg-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.pricingHeading}</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {t.pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover-lift ${plan.highlight ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl scale-105" : "bg-white shadow-lg border border-slate-200"}`}
                  >
                    {plan.highlight && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                        RECOMMENDED
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                      <p className={`${plan.highlight ? "text-slate-300" : "text-slate-600"} mb-6`}>
                        {plan.description}
                      </p>
                      <div className="mb-8">
                        <span className="text-5xl font-extrabold">{plan.price}</span>
                        <span className={`${plan.highlight ? "text-slate-400" : "text-slate-500"} ml-2`}>
                          {plan.monthly}
                        </span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <svg
                              className={`w-6 h-6 flex-shrink-0 ${plan.highlight ? "text-green-400" : "text-green-600"}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${plan.highlight ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700" : "bg-slate-900 text-white hover:bg-slate-800"}`}
                      >
                        Choose Plan
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="portfolio" className="py-24 bg-slate-50">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.worksHeading}</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                {portfolioImages.map((item, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg hover-lift">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={`Portfolio ${item.category}`}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-sm font-semibold uppercase tracking-wider">{item.category}</p>
                        <p className="text-lg font-bold">View Project →</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-12 shadow-xl">
                <h3 className="text-2xl font-bold text-center mb-12">{t.clientsHeading}</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                  {clientLogos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo || "/placeholder.svg"}
                      alt={`Client ${idx + 1}`}
                      className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-16 space-y-8">
                {t.worksTestimonials.map((testimonial, idx) => (
                  <blockquote key={idx} className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto hover-lift">
                    <div className="flex items-start gap-4">
                      <svg className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-lg text-slate-700 mb-4 italic">{testimonial.text}</p>
                        <footer className="flex items-center gap-4">
                          <img
                            src={`https://placehold.co/60x60/1e293b/ffffff?text=${testimonial.author.charAt(0)}`}
                            alt={testimonial.author}
                            className="w-12 h-12 rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-slate-900">{testimonial.author}</p>
                            <p className="text-sm text-slate-500">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </blockquote>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="team" className="py-24 bg-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.teamHeading}</h2>
                <p className="text-xl text-slate-600">{t.teamSubheading}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.teamMembers.map((member, idx) => (
                  <div key={idx} className="text-center group hover-lift">
                    <div className="relative mb-6 overflow-hidden rounded-lg">
                      <img
                        src={teamImages[idx] || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-red-600 font-medium mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.bio}</p>

                    <div className="flex justify-center gap-3 mt-4">
                      <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4a2 2 0 0 1-2-2v-5a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2H2v-7a6 6 0 0 1 6-6h8z"></path>
                          <rect x="8" y="2" width="8" height="4" rx="2" ry="2"></rect>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">{t.howHeading}</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                {t.howSteps.map((step, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="faq" className="py-24 bg-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.faqHeading}</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {t.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-slate-900">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                          openFaq === idx ? "rotate-45" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ease-in-out ${
                        openFaq === idx ? "py-4 opacity-100" : "py-0 opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </FadeInSection>

          <FadeInSection id="contact" className="py-24 bg-slate-50">
            <Container>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-slate-900">{t.contactHeading}</h2>
                <p className="text-xl text-slate-600">{t.contactSubheading}</p>
              </div>
              <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder={t.contactPlaceholders.name}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder={t.contactPlaceholders.email}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={t.contactPlaceholders.business}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <textarea
                    rows={6}
                    placeholder={t.contactPlaceholders.message}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {t.contactButton}
                  </button>
                </form>
              </div>
            </Container>
          </FadeInSection>
        </main>

        <footer className="bg-slate-900 text-white">
          <div className="border-b border-slate-800">
            <Container className="py-16">
              <div className="grid lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2">
                  <img src="https://cdn.omiseweb.com/logo02.png" alt="OmiseWeb Logo" className="h-8 w-auto mb-6" />
                  <p className="text-slate-400 mb-6 max-w-md">{t.footer.description}</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 23 3z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="#services" className="hover:text-white transition-colors">
                        {t.nav.services}
                      </a>
                    </li>
                    <li>
                      <a href="#pricing" className="hover:text-white transition-colors">
                        {t.nav.pricing}
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" className="hover:text-white transition-colors">
                        {t.nav.portfolio}
                      </a>
                    </li>
                    <li>
                      <a href="#contact" className="hover:text-white transition-colors">
                        {t.nav.contact}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">{t.footer.resources}</h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white transition-colors">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
          </div>

          <Container className="py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-8">
                <p className="text-slate-400 text-sm">
                  &copy; {new Date().getFullYear()} OmiseWeb. {t.footer.rights}
                </p>
                <div className="flex gap-4 text-slate-400 text-sm">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 0 112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </footer>

        <ScrollTopButton show={showScrollTop} onClick={scrollToTop} />
      </div>
    </>
  )
}
