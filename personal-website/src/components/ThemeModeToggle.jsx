import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

export default function ThemeModeToggle() {
  const { isDark, toggle } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Açık ve koyu tema arasında geçiş yap"
        onClick={toggle}
        className="relative h-6 w-[55px] shrink-0 cursor-pointer rounded-full border-0 bg-gray-300 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 dark:bg-[#4731D3]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-[3px] top-[3px] h-4 w-[15px] rounded-full bg-[#FFE86E] shadow-md transition-transform duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)] dark:translate-x-[34px]"
        />
      </button>
      <span className="font-inter text-sm font-bold text-[#777777] dark:text-white">
        {isDark ? "DARK MODE" : "LIGHT MODE"}
      </span>
    </div>
  );
}
