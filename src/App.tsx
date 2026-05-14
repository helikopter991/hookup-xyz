import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Shield, 
  ShoppingCart, 
  CheckCircle2, 
  Users, 
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Cpu,
  Ticket,
  Star,
  Plus,
  X,
  Zap,
  Clock,
  CreditCard,
  ChevronDown,
  Search,
  ExternalLink
} from "lucide-react";

const LOGO_URL = "https://media.discordapp.net/attachments/1498058931665109043/1498059061890125954/HOOK_UP_PNG_1.png?ex=6a063138&is=6a04dfb8&hm=3635f69d4ad98d60a574bfca39da79ac8dd6cf42ce2c1cacb5031fb8dd51dd98&=&format=webp&quality=lossless&width=856&height=856";

type Language = "id" | "en";
type LegalTab = "tos" | "privacy" | "refund" | null;

const translations = {
  id: {
    badge: "MARKETPLACE PLATFORM TERPERCAYA SEJAK 2018",
    heroTitle: "BIKIN TRANSAKSIMU MAKIN SERU",
    heroDesc: "Marketplace ecosystem yang menghubungkan supplier terpercaya dengan buyer serius sejak tahun 2018.",
    joinBtn: "Gabung Marketplace",
    exploreBtn: "Eksplor Produk",
    aboutTitle: "Ekosistem Terpercaya untuk Bisnis Serius",
    aboutText1: "HOOK UP hadir sebagai third-party marketplace & community platform yang mempertemukan vendor terpercaya dengan buyer dalam satu ecosystem yang aman, nyaman, dan terus berkembang.",
    aboutText2: "Sejak berdiri pada tahun 2018, server ini telah berkembang dari sekadar komunitas kecil menjadi marketplace digital dengan berbagai layanan, vendor, automation system, serta workflow yang terus diperbarui mengikuti perkembangan kebutuhan market.",
    kenapaTitle: "TENTANG KAMI",
    kenapaDesc: "HOOK UP hadir sebagai third-party marketplace & community platform yang mempertemukan vendor terpercaya dengan buyer dalam satu ecosystem yang aman, nyaman, dan terus berkembang.\n\nSejak berdiri pada tahun 2018, server ini telah berkembang dari sekadar komunitas kecil menjadi marketplace digital dengan berbagai layanan, vendor, automation system, serta workflow yang terus diperbarui mengikuti perkembangan kebutuhan market.",
    nitroTitle: "NITRO & ACCOUNTS",
    nitroDesc: "Dapatkan akses premium dengan harga miring. Kami menyediakan layanan terbaik untuk kebutuhan digital harian Anda dengan proses yang dijamin legal.",
    instantTitle: "INSTANT TOP UP",
    instantDesc: "LAYANAN TOP UP GAME DAN APLIKASI SUPER CEPAT. KAMI MENJAMIN HARGA TERMURAH DARI HARGA PASAR DENGAN PROSES LEGAL DAN AMAN 100%.",
    safetyTitle: "SAFETY FIRST",
    safetyDesc: "GARANSI AMAN 100%",
    fastTitle: "FAST RESP",
    fastDesc: "ADMIN SIAGA 24 JAM",
    catalogBtn: "LIHAT KATALOG",
    verifiedBadge: "TERVERIFIKASI: SEJAK 2018",
    statsTrust: "Tahun Pengalaman",
    statsVendors: "Vendor Terverifikasi",
    statsUptime: "Sistem Aktif",
    featuresTitle: "KENAPA KAMI",
    featuresSub: "APA YANG ADA DI SINI?",
    feature1Title: "Produk & Layanan Digital",
    feature1Desc: "Akses eksklusif ke berbagai produk digital premium dengan harga kompetitif dan kualitas terjamin.",
    feature2Title: "Ekosistem Vendor Terpercaya",
    feature2Desc: "Bekerja sama hanya dengan vendor yang telah melewati verifikasi ketat untuk keamanan Anda.",
    feature3Title: "Dukungan Tiket & Bantuan",
    feature3Desc: "Layanan bantuan responsif melalui sistem tiket untuk menangani setiap kebutuhan transaksi Anda.",
    feature4Title: "Update & Berita Marketplace",
    feature4Desc: "Informasi real-time mengenai pembaruan sistem dan penawaran terbaru di ecosystem Hook Up.",
    feature5Title: "Otomasi & Alur Kerja Modern",
    feature5Desc: "Sistem cerdas yang memastikan setiap pesanan Anda diproses dengan kecepatan maksimal.",
    feature6Title: "Platform Komunitas",
    feature6Desc: "Hubungkan diri Anda dengan ribuan pengguna lain dalam komunitas digital yang aktif.",
    catalogTitle: "KATALOG PRODUK",
    catalogSearch: "Cari produk...",
    vendorsTitle: "VENDORS",
    vendorsList: [
      { name: "Central Digital", desc: "Pusat layanan produk digital otomatis untuk kebutuhan top up, pulsa, data, e-wallet, dan berbagai produk digital lainnya." },
      { name: "Prime Deals", desc: "Tempat terpercaya untuk mendapatkan produk digital & fisik dengan harga terbaik." },
      { name: "VShop", desc: "Pusat layanan sosial media terpercaya untuk kebutuhan peningkatan followers, likes, views, dan engagement berbagai platform digital dengan sistem otomatis dan cepat." },
      { name: "Core Distributor", desc: "Distribusi impor fisik terpercaya berskala besar" }
    ],
    faqTitle: "PERTANYAAN UMUM",
    faqList: [
      { q: "APAKAH BELANJA DI SINI AMAN?", a: "Tentu saja. Hook Up telah berdiri sejak 2018 dan terus memprioritaskan keamanan serta pelayanan. Semua produk kami dijamin 100% legal dengan jaminan garansi penuh untuk kenyamanan Anda." },
      { q: "METODE PEMBAYARAN APA SAJA YANG TERSEDIA?", a: "Kami menyediakan sistem pembayaran otomatis melalui berbagai pilihan E-Wallet (Dana, OVO, GoPay) serta Bank transfer utama untuk memastikan proses yang cepat dan aman." },
      { q: "BAGAIMANA SISTEM GARANSI DI HOOK UP?", a: "Kami memberikan informasi transparan tentang perlindungan konsumen. Produk berlabel W (Warranty) mendapatkan perlindungan penuh sesuai masa berlaku yang tertera pada deskripsi produk." },
      { q: "BERAPA LAMA PROSES PENGERJAAN PESANAN?", a: "Sebagian besar layanan kami diproses secara otomatis dan instan (kilat). Informasi penanganan spesifik untuk setiap produk dapat Anda temukan pada bagian deskripsi." }
    ],
    footerText: "Didesain dengan ❤️ oleh Hook Up Team.",
    legal: {
      tos: {
        title: "Terms of Service",
        sections: [
          {
            h: "Status Garansi",
            p: "Setiap produk memiliki keterangan: W = Warranty (bergansi), NW = No Warranty (tanpa garansi). Harap membaca deskripsi sebelum membeli."
          },
          {
            h: "Validitas Garansi",
            p: "Garansi hanya berlaku jika tidak ada perubahan data akun, tidak melanggar aturan penggunaan, dan menyertakan bukti valid."
          },
          {
            h: "Masa Garansi",
            p: "Garansi berlaku sesuai deskripsi produk. Lewat masa tersebut = hangus."
          },
          {
            h: "Klaim Garansi",
            p: "Wajib bukti (video / screenshot). Tanpa bukti = ditolak. Proses maksimal 1x24 jam."
          },
          {
            h: "Tanggung Jawab Pembeli",
            p: "Kesalahan pembelian (salah pilih produk / data) bukan tanggung jawab seller."
          },
          {
            h: "Produk Digital",
            p: "Semua produk HOOK UP adalah produk digital dan dikirim setelah pembayaran berhasil. Setelah produk diterima, transaksi dianggap selesai (final)."
          },
          {
            h: "Discord Nitro / Boost",
            p: "Garansi 25 hari setelah boost berhasil. Boost drop -> replace (jika stok tersedia). Garansi hangus jika bot/booster di-kick, permission server diubah, atau server dihapus/diubah."
          },
          {
            h: "Game Currency & Keys",
            p: "Waktu pengiriman tergantung sistem platform. Key dijamin valid saat dikirim. Garansi hangus setelah digunakan atau login berhasil."
          },
          {
            h: "Pembaruan Aturan",
            p: "HOOK UP berhak mengubah TOS kapan saja tanpa pemberitahuan. Order = serius membeli."
          },
          {
            h: "Kebijakan Feedback",
            p: "Tidak ada komplain = transaksi dianggap selesai. Tidak ada respon setelah produk dikirim = dianggap menerima produk dengan baik."
          }
        ]
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            h: "Keamanan Akun",
            p: "Setelah akun diterima, keamanan menjadi tanggung jawab pembeli sepenuhnya."
          },
          {
            h: "Penggunaan Terlarang",
            p: "Dilarang menjual ulang tanpa izin atau menggunakan produk untuk aktivitas ilegal."
          },
          {
            h: "Penanganan Data",
            p: "Kami hanya menyimpan data transaksi untuk keperluan verifikasi garansi dan tidak membagikannya kepada pihak ketiga tanpa izin."
          }
        ]
      },
      refund: {
        title: "Refund Policy",
        sections: [
          {
            h: "Kebijakan Tanpa Refund",
            p: "Produk yang sudah dibeli tidak dapat ditukar atau dikembalikan. Kami tidak menyediakan pengembalian dana penuh dalam kondisi apapun, termasuk garansi atau pembatalan pesanan."
          },
          {
            h: "Refund Sebagian",
            p: "Refund sebagian hanya diberikan jika produk tidak terkirim (berdasarkan kesepakatan tim)."
          },
          {
            h: "Pengecualian Refund",
            p: "Refund tidak berlaku untuk: Salah beli / berubah pikiran, Produk sudah digunakan / redeem, Kesalahan pembeli (email salah, akun tertukar, dll)."
          },
          {
            h: "Kebijakan Chargeback",
            p: "Segala bentuk chargeback / dispute akan mengakibatkan blacklist permanen dan pelaporan fraud ke platform terkait."
          }
        ]
      }
    }
  },
  en: {
    badge: "TRUSTED MARKETPLACE PLATFORM SINCE 2018",
    heroTitle: "MAKE YOUR TRANSACTIONS MORE EXCITING",
    heroDesc: "Marketplace ecosystem that connects trusted suppliers with serious buyers since 2018.",
    joinBtn: "Join Marketplace",
    exploreBtn: "Explore Products",
    aboutTitle: "Reliable Ecosystem for Serious Business",
    aboutText1: "HOOK UP is a third-party marketplace & community platform that connects trusted vendors with buyers in an evolving, secure, and comfortable ecosystem.",
    aboutText2: "Founded in 2018, this server has grown from a small community into a digital marketplace with various services, vendors, automation, and ever-updating workflows following market needs.",
    kenapaTitle: "ABOUT US",
    kenapaDesc: "HOOK UP is a third-party marketplace & community platform that connects trusted vendors with buyers in an evolving, secure, and comfortable ecosystem.\n\nFounded in 2018, this server has grown from a small community into a digital marketplace with various services, vendors, automation, and ever-updating workflows following market needs.",
    nitroTitle: "NITRO & ACCOUNTS",
    nitroDesc: "Get premium access at discounted prices. We provide the best service for your daily digital needs with a guaranteed legal process.",
    instantTitle: "INSTANT TOP UP",
    instantDesc: "SUPER FAST GAME AND APP TOP UP SERVICE. WE GUARANTEE THE LOWEST PRICE FROM THE MARKET WITH 100% LEGAL AND SAFE PROCESS.",
    safetyTitle: "SAFETY FIRST",
    safetyDesc: "100% SAFE WARRANTY",
    fastTitle: "FAST RESP",
    fastDesc: "ADMIN ON STANDBY 24/7",
    catalogBtn: "VIEW CATALOG",
    verifiedBadge: "VERIFIED: SINCE 2018",
    statsTrust: "Years of Trust",
    statsVendors: "Verified Vendors",
    statsUptime: "System Uptime",
    featuresTitle: "WHY CHOOSE US",
    featuresSub: "WHAT'S HERE?",
    feature1Title: "Digital Products & Services",
    feature1Desc: "Exclusive access to various premium digital products with competitive pricing and guaranteed quality.",
    feature2Title: "Trusted Vendor Ecosystem",
    feature2Desc: "Collaborating only with vendors who have passed strict verification for your security.",
    feature3Title: "Ticket Support & Assistance",
    feature3Desc: "Responsive help service through a ticket system to handle every transaction need.",
    feature4Title: "Marketplace Updates & News",
    feature4Desc: "Real-time info on system updates and latest offers in the Hook Up ecosystem.",
    feature5Title: "Automation & Modern Workflow",
    feature5Desc: "Intelligent systems ensuring every order is processed with maximum speed.",
    feature6Title: "Community Platform",
    feature6Desc: "Connect with thousands of other users in an active digital community.",
    catalogTitle: "PRODUCT CATALOG",
    catalogSearch: "Search products...",
    vendorsTitle: "VENDORS",
    vendorsList: [
      { name: "Central Digital", desc: "Automated digital product center for top-ups, pulses, data, e-wallets, and various other digital products." },
      { name: "Prime Deals", desc: "Trusted place to get digital & physical products at the best prices." },
      { name: "VShop", desc: "Trusted social media service center for followers, likes, views, and engagement across digital platforms with fast automated systems." },
      { name: "Core Distributor", desc: "Large-scale trusted physical import distribution." }
    ],
    faqTitle: "GENERAL FAQ",
    faqList: [
      { q: "IS IT SAFE TO SHOP HERE?", a: "Of course. Hook Up has been established since 2018 and consistently prioritizes security and service. All our products are guaranteed 100% legal with full warranty protection for your peace of mind." },
      { q: "WHAT PAYMENT METHODS ARE AVAILABLE?", a: "We provide automated payment systems through various E-Wallets (Dana, OVO, GoPay) and major Bank transfers to ensure a fast and secure process." },
      { q: "HOW DOES THE WARRANTY SYSTEM WORK?", a: "We provide transparent information about consumer protection. Products labeled with W (Warranty) receive full protection according to the period stated in the product description." },
      { q: "HOW LONG DOES THE ORDER PROCESS TAKE?", a: "Most of our services are processed automatically and instantly. Specific handling information for each product can be found in the service description section." }
    ],
    footerText: "Designed with ❤️ by Hook Up Team.",
    legal: {
      tos: {
        title: "Terms of Service",
        sections: [
          {
            h: "Warranty Status",
            p: "Each product includes warranty status: W = Warranty, NW = No Warranty. Please read the product description before purchasing."
          },
          {
            h: "Warranty Validity",
            p: "Warranty is only valid if: No account data has been changed, no misuse or rule violations, and valid proof is provided."
          },
          {
            h: "Warranty Period",
            p: "Warranty applies based on the product description. After the period ends = void."
          },
          {
            h: "Warranty Claim",
            p: "Proof required (video / screenshot). No proof = rejected. Processing time up to 24 hours."
          },
          {
            h: "Buyer Responsibility",
            p: "Any purchasing mistakes (wrong product / incorrect data) are the buyer’s responsibility."
          },
          {
            h: "Digital Product Policy",
            p: "All HOOK UP products are digital and delivered after successful payment. Once delivered, the transaction is considered final."
          },
          {
            h: "Discord Nitro / Boost",
            p: "25-day warranty after boost. Dropped boosts replaced (if stock available). Warranty void if booster is kicked, permissions changed, or server modified/deleted."
          },
          {
            h: "Game Currency & Keys",
            p: "Delivery depends on platform queue. Keys are guaranteed valid at delivery. Warranty valid until successful login/redeem."
          },
          {
            h: "Terms Update",
            p: "HOOK UP reserves the right to update these terms at any time without prior notice. Orders are considered serious purchases."
          },
          {
            h: "Feedback Policy",
            p: "No complaint = transaction considered completed. No response after delivery = accepted delivery in good condition."
          }
        ]
      },
      privacy: {
        title: "Privacy Policy",
        sections: [
          {
            h: "Account Security",
            p: "After delivery, account security becomes the buyer’s responsibility."
          },
          {
            h: "Prohibited Use",
            p: "Strictly prohibited: Reselling without permission, using products for illegal activities."
          },
          {
            h: "Data Protection",
            p: "We only store transaction data for warranty verification and do not share it with third parties without authorization."
          }
        ]
      },
      refund: {
        title: "Refund Policy",
        sections: [
          {
            h: "No Refund Policy",
            p: "All purchased products are non-exchangeable and non-refundable. We do not provide full refunds under any circumstances, including warranty claims or cancellations."
          },
          {
            h: "Partial Refunds",
            p: "Partial refunds only if the product is not delivered (by agreement)."
          },
          {
            h: "Refund Exclusions",
            p: "Refunds do not apply to: Wrong purchase / change of mind, Used/redeemed products, Buyer errors (wrong email, swapped accounts, etc)."
          },
          {
            h: "Chargeback Policy",
            p: "Any chargeback/dispute will result in a permanent blacklist and a fraud report to the platform."
          }
        ]
      }
    }
  }
};

const LegalModal = ({ active, lang, onClose }: { active: LegalTab, lang: Language, onClose: () => void }) => {
  if (!active) return null;
  const content = translations[lang].legal[active];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-20 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="w-full max-w-2xl max-h-full bg-brand-surface border border-white/10 rounded-[32px] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-8 py-6 border-b border-white/5 bg-white/[0.02]">
          <h2 className="text-2xl font-display font-bold text-white">{content.title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/5 transition-colors text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-8 custom-scrollbar legal-modal-content font-inter">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
          <div className="mt-12 p-6 rounded-2xl bg-brand-accent/5 border border-brand-accent/20">
            <p className="text-brand-accent text-xs font-black tracking-widest text-center uppercase m-0">
              {lang === "id" ? "MEMBELI = SETUJU DENGAN ATURAN" : "BUYING = AGREEING TO THE TERMS"}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LanguageSwitcher = ({ current, set }: { current: Language, set: (l: Language) => void }) => (
  <div className="flex bg-black/60 p-1.5 rounded-full border border-white/5 backdrop-blur-xl shadow-2xl">
    <button 
      onClick={() => set("id")}
      className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all text-xs font-bold leading-none ${current === "id" ? "bg-white text-black shadow-xl" : "text-slate-400 hover:text-white"}`}
    >
      <img src="https://flagcdn.com/id.svg" className="w-4 h-3 object-contain rounded-[1px]" /> IND
    </button>
    <button 
      onClick={() => set("en")}
      className={`flex items-center gap-2 px-5 py-2 rounded-full transition-all text-xs font-bold leading-none ${current === "en" ? "bg-white text-black shadow-xl" : "text-slate-400 hover:text-white"}`}
    >
      <img src="https://flagcdn.com/us.svg" className="w-4 h-3 object-contain rounded-[1px]" /> ENG
    </button>
  </div>
);

const Nav = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => (
  <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center bg-brand-bg/60 backdrop-blur-lg border-b border-white/5 pointer-events-none">
    <div className="flex items-center gap-3 pointer-events-auto">
      <img src={LOGO_URL} alt="Logo" className="w-11 h-11 object-contain brightness-125" referrerPolicy="no-referrer" />
    </div>
    <div className="flex items-center gap-4 pointer-events-auto">
      <LanguageSwitcher current={lang} set={setLang} />
      <button className="hidden sm:flex px-7 py-3 rounded-full bg-brand-secondary text-white text-[13px] font-black hover:brightness-110 shadow-[0_4px_20px_rgba(88,101,242,0.4)] transition-all active:scale-95 leading-none font-display">
        {translations[lang].joinBtn}
      </button>
    </div>
  </nav>
);

const Hero = ({ lang }: { lang: Language }) => (
  <section className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center overflow-hidden grainy-overlay">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-accent/5 blur-[180px] -z-10 rounded-full" />
    
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="nitro-badge-container mb-8"
    >
      <span className="nitro-badge-text">
        <Star size={14} fill="currentColor" className="text-brand-accent" /> {translations[lang].badge}
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="relative"
    >
      <img 
        src={LOGO_URL} 
        alt="Logo" 
        className="w-32 h-32 md:w-52 md:h-52 mb-14 mx-auto drop-shadow-[0_0_50px_rgba(255,115,0,0.35)] animate-float" 
        referrerPolicy="no-referrer" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-accent/20 blur-[80px] -z-10 rounded-full opacity-50" />
    </motion.div>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="max-w-xl text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-medium font-inter"
    >
      {translations[lang].heroDesc}
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-5"
    >
      <button className="group relative flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-brand-accent text-white font-black text-lg hover:shadow-[0_0_40px_rgba(255,115,0,0.5)] transition-all active:scale-95 font-display">
        <span className="relative z-10 flex items-center gap-3">
          {translations[lang].exploreBtn} <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      <button className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md font-display">
        {translations[lang].joinBtn}
      </button>
    </motion.div>
  </section>
);

const CatalogModal = ({ lang, onClose }: { lang: Language, onClose: () => void }) => {
  const [search, setSearch] = useState("");
  
  const products = [
    { name: "Discord Nitro (1 Month/1 Year)", category: "Nitro", price: "Starts from Rp 55k", badge: "HOT" },
    { name: "Discord Server Boost (3 Months)", category: "Nitro", price: "Starts from Rp 25k", badge: "BEST" },
    { name: "Spotify Premium (Private)", category: "Apps", price: "Rp 15k", badge: null },
    { name: "Youtube Premium (Family/Private)", category: "Apps", price: "Rp 10k", badge: null },
    { name: "Valorant Points (Indo)", category: "Gaming", price: "Cheap", badge: "FAST" },
    { name: "Mobile Legends Diamonds", category: "Gaming", price: "Instant", badge: "AUTO" },
    { name: "Instagram Followers (HQ)", category: "SMM", price: "Rp 5k/1k", badge: null },
    { name: "TikTok Views & Likes", category: "SMM", price: "Cheapest", badge: null },
    { name: "Hosting CPanel (Litespeed)", category: "Web", price: "Monthly/Yearly", badge: "NEW" },
  ];

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center px-6 py-10 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="w-full max-w-4xl max-h-full bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(255,115,0,0.15)]"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-10 py-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-display font-black text-white italic skew-x-[-3deg] uppercase tracking-tighter">
              {translations[lang].catalogTitle}
            </h2>
          </div>
          
          <div className="relative flex-1 max-w-sm">
            <input 
              type="text" 
              placeholder={translations[lang].catalogSearch}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          </div>

          <button onClick={onClose} className="p-3 rounded-full hover:bg-white/5 transition-colors text-slate-400 self-end md:self-auto">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-10 py-10 custom-scrollbar">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-brand-accent/40 hover:bg-brand-accent/[0.02] transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest">{p.category}</span>
                  {p.badge && (
                    <span className="px-1.5 py-0.5 rounded-[4px] bg-brand-accent text-white text-[8px] font-black tracking-tighter shadow-lg">
                      {p.badge}
                    </span>
                  )}
                </div>
            <div className="flex justify-between items-center group/item transition-all">
              <h4 className="text-white font-bold group-hover:text-brand-accent transition-colors leading-tight">
                {p.name}
              </h4>
              <ExternalLink size={14} className="text-white/20 group-hover/item:text-brand-accent transition-colors" />
            </div>
                <div className="text-slate-500 text-xs font-mono">{p.price}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm italic font-inter">
              {lang === "id" ? "Bukan produk yang Anda cari? Hubungi CS kami." : "Not the product you're looking for? Contact our CS."}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Features = ({ lang, onOpenCatalog }: { lang: Language, onOpenCatalog: () => void }) => {
  const feats = [
    { icon: "📦", title: translations[lang].feature1Title, desc: translations[lang].feature1Desc },
    { icon: "🛡️", title: translations[lang].feature2Title, desc: translations[lang].feature2Desc },
    { icon: "🎫", title: translations[lang].feature3Title, desc: translations[lang].feature3Desc },
    { icon: "📢", title: translations[lang].feature4Title, desc: translations[lang].feature4Desc },
    { icon: "⚙️", title: translations[lang].feature5Title, desc: translations[lang].feature5Desc },
    { icon: "🤝", title: translations[lang].feature6Title, desc: translations[lang].feature6Desc, special: true },
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter uppercase skew-x-[-3deg] text-white">
          {translations[lang].featuresTitle}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feats.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`group relative p-8 rounded-[24px] transition-all duration-500 flex flex-col ${
              f.special 
                ? "bg-[#1a0a0a] border border-[#301010] shadow-[0_20px_50px_rgba(255,62,0,0.05)]" 
                : "bg-[#111111] border border-[#222222] hover:border-[#333333]"
            }`}
          >
            {!f.special ? (
              <>
                <div className="text-3xl mb-6 transform group-hover:scale-105 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 font-display text-white tracking-tight">
                  {f.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium font-inter">
                  {f.desc}
                </p>
              </>
            ) : (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{f.icon}</span>
                    <h3 className="text-lg font-bold font-display text-white tracking-tight">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm font-medium font-inter">
                    {f.desc}
                  </p>
                </div>
                <div className="mt-10">
                  <button 
                    onClick={onOpenCatalog}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#ff3e00] text-white font-bold text-sm tracking-tight hover:brightness-110 transition-all active:scale-95 group/btn"
                  >
                    {translations[lang].joinBtn} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>

  );
};

const About = ({ lang }: { lang: Language }) => {
  return (
    <section className="py-32 px-6 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[48px] p-12 md:p-20 shadow-2xl"
        >
          <div className="max-w-4xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black mb-10 tracking-tighter uppercase skew-x-[-3deg]"
            >
              {translations[lang].kenapaTitle}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl font-medium font-inter whitespace-pre-line leading-relaxed"
            >
              {translations[lang].kenapaDesc}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ lang, setLegal }: { lang: Language, setLegal: (t: LegalTab) => void }) => (
  <footer className="py-16 px-8 bg-brand-bg relative overflow-hidden border-t border-white/5 font-poppins">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center">
            <img src={LOGO_URL} alt="Logo" className="w-12 h-12 hover:scale-110 transition-transform cursor-pointer" referrerPolicy="no-referrer" />
          </div>
          <p className="text-slate-500 text-xs leading-relaxed font-inter italic">
            Marketplace ecosystem that connects trusted suppliers with serious buyers since 2018.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="space-y-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Platform</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Products</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Vendors</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Community</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Support</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Help Center</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Ticket Hub</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-white font-bold text-[10px] uppercase tracking-[0.2em] mb-4">Legal</h4>
            <ul className="space-y-2 font-medium">
              <li><button onClick={() => setLegal("tos")} className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Terms of Service</button></li>
              <li><button onClick={() => setLegal("privacy")} className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Privacy Policy</button></li>
              <li><button onClick={() => setLegal("refund")} className="text-slate-400 hover:text-brand-accent transition-colors text-[13px]">Refund Policy</button></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-white text-[10px] font-display italic tracking-widest uppercase">
          &copy; 2018 - {new Date().getFullYear()} HOOK UP STORE. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6">
          <p className="text-white text-[10px] font-medium font-display">{translations[lang].footerText}</p>
        </div>
      </div>
    </div>
  </footer>
);

const Vendors = ({ lang }: { lang: Language }) => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-24">
      <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter uppercase mb-2">
        {translations[lang].vendorsTitle}
      </h2>
      <div className="h-1.5 w-24 bg-brand-accent mx-auto rounded-full" />
    </div>

    <div className="grid sm:grid-cols-2 gap-8">
      {translations[lang].vendorsList.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="nitro-card p-12 group border border-white/5 hover:border-brand-accent/30 transition-all cursor-default shadow-xl"
        >
          <div className="text-brand-accent font-black text-xs uppercase tracking-[0.4em] mb-6 block">Partner Vendor</div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display text-white group-hover:text-brand-accent transition-colors leading-none tracking-tight">{v.name}</h3>
          <p className="text-slate-400 leading-relaxed text-base font-inter">{v.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const FAQ = ({ lang }: { lang: Language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 max-w-5xl mx-auto font-inter">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter uppercase skew-x-[-3deg]">
          {translations[lang].faqTitle}
        </h2>
      </div>

      <div className="space-y-4">
        {translations[lang].faqList.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[32px] border transition-all duration-500 overflow-hidden ${
                isOpen 
                  ? "bg-white/[0.04] border-white/10 shadow-2xl" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full px-10 py-8 flex items-center justify-between gap-6 text-left"
              >
                <h3 className={`text-lg md:text-xl font-display font-bold transition-colors ${isOpen ? "text-white" : "text-slate-300"}`}>
                  {item.q}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className={`${isOpen ? "text-brand-accent" : "text-slate-500"}`}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-10 pb-10">
                      <p className="text-slate-400 leading-relaxed text-base md:text-lg border-t border-white/5 pt-6">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#020202]">
      {/* High Contrast Orange Ambient Glows */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 120, 0],
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[5%] w-[80%] h-[80%] rounded-full bg-brand-accent/30 blur-[160px]"
      />
      
      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 100, -60, 0],
          opacity: [0.1, 0.25, 0.1],
          scale: [0.8, 1.1, 0.9, 0.8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[20%] -right-[5%] w-[70%] h-[70%] rounded-full bg-brand-secondary/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] left-[25%] w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[180px]"
      />

      {/* Dark Vies & Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,62,0,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)] px-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,62,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,62,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>("id");
  const [activeLegal, setActiveLegal] = useState<LegalTab>(null);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-brand-accent selection:text-white relative overflow-hidden">
      <AnimatedBackground />
      <Nav lang={lang} setLang={setLang} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Hero lang={lang} />
          <About lang={lang} />
          <Vendors lang={lang} />
          <Features lang={lang} onOpenCatalog={() => setIsCatalogOpen(true)} />
          <FAQ lang={lang} />
        </motion.main>
      </AnimatePresence>

      <Footer lang={lang} setLegal={setActiveLegal} />

      <AnimatePresence>
        {activeLegal && (
          <LegalModal 
            active={activeLegal} 
            lang={lang} 
            onClose={() => setActiveLegal(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCatalogOpen && (
          <CatalogModal 
            lang={lang} 
            onClose={() => setIsCatalogOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
