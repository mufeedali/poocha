/**
 * Theme toggle module
 *
 * Handles theme switching and persistence.
 * This module auto-initializes when imported.
 */

/* Initialize theme behavior:
 * - wires the theme toggle button
 * - applies and listens for system theme changes
 */
const initializeTheme = () => {
    try {
        const html = document.documentElement;
        const themeToggle = document.getElementById("theme-toggle");

        if (!themeToggle) {
            console.warn("Theme toggle element not found");
            return;
        }

        themeToggle.addEventListener("click", (e) => {
            e.preventDefault();

            try {
                const newTheme =
                    html.getAttribute("data-theme") === "dark"
                        ? "light"
                        : "dark";

                localStorage.setItem("theme", newTheme);
                html.setAttribute("data-theme", newTheme);
            } catch (error) {
                console.error("Error toggling theme:", error);
            }
        });

        if (window.matchMedia) {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)",
            );
            const handler = (e) => {
                if (!localStorage.getItem("theme")) {
                    const systemTheme = e.matches ? "dark" : "light";
                    html.setAttribute("data-theme", systemTheme);
                }
            };
            mediaQuery.addEventListener("change", handler);
        }
    } catch (error) {
        console.error("Error initializing theme:", error);
    }
};

/* Auto-initialize when the module is loaded. */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTheme);
} else {
    initializeTheme();
}
