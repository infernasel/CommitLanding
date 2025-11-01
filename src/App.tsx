"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { HeroSection } from "./components/hero-section";
import { WhyCommitSection } from "./components/why-commit-section";
import { ProductModulesSection } from "./components/product-modules-section";
import { CommunitySection } from "./components/community-section";
import { PricingSection } from "./components/pricing-section";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-2xl border-b border-black/10 shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 rounded-2xl bg-gradient-to-br from-black to-black/80 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
              >
                <span className="text-white text-lg">C</span>
              </motion.div>
              <span className="text-xl text-black tracking-tight">Commit</span>
            </motion.div>

            {/* Desktop Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden md:flex items-center gap-10"
            >
              {["Возможности", "Модули", "Цены", "Документация"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="text-black/60 hover:text-black transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex items-center gap-4"
            >
              <button className="text-black/60 hover:text-black transition-colors">
                Войти
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-all shadow-lg hover:shadow-xl"
              >
                Начать бесплатно
              </motion.button>
            </motion.div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-black/5 transition-colors"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-black" />
                ) : (
                  <Menu className="w-6 h-6 text-black" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-6 pb-4"
            >
              <div className="flex flex-col gap-4">
                {["Возможности", "Модули", "Цены", "Документация"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="text-black/60 hover:text-black transition-colors py-2 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <div className="border-t border-black/10 pt-4 flex flex-col gap-3">
                  <button className="text-black/60 hover:text-black transition-colors text-left text-lg">
                    Войти
                  </button>
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors shadow-lg">
                    Начать бесплатно
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection />
        <WhyCommitSection />
        <ProductModulesSection />
        <CommunitySection />
        <PricingSection />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            {/* Brand */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 mb-6 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-br from-white to-white/80 flex items-center justify-center shadow-xl"
                >
                  <span className="text-black text-lg">C</span>
                </motion.div>
                <span className="text-xl tracking-tight">Commit</span>
              </motion.div>
              <p className="text-white/60 leading-relaxed text-lg">
                Унифицированная DevOps-платформа для российского рынка
              </p>
            </div>

            {/* Links columns */}
            {[
              {
                title: "Продукт",
                links: ["Возможности", "Интеграции", "Безопасность", "Roadmap"],
              },
              {
                title: "Ресурсы",
                links: ["Документация", "API Reference", "Блог", "Сообщество"],
              },
              {
                title: "Компания",
                links: ["О нас", "Карьера", "Контакты", "Партнёры"],
              },
            ].map((column, index) => (
              <div key={column.title}>
                <h4 className="mb-6 text-white">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-white transition-colors text-lg group inline-flex items-center gap-2"
                      >
                        {link}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-lg">© 2025 Commit. Все права защищены.</p>
            <div className="flex gap-10">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-lg">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-lg">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
