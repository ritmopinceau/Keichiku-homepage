import type { FlowStep } from "@/data/types";

interface FlowStepsProps {
  steps: FlowStep[];
  note?: string;
}

/**
 * ご相談から完了までの流れ。
 */
export default function FlowSteps({ steps, note }: FlowStepsProps) {
  return (
    <div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.step}
            className="relative bg-white border border-black/5 rounded-sm p-5 pt-8"
          >
            <span className="absolute -top-4 left-5 w-9 h-9 rounded-full bg-navy text-white text-sm font-bold flex items-center justify-center">
              {step.step}
            </span>
            <h3 className="font-bold text-charcoal-dark mb-1.5">{step.title}</h3>
            <p className="text-xs text-charcoal-light leading-relaxed">{step.description}</p>
          </li>
        ))}
      </ol>
      {note && <p className="mt-6 text-xs md:text-sm text-charcoal-light">※ {note}</p>}
    </div>
  );
}
