"use client";

import { useMemo } from "react";
import { useLocale } from "@/components/layout/locale-provider";
import { getLocalizedContent } from "@/lib/localized-content";
import { cn } from "@/lib/utils";

interface ProfileFormProps {
  profile: {
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    country: string;
    address1: string;
    city: string;
    state: string;
    postcode: string;
  };
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const countries = [
  "JP", "US", "GB", "CA", "AU",
  "KR", "CN", "TW", "HK", "SG",
  "TH", "VN", "PH", "MY", "ID",
  "IN", "FR", "DE", "IT", "ES",
  "NL", "SE", "NO", "DK", "CH",
  "BR", "MX", "AR", "RU", "ZZ",
];

const otherLabelMap: Record<string, string> = {
  en: "Other",
  ja: "その他",
  ko: "기타",
  "zh-CN": "其他",
  "zh-TW": "其他",
  th: "อื่นๆ",
};

export function ProfileForm({ profile, onChange, errors }: ProfileFormProps) {
  const { locale } = useLocale();
  const copy = getLocalizedContent(locale).ticket.profile;
  const countryNames = useMemo(() => {
    const displayNames = new Intl.DisplayNames([locale], { type: "region" });
    return countries.map((code) => ({
      code,
      label:
        code === "ZZ"
          ? otherLabelMap[locale] ?? otherLabelMap.en
          : displayNames.of(code) ?? code,
    }));
  }, [locale]);

  const inputClass = (field: string) =>
    cn(
      "w-full px-4 py-3 border text-sm transition-colors focus:outline-none",
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-skytree-border focus:border-skytree-gold"
    );

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
            {copy.lastName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={inputClass("lastName")}
            placeholder={copy.placeholders.lastName}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
            {copy.firstName} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={inputClass("firstName")}
            placeholder={copy.placeholders.firstName}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
          {copy.email} <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={inputClass("email")}
          placeholder={copy.placeholders.email}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
          {copy.phone} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          value={profile.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={inputClass("phone")}
          placeholder={copy.placeholders.phone}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
          {copy.address1} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={profile.address1}
          onChange={(e) => onChange("address1", e.target.value)}
          className={inputClass("address1")}
          placeholder={copy.placeholders.address1}
        />
        {errors.address1 && (
          <p className="text-red-500 text-xs mt-1">{errors.address1}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
            {copy.city} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={profile.city}
            onChange={(e) => onChange("city", e.target.value)}
            className={inputClass("city")}
            placeholder={copy.placeholders.city}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
            {copy.state} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={profile.state}
            onChange={(e) => onChange("state", e.target.value)}
            className={inputClass("state")}
            placeholder={copy.placeholders.state}
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
          {copy.postcode} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={profile.postcode}
          onChange={(e) => onChange("postcode", e.target.value)}
          className={inputClass("postcode")}
          placeholder={copy.placeholders.postcode}
        />
        {errors.postcode && (
          <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>
        )}
      </div>

      <div>
        <label className="block text-xs tracking-wider uppercase text-skytree-gray mb-1.5">
          {copy.country} <span className="text-red-500">*</span>
        </label>
        <select
          value={profile.country}
          onChange={(e) => onChange("country", e.target.value)}
          className={cn(inputClass("country"), "appearance-none bg-white")}
        >
          <option value="">{copy.countryPlaceholder}</option>
          {countryNames.map((country) => (
            <option key={country.code} value={country.code}>
              {country.label}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">{errors.country}</p>
        )}
      </div>
    </div>
  );
}
