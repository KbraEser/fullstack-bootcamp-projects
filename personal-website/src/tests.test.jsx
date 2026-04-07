import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import data from "./data.js";
import { LangProvider, useLang } from "./context/LanguageContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import LanguageToggle from "./components/LanguageToggle.jsx";
import ThemeModeToggle from "./components/ThemeModeToggle.jsx";

function LangCode() {
  const { lang } = useLang();
  return <span data-testid="lang">{lang}</span>;
}

describe("data.js", () => {
  it("en ve tr için proje listesi tanımlı", () => {
    expect(data.en.projectsSection.projects.length).toBeGreaterThan(0);
    expect(data.tr.projectsSection.projects.length).toBeGreaterThan(0);
  });
});

describe("LanguageToggle", () => {
  it("dil kodunu en → tr → en olarak günceller", async () => {
    const user = userEvent.setup();
    render(
      <LangProvider>
        <LangCode />
        <LanguageToggle />
      </LangProvider>,
    );

    const lang = () => screen.getAllByTestId("lang")[0].textContent;

    expect(lang()).toBe("en");
    await user.click(
      screen.getAllByRole("button", { name: /TÜRKÇE'YE GEÇ/i })[0],
    );
    await waitFor(() => expect(lang()).toBe("tr"));
    await user.click(
      screen.getAllByRole("button", { name: /SWITCH TO ENGLISH/i })[0],
    );
    await waitFor(() => expect(lang()).toBe("en"));
  });
});

describe("ThemeModeToggle", () => {
  it("anahtar ile koyu tema açılır ve kapanır", async () => {
    const user = userEvent.setup();
    render(
      <ThemeContextProvider>
        <ThemeModeToggle />
      </ThemeContextProvider>,
    );

    const sw = screen.getByRole("switch", { name: /tema/i });
    const darkOnRoot = () =>
      document.documentElement.classList.contains("dark");

    await waitFor(() => expect(darkOnRoot()).toBe(false));

    await user.click(sw);
    await waitFor(() => {
      expect(darkOnRoot()).toBe(true);
      expect(sw).toHaveAttribute("aria-checked", "true");
    });

    await user.click(sw);
    await waitFor(() => {
      expect(darkOnRoot()).toBe(false);
      expect(sw).toHaveAttribute("aria-checked", "false");
    });
  });

  it("seçilen tema localStorage'a yazılır", async () => {
    const user = userEvent.setup();
    render(
      <ThemeContextProvider>
        <ThemeModeToggle />
      </ThemeContextProvider>,
    );

    const sw = screen.getByRole("switch", { name: /tema/i });

    await user.click(sw);
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("theme"))).toBe("dark"),
    );

    await user.click(sw);
    await waitFor(() =>
      expect(JSON.parse(localStorage.getItem("theme"))).toBe("light"),
    );
  });
});
