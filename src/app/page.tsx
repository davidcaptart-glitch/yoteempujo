import Image from "next/image";
import Navbar from "@/components/Navbar";
import {
  MapPin,
  Calendar,
  Users,
  ClipboardList,
  Mountain,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   SVG SILHOUETTES
────────────────────────────────────────────── */

function JoeletteTeamSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 390"
      className={className}
      fill="#0D0D0D"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Ground / hillside */}
      <path d="M0 370 L720 320 L720 390 L0 390 Z" opacity="0.12" />

      {/* ── FRONT RUNNER (left, pulling) ── */}
      <ellipse cx="108" cy="58" rx="23" ry="25" />
      <path d="M84 52 Q108 34 132 52 L135 64 L81 64 Z" />
      <path d="M120 82 L134 82 L106 178 L90 178 Z" />
      <path d="M128 86 L148 88 L142 162 L122 160 Z" />
      <line x1="118" y1="122" x2="216" y2="180" stroke="#0D0D0D" strokeWidth="13" strokeLinecap="round" />
      <line x1="100" y1="120" x2="58" y2="156" stroke="#0D0D0D" strokeWidth="11" strokeLinecap="round" />
      <line x1="94" y1="178" x2="62" y2="278" stroke="#0D0D0D" strokeWidth="15" strokeLinecap="round" />
      <line x1="108" y1="176" x2="136" y2="274" stroke="#0D0D0D" strokeWidth="15" strokeLinecap="round" />
      <ellipse cx="52" cy="280" rx="24" ry="9" />
      <ellipse cx="144" cy="277" rx="22" ry="9" />

      {/* ── JOËLETTE ASSEMBLY ── */}
      <path d="M200 186 L530 204 L530 218 L200 200 Z" />
      <path d="M200 187 L185 162 L195 158 L210 183 Z" />
      <path d="M210 186 L196 161 L206 157 L220 182 Z" />
      <path d="M286 196 L300 148 L310 152 L296 200 Z" />
      <path d="M255 197 L310 200 L310 212 L255 209 Z" />
      <path d="M200 197 L255 200 L255 210 L200 207 Z" />

      {/* Wheel */}
      <circle cx="368" cy="310" r="62" fill="none" stroke="#0D0D0D" strokeWidth="14" />
      <circle cx="368" cy="310" r="10" />
      <line x1="368" y1="248" x2="368" y2="372" stroke="#0D0D0D" strokeWidth="6" />
      <line x1="306" y1="310" x2="430" y2="310" stroke="#0D0D0D" strokeWidth="6" />
      <line x1="324" y1="266" x2="412" y2="354" stroke="#0D0D0D" strokeWidth="5" />
      <line x1="412" y1="266" x2="324" y2="354" stroke="#0D0D0D" strokeWidth="5" />
      <path d="M330 202 L406 206 L406 218 L330 214 Z" />

      {/* ── PERSON IN JOËLETTE ── */}
      <circle cx="300" cy="145" r="20" />
      <path d="M279 143 Q300 126 321 143 L321 150 L279 150 Z" />
      <path d="M286 165 L311 166 L305 210 L280 208 Z" />
      <line x1="284" y1="208" x2="218" y2="212" stroke="#0D0D0D" strokeWidth="14" strokeLinecap="round" />
      <line x1="287" y1="220" x2="222" y2="224" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      <line x1="284" y1="178" x2="258" y2="195" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />

      {/* Back handle rods */}
      <line x1="530" y1="210" x2="580" y2="180" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="530" y1="218" x2="580" y2="196" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />

      {/* ── BACK RUNNER (right, pushing) ── */}
      <ellipse cx="618" cy="55" rx="23" ry="25" />
      <path d="M594 49 Q618 31 642 49 L645 61 L591 61 Z" />
      <path d="M634 43 Q652 56 644 72 Q636 60 626 58 Z" />
      <path d="M630 79 L644 79 L616 175 L600 175 Z" />
      <path d="M603 86 L623 84 L617 160 L597 162 Z" />
      <line x1="606" y1="118" x2="592" y2="185" stroke="#0D0D0D" strokeWidth="13" strokeLinecap="round" />
      <line x1="618" y1="116" x2="604" y2="183" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      <line x1="634" y1="122" x2="672" y2="154" stroke="#0D0D0D" strokeWidth="11" strokeLinecap="round" />
      <line x1="604" y1="174" x2="572" y2="274" stroke="#0D0D0D" strokeWidth="15" strokeLinecap="round" />
      <line x1="618" y1="173" x2="644" y2="272" stroke="#0D0D0D" strokeWidth="15" strokeLinecap="round" />
      <ellipse cx="562" cy="277" rx="24" ry="9" />
      <ellipse cx="654" cy="275" rx="22" ry="9" />
    </svg>
  );
}

function JoeletteSmallSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 200"
      className={className}
      fill="#0D0D0D"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 185 L360 160 L360 200 L0 200 Z" opacity="0.12" />
      <ellipse cx="52" cy="30" rx="14" ry="15" />
      <path d="M61 44 L69 44 L52 90 L43 90 Z" />
      <line x1="60" y1="62" x2="108" y2="92" stroke="#0D0D0D" strokeWidth="7" strokeLinecap="round" />
      <line x1="50" y1="60" x2="28" y2="78" stroke="#0D0D0D" strokeWidth="6" strokeLinecap="round" />
      <line x1="46" y1="90" x2="30" y2="142" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      <line x1="55" y1="89" x2="66" y2="140" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="25" cy="144" rx="14" ry="5" />
      <ellipse cx="72" cy="141" rx="12" ry="5" />
      <path d="M102 94 L265 103 L265 110 L102 101 Z" />
      <circle cx="186" cy="158" r="31" fill="none" stroke="#0D0D0D" strokeWidth="7" />
      <circle cx="186" cy="158" r="5" />
      <line x1="186" y1="127" x2="186" y2="189" stroke="#0D0D0D" strokeWidth="3" />
      <line x1="155" y1="158" x2="217" y2="158" stroke="#0D0D0D" strokeWidth="3" />
      <circle cx="148" cy="74" r="12" />
      <path d="M140 86 L156 87 L152 108 L136 106 Z" />
      <line x1="138" y1="106" x2="108" y2="108" stroke="#0D0D0D" strokeWidth="7" strokeLinecap="round" />
      <ellipse cx="308" cy="28" rx="14" ry="15" />
      <path d="M317 41 L325 41 L307 88 L298 88 Z" />
      <line x1="298" y1="60" x2="268" y2="92" stroke="#0D0D0D" strokeWidth="7" strokeLinecap="round" />
      <line x1="308" y1="58" x2="278" y2="90" stroke="#0D0D0D" strokeWidth="7" strokeLinecap="round" />
      <line x1="300" y1="87" x2="283" y2="140" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      <line x1="310" y1="87" x2="324" y2="138" stroke="#0D0D0D" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="277" cy="142" rx="13" ry="5" />
      <ellipse cx="330" cy="140" rx="11" ry="5" />
    </svg>
  );
}

function GroupHikingSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 340"
      className={className}
      fill="#0D0D0D"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M0 340 L0 200 L120 80 L220 180 L300 60 L380 160 L480 100 L600 200 L600 340 Z" opacity="0.06" />
      <path d="M0 330 L600 295 L600 340 L0 340 Z" opacity="0.15" />
      {/* Figure 1 */}
      <circle cx="80" cy="100" r="18" />
      <path d="M90 117 L100 117 L84 195 L72 195 Z" />
      <line x1="88" y1="148" x2="120" y2="175" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="76" y1="146" x2="48" y2="168" stroke="#0D0D0D" strokeWidth="9" strokeLinecap="round" />
      <line x1="75" y1="193" x2="55" y2="260" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      <line x1="86" y1="192" x2="100" y2="258" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      {/* Figure 2 */}
      <circle cx="175" cy="88" r="20" />
      <path d="M186 107 L197 107 L178 195 L165 195 Z" />
      <rect x="188" y="110" width="16" height="58" rx="4" />
      <line x1="184" y1="138" x2="222" y2="165" stroke="#0D0D0D" strokeWidth="11" strokeLinecap="round" />
      <line x1="172" y1="136" x2="138" y2="160" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="168" y1="193" x2="144" y2="265" stroke="#0D0D0D" strokeWidth="13" strokeLinecap="round" />
      <line x1="180" y1="192" x2="198" y2="263" stroke="#0D0D0D" strokeWidth="13" strokeLinecap="round" />
      {/* Joëlette */}
      <path d="M238 170 L390 178 L390 188 L238 180 Z" />
      <circle cx="315" cy="248" r="42" fill="none" stroke="#0D0D0D" strokeWidth="10" />
      <circle cx="315" cy="248" r="7" />
      <line x1="315" y1="206" x2="315" y2="290" stroke="#0D0D0D" strokeWidth="5" />
      <line x1="273" y1="248" x2="357" y2="248" stroke="#0D0D0D" strokeWidth="5" />
      <circle cx="280" cy="144" r="16" />
      <path d="M270 160 L290 161 L285 188 L265 186 Z" />
      <line x1="265" y1="186" x2="240" y2="190" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      {/* Figure 3 */}
      <circle cx="418" cy="82" r="19" />
      <path d="M415 100 L427 100 L409 186 L396 186 Z" />
      <line x1="410" y1="125" x2="378" y2="160" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="422" y1="122" x2="456" y2="148" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="398" y1="184" x2="372" y2="258" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      <line x1="410" y1="182" x2="428" y2="256" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      {/* Figure 4 */}
      <circle cx="510" cy="92" r="18" />
      <path d="M508 109 L520 109 L503 190 L490 190 Z" />
      <rect x="518" y="114" width="15" height="54" rx="4" />
      <line x1="504" y1="140" x2="470" y2="165" stroke="#0D0D0D" strokeWidth="10" strokeLinecap="round" />
      <line x1="516" y1="138" x2="548" y2="162" stroke="#0D0D0D" strokeWidth="9" strokeLinecap="round" />
      <line x1="492" y1="188" x2="468" y2="260" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
      <line x1="504" y1="187" x2="522" y2="258" stroke="#0D0D0D" strokeWidth="12" strokeLinecap="round" />
    </svg>
  );
}

function MountainLineart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 220"
      className={className}
      fill="none"
      stroke="#0D0D0D"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 180 L80 60 L150 180" strokeWidth="1.5" opacity="0.3" />
      <path d="M100 180 L200 40 L300 180" strokeWidth="1.5" opacity="0.3" />
      <path d="M40 220 L160 80 L280 220" strokeWidth="2.5" />
      <path d="M148 96 L160 80 L172 96 L164 100 L156 100 Z" fill="#0D0D0D" stroke="none" opacity="0.6" />
      <line x1="0" y1="210" x2="320" y2="210" strokeWidth="1.5" />
      <path d="M42 210 L42 185 M36 196 L42 185 L48 196" />
      <path d="M60 210 L60 178 M52 192 L60 178 L68 192 M55 202 L60 192 L65 202" />
      <path d="M256 210 L256 182 M249 195 L256 182 L263 195 M252 205 L256 196 L260 205" />
      <path d="M274 210 L274 188 M268 199 L274 188 L280 199" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   PAGE SECTIONS
────────────────────────────────────────────── */

function HeroSection() {
  return (
    <>
      {/* ── BANNER: Logo izquierda + Foto derecha ── */}
      <section id="inicio" className="bg-white overflow-hidden">
        <div className="grid grid-cols-[1fr_2fr] lg:grid-cols-[280px_1fr] h-[260px] sm:h-[320px] lg:h-[380px]">
          {/* Logo side */}
          <div className="flex flex-col items-center justify-center pl-6 sm:pl-10 lg:pl-16 pr-4 bg-white gap-3">
            <Image
              src="/images/logo.png"
              alt="Yo Te Empujo Imparables"
              width={200}
              height={114}
              className="object-contain w-full max-w-[180px] lg:max-w-[220px]"
              priority
            />
            <div className="flex flex-col leading-none text-center">
              <span
                className="uppercase leading-none text-[#0D0D0D]"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(1.4rem, 3vw, 2.4rem)" }}
              >
                Imparables
              </span>
              <span
                className="uppercase leading-none text-[#D42020] mt-0.5"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(0.85rem, 1.6vw, 1.3rem)", letterSpacing: "0.05em" }}
              >
                Yo Te Empujo
              </span>
            </div>
          </div>

          {/* Hero photo — full bleed to the right */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/hero-joelette.png"
              alt="Equipo Yo Te Empujo llevando una joëlette por la montaña"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 70vw, 75vw"
            />
          </div>
        </div>
      </section>

      {/* ── HEADLINE: Titular grande + Botones ── */}
      <section className="bg-white py-10 lg:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Big headline */}
            <div className="flex-1">
              <h1
                className="uppercase leading-none text-[#0D0D0D] mb-0"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
              >
                Yo Te Empujo
              </h1>
              <p
                className="uppercase leading-none text-[#D42020] italic"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
                aria-label="Imparables"
              >
                Imparables
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:gap-4 flex-shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D42020] text-white font-bold uppercase tracking-widest hover:bg-[#b01a1a] transition-colors duration-200 rounded-sm"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.15rem" }}
              >
                Quiero Participar
              </a>
              <a
                href="#somos-imparables"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0D0D0D] text-[#0D0D0D] font-bold uppercase tracking-widest hover:bg-[#0D0D0D] hover:text-white transition-colors duration-200 rounded-sm"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.15rem" }}
              >
                Saber Más
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SomosImparablesSection() {
  return (
    <section id="somos-imparables" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="uppercase leading-none text-[#0D0D0D] mb-0"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              }}
            >
              Somos Imparables.
            </h2>
            <p
              className="uppercase leading-none text-[#D42020] mb-8"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              }}
            >
              Llegamos Juntos.
            </p>
            <div className="w-12 h-1 bg-[#D42020] mb-6" aria-hidden="true" />
            <p
              className="text-base lg:text-lg text-[#444] leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Organizamos salidas en la naturaleza con joëlette para que
              cualquier persona, independientemente de su movilidad, pueda
              disfrutar de la montaña acompañada por un equipo de voluntarios.
            </p>
            <p
              className="text-base lg:text-lg text-[#444] leading-relaxed max-w-lg mt-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              La joëlette es una silla de una sola rueda diseñada para el
              terreno de montaña. El equipo la lleva. La experiencia la vive
              todo el mundo.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/silhouette-group.png"
                alt="Silueta del equipo Imparables subiendo la montaña con joëlette"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParaQuienSection() {
  return (
    <section id="para-quien" className="bg-[#F4F4F4] py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] min-h-[480px]">

          {/* Left — large silhouette illustration */}
          <div className="relative min-h-[300px] lg:min-h-0 bg-white">
            <Image
              src="/images/silhouette-group.png"
              alt="Silueta del equipo Imparables subiendo la montaña con joëlette"
              fill
              className="object-cover object-left-bottom"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right — two stacked horizontal cards */}
          <div className="flex flex-col divide-y divide-gray-200 bg-[#F4F4F4] px-6 sm:px-10 lg:px-12 py-10 lg:py-14 gap-0">

            {/* ¿Para Quién? header */}
            <h2
              className="uppercase text-[#0D0D0D] mb-8"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              ¿Para Quién?
            </h2>

            {/* Imparables row */}
            <div className="flex items-center gap-4 py-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-full border-2 border-[#D42020] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D42020]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="5" r="2.5" />
                      <path d="M12 8 L9 14 L7 20 M12 8 L15 14 M9 14 L15 14 M15 14 L17 20" />
                      <circle cx="17" cy="18" r="2.5" />
                    </svg>
                  </div>
                  <h3
                    className="text-[#D42020] uppercase"
                    style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.5rem" }}
                  >
                    Imparables
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                  Personas que quieren vivir la experiencia y disfrutar de la
                  naturaleza sin límites.
                </p>
              </div>
              {/* Thumbnail photo */}
              <div className="relative w-[140px] h-[100px] sm:w-[180px] sm:h-[120px] flex-shrink-0 rounded-sm overflow-hidden">
                <Image
                  src="/images/imparables-photo.png"
                  alt="Participante en joëlette disfrutando de la montaña con el equipo"
                  fill
                  className="object-cover object-center"
                  sizes="180px"
                />
              </div>
            </div>

            {/* Voluntarios row */}
            <div className="flex items-center gap-4 py-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-full border-2 border-[#D42020] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Users size={22} className="text-[#D42020]" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-[#D42020] uppercase"
                    style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.5rem" }}
                  >
                    Voluntarios
                  </h3>
                </div>
                <p className="text-[#555] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                  Personas que quieren empujar, acompañar y formar parte del
                  equipo.
                </p>
              </div>
              {/* Thumbnail photo */}
              <div className="relative w-[140px] h-[100px] sm:w-[180px] sm:h-[120px] flex-shrink-0 rounded-sm overflow-hidden">
                <Image
                  src="/images/voluntarios-photo.png"
                  alt="Equipo de voluntarios Imparables caminando por la montaña"
                  fill
                  className="object-cover object-center"
                  sizes="180px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ComoFuncionaSection() {
  const steps = [
    {
      num: "01",
      icon: <ClipboardList size={32} aria-hidden="true" />,
      title: "Te Apuntas",
      desc: "Rellena el formulario y únete al equipo. Te contactamos para darte toda la información sobre la próxima salida.",
    },
    {
      num: "02",
      icon: <Users size={32} aria-hidden="true" />,
      title: "Formamos Equipo",
      desc: "Organizamos la salida y preparamos la ruta. Emparejamos imparables con voluntarios para que todo fluya.",
    },
    {
      num: "03",
      icon: <Mountain size={32} aria-hidden="true" />,
      title: "Salimos Juntos",
      desc: "Disfrutamos de la naturaleza. Llegamos juntos. Cada salida es una experiencia que no olvidarás.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center uppercase text-[#0D0D0D] mb-16"
          style={{
            fontFamily: "var(--font-bebas-neue)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          }}
        >
          ¿Cómo Funciona?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {steps.map((step) => (
            <div key={step.num} className="px-8 py-8 lg:py-10">
              <div className="text-[#D42020] mb-4">{step.icon}</div>
              <p
                className="text-6xl text-gray-100 font-bold leading-none mb-2 select-none"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                aria-hidden="true"
              >
                {step.num}
              </p>
              <h3
                className="uppercase text-[#0D0D0D] mb-3"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.6rem" }}
              >
                {step.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProximaSalidaSection() {
  return (
    <section id="proximas-salidas" className="bg-[#F4F4F4] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Photo left */}
          <div className="relative rounded-sm overflow-hidden min-h-[320px]">
            <Image
              src="/images/proxima-salida.png"
              alt="Equipo Yo Te Empujo en crestas de montaña con vistas espectaculares"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Info right */}
          <div className="bg-white rounded-sm p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h2
                className="text-[#D42020] uppercase mb-6"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Próxima Salida
              </h2>

              <ul className="space-y-5 mb-8" role="list">
                <li className="flex items-center gap-4 text-[#0D0D0D]">
                  <MapPin size={22} className="text-[#D42020] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block" style={{ fontFamily: "var(--font-barlow)" }}>Lugar</span>
                    <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>
                      La Mola (1104 m) — Parc Natural de Sant Llorenç del Munt i l&apos;Obac, Barcelona
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-[#0D0D0D]">
                  <Calendar size={22} className="text-[#D42020] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block" style={{ fontFamily: "var(--font-barlow)" }}>Fecha</span>
                    <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>Próximamente</span>
                  </div>
                </li>
                <li className="flex items-center gap-4 text-[#0D0D0D]">
                  <Users size={22} className="text-[#D42020] flex-shrink-0" aria-hidden="true" />
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gray-400 block" style={{ fontFamily: "var(--font-barlow)" }}>Plazas</span>
                    <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>Limitadas</span>
                  </div>
                </li>
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D42020] text-white font-bold uppercase tracking-widest hover:bg-[#b01a1a] transition-colors rounded-sm"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.1rem" }}
              >
                Apuntarme
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end" aria-hidden="true">
              <div className="relative w-44 h-28">
                <Image
                  src="/images/mountain-lineart.png"
                  alt=""
                  fill
                  className="object-contain object-right-bottom opacity-40"
                  sizes="176px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="bg-white py-20 lg:py-28 border-t-4 border-[#D42020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-start">

          {/* Left — tagline */}
          <div>
            <h2
              className="uppercase leading-none text-[#0D0D0D] mb-1"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Este sitio es para ti.
            </h2>
            <p
              className="uppercase leading-none text-[#D42020] mb-6"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Aquí falta un Imparable.
            </p>
            <div className="relative w-full max-w-[260px] aspect-[2/1]">
              <Image
                src="/images/silhouette-small.png"
                alt="Silueta del equipo Yo Te Empujo con joëlette"
                fill
                className="object-contain object-left-bottom"
                sizes="260px"
              />
            </div>
          </div>

          {/* Center — Google Form */}
          <div className="bg-[#F4F4F4] rounded-sm p-6 lg:p-8">
            <h3
              className="uppercase text-[#0D0D0D] mb-2"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.8rem" }}
            >
              Quiero Participar
            </h3>
            <p className="text-sm text-[#666] mb-6 leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
              Rellena el formulario y nos pondremos en contacto contigo para
              darte todos los detalles de la próxima salida.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd7kN414Sy59zBxyOLVivodwBCS04xLieH_-z2HJoueuM4j7Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D42020] text-white font-bold uppercase tracking-widest hover:bg-[#b01a1a] transition-colors rounded-sm w-full justify-center"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.1rem" }}
            >
              Rellenar Formulario
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Right — social + collaborate */}
          <div>
            <h3
              className="uppercase text-[#0D0D0D] mb-6"
              style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.8rem" }}
            >
              Síguenos
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href="https://www.instagram.com/yoteempujo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#0D0D0D] hover:text-[#D42020] transition-colors"
                >
                  <InstagramIcon size={22} />
                  <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>
                    @yoteempujo
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/34610097562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#0D0D0D] hover:text-[#D42020] transition-colors"
                >
                  <Phone size={22} aria-hidden="true" />
                  <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>
                    +34 610 097 562
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:yoteempujo@gmail.com"
                  className="flex items-center gap-3 text-[#0D0D0D] hover:text-[#D42020] transition-colors"
                >
                  <Mail size={22} aria-hidden="true" />
                  <span className="font-semibold" style={{ fontFamily: "var(--font-barlow)" }}>
                    yoteempujo@gmail.com
                  </span>
                </a>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4
                className="uppercase text-[#0D0D0D] mb-3"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1.2rem" }}
              >
                ¿Quieres colaborar?
              </h4>
              <p className="text-sm text-[#666] mb-4 leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                Si eres una empresa, asociación o tienes recursos que ofrecer, hablamos.
              </p>
              <a
                href="https://wa.me/34610097562"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#D42020] uppercase tracking-wide hover:underline"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Escríbenos
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CollaboratorsSection() {
  return (
    <section id="colaboradores" className="bg-[#F4F4F4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-center uppercase text-[#0D0D0D] mb-10"
          style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "2rem" }}
        >
          Colaboradores
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">

          {/* BENOT — sponsor equipación deportiva */}
          <div className="flex flex-col items-center gap-3">
            <div className="bg-white border border-gray-200 rounded-sm px-6 py-4 flex items-center justify-center w-[240px] h-[110px]">
              <Image
                src="/images/benot-logo.png"
                alt="BENOT — sponsor de equipación deportiva"
                width={240}
                height={115}
                className="object-contain w-full h-full"
              />
            </div>
            <span
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Sponsor Equipación
            </span>
          </div>

          {/* CTA placeholder */}
          <div className="flex flex-col items-center gap-3">
            <div className="border-2 border-dashed border-[#D42020] rounded-sm px-8 py-5 flex items-center justify-center w-[180px] h-[100px]">
              <span
                className="text-[#D42020] text-sm font-bold uppercase tracking-wide text-center"
                style={{ fontFamily: "var(--font-bebas-neue)", fontSize: "1rem" }}
              >
                Tu Marca Aquí
              </span>
            </div>
            <span
              className="text-xs uppercase tracking-widest text-gray-400"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Colabora con nosotros
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Yo Te Empujo Imparables"
            width={64}
            height={36}
            className="object-contain brightness-0 invert"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-xl text-white uppercase"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Imparables
            </span>
            <span
              className="text-sm text-[#D42020] uppercase tracking-widest -mt-1"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Yo Te Empujo
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/yoteempujo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram de Yo Te Empujo"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="https://wa.me/34610097562"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="WhatsApp de Yo Te Empujo"
          >
            <Phone size={20} aria-hidden="true" />
          </a>
          <a
            href="mailto:yoteempujo@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Email de Yo Te Empujo"
          >
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
        <p
          className="text-xs text-gray-600 text-center"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          Built with Claude Web Builder by{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors underline"
          >
            Tododeia
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ──────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SomosImparablesSection />
        <ParaQuienSection />
        <ComoFuncionaSection />
        <ProximaSalidaSection />
        <CTASection />
        <CollaboratorsSection />
      </main>
      <SiteFooter />
    </>
  );
}
