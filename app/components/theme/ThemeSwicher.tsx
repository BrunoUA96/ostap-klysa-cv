"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Listbox, Transition } from "@headlessui/react";
import { PiMonitor } from "react-icons/pi";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export const ThemeSwicher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeHandler = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Listbox value={theme} onChange={themeHandler}>
      <div className="absolute top-5 right-5 mt-1 z-20">
        <Listbox.Button className="relative animate-pulse flex items-center gap-2 w-full cursor-pointer rounded-lg bg-sky-300/75 dark:bg-slate-700 dark:text-white text-slate-900 p-2 shadow-md focus:outline-none sm:text-sm">
          <span className="text-xl">
            {theme === "dark" ? (
              <MdDarkMode />
            ) : theme === "system" ? (
              <PiMonitor />
            ) : (
              <CiLight />
            )}
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-1 w-full overflow-auto rounded-md bg-slate-100 dark:bg-slate-700/90 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            <OptionList value="dark">
              <MdDarkMode />
            </OptionList>
            <OptionList value="light">
              <CiLight />
            </OptionList>
            <OptionList value="system">
              <PiMonitor />
            </OptionList>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

const OptionList = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => {
  return (
    <Listbox.Option
      className={({ active }) =>
        `relative cursor-pointer select-none p-2 ${
          active
            ? "bg-slate-400/30 dark:bg-sky-500/30 dark:text-sky-500 text-slate-900"
            : "text-gray-900"
        }`
      }
      value={value}>
      {({ selected }) => (
        <span
          className={`flex justify-center truncate text-lg ${
            selected ? "font-medium" : "font-normal"
          }`}>
          {children}
        </span>
      )}
    </Listbox.Option>
  );
};
