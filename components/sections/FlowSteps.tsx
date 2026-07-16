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
      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.step}
            className="relative bg-white border border-black/5 rounded-card shadow-card p-7 pt-10"
          >
            <span className="absolute -top-5 left-7 w-10 h-10 rounded-full bg-navy text-white text-base font-bold flex items-center justify-center">
              {step.step}
            </span>
            <h3 className="font-bold text-charcoal-dark text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-charcoal-light leading-loose">{step.description}</p>
          </li>
        ))}
      </ol>
      {note && <p className="mt-8 text-sm text-charcoal-light leading-relaxed">※ {note}</p>}
    </div>
  );
}
