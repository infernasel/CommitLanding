"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GitBranch, MessageCircleQuestion, Package, FileText, CheckCircle2 } from "lucide-react";

export function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: GitBranch,
      title: "Бесшовный импорт",
      description: "Автоматический перенос репозиториев, задач и конвертация пайплайнов с GitLab/GitHub",
      gradient: "from-green-500/10 to-green-600/5",
      color: "green",
      detail: "Один клик",
    },
    {
      icon: MessageCircleQuestion,
      title: "Внутренний Q&A",
      description: "База знаний в формате «Вопрос-Ответ» для вашей команды",
      gradient: "from-blue-500/10 to-blue-600/5",
      color: "blue",
      detail: "Полнотекстовый поиск",
    },
    {
      icon: Package,
      title: "Хостинг пакетов",
      description: "Бесплатный хостинг для публичных пакетов (Docker, npm)",
      gradient: "from-purple-500/10 to-purple-600/5",
      color: "purple",
      detail: "Бесплатно",
    },
    {
      icon: FileText,
      title: "Commit Pages",
      description: "Статичные сайты и документация прямо из репозитория",
      gradient: "from-orange-500/10 to-orange-600/5",
      color: "orange",
      detail: "Автодеплой",
    },
  ];

  return (
    <section ref={ref} className="py-40 px-6 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-black/5 to-black/10 backdrop-blur-xl border border-black/10 mb-8 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-sm text-black/70">Миграция и сообщество</span>
          </div>
          <h2 className="text-6xl md:text-7xl tracking-tight text-black mb-8 leading-tight">
            Проще переехать.<br />
            <span className="text-black/50">Проще работать.</span>
          </h2>
          <p className="text-2xl text-black/50 max-w-2xl mx-auto">
            Мы снижаем барьеры входа и обеспечиваем легкую миграцию
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${feature.gradient} backdrop-blur-xl border border-black/10 p-8 h-full transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:border-black/20`}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full bg-${feature.color}-500/20 border border-${feature.color}-200/30 text-xs text-${feature.color}-700 backdrop-blur-xl`}>
                      {feature.detail}
                    </div>
                  </div>

                  {/* Decorative blur */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${feature.color}-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className="mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-xl flex items-center justify-center shadow-lg border border-${feature.color}-200/30`}
                    >
                      <Icon className={`w-8 h-8 text-${feature.color}-600`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl text-black mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-black/60 leading-relaxed mb-6">{feature.description}</p>

                  {/* Decorative line */}
                  <div className={`w-12 h-1 rounded-full bg-${feature.color}-500/30 group-hover:w-full transition-all duration-500`} />

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-black/60 mb-6">
            Более 1000 команд уже используют Commit
          </p>
          <div className="flex items-center justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 border border-black/10 flex items-center justify-center"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.1 }}
              className="text-sm text-black/40 ml-2"
            >
              и ещё сотни других
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
