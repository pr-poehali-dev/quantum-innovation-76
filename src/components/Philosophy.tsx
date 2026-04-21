import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Точность в реальном времени",
    description:
      "GPS/ГЛОНАСС трекинг с обновлением раз в секунду. Знайте, где каждая машина прямо сейчас — без задержек и белых пятен на карте.",
  },
  {
    title: "Интеграция с 1С",
    description:
      "Путевые листы формируются автоматически на основе данных о маршруте. Никакой ручной работы: данные из системы мониторинга сразу попадают в 1С.",
  },
  {
    title: "Контроль топлива",
    description:
      "Датчики уровня топлива фиксируют каждый слив и заправку. Экономия до 20% расходов на ГСМ уже в первый месяц работы.",
  },
  {
    title: "Агромониторинг полей",
    description: "Отслеживание техники на полях, контроль обработанных площадей и производительности агрегатов. Полная картина уборочной кампании.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О системе</p>
            <h2 className="text-6xl md:text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Мониторинг с
              <br />
              <HighlightedText>результатом</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="/images/exterior.png"
                alt="Панель управления мониторингом"
                className="opacity-90 relative z-10 w-auto"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Спутниковый мониторинг — это не просто карта с точками. Это инструмент управления, который снижает расходы, исключает приписки и даёт полный контроль над автопарком и техникой.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
