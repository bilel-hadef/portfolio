// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (initial theme is set by the inline script in <head>)
const root = document.documentElement;
const themeBtn = document.querySelector(".theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });
}

// Follow the OS setting until the visitor makes an explicit choice
try {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        root.setAttribute("data-theme", e.matches ? "dark" : "light");
      }
    });
} catch (e) {}

// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close menu after clicking a link
links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll-spy: mark the nav link whose section is currently in view
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
const spySections = [...navAnchors]
  .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
  .filter(Boolean);

if ("IntersectionObserver" in window && spySections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = "#" + entry.target.id;
        navAnchors.forEach((a) =>
          a.classList.toggle("is-current", a.getAttribute("href") === id)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  spySections.forEach((s) => spy.observe(s));

  // When scrolled to the very bottom, force the last section active — a short
  // final section may never reach the observer's mid-viewport band.
  addEventListener(
    "scroll",
    () => {
      if (innerHeight + scrollY < document.body.offsetHeight - 2) return;
      const lastId = "#" + spySections[spySections.length - 1].id;
      navAnchors.forEach((a) =>
        a.classList.toggle("is-current", a.getAttribute("href") === lastId)
      );
    },
    { passive: true }
  );
}

// Tech-stack category filter (all technologies are shown by default)
const stackFilters = document.querySelectorAll(".stack-filter");
const stackItems = document.querySelectorAll("#stack-grid .tech");

stackFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    stackFilters.forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    stackItems.forEach((li) => {
      const show = filter === "all" || li.dataset.cat === filter;
      li.classList.toggle("is-hidden", !show);
    });
  });
});
