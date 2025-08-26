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




---

## 📦 Next.js (App Router) Export for Netlify

> Drop these files into a new repo (GitHub) and connect the repo on Netlify. It will auto-detect Next.js.

**Folder structure**
```
omiseweb-next/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Badge.tsx
│  ├─ Buttons.tsx
│  ├─ CheckItem.tsx
│  ├─ Container.tsx
│  └─ SectionTitle.tsx
├─ public/
│  └─ og-image.png
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ netlify.toml
```

### `package.json`
```json
{
  "name": "omiseweb-next",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "eslint": "^9.5.0",
    "eslint-config-next": "^14.2.4"
  }
}
```

### `next.config.mjs`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
export default nextConfig;
```

### `postcss.config.mjs`
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `netlify.toml` (Next.js auto-detected)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth font rendering */
html { scroll-behavior: smooth; }
```

### `app/layout.tsx`
```tsx
export const metadata = {
  title: 'OmiseWeb — Restaurant & Salon Websites in Japan',
  description: 'Website creation & management tailored for international owners in Japan.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
```

### `components/Container.tsx`
```tsx
export default function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
```

### `components/Badge.tsx`
```tsx
export default function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'primary' | 'subtle' }) {
  const tones: Record<string, string> = {
    neutral: 'bg-slate-100 text-slate-700',
    primary: 'bg-red-600 text-white',
    subtle: 'bg-slate-800 text-slate-100',
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
```

### `components/SectionTitle.tsx`
```tsx
import Badge from './Badge';
export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <div className="mb-3">
          <Badge tone="subtle">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
```

### `components/Buttons.tsx`
```tsx
export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
      {children}
    </a>
  );
}

export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
      {children}
    </a>
  );
}
```

### `components/CheckItem.tsx`
```tsx
export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg className="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
```

### `app/page.tsx` (imports the mockup you approved)
```tsx
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import SectionTitle from '@/components/SectionTitle';
import { PrimaryButton, SecondaryButton } from '@/components/Buttons';
import CheckItem from '@/components/CheckItem';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">O</div>
            <span className="text-lg font-bold tracking-tight">OmiseWeb</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#works" className="hover:text-slate-900">Works</a>
            <a href="#how" className="hover:text-slate-900">How It Works</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-xl border border-slate-200 px-2 py-1 text-sm">
              <span className="font-semibold">EN</span>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">日本語</button>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">ไทย</button>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">中文</button>
            </div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
          <button className="md:hidden rounded-xl border border-slate-200 p-2" aria-label="Open menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900" />
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <Badge tone="primary">Tailored for international owners in Japan</Badge>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Start Your Restaurant or Salon Website in Japan Today</h1>
              <p className="mt-4 max-w-xl text-lg/7 text-slate-200">From website creation to ongoing management—OmiseWeb is your trusted partner for running a successful business in Japan.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton>Get Started – Free Consultation</PrimaryButton>
                <SecondaryButton>See Pricing</SecondaryButton>
              </div>
              <ul className="mt-8 grid gap-2 text-sm text-slate-200/90 sm:grid-cols-2">
                <CheckItem>Bilingual support (EN/JP)</CheckItem>
                <CheckItem>Restaurant & salon-focused design</CheckItem>
                <CheckItem>Online booking & forms</CheckItem>
                <CheckItem>Ongoing updates & management</CheckItem>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/0 backdrop-blur grid place-items-center text-white">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/10 grid place-items-center">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">UI Mock Preview</p>
                    <p className="text-sm text-white/80">Hero image / device mockups can be placed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services, Pricing, How, Works, FAQ, Contact sections unchanged — identical to the mockup above */}
      {/* For brevity, you can reuse the same JSX from the canvas mockup or split into more components as needed. */}
    </div>
  );
}
```

> Copy the remaining sections (Services, Pricing, How It Works, Works & Testimonials, FAQ, Footer) from the existing mockup above — they are drop-in compatible.

---

## 🧾 Static HTML Export (no build tools)

If you prefer a **single-file HTML** deploy (Tailwind via CDN):

**`index.html`**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>OmiseWeb — Restaurant & Salon Websites in Japan</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>html{scroll-behavior:smooth}</style>
</head>
<body class="bg-white text-slate-900">
  <header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">O</div>
        <span class="text-lg font-bold tracking-tight">OmiseWeb</span>
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <a href="#home" class="hover:text-slate-900">Home</a>
        <a href="#services" class="hover:text-slate-900">Services</a>
        <a href="#pricing" class="hover:text-slate-900">Pricing</a>
        <a href="#works" class="hover:text-slate-900">Works</a>
        <a href="#how" class="hover:text-slate-900">How It Works</a>
        <a href="#faq" class="hover:text-slate-900">FAQ</a>
        <a href="#contact" class="hover:text-slate-900">Contact</a>
      </nav>
      <div class="hidden md:flex items-center gap-3">
        <div class="flex items-center gap-1 rounded-xl border border-slate-200 px-2 py-1 text-sm">
          <span class="font-semibold">EN</span><span class="text-slate-400">/</span>
          <button class="hover:text-slate-900 text-slate-600">日本語</button><span class="text-slate-400">/</span>
          <button class="hover:text-slate-900 text-slate-600">ไทย</button><span class="text-slate-400">/</span>
          <button class="hover:text-slate-900 text-slate-600">中文</button>
        </div>
        <a href="#contact" class="inline-flex items-center justify-center rounded-2xl border border-transparent bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">Get Started</a>
      </div>
    </div>
  </header>

  <section id="home" class="relative overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900"></div>
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="text-white">
          <span class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-red-600 text-white">Tailored for international owners in Japan</span>
          <h1 class="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Start Your Restaurant or Salon Website in Japan Today</h1>
          <p class="mt-4 max-w-xl text-lg/7 text-slate-200">From website creation to ongoing management—OmiseWeb is your trusted partner for running a successful business in Japan.</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#contact" class="inline-flex items-center justify-center rounded-2xl border border-transparent bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">Get Started – Free Consultation</a>
            <a href="#pricing" class="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50">See Pricing</a>
          </div>
          <ul class="mt-8 grid gap-2 text-sm text-slate-200/90 sm:grid-cols-2">
            <li class="flex items-start gap-2"><svg class="mt-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span>Bilingual support (EN/JP)</span></li>
            <li class="flex items-start gap-2"><svg class="mt-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span>Restaurant & salon-focused design</span></li>
            <li class="flex items-start gap-2"><svg class="mt-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span>Online booking & forms</span></li>
            <li class="flex items-start gap-2"><svg class="mt-1 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg><span>Ongoing updates & management</span></li>
          </ul>
        </div>
        <div class="relative">
          <div class="aspect-[4/3] w-full rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
            <div class="h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/0 backdrop-blur grid place-items-center text-white">
              <div class="text-center">
                <div class="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/10 grid place-items-center">
                  <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 12h18M3 17h18"/></svg>
                </div>
                <p class="text-lg font-semibold">UI Mock Preview</p>
                <p class="text-sm text-white/80">Hero image / device mockups can be placed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TODO: Add Services, Pricing, How It Works, Works, FAQ, Footer sections analogously -->

  <footer id="contact" class="border-t border-slate-200 bg-white">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h3 class="text-2xl font-bold">Contact OmiseWeb</h3>
      <form class="mt-6 grid gap-4 sm:max-w-md">
        <input class="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Your Name" />
        <input type="email" class="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" />
        <textarea class="w-full rounded-xl border border-slate-300 px-4 py-3" rows="4" placeholder="Tell us about your project"></textarea>
        <a href="#" class="inline-flex items-center justify-center rounded-2xl border border-transparent bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">Send Message</a>
      </form>
      <div class="mt-10 text-center text-sm text-slate-500">© 2025 OmiseWeb. All rights reserved.</div>
    </div>
  </footer>
</body>
</html>
```

---

## 🚀 Deploy Steps (GitHub → Netlify)
1) **Create repo** and push the Next.js or HTML files above.  
2) In **Netlify**, click **Add new site → Import from Git** and connect your repo.  
3) **Build settings** (Next.js): command `npm run build`, publish directory `.next/`. The `netlify.toml` here covers it.  
4) **Deploy**. Netlify will auto-install the Next.js runtime plugin and optimize routes.  
5) (Optional) Set a custom domain and enable HTTPS from the site settings.

> Need a JP version or /ja route? I can add `i18n` routing (EN default, /ja, /th, /zh) to this scaffold on request.


\n\n---\n\n## 📦 Next.js (App Router) Export for Netlify\n\n> Drop these files into a new repo (GitHub) and connect the repo on Netlify. It will auto-detect Next.js.\n\n**Folder structure**\n```
omiseweb-next/
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Badge.tsx
│  ├─ Buttons.tsx
│  ├─ CheckItem.tsx
│  ├─ Container.tsx
│  └─ SectionTitle.tsx
├─ public/
│  └─ og-image.png
├─ next.config.mjs
├─ package.json
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
└─ netlify.toml
```\n\n### `package.json`\n```json
{
  "name": "omiseweb-next",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.4",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "eslint": "^9.5.0",
    "eslint-config-next": "^14.2.4"
  }
}
```\n\n### `next.config.mjs`\n```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
export default nextConfig;
```\n\n### `postcss.config.mjs`\n```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```\n\n### `tailwind.config.ts`\n```ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
```\n\n### `tsconfig.json`\n```json
{
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```\n\n### `netlify.toml` (Next.js auto-detected)\n```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Smooth font rendering */
html { scroll-behavior: smooth; }
```

### `app/layout.tsx`
```tsx
export const metadata = {
  title: 'OmiseWeb — Restaurant & Salon Websites in Japan',
  description: 'Website creation & management tailored for international owners in Japan.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
```

### `components/Container.tsx`
```tsx
export default function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
```

### `components/Badge.tsx`
```tsx
export default function Badge({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'primary' | 'subtle' }) {
  const tones: Record<string, string> = {
    neutral: 'bg-slate-100 text-slate-700',
    primary: 'bg-red-600 text-white',
    subtle: 'bg-slate-800 text-slate-100',
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}
```

### `components/SectionTitle.tsx`
```tsx
import Badge from './Badge';
export default function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && (
        <div className="mb-3">
          <Badge tone="subtle">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
```

### `components/Buttons.tsx`
```tsx
export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-transparent bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
      {children}
    </a>
  );
}

export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a href="#pricing" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400">
      {children}
    </a>
  );
}
```

### `components/CheckItem.tsx`
```tsx
export default function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <svg className="mt-1 h-5 w-5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span>{children}</span>
    </li>
  );
}
```

### `app/page.tsx` (imports the mockup you approved)
```tsx
import Container from '@/components/Container';
import Badge from '@/components/Badge';
import SectionTitle from '@/components/SectionTitle';
import { PrimaryButton, SecondaryButton } from '@/components/Buttons';
import CheckItem from '@/components/CheckItem';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">O</div>
            <span className="text-lg font-bold tracking-tight">OmiseWeb</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
            <a href="#home" className="hover:text-slate-900">Home</a>
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#works" className="hover:text-slate-900">Works</a>
            <a href="#how" className="hover:text-slate-900">How It Works</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-xl border border-slate-200 px-2 py-1 text-sm">
              <span className="font-semibold">EN</span>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">日本語</button>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">ไทย</button>
              <span className="text-slate-400">/</span>
              <button className="hover:text-slate-900 text-slate-600">中文</button>
            </div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
          <button className="md:hidden rounded-xl border border-slate-200 p-2" aria-label="Open menu">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </Container>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900" />
        <Container className="py-20 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <Badge tone="primary">Tailored for international owners in Japan</Badge>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Start Your Restaurant or Salon Website in Japan Today</h1>
              <p className="mt-4 max-w-xl text-lg/7 text-slate-200">From website creation to ongoing management—OmiseWeb is your trusted partner for running a successful business in Japan.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton>Get Started – Free Consultation</PrimaryButton>
                <SecondaryButton>See Pricing</SecondaryButton>
              </div>
              <ul className="mt-8 grid gap-2 text-sm text-slate-200/90 sm:grid-cols-2">
                <CheckItem>Bilingual support (EN/JP)</CheckItem>
                <CheckItem>Restaurant & salon-focused design</CheckItem>
                <CheckItem>Online booking & forms</CheckItem>
                <CheckItem>Ongoing updates & management</CheckItem>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/0 backdrop-blur grid place-items-center text-white">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-white/10 grid place-items-center">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">UI Mock Preview</p>
                    <p className="text-sm text-white/80">Hero image / device mockups can be placed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services, Pricing, How, Works, FAQ, Contact sections unchanged — identical to the mockup above */}
      {/* For brevity, you can reuse the same JSX from the canvas mockup or split into more components as needed. */}
    </div>
  );
}
```

> Copy the remaining sections (Services, Pricing, How It Works, Works & Testimonials, FAQ, Footer) from the existing mockup above — they are drop-in compatible.

---

## 🧾 Static HTML Export (no build tools)

If you prefer a **single-file HTML** deploy (Tailwind via CDN):

**`index.html`**
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>OmiseWeb — Restaurant & Salon Websites in Japan</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>html{scroll-behavior:smooth}</style>
</head>
<body class="bg-white text-slate-900">
  <header class="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
    <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <div class="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-black">O</div>
        <span class="text-lg font-bold tracking-tight">OmiseWeb</span>
      </a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
        <a href="#home" class="hover:text-slate-900">Home</a>
        <a href="#services" class="hover:text-slate-900">Services</a>
        <a href="#pricing" class="hover:text-slate-900">Pricing</a>
        <a href="#works" class="hover:text-slate-900">Works</a>
        <a href="#how" class="hover:text-slate-900">How It Works</a>
        <a href="#faq" class="hover:text-slate-900">FAQ</a>
        <a href="#contact" class="hover:text-slate-900">Contact</a>
      </nav>
      <div class="hidden md:flex items-center gap-3">
        <div class="flex items-center gap-1 rounded-xl border border-slate-200 px-2 py-1 text-sm">
          <span class="font-semibold">EN</span><span class="text-slate-400">/</span>
          <butt
