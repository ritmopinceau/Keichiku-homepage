import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StrengthCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

/**
 * 「私たちの強み」カード。アイコン+写真+説明文。
 */
export default function StrengthCard({ title, description, icon, image }: StrengthCardProps) {
  const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Building2;

  return (
    <div className="flex flex-col rounded-card bg-white border border-black/5 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full">
      <div className="relative h-40 w-full">
        <Image src={image} alt="" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center mb-5 -mt-10 border-4 border-white shadow-card">
          <IconComponent size={22} aria-hidden />
        </div>
        <h3 className="text-lg font-bold text-charcoal-dark mb-3">{title}</h3>
        <p className="text-base text-charcoal-light leading-loose">{description}</p>
      </div>
    </div>
  );
}
