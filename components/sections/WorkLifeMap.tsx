import type { WorkLifeAreaItem } from "@/data/workAndLife";

interface WorkLifeMapProps {
  centralArea: WorkLifeAreaItem[];
  dayTrip: WorkLifeAreaItem[];
  centerLabel: string;
}

/**
 * 西淀川区を中心とした簡易模式図。実際の縮尺ではなく、位置関係と所要時間が
 * 直感的に伝わることを優先したイラストマップ。centralArea/dayTrip の並び順は
 * data/workAndLife.ts の配列順(梅田→なんば→心斎橋→新大阪 / 京都→神戸→奈良→USJ)
 * と対応させている。
 */
const centralPositions = [
  { x: 175, y: 128 }, // 梅田
  { x: 195, y: 205 }, // なんば・道頓堀
  { x: 222, y: 172 }, // 心斎橋
  { x: 172, y: 55 }, // 新大阪
];

const dayTripPositions = [
  { x: 335, y: 48 }, // 京都
  { x: 28, y: 188 }, // 神戸
  { x: 342, y: 252 }, // 奈良
  { x: 68, y: 235 }, // USJ
];

export default function WorkLifeMap({ centralArea, dayTrip, centerLabel }: WorkLifeMapProps) {
  const center = { x: 92, y: 168 };

  return (
    <svg viewBox="0 0 400 300" className="w-full h-auto" role="img" aria-label={`${centerLabel}を中心とした位置関係の模式図`}>
      {centralArea.map((item, index) => {
        const pos = centralPositions[index];
        if (!pos) return null;
        return (
          <line
            key={`line-central-${index}`}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke="currentColor"
            className="text-black/15"
            strokeWidth={1.5}
            strokeDasharray="4 4"
          />
        );
      })}
      {dayTrip.map((item, index) => {
        const pos = dayTripPositions[index];
        if (!pos) return null;
        return (
          <line
            key={`line-daytrip-${index}`}
            x1={center.x}
            y1={center.y}
            x2={pos.x}
            y2={pos.y}
            stroke="currentColor"
            className="text-black/10"
            strokeWidth={1.5}
            strokeDasharray="4 4"
          />
        );
      })}

      {/* 中心: 西淀川区 */}
      <circle cx={center.x} cy={center.y} r={9} className="fill-navy" />
      <circle cx={center.x} cy={center.y} r={14} className="fill-none stroke-navy" strokeWidth={1.5} />
      <text x={center.x} y={center.y - 20} textAnchor="middle" className="fill-navy text-[13px] font-bold">
        {centerLabel}
      </text>

      {centralArea.map((item, index) => {
        const pos = centralPositions[index];
        if (!pos) return null;
        return (
          <g key={`central-${index}`}>
            <circle cx={pos.x} cy={pos.y} r={5} className="fill-gold" />
            <text x={pos.x} y={pos.y - 10} textAnchor="middle" className="fill-charcoal-dark text-[11px] font-semibold">
              {item.title}
            </text>
            <text x={pos.x} y={pos.y + 16} textAnchor="middle" className="fill-gold-dark text-[10px] font-bold">
              {item.time}
            </text>
          </g>
        );
      })}

      {dayTrip.map((item, index) => {
        const pos = dayTripPositions[index];
        if (!pos) return null;
        return (
          <g key={`daytrip-${index}`}>
            <circle cx={pos.x} cy={pos.y} r={5} className="fill-navy/60" />
            <text x={pos.x} y={pos.y - 10} textAnchor="middle" className="fill-charcoal-dark text-[11px] font-semibold">
              {item.title}
            </text>
            <text x={pos.x} y={pos.y + 16} textAnchor="middle" className="fill-navy-light text-[10px] font-bold">
              {item.time}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
