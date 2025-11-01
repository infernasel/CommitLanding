"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Bot, Building2, Sparkles } from "lucide-react";

export function WhyCommitSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Bot,
      badge: "Технологическое лидерство",
      title: "@coder AI: Не помощник, а автономный разработчик",
      description:
        "Commit интегрирует @coder — самый продвинутый AI-агент, который самостоятельно планирует, генерирует код, пишет тесты и проводит ревью.",
      highlights: [
        "Контроль в SaaS-среде",
        "Код не используется для обучения моделей",
        "Генерация тестов",
        "Обнаружение багов",
      ],
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      accentColor: "blue",
      stat: "AI",
      statLabel: "автономный",
    },
    {
      icon: Building2,
      badge: "Enterprise для России",
      title: "Впервые: Полный DevOps для 1С",
      description:
        "Мы устраняем главную боль российского рынка. Commit — единственная платформа, которая превращает работу с 1С в удобный Git-процесс.",
      highlights: [
        "Визуальный Diff 1С",
        "Шаблоны CI/CD для EDT",
        "Поддержка отечественных облаков",
        "Локальное размещение данных",
      ],
      gradient: "from-green-500/10 via-green-500/5 to-transparent",
      accentColor: "green",
      stat: "100%",
      statLabel: "контроль",
    },
  ];

  return (
    <section ref={ref} className="py-40 px-6 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 mb-8 shadow-sm cursor-pointer"
          >
            <span className="text-sm text-black/70">Почему Commit?</span>
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          </motion.div>
          <h2 className="text-6xl md:text-7xl tracking-tight text-black mb-8 leading-tight">
            Технологическое<br />превосходство
          </h2>
          <p className="text-2xl text-black/50 max-w-2xl mx-auto">
            Для российского рынка
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-48">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: index * 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`grid lg:grid-cols-2 gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 shadow-sm cursor-pointer"
                    >
                      <Icon className="w-4 h-4 text-black/60" />
                      <span className="text-sm text-black/70">{feature.badge}</span>
                    </motion.div>
                  </div>

                  <h3 className="text-5xl md:text-6xl tracking-tight text-black mb-8 leading-[1.1]">
                    {feature.title}
                  </h3>

                  <p className="text-xl md:text-2xl text-black/60 mb-12 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4">
                    {feature.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.3 + i * 0.1 + 0.3 }}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${feature.accentColor}-500 group-hover:scale-150 transition-transform`} />
                        <span className="text-lg text-black/70 group-hover:text-black transition-colors">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual with stat */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                  className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-black/10 p-16 aspect-square flex items-center justify-center shadow-2xl shadow-black/5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                  style={{ perspective: 1000 }}
                >
                  {/* Large stat in background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                      className="text-[20rem] leading-none"
                      style={{
                        background: `linear-gradient(135deg, ${feature.accentColor === 'blue' ? '#3b82f6' : '#22c55e'}, transparent)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {feature.stat}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className={`w-32 h-32 rounded-3xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl shadow-xl flex items-center justify-center mb-8 border border-${feature.accentColor}-200/50`}
                    >
                      <Icon className={`w-16 h-16 text-${feature.accentColor}-600`} />
                    </motion.div>

                    {/* Stat display */}
                    <div className="text-center">
                      <div className={`text-6xl text-${feature.accentColor}-600 mb-2`}>
                        {feature.stat}
                      </div>
                      <div className="text-lg text-black/60">{feature.statLabel}</div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className={`absolute top-10 right-10 w-20 h-20 bg-${feature.accentColor}-500/20 rounded-full blur-2xl`} />
                  <div className={`absolute bottom-10 left-10 w-32 h-32 bg-${feature.accentColor}-500/10 rounded-full blur-3xl`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
