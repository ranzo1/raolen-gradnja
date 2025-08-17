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
      <select
        defaultValue={localActive}
        className="block w-full px-4 py-2 bg-white text-black rounded-md shadow-sm"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="sr">{t("serbian")}</option>
        <option value="en">{t("english")}</option>
        <option value="ru">{t("russian")}</option>
      </select>
    </label>
  );
}
