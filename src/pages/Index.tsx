import { useState } from "react";
import PopponSvg from "@/components/PopponSvg";
import bannerImg from "@/assets/banner.jpeg";
import logoImg from "@/assets/logopoppon.jpeg";
import playgroundImg from "@/assets/playground.jpeg";
import { Copy, Check } from "lucide-react";

const CONTRACT_ADDRESS = "Solllllllllllllllllllllllllllllllllllllllllllllll";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Subtle watermark background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cellipse cx='60' cy='55' rx='25' ry='15' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.03'/%3E%3Ccircle cx='42' cy='42' r='9' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.03'/%3E%3Cpolygon points='42,33 39,24 45,24' fill='none' stroke='%23000' stroke-width='0.5' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10">
        {/* SECTION 1 — HERO */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
          <div
            className="animate-poppon-float cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <PopponSvg />
          </div>

          <h1 className="mt-6 text-6xl font-bold lowercase tracking-widest text-primary md:text-8xl">
            poppon
          </h1>

          <div className="mt-8 max-w-md text-center text-lg leading-relaxed tracking-wide text-foreground/80">
            <p>Wobbly little unicorn.</p>
            <p>Listener of whispers, chaser of sunbeams, friend.</p>
            <br />
            <p>$poppon 🦄🌈✨</p>
            <br />
            <p className="text-sm text-muted-foreground">
              Poppon was discovered as an early, rudimentary form—the first phase before the birth of the perfect Pippin.
            </p>
          </div>

          <div
            className={`mt-6 text-sm italic text-muted-foreground transition-opacity duration-700 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            still becoming.
          </div>
        </section>

        {/* SECTION 2 — PRIMARY ACTIONS */}
        <section className="flex flex-col items-center gap-4 px-6 py-16">
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="poppon-pill-lg">
            buy $poppon
          </a>
          <a href="https://dextools.io" target="_blank" rel="noopener noreferrer" className="poppon-pill">
            $poppon chart
          </a>
        </section>

        {/* SECTION 3 — CONTRACT ADDRESS */}
        <section className="flex flex-col items-center px-6 py-12">
          <p className="mb-3 text-sm lowercase tracking-widest text-muted-foreground">$poppon ca:</p>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3">
            <code className="font-mono text-xs text-foreground/70 sm:text-sm">{CONTRACT_ADDRESS}</code>
            <button
              onClick={handleCopy}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Copy contract address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </section>

        {/* SECTION 4 — GRID BANNER */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">
            <img src={bannerImg} alt="Poppon proto-form study board" className="w-full" />
          </div>
        </section>

        {/* SECTION 5 — LOGO SECTION */}
        <section className="flex justify-center px-6 py-12">
          <img
            src={logoImg}
            alt="Poppon logo"
            className="w-48 rounded-2xl transition-transform duration-300 hover:scale-110 md:w-56"
          />
        </section>

        {/* SECTION 6 — PLAYGROUND / ORIGIN */}
        <section className="flex flex-col items-center px-6 py-12">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-md">
            <img src={playgroundImg} alt="Poppon original CodePen form" className="w-full" />
          </div>
          <a
            href="https://codepen.io/Popponsol/pen/ZYpEvmQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-sm lowercase tracking-widest text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
          >
            view original form
          </a>
        </section>

        {/* SECTION 7 — SOCIAL PORTALS */}
        <section className="flex flex-col items-center gap-4 px-6 py-16">
          <a href="https://poppon.fun" target="_blank" rel="noopener noreferrer" className="poppon-pill">
            website
          </a>
          <a href="https://t.me/popponsol" target="_blank" rel="noopener noreferrer" className="poppon-pill">
            telegram
          </a>
          <a href="https://x.com/popponlovesyou" target="_blank" rel="noopener noreferrer" className="poppon-pill">
            x
          </a>
        </section>

        {/* SECTION 8 — FOOTER */}
        <footer className="py-12 text-center">
          <p className="text-xs lowercase tracking-[0.3em] text-muted-foreground/50">
            proto form • $poppon • solana
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
