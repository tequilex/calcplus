interface FAQItem {
  question: string
  answer: string
  defaultOpen?: boolean
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="border-t border-border">
      {items.map((item, i) => (
        <details key={i} open={item.defaultOpen} className="border-b border-border group">
          <summary className="list-none flex items-center justify-between gap-4 py-[18px] text-[16px] font-medium text-foreground cursor-pointer select-none hover:text-primary transition-colors duration-120 [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[18px] h-[18px] stroke-muted-foreground shrink-0 transition-transform duration-160 group-open:rotate-180"
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="pb-5 text-[15px] leading-[1.65] text-muted-foreground max-w-[56ch]">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  )
}
