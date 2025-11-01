"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Kanban, Shield, Rocket, ArrowUpRight } from "lucide-react";

export function ProductModulesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      icon: Kanban,
      title: "Управление проектами",
      subtitle: "От эпика до деплоя",
      description:
        "Полноценный инструмент для менеджеров, полностью интегрированный с кодом.",
      features: [
        "Дорожные карты",
        "Эпики и инициативы",
        "Спринты",
        "Учет времени",
      ],
      gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Центр безопасности",
      subtitle: "Комплексный контроль для CISO",
      description:
        "Автоматизация безопасности для крупных компаний и госсектора.",
      features: [
        "Единый дашборд уязвимостей",
        "Сканирование секретов",
        "Анализ уязвимых библиотек (CVE)",
        "Контроль лицензий",
      ],
      gradient: "from-red-500/10 via-red-500/5 to-transparent",
      color: "red",
    },
    {
      icon: Rocket,
      title: "CI/CD и эксплуатация",
      subtitle: "От сборки к продакшну",
      description:
        "Расширенные возможности CI/CD с управлением эксплуатацией.",
      features: [
        "Локальные раннеры (низкий пинг)",
        "Управление окружениями",
        "Feature flags",
        "Автоматизация деплоя",
      ],
      gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
      color: "blue",
    },
  ];

  return (
    <section ref={ref} className="py-40 px-6 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 mb-8 shadow-sm">
            <span className="text-sm text-black/70">Продуктовые модули</span>
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight text-black mb-8 leading-tight">
            Полный цикл<br />разработки
          </h2>
          <p className="text-2xl text-black/50 max-w-2xl mx-auto">
            В одной платформе
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${module.gradient} backdrop-blur-xl border border-black/10 p-10 h-full transition-all duration-700 hover:shadow-[0_30px_90px_-20px_rgba(0,0,0,0.15)] hover:border-black/20`}
                >
                  {/* Decorative blur */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${module.color}-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Icon */}
                  <div className="mb-10 relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl flex items-center justify-center shadow-lg border border-${module.color}-200/30 group-hover:shadow-xl transition-shadow duration-500`}
                    >
                      <Icon className={`w-10 h-10 text-${module.color}-600`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="mb-8">
                    <h3 className="text-3xl text-black mb-3 tracking-tight">{module.title}</h3>
                    <p className="text-lg text-black/60 mb-6">{module.subtitle}</p>
                    <p className="text-black/60 leading-relaxed">
                      {module.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {module.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 }}
                        className="flex items-center gap-3 group/feature cursor-pointer"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${module.color}-500 group-hover/feature:scale-150 transition-transform`} />
                        <span className="text-sm text-black/70 group-hover/feature:text-black transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Link */}
                  <div className={`flex items-center text-${module.color}-600 group-hover:translate-x-2 transition-transform duration-300`}>
                    <span className="text-sm">Узнать больше</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>

                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
