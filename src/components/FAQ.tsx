import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько времени занимает подключение?",
    answer:
      "Стандартное подключение занимает от 1 до 3 рабочих дней. Оборудование устанавливается на технику нашим специалистом, система настраивается и проверяется. Уже на следующий день после установки вы видите технику на карте.",
  },
  {
    question: "Как работает интеграция с 1С?",
    answer:
      "Система автоматически передаёт данные о маршрутах, пробеге и расходе топлива в 1С:Предприятие. Путевые листы формируются в соответствии с требованиями Минтранса без ручного ввода. Поддерживаются 1С:Бухгалтерия, 1С:УТ и 1С:ERP.",
  },
  {
    question: "Как точно измеряется расход топлива?",
    answer:
      "Используем датчики уровня топлива с погрешностью до 1%. Датчик монтируется в бак и передаёт данные в реальном времени. Система автоматически фиксирует заправки и сливы, формирует отчёты по расходу на 100 км.",
  },
  {
    question: "Что такое агромониторинг полей?",
    answer:
      "Специализированный модуль для сельхозтехники. Отслеживает фактически обработанные площади, выявляет перекрытия и пропуски, контролирует производительность агрегатов. Данные выгружаются в виде карт полей и сводных отчётов по кампании.",
  },
  {
    question: "В каких регионах работаете?",
    answer:
      "Работаем по всей России. Монтажные бригады есть в большинстве регионов. Для удалённых районов организуем выезд выездного специалиста или помогаем с самостоятельной установкой с видеоинструкцией.",
  },
  {
    question: "Как начать работу?",
    answer:
      "Оставьте заявку или позвоните нам — согласуем удобное время для осмотра техники и расчёта стоимости. Первые 14 дней — бесплатный тестовый период без обязательств.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
