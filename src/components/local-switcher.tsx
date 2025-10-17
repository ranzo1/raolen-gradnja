"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const t = useTranslations("LocalsDropdown");

  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      // uzmi trenutnu putanju
      const currentPath = window.location.pathname; // npr. "/sr/apartments/3"
      const segments = currentPath.split("/").filter(Boolean); // ["sr", "apartments", "3"]

      // zameni prvi segment (lokal) sa novim jezikom
      if (segments.length > 0) {
        segments[0] = nextLocale;
      } else {
        segments.unshift(nextLocale);
      }

      const newPath = "/" + segments.join("/"); // napravi novu putanju
      router.replace(newPath);
    });
  };

  return (
    <label className="relative inline-block">
      <p className="sr-only">change language</p>
      <div className="relative w-full">
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          disabled={isPending}
          aria-label="Language"
          className="
      peer block w-full px-4 py-2 pl-4 pr-8 text-sm text-black
      rounded-md border border-gray-300 bg-white shadow-sm
      appearance-none
      transition-[box-shadow,border-color] duration-200
      focus:outline-none focus:ring-4 focus:ring-gold/30 focus:border-gold
      hover:border-gray-400
      disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
    "
        >
          <option value="sr">{t("serbian")}</option>
          <option value="en">{t("english")}</option>
          <option value="ru">{t("russian")}</option>
        </select>

        {/* Chevron icon, does not affect size */}
        <svg
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 transition-colors"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </label>
  );
}
