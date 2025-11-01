"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Multi-layer animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.2), transparent 50%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.15), transparent 50%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto max-w-7xl px-6 py-32 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
            <span className="text-sm text-black/70">Новая эра DevOps в России</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Main heading with letter animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-6"
        >
          <motion.h1
            className="text-7xl md:text-9xl tracking-tight text-black mb-8 leading-[1.05]"
            style={{
              background: "linear-gradient(180deg, #000 0%, #000 70%, rgba(0,0,0,0.6) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Commit
          </motion.h1>
          <p className="text-2xl md:text-5xl text-black/70 max-w-4xl mx-auto leading-tight tracking-tight">
            Единая DevOps-платформа.<br />
            <span className="text-black/50">Автономный AI и локальный Enterprise-стек (SaaS).</span>
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-lg md:text-xl text-black/50 max-w-3xl mx-auto mb-14"
        >
          От хостинга кода до CI/CD, управления проектами и DevSecOps. Платформа развернута как сервис (SaaS) с гарантией суверенитета данных и высокой доступности.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="group bg-black hover:bg-black/90 text-white px-10 py-7 rounded-full text-base shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.3)] transition-all duration-500"
            >
              Начать бесплатно
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/60 backdrop-blur-xl border-black/10 hover:bg-white hover:border-black/20 text-black px-10 py-7 rounded-full text-base shadow-sm hover:shadow-lg transition-all duration-500"
            >
              Запросить демо
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature cards with enhanced visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {/* AI Card */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-xl border border-blue-200/50 p-12 transition-all duration-500 hover:shadow-[0_20px_70px_-15px_rgba(59,130,246,0.3)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-block">
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-xl text-blue-700 border border-blue-300/30 shadow-sm">
                  @coder AI
                </div>
              </div>
              <h3 className="mb-5 text-3xl text-black tracking-tight">
                Автономное кодирование
              </h3>
              <p className="text-black/60 text-lg leading-relaxed">
                AI-агент, который планирует, генерирует код, пишет тесты
                и проводит ревью. Автономное кодирование, экономия ресурсов.
              </p>
              
              <div className="mt-8 flex items-center text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm">Подробнее</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </motion.div>

          {/* On-Premise Card */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-xl border border-slate-200/50 p-12 transition-all duration-500 hover:shadow-[0_20px_70px_-15px_rgba(100,116,139,0.3)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="relative z-10">
              <div className="mb-8 inline-block">
                <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-500/20 to-slate-600/20 backdrop-blur-xl text-slate-700 border border-slate-300/30 shadow-sm">
                  SaaS
                </div>
              </div>
              <h3 className="mb-5 text-3xl text-black tracking-tight">
                Локальное размещение данных
              </h3>
              <p className="text-black/60 text-lg leading-relaxed">
                Интеграция с 1С, Yandex Cloud, VK Cloud. Локальное размещение данных. Полный суверенитет.
              </p>
              
              <div className="mt-8 flex items-center text-slate-600 group-hover:translate-x-2 transition-transform duration-300">
                <span className="text-sm">Подробнее</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-11 rounded-full border-2 border-black/20 flex items-start justify-center p-2 backdrop-blur-sm bg-white/30"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-1.5 h-1.5 rounded-full bg-black/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
