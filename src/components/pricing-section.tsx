"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Check, Zap, Crown, Building2 } from "lucide-react";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      icon: Zap,
      name: "Free",
      price: "0 ₽",
      description: "Для индивидуалов, Open Source, команд до 5 человек",
      features: [
        "Неограниченные репозитории",
        "500 минут CI/CD",
        "Трекер задач",
        "Wiki и документация",
        "Публичные пакеты",
      ],
      highlighted: false,
      cta: "Начать бесплатно",
      popular: false,
    },
    {
      icon: Crown,
      name: "Standard",
      price: "990 ₽",
      priceNote: "на пользователя/месяц",
      description: "Для растущих команд",
      features: [
        "Все из Free",
        "Неограниченное число пользователей",
        "Расширенный CI/CD",
        "Учет времени (Time Tracking)",
        "Дорожные карты и эпики",
      ],
      highlighted: true,
      cta: "Попробовать Standard",
      popular: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      price: "Индивидуально",
      description: "Для корпораций и 1С",
      features: [
        "Все из Standard",
        "Визуальный Diff 1С",
        "DevSecOps панель",
        "Гарантии локального хранения",
        "Приоритетная поддержка",
      ],
      highlighted: false,
      cta: "Запросить демо",
      popular: false,
    },
  ];

  return (
    <section ref={ref} className="py-40 px-6 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 mb-8 shadow-sm">
            <span className="text-sm text-black/70">Прозрачное ценообразование</span>
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight text-black mb-8 leading-tight">
            Выбирайте<br />свой масштаб
          </h2>
          <p className="text-2xl text-black/50 max-w-2xl mx-auto">
            Начните бесплатно
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className={`relative ${plan.highlighted ? "lg:-mt-8" : ""}`}
              >
                <div
                  className={`relative overflow-hidden rounded-[2rem] backdrop-blur-xl border p-12 h-full transition-all duration-700 ${
                    plan.highlighted
                      ? "bg-black text-white border-black shadow-[0_30px_90px_-20px_rgba(0,0,0,0.3)]"
                      : "bg-white/80 border-black/10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/20"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring" }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                    >
                      <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs shadow-lg">
                        Популярный выбор
                      </div>
                    </motion.div>
                  )}

                  {/* Icon */}
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        plan.highlighted
                          ? "bg-white/20 backdrop-blur-xl"
                          : "bg-gradient-to-br from-slate-100 to-slate-50 border border-black/10"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          plan.highlighted ? "text-white" : "text-black/70"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Header */}
                  <div className="mb-10">
                    <h3
                      className={`text-3xl mb-3 tracking-tight ${
                        plan.highlighted ? "text-white" : "text-black"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <div className="mb-4">
                      <span
                        className={`text-6xl tracking-tight ${
                          plan.highlighted ? "text-white" : "text-black"
                        }`}
                      >
                        {plan.price}
                      </span>
                      {plan.priceNote && (
                        <div
                          className={`text-sm mt-2 ${
                            plan.highlighted ? "text-white/70" : "text-black/60"
                          }`}
                        >
                          {plan.priceNote}
                        </div>
                      )}
                    </div>
                    <p
                      className={`text-lg ${
                        plan.highlighted ? "text-white/70" : "text-black/60"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 }}
                        className="flex items-start gap-3 group/feature"
                      >
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-transform group-hover/feature:scale-125 ${
                            plan.highlighted ? "text-white" : "text-black/70"
                          }`}
                        />
                        <span
                          className={`text-lg ${
                            plan.highlighted ? "text-white/90" : "text-black/70"
                          }`}
                        >
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className={`w-full rounded-full py-7 text-base transition-all duration-500 ${
                        plan.highlighted
                          ? "bg-white text-black hover:bg-white/90 shadow-lg hover:shadow-xl"
                          : "bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl"
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>

                  {/* Decorative gradient */}
                  {plan.highlighted && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-20 text-center text-white shadow-[0_30px_90px_-20px_rgba(59,130,246,0.4)]"
        >
          {/* Animated background orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <h3 className="text-5xl md:text-6xl tracking-tight mb-8 leading-tight">
              Готовы начать?
            </h3>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Присоединяйтесь к командам, которые уже выбрали Commit для ускорения своей разработки
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-12 py-7 rounded-full shadow-2xl text-base"
                >
                  Начать бесплатно
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-xl border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-12 py-7 rounded-full text-base"
                >
                  Запросить демо
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
