import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Gamepad2, 
  Monitor, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  ChevronDown,
  Info,
  CreditCard,
  Zap,
  ShoppingCart,
  MessageSquare,
  FileText,
  DollarSign,
  Plus,
  Minus,
  Star,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { translations } from './translations';

// --- Constants ---
const PRIMARY_COLOR = "#f97316"; // Bright Orange

// --- Components ---

const PolicyModal = ({ isOpen, onClose, policyData }: { isOpen: boolean, onClose: () => void, policyData: any }) => {
  if (!isOpen || !policyData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-10 max-h-[80vh] overflow-y-auto custom-scrollbar"
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-orange-500 transition-colors">
          <X size={24} />
        </button>
        
        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-10 border-b border-white/5 pb-6">
          {policyData.title}
        </h2>
        
        <div className="space-y-10">
          {policyData.sections.map((section: any, i: number) => (
            <div key={i} className="space-y-3">
              <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] font-mono leading-none">
                {section.subtitle}
              </h4>
              <p className="text-white/40 text-sm font-medium leading-relaxed italic">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <button 
              onClick={onClose}
              className="bg-white text-black px-10 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-orange-500 hover:text-white"
            >
              Close Policy
            </button>
        </div>
      </motion.div>
    </div>
  );
};

const MarketModal = ({ isOpen, onClose, lang }: { isOpen: boolean, onClose: () => void, lang: 'id' | 'en' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
        
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-orange-500 transition-colors">
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
          Select <span className="text-orange-500">Platform</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-4">
          <a 
            href="https://id.shp.ee/xR3YhRQT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#ee4d2d]/20 rounded-xl flex items-center justify-center text-[#ee4d2d]">
                <ShoppingCart size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-white/40 uppercase tracking-widest">Marketplace</p>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight">Shopee Store</h3>
              </div>
            </div>
            <ArrowRight size={20} className="text-white/20 group-hover:translate-x-2 group-hover:text-orange-500 transition-all" />
          </a>

          <a 
            href="https://discord.gg/hook-up" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                <MessageSquare size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs font-black text-white/40 uppercase tracking-widest">Marketplace</p>
                <h3 className="text-lg font-black text-white uppercase italic tracking-tight">Discord Server</h3>
              </div>
            </div>
            <ArrowRight size={20} className="text-white/20 group-hover:translate-x-2 group-hover:text-indigo-500 transition-all" />
          </a>
        </div>

        <p className="mt-8 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-center">
          {lang === 'id' ? 'Klik untuk membuka tab baru' : 'Click to open in a new tab'}
        </p>
      </motion.div>
    </div>
  );
};

const SupportModal = ({ isOpen, onClose, lang }: { isOpen: boolean, onClose: () => void, lang: 'id' | 'en' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-2xl p-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-transparent opacity-50"></div>
        
        <button onClick={onClose} className="absolute top-8 right-8 text-white/20 hover:text-orange-500 transition-colors">
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-8 leading-tight">
          Contact <span className="text-orange-500">Admin</span>
        </h2>
        
        <div className="space-y-4">
          {[
            { name: 'Admin 1', tag: 'admin#1234' },
            { name: 'Admin 2', tag: 'hookup#1123' }
          ].map((admin, i) => (
            <div 
              key={i}
              className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 group transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-black text-white/40 uppercase tracking-widest">{admin.name}</p>
                  <h3 className="text-lg font-black text-white uppercase italic tracking-tight">{admin.tag}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[10px] font-black text-white/20 uppercase tracking-[0.2em] text-center leading-relaxed">
          {lang === 'id' ? 'Silakan hubungi admin di atas melalui Discord' : 'Please contact the admins above via Discord'}
        </p>
      </motion.div>
    </div>
  );
};

const Navbar = ({ lang, setLang, onContactClick, onBrowseClick }: { lang: 'id' | 'en', setLang: (l: 'id' | 'en') => void, onContactClick: () => void, onBrowseClick: () => void }) => {
  const t = translations[lang];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 py-5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <a href="/" className="flex items-center group">
          <img 
            src="http://bit.ly/4t7brXb" 
            className="h-12 w-auto object-contain brightness-110" 
            alt="Hook Up Logo"
            referrerPolicy="no-referrer"
          />
        </a>
        
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
          <button onClick={onBrowseClick} className="hover:text-orange-500 transition-colors uppercase">{t.nav.products}</button>
          <button onClick={onBrowseClick} className="hover:text-orange-500 transition-colors uppercase">{t.nav.topUp}</button>
          <button onClick={onContactClick} className="hover:text-orange-500 transition-colors uppercase">{t.nav.track}</button>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
             <button onClick={() => setLang('id')} className={`text-[9px] font-black transition-all ${lang === 'id' ? 'text-orange-500' : 'text-white/20 hover:text-white'}`}>ID</button>
             <div className="w-[1px] h-3 bg-white/10"></div>
             <button onClick={() => setLang('en')} className={`text-[9px] font-black transition-all ${lang === 'en' ? 'text-orange-500' : 'text-white/20 hover:text-white'}`}>EN</button>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-orange-500/20">
             Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ lang, onBrowseClick, onContactClick }: { lang: 'id' | 'en', onBrowseClick: () => void, onContactClick: () => void }) => {
  const t = translations[lang];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-orange-500/30 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-12">
             <Star size={12} fill="currentColor" />
             {t.Hero.badge}
          </div>
          
          <div className="flex justify-center mb-10">
            <img 
              src="http://bit.ly/4t7brXb" 
              className="h-32 md:h-56 w-auto object-contain brightness-110" 
              alt="HOOK UP Logo"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-white/30 text-lg md:text-xl font-medium mb-16 max-w-3xl mx-auto tracking-tight leading-relaxed">
            {t.Hero.subtitle}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button 
              onClick={onBrowseClick}
              className="bg-white text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-orange-500 hover:text-white active:scale-95 shadow-xl shadow-white/5"
            >
              {t.Hero.browse}
            </button>
            <button 
              onClick={onContactClick}
              className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all hover:bg-white/10 flex items-center gap-2"
            >
              <MessageSquare size={16} className="text-orange-500" />
              {t.Hero.discord}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BentoGrid = ({ lang }: { lang: 'id' | 'en' }) => {
  const t = translations[lang];

  return (
    <section className="bg-black py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
             <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-6 italic underline decoration-orange-500/30">Premium Collection</h4>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase">{t.products.title}</h2>
           </div>
           <p className="text-white/30 text-sm md:text-base max-w-xs italic leading-relaxed">
             {t.products.subtitle}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[750px]">
          {/* Main Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-all"></div>
            <div className="relative z-10">
              <Zap className="text-orange-500 mb-8" size={40} />
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Nitro & Accounts</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                {lang === 'id' 
                  ? 'Dapatkan akses premium dengan harga miring. Kami menyediakan layanan terbaik untuk kebutuhan digital harian Anda dengan proses yang dijamin legal.' 
                  : 'Get premium access at the lowest prices. We provide the best services for your daily digital needs with guaranteed legal processes.'}
              </p>
              
              <div className="space-y-3 border-t border-white/5 pt-8">
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2 font-mono">Our Product Lineup:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Discord Server Boost', best: true },
                    { name: 'Discord Acc', best: false },
                    { name: 'Discord Nitro', best: false },
                    { name: 'Discord Decoration', best: false },
                    { name: 'Minecraft Akun', best: false },
                    { name: 'FiveM', best: true },
                    { name: 'Topup Lainnya', best: false }
                  ].map((p, i) => (
                    <div key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white/50 flex items-center gap-2">
                       {p.name}
                       {p.best && <span className="text-[7px] bg-orange-500 text-white px-1 rounded-sm">BEST</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a 
              href="https://discord.gg/hook-up" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 w-fit text-[10px] font-black text-white uppercase tracking-widest mt-12 flex items-center gap-2 group"
            >
              {lang === 'id' ? 'Lihat Katalog' : 'View Catalog'} <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-orange-500" />
            </a>
          </motion.div>

          {/* Medium Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 flex items-center justify-between group overflow-hidden"
          >
             <div className="max-w-[70%]">
                <h3 className="text-xl font-black text-white uppercase italic tracking-tighter mb-3">Instant Top Up</h3>
                <p className="text-white/30 text-[11px] font-medium leading-relaxed uppercase">
                  {lang === 'id' 
                    ? 'Layanan top up game dan aplikasi super cepat. Kami menjamin harga termurah dari harga pasar dengan proses legal dan aman 100%.' 
                    : 'Super fast game and app top-up service. We guarantee the lowest prices on the market with a legal and 100% safe process.'}
                </p>
             </div>
             <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                <CreditCard size={32} className="text-orange-500 group-hover:scale-110 transition-transform" />
             </div>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-orange-600 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group"
          >
            <ShieldCheck size={32} className="text-white mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Safety First</h3>
            <p className="text-white/70 text-[9px] font-bold uppercase italic">{lang === 'id' ? 'Garansi Aman 100%' : '100% Safe Guarantee'}</p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-center items-center text-center group"
          >
            <Clock size={32} className="text-orange-500 mb-4 group-hover:rotate-12 transition-transform" />
            <h3 className="text-sm font-black text-white uppercase tracking-widest mb-1">Fast Resp</h3>
            <p className="text-white/30 text-[9px] font-bold uppercase">{lang === 'id' ? 'Admin Siaga 24 Jam' : '24/7 Active Admin'}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = ({ lang }: { lang: 'id' | 'en' }) => {
  const t = translations[lang];
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-12">
           <div className="flex-1 min-w-[300px]">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-none italic">
                Trusted By <span className="text-orange-500">Thousands</span>
              </h2>
              <p className="text-white/20 text-sm max-w-md uppercase tracking-tight font-bold">
                 Hook up telah melayani ribuan pelanggan sejak awal berdiri dengan tingkat kepuasan di atas 99%.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-10">
              <div>
                <div className="text-5xl font-black text-white mb-2 italic">5K+</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">{t.stats.vouchers}</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2 italic">2018</div>
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">ESTABLISHED</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = ({ lang }: { lang: 'id' | 'en' }) => {
  const t = translations[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#050505] py-40 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-6 italic">Customer Center</h4>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-4">FAQ</h2>
          <p className="text-white/20 text-sm font-bold uppercase">{t.faq.title}</p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, i) => (
            <div key={i} className={`border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 ${active === i ? 'bg-white/5 border-orange-500/20 shadow-2xl shadow-orange-500/5' : 'bg-transparent'}`}>
              <button 
                onClick={() => setActive(active === i ? -1 : i)}
                className="w-full px-10 py-8 flex items-center justify-between text-left"
              >
                <span className={`text-base font-black uppercase tracking-tighter transition-colors ${active === i ? 'text-orange-500 italic' : 'text-white/60'}`}>{item.q}</span>
                <ChevronDown size={20} className={`text-white/20 transition-transform duration-500 ${active === i ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-10 pb-10"
                  >
                    <div className="h-[1px] w-full bg-white/5 mb-8"></div>
                    <p className="text-white/40 text-[13px] leading-relaxed font-medium uppercase tracking-tight italic">
                       {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CustomFooter = ({ lang, onPolicyClick }: { lang: 'id' | 'en', onPolicyClick: (p: 'tos' | 'privacy' | 'refund') => void }) => {
  return (
    <footer className="relative bg-black py-20 overflow-hidden border-t border-white/5">
      {/* Abstract Background (inspired by Global Grey Digital Market image) */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1200 400" className="opacity-10 stroke-orange-500 fill-none">
          <path d="M0,200 L150,150 L300,250 L450,180 L600,300 L750,150 L900,200 L1200,100" strokeWidth="0.5" />
          <path d="M0,100 L100,50 L250,100 L400,200 L550,100 L700,250 L1000,50 L1200,100" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="2" fill="currentColor" />
          <circle cx="450" cy="180" r="2" fill="currentColor" />
          <circle cx="600" cy="300" r="2" fill="currentColor" />
          <circle cx="900" cy="200" r="2" fill="currentColor" />
          <circle cx="250" cy="100" r="2" fill="currentColor" />
          <circle cx="550" cy="100" r="2" fill="currentColor" />
          <circle cx="1000" cy="50" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-10 mb-10 gap-8">
           <div className="flex items-center">
              <img 
                src="http://bit.ly/4t7brXb" 
                className="h-16 w-auto object-contain" 
                alt="Hook Up Logo"
                referrerPolicy="no-referrer"
              />
           </div>
           
           <div className="flex items-center gap-6">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors group cursor-pointer">
                 <MessageSquare size={18} className="text-white/40 group-hover:text-white" />
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-[11px] font-black text-white/40 uppercase tracking-[0.2em] italic">
           <p>
             Copyright © HOOK UP 2026
           </p>
           <div className="flex flex-wrap items-center justify-center gap-10">
             <button onClick={() => onPolicyClick('tos')} className="hover:text-orange-500 transition-colors uppercase">Terms of Service</button>
             <button onClick={() => onPolicyClick('privacy')} className="hover:text-orange-500 transition-colors uppercase">Privacy Policy</button>
             <button onClick={() => onPolicyClick('refund')} className="hover:text-orange-500 transition-colors uppercase">Refund Policy</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const [activePolicy, setActivePolicy] = useState<'tos' | 'privacy' | 'refund' | null>(null);
  const [isMarketOpen, setIsMarketOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const t = (translations as any)[lang];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-radial-glow"></div>
      </div>
      
      <Navbar lang={lang} setLang={setLang} onContactClick={() => setIsSupportOpen(true)} onBrowseClick={() => setIsMarketOpen(true)} />
      
      <Hero lang={lang} onBrowseClick={() => setIsMarketOpen(true)} onContactClick={() => setIsSupportOpen(true)} />

      <BentoGrid lang={lang} />

      <TrustSection lang={lang} />

      <FAQ lang={lang} />

      <CustomFooter lang={lang} onPolicyClick={setActivePolicy} />

      <AnimatePresence>
        {activePolicy && (
          <PolicyModal 
            isOpen={!!activePolicy} 
            onClose={() => setActivePolicy(null)} 
            policyData={t.policies[activePolicy]} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMarketOpen && (
          <MarketModal 
            isOpen={isMarketOpen} 
            onClose={() => setIsMarketOpen(false)} 
            lang={lang}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSupportOpen && (
          <SupportModal 
            isOpen={isSupportOpen} 
            onClose={() => setIsSupportOpen(false)} 
            lang={lang}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
