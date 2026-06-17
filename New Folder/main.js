/* ==========================================================================
   AYAN PAL — PORTFOLIO  ·  shared behaviour
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Active nav link by current path ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a[data-page]").forEach(function (a) {
    if (a.getAttribute("data-page") === path) a.classList.add("is-active");
  });

  /* ---- Scroll progress rule ---- */
  var rule = document.querySelector(".progress-rule");
  function updateProgress() {
    if (!rule) return;
    var h = document.documentElement;
    var scrolled = h.scrollTop;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (scrolled / max) * 100 : 0;
    rule.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Gallery filter (only present on gallery.html) ---- */
  var filterBar = document.querySelector(".filterbar");
  if (filterBar) {
    var buttons = filterBar.querySelectorAll("button");
    var plates = document.querySelectorAll("[data-category]");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        plates.forEach(function (plate) {
          var cat = plate.getAttribute("data-category");
          var show = filter === "all" || cat === filter;
          plate.style.display = show ? "" : "none";
        });
      });
    });
  }

  /* ---- Footer year ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
