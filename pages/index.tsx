// OmiseWeb – Landing Page (English)
// Next.js + TailwindCSS version
// Pages/index.js content (export default function Home)

import Head from "next/head";
import type { ReactNode } from "react";

// 型定義
type ContainerProps = {
  children: ReactNode;
  className?: string;
};

// ↓ ここで定義した型を適用します
const Container = ({ children, className = "" }: ContainerProps) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export default function Home() {
  return (
    <>
      <Head>
        <title>OmiseWeb – Restaurant & Salon Websites in Japan</title>
        <meta
          name="description"
          content="Start your restaurant or salon website in Japan today with OmiseWeb. Website creation, management, and support for international business owners."
        />
      </Head>
      <div className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">O</div>
              <span className="text-lg font-bold tracking-tight">OmiseWeb</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#works">Works</a>
              <a href="#how">How It Works</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="hidden md:inline-block rounded-2xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">Get Started</a>
          </Container>
        </header>

        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 text-white">
          <Container className="py-20 sm:py-28">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-extrabold sm:text-5xl">Start Your Restaurant or Salon Website in Japan Today</h1>
                <p className="mt-4 max-w-xl text-lg text-slate-200">From website creation to ongoing management — OmiseWeb is your trusted partner for running a successful business in Japan.</p>
                <div className="mt-8 flex gap-3">
                  <a href="#contact" className="rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700">Get Started – Free Consultation</a>
                  <a href="#pricing" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50">See Pricing</a>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
                <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent grid place-items-center">Hero Image / Mockup</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
            <p className="mt-3 text-center text-slate-600">Everything you need to launch and run your shop website in Japan.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">Website Creation</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>Custom design for restaurants & salons</li>
                  <li>Bilingual (EN/JP)</li>
                  <li>Online reservation system</li>
                </ul>
              </div>
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">Website Management</h3>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>Content updates</li>
                  <li>Social media integration</li>
                  <li>Security monitoring</li>
                </ul>
              </div>
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">Marketing Support</h3>
                <p className="text-xs text-red-600">Coming Soon</p>
              </div>
              <div className="rounded-3xl border p-6">
                <h3 className="font-bold">Recruitment Support</h3>
                <p className="text-xs text-red-600">Coming Soon</p>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">Choose the Right Plan</h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border bg-white p-6">
                <h3 className="font-bold">Starter (Bronze)</h3>
                <p>From ¥50,000 / Free monthly</p>
              </div>
              <div className="rounded-3xl border-2 border-red-600 bg-white p-6">
                <h3 className="font-bold">Premium (Gold)</h3>
                <p>From ¥200,000 / ¥30,000 monthly</p>
              </div>
              <div className="rounded-3xl border bg-white p-6">
                <h3 className="font-bold">Standard (Silver)</h3>
                <p>From ¥100,000 / ¥10,000 monthly</p>
              </div>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section id="how" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">How It Works</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <li className="rounded-3xl border p-6"><strong>1. Contact Us</strong><p>Online form or LINE</p></li>
              <li className="rounded-3xl border p-6"><strong>2. Consultation</strong><p>We listen to your needs</p></li>
              <li className="rounded-3xl border p-6"><strong>3. Website Creation</strong><p>Ready in ~2 weeks</p></li>
              <li className="rounded-3xl border p-6"><strong>4. Launch & Support</strong><p>Ongoing updates</p></li>
            </ol>
          </Container>
        </section>

        {/* Works & Testimonials */}
        <section id="works" className="bg-slate-50 py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">Works & Testimonials</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border bg-white p-6">Restaurant Owner: “Now our international customers can easily make reservations.”</div>
              <div className="rounded-3xl border bg-white p-6">Salon Owner: “I can focus on my work while OmiseWeb updates my website.”</div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <Container>
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-6 max-w-2xl mx-auto space-y-4">
              <div className="rounded-2xl border p-4"><strong>Can I use the service if I don’t speak Japanese?</strong><p>Yes, we provide English support.</p></div>
              <div className="rounded-2xl border p-4"><strong>Is the website mobile-friendly?</strong><p>Yes, responsive design is standard.</p></div>
              <div className="rounded-2xl border p-4"><strong>Payment methods?</strong><p>Credit card / Bank transfer.</p></div>
            </div>
          </Container>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t py-10">
          <Container>
            <h3 className="text-xl font-bold">Contact OmiseWeb</h3>
            <form className="mt-4 grid gap-3 max-w-md">
              <input className="rounded-xl border px-4 py-2" placeholder="Your Name" />
              <input type="email" className="rounded-xl border px-4 py-2" placeholder="Email" />
              <textarea className="rounded-xl border px-4 py-2" rows={4} placeholder="Message" />
              <button type="submit" className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700">Send</button>
            </form>
            <p className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} OmiseWeb LLC. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    </>
  );
}
