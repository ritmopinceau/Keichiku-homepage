"use client";

import { useMemo, useState } from "react";
import PropertyCard from "@/components/cards/PropertyCard";
import { properties } from "@/data/properties";
import type { PropertyDealType } from "@/data/types";

const SALE_PRICE_BANDS = [
  { label: "指定なし", min: 0, max: Infinity },
  { label: "〜2,000万円", min: 0, max: 20000000 },
  { label: "2,000〜3,000万円", min: 20000000, max: 30000000 },
  { label: "3,000〜4,000万円", min: 30000000, max: 40000000 },
  { label: "4,000万円〜", min: 40000000, max: Infinity },
];

const RENT_PRICE_BANDS = [
  { label: "指定なし", min: 0, max: Infinity },
  { label: "〜5万円", min: 0, max: 50000 },
  { label: "5〜10万円", min: 50000, max: 100000 },
  { label: "10〜15万円", min: 100000, max: 150000 },
  { label: "15万円〜", min: 150000, max: Infinity },
];

export default function PropertiesListClient() {
  const [dealType, setDealType] = useState<PropertyDealType>("sale");
  const [propertyType, setPropertyType] = useState("すべて");
  const [location, setLocation] = useState("すべて");
  const [priceBandLabel, setPriceBandLabel] = useState("指定なし");
  const [layout, setLayout] = useState("すべて");

  const dealFiltered = useMemo(() => properties.filter((p) => p.dealType === dealType), [dealType]);

  const propertyTypeOptions = useMemo(
    () => ["すべて", ...Array.from(new Set(dealFiltered.map((p) => p.propertyType)))],
    [dealFiltered]
  );
  const locationOptions = useMemo(
    () => ["すべて", ...Array.from(new Set(dealFiltered.map((p) => p.location)))],
    [dealFiltered]
  );
  const layoutOptions = useMemo(
    () => ["すべて", ...Array.from(new Set(dealFiltered.map((p) => p.layout).filter((l) => l !== "-")))],
    [dealFiltered]
  );
  const priceBands = dealType === "sale" ? SALE_PRICE_BANDS : RENT_PRICE_BANDS;
  const activeBand = priceBands.find((b) => b.label === priceBandLabel) ?? priceBands[0];

  const filtered = useMemo(() => {
    return dealFiltered.filter((p) => {
      if (propertyType !== "すべて" && p.propertyType !== propertyType) return false;
      if (location !== "すべて" && p.location !== location) return false;
      if (layout !== "すべて" && p.layout !== layout) return false;
      if (p.priceValue < activeBand.min || p.priceValue >= activeBand.max) return false;
      return true;
    });
  }, [dealFiltered, propertyType, location, layout, activeBand]);

  function handleDealTypeChange(next: PropertyDealType) {
    setDealType(next);
    setPropertyType("すべて");
    setLocation("すべて");
    setPriceBandLabel("指定なし");
    setLayout("すべて");
  }

  return (
    <div>
      <div className="flex gap-2 mb-8" role="tablist" aria-label="売買・賃貸の切り替え">
        <button
          type="button"
          role="tab"
          aria-selected={dealType === "sale"}
          onClick={() => handleDealTypeChange("sale")}
          className={`min-h-[52px] flex-1 sm:flex-none sm:px-10 rounded-btn font-semibold text-base transition-all ${
            dealType === "sale" ? "bg-navy text-white" : "bg-white text-charcoal-dark border border-black/10"
          }`}
        >
          売買物件
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={dealType === "rent"}
          onClick={() => handleDealTypeChange("rent")}
          className={`min-h-[52px] flex-1 sm:flex-none sm:px-10 rounded-btn font-semibold text-base transition-all ${
            dealType === "rent" ? "bg-navy text-white" : "bg-white text-charcoal-dark border border-black/10"
          }`}
        >
          賃貸物件
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 bg-greige-light p-7 rounded-card">
        <FilterSelect label="物件種別" value={propertyType} onChange={setPropertyType} options={propertyTypeOptions} />
        <FilterSelect label="エリア" value={location} onChange={setLocation} options={locationOptions} />
        <FilterSelect
          label={dealType === "sale" ? "価格帯" : "賃料"}
          value={priceBandLabel}
          onChange={setPriceBandLabel}
          options={priceBands.map((b) => b.label)}
        />
        <FilterSelect label="間取り" value={layout} onChange={setLayout} options={layoutOptions} />
      </div>

      <p className="text-sm text-charcoal-light mb-4">{filtered.length}件の物件が見つかりました。</p>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-charcoal-light py-10 text-center">条件に合う物件が見つかりませんでした。</p>
      )}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  const id = `filter-${label}`;
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-charcoal-light mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[48px] rounded-btn border border-black/15 bg-white px-3 text-base text-charcoal-dark"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
