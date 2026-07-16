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
    <div className="flex flex-col rounded-sm bg-white border border-black/5 overflow-hidden h-full">
      <div className="relative h-36 w-full">
        <Image src={image} alt="" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="w-11 h-11 rounded-full bg-navy/10 text-navy flex items-center justify-center mb-4 -mt-9 border-4 border-white bg-white">
          <IconComponent size={20} aria-hidden />
        </div>
        <h3 className="text-base font-bold text-charcoal-dark mb-2">{title}</h3>
        <p className="text-sm text-charcoal-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
