/* ===================================================
   script.js — sundar.code Template Store Logic
   =================================================== */

/* ── Template Data ─────────────────────────────────── */
const templates = [
  {
    name: "Shanthi Dental Care",
    description: "Modern dental clinic website featuring personalized care by Dr. G. Jaganraj, BDS, treatment overviews, and appointment booking.",
    category: "Dental",
    image: "Img/Prime.png",
    link: "https://www.shanthidental.co.in/",
    tags: ["HTML", "CSS", "Live Site"],
    featured: true,
    accentColor: "#ffffff",
    gradientFrom: "#0a0a0a",
    gradientTo: "#181818"
  },
  {
    name: "Dental — Signal Radical",
    description: "Bold dental clinic website with a striking hero, service highlights, patient testimonials, and an online booking section.",
    category: "Dental",
    image: "Img/Dental — Signal Radical.png",
    link: "Dental_Templete/dental-signal-radical.html",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
    accentColor: "#ffffff",
    gradientFrom: "#080808",
    gradientTo: "#141414"
  },
  {
    name: "Axis Medical — Dental Slides",
    description: "Medical-grade dental clinic site with clean slide sections, service breakdowns, patient trust signals, and a modern layout.",
    category: "Dental",
    image: "Img/axis-medical-dental-clean-slides.png",
    link: "Dental_Templete/axis-medical-dental-clean-slides.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#eeeeee",
    gradientFrom: "#0a0a0a",
    gradientTo: "#171717"
  },
  {
    name: "Claris — Dental Design",
    description: "Elegant Claris-inspired dental website with a bright, minimal aesthetic, service cards, and a clean appointment form.",
    category: "Dental",
    image: "Img/Claris — Dental Design.png",
    link: "Dental_Templete/claris-dental-like-design.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#dddddd",
    gradientFrom: "#0b0b0b",
    gradientTo: "#181818"
  },
  {
    name: "Dental — New Design",
    description: "Fresh dental clinic landing page with a modern hero, treatment overview, and a clean contact section.",
    category: "Dental",
    image: "Img/Dental — New Design.png",
    link: "Dental_Templete/dental-new-design.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#cccccc",
    gradientFrom: "#0c0c0c",
    gradientTo: "#191919"
  },
  {
    name: "Noire Dental House",
    description: "Dark, premium dental studio website with a bold typographic hero, minimalist service layout, and luxury aesthetic.",
    category: "Dental",
    image: "Img/Noire Dental House.png",
    link: "Dental_Templete/noire-dental-house.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#bbbbbb",
    gradientFrom: "#060606",
    gradientTo: "#131313"
  },
  {
    name: "Ora — True Card Stack",
    description: "Creative dental landing page with a stacked card layout, smooth transitions, and a modern treatment showcase.",
    category: "Dental",
    image: "Img/Ora — True Card Stack.png",
    link: "Dental_Templete/ora-true-card-stack.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#aaaaaa",
    gradientFrom: "#0d0d0d",
    gradientTo: "#1a1a1a"
  },
  {
    name: "Dental — New Design 06",
    description: "Clean, modern dental practice landing page with animated sections, team profiles, and a treatment showcase.",
    category: "Dental",
    image: "Img/Dental — New Design 06.png",
    link: "Dental_Templete/dental-new-design-06.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#e0e0e0",
    gradientFrom: "#0c0c0c",
    gradientTo: "#181818"
  },
  {
    name: "Dental — New Design 04",
    description: "Professional dental website with a full-width hero, service cards, pricing plans, and a contact form.",
    category: "Dental",
    image: "Img/Dental — New Design 04.png",
    link: "Dental_Templete/dental-new-design-04.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#cccccc",
    gradientFrom: "#0a0a0a",
    gradientTo: "#161616"
  },
  {
    name: "Dental — Sample",
    description: "Elegant dental clinic template with smooth scroll, before/after gallery, patient reviews, and appointment booking.",
    category: "Dental",
    image: "Img/Dental — Sample.png",
    link: "Dental_Templete/dental-sample-template.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#aaaaaa",
    gradientFrom: "#0d0d0d",
    gradientTo: "#1a1a1a"
  },
  {
    name: "Dental — New Template",
    description: "Minimal dental practice website with a clean layout, service overview, doctor profiles, and a simple booking form.",
    category: "Dental",
    image: "Img/Dental — New Template.png",
    link: "Dental_Templete/dental-new-template.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#999999",
    gradientFrom: "#0f0f0f",
    gradientTo: "#1c1c1c"
  },
  {
    name: "Cinematic Portfolio",
    description: "A bold, dark portfolio site with cinematic animations, smooth scroll, and a full-screen hero — built for creatives and developers.",
    category: "Portfolio",
    image: "", // add: "assets/images/portfolio.jpg"
    link: "portfolio.html",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
    accentColor: "#ffffff",
    gradientFrom: "#0d0d0d",
    gradientTo: "#1a1a1a"
  },
  {
    name: "Saveur — Restaurant",
    description: "Elegant restaurant landing page with a full-screen hero, menu showcase, reservation form, and rich food photography layout.",
    category: "Restaurant",
    image: "",
    link: "restaurant.html",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
    accentColor: "#cccccc",
    gradientFrom: "#111111",
    gradientTo: "#1c1c1c"
  },
  {
    name: "FinFlow — Finance",
    description: "Clean, professional finance landing page with animated stat counters, service cards, testimonials, and a conversion-focused CTA section.",
    category: "Finance",
    image: "",
    link: "finance.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#aaaaaa",
    gradientFrom: "#0a0a0a",
    gradientTo: "#161616"
  },
  {
    name: "Shopline — E-Commerce",
    description: "Modern e-commerce storefront with product grid, category filters, cart sidebar, and a sleek checkout flow — all in pure HTML/CSS/JS.",
    category: "E-commerce",
    image: "",
    link: "ecommerce.html",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
    accentColor: "#e0e0e0",
    gradientFrom: "#0f0f0f",
    gradientTo: "#191919"
  },
  {
    name: "Nexus — Dashboard",
    description: "Feature-rich admin dashboard with sidebar navigation, real-time charts, data tables, and a dark-mode-first design system.",
    category: "Dashboard",
    image: "",
    link: "dashboard.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#999999",
    gradientFrom: "#080808",
    gradientTo: "#141414"
  },
  {
    name: "EduSphere — Education",
    description: "Modern online education platform with course catalog, instructor profiles, pricing plans, and student testimonial sections.",
    category: "Education",
    image: "",
    link: "education.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#bbbbbb",
    gradientFrom: "#0c0c0c",
    gradientTo: "#181818"
  },
  {
    name: "NeuralKit — AI Landing",
    description: "Futuristic AI SaaS landing page with animated neural network background, feature showcase, pricing tiers, and waitlist form.",
    category: "AI",
    image: "",
    link: "ai.html",
    tags: ["HTML", "CSS", "JS"],
    featured: true,
    accentColor: "#dddddd",
    gradientFrom: "#0e0e0e",
    gradientTo: "#1b1b1b"
  },
  {
    name: "Apex — Digital Agency",
    description: "Premium digital agency website with bold typography, case study showcases, team section, and animated service descriptions.",
    category: "Agency",
    image: "",
    link: "agency.html",
    tags: ["HTML", "CSS", "JS"],
    featured: false,
    accentColor: "#888888",
    gradientFrom: "#0b0b0b",
    gradientTo: "#171717"
  }
];

/* ── State ─────────────────────────────────────────── */
let activeCategory = "All";
let searchQuery    = "";

/* ── DOM refs ──────────────────────────────────────── */
const grid        = document.getElementById("templateGrid");
const countEl     = document.getElementById("resultsCount");
const searchInput = document.getElementById("searchInput");
const navSearch   = document.getElementById("navSearch");
const catPills    = document.querySelectorAll(".cat-pill");

/* ── Helpers ───────────────────────────────────────── */
function escHtml(s) {
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function getFiltered() {
  const q = searchQuery.toLowerCase();
  return templates.filter(t => {
    const catMatch  = activeCategory === "All" || t.category === activeCategory;
    const searchMatch = !q ||
      t.name.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q));
    return catMatch && searchMatch;
  });
}

/* ── SVG Icons ─────────────────────────────────────── */
const iconEye = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
const iconArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>`;

/* ── Render placeholder thumbnail ─────────────────── */
function renderThumb(t) {
  if (t.image) {
    const src = escHtml(encodeURI(t.image));
    return `<img src="${src}" alt="${escHtml(t.name)} preview" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div class="card-thumb-placeholder" style="display:none;background:linear-gradient(135deg,${t.gradientFrom},${t.gradientTo})">
              <div class="placeholder-grid"></div>
              <span class="placeholder-label">${escHtml(t.name)}</span>
            </div>`;
  }
  // Generate a unique CSS grid-art placeholder
  const accent = t.accentColor || "#ffffff";
  return `
    <div class="card-thumb-placeholder" style="background:linear-gradient(135deg,${t.gradientFrom},${t.gradientTo})">
      <div class="placeholder-grid"></div>
      <div class="placeholder-mockup" style="position:relative;z-index:2;width:80%;opacity:0.55">
        ${generateMockup(t, accent)}
      </div>
    </div>
  `;
}

function generateMockup(t, accent) {
  // Tiny SVG browser-window mockup, category-specific layout
  const cat = t.category;
  let inner = "";

  if (cat === "Dental") {
    inner = `
      <rect x="2" y="8" width="22" height="6" rx="1" fill="${accent}" opacity="0.8"/>
      <rect x="2" y="16" width="16" height="2" rx="1" fill="white" opacity="0.3"/>
      <rect x="2" y="20" width="12" height="2" rx="1" fill="white" opacity="0.2"/>
      <circle cx="31" cy="17" r="6" fill="${accent}" opacity="0.35"/>
      <path d="M29 14 C27 12 29 18 29 21 C30 21 31 17 32 17 C33 17 34 21 35 21 C35 18 37 12 35 14 Z" fill="white" opacity="0.8"/>
    `;
  } else if (cat === "Portfolio") {
    inner = `
      <rect x="2" y="10" width="36" height="5" rx="1" fill="${accent}" opacity="0.9"/>
      <rect x="2" y="17" width="22" height="2" rx="1" fill="white" opacity="0.3"/>
      <rect x="2" y="21" width="16" height="2" rx="1" fill="white" opacity="0.2"/>
      <rect x="30" y="17" width="10" height="8" rx="1" fill="${accent}" opacity="0.4"/>
    `;
  } else if (cat === "Restaurant") {
    inner = `
      <rect x="2" y="8" width="36" height="18" rx="2" fill="${accent}" opacity="0.15"/>
      <circle cx="10" cy="17" r="5" fill="${accent}" opacity="0.5"/>
      <rect x="18" y="10" width="18" height="3" rx="1" fill="white" opacity="0.4"/>
      <rect x="18" y="15" width="12" height="2" rx="1" fill="white" opacity="0.2"/>
      <rect x="18" y="19" width="8" height="4" rx="1" fill="${accent}" opacity="0.7"/>
    `;
  } else if (cat === "Finance") {
    inner = `
      <rect x="2" y="8" width="10" height="18" rx="1" fill="${accent}" opacity="0.25"/>
      <rect x="14" y="12" width="10" height="14" rx="1" fill="${accent}" opacity="0.45"/>
      <rect x="26" y="16" width="10" height="10" rx="1" fill="${accent}" opacity="0.7"/>
      <polyline points="2,22 12,16 22,18 36,10" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.8"/>
    `;
  } else if (cat === "E-commerce") {
    inner = `
      <rect x="2" y="8" width="16" height="16" rx="2" fill="${accent}" opacity="0.3"/>
      <rect x="20" y="8" width="16" height="7" rx="2" fill="${accent}" opacity="0.5"/>
      <rect x="20" y="17" width="16" height="7" rx="2" fill="white" opacity="0.1"/>
      <rect x="2" y="26" width="34" height="3" rx="1" fill="${accent}" opacity="0.6"/>
    `;
  } else if (cat === "Dashboard") {
    inner = `
      <rect x="2" y="8" width="8" height="18" rx="1" fill="white" opacity="0.07"/>
      <rect x="12" y="8" width="11" height="8" rx="1" fill="${accent}" opacity="0.4"/>
      <rect x="25" y="8" width="11" height="8" rx="1" fill="${accent}" opacity="0.25"/>
      <rect x="12" y="18" width="24" height="8" rx="1" fill="white" opacity="0.07"/>
      <polyline points="14,24 18,20 22,22 26,18 30,19 34,16" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.8"/>
    `;
  } else if (cat === "Education") {
    inner = `
      <rect x="2" y="8" width="36" height="8" rx="2" fill="${accent}" opacity="0.3"/>
      <rect x="2" y="18" width="11" height="7" rx="2" fill="${accent}" opacity="0.2"/>
      <rect x="14" y="18" width="11" height="7" rx="2" fill="${accent}" opacity="0.35"/>
      <rect x="27" y="18" width="11" height="7" rx="2" fill="${accent}" opacity="0.5"/>
    `;
  } else if (cat === "AI") {
    inner = `
      <circle cx="20" cy="17" r="6" fill="none" stroke="${accent}" stroke-width="1" opacity="0.5"/>
      <circle cx="20" cy="17" r="2" fill="${accent}" opacity="0.9"/>
      <line x1="8" y1="10" x2="15" y2="15" stroke="${accent}" stroke-width="1" opacity="0.4"/>
      <line x1="32" y1="10" x2="25" y2="15" stroke="${accent}" stroke-width="1" opacity="0.4"/>
      <line x1="8" y1="24" x2="15" y2="20" stroke="${accent}" stroke-width="1" opacity="0.4"/>
      <line x1="32" y1="24" x2="25" y2="20" stroke="${accent}" stroke-width="1" opacity="0.4"/>
      <circle cx="8" cy="10" r="2" fill="${accent}" opacity="0.5"/>
      <circle cx="32" cy="10" r="2" fill="${accent}" opacity="0.5"/>
      <circle cx="8" cy="24" r="2" fill="${accent}" opacity="0.5"/>
      <circle cx="32" cy="24" r="2" fill="${accent}" opacity="0.5"/>
    `;
  } else {
    // Agency
    inner = `
      <rect x="2" y="8" width="36" height="12" rx="1" fill="${accent}" opacity="0.2"/>
      <rect x="2" y="8" width="16" height="12" rx="1" fill="${accent}" opacity="0.3"/>
      <rect x="2" y="22" width="11" height="4" rx="1" fill="white" opacity="0.15"/>
      <rect x="15" y="22" width="11" height="4" rx="1" fill="white" opacity="0.1"/>
      <rect x="28" y="22" width="10" height="4" rx="1" fill="${accent}" opacity="0.5"/>
    `;
  }

  return `<svg viewBox="0 0 40 34" xmlns="http://www.w3.org/2000/svg" style="width:100%;border-radius:4px;overflow:hidden">
    <rect width="40" height="34" rx="3" fill="rgba(0,0,0,0.3)"/>
    <rect x="0" y="0" width="40" height="6" rx="3" fill="rgba(255,255,255,0.05)"/>
    <circle cx="3.5" cy="3" r="1.2" fill="#ff5f57"/>
    <circle cx="7" cy="3" r="1.2" fill="#febc2e"/>
    <circle cx="10.5" cy="3" r="1.2" fill="#28c840"/>
    ${inner}
  </svg>`;
}

/* ── Build Card HTML ───────────────────────────────── */
function buildCard(t) {
  const card = document.createElement("div");
  card.className = "template-card";
  card.dataset.category = t.category;
  card.dataset.name = t.name.toLowerCase();

  card.innerHTML = `
    <div class="card-thumb">
      ${renderThumb(t)}
      ${t.featured ? '<span class="card-badge">Featured</span>' : ''}
      <div class="card-overlay">
        <a href="${escHtml(t.link)}" target="_blank" rel="noopener noreferrer" class="overlay-btn primary">
          ${iconEye} Preview
        </a>
      </div>
    </div>
    <div class="card-body">
      <span class="card-category">${escHtml(t.category)}</span>
      <h3 class="card-name">${escHtml(t.name)}</h3>
    </div>
    <div class="card-footer">
      <a href="${escHtml(t.link)}" target="_blank" rel="noopener noreferrer" class="card-btn preview" style="flex:1">
        ${iconEye} Preview
      </a>
    </div>
  `;
  return card;
}

/* ── Render Grid ───────────────────────────────────── */
function renderGrid() {
  const statEl = document.getElementById("statTemplates");
  if (statEl) statEl.textContent = templates.length;

  const filtered = getFiltered();
  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>No templates found</h3>
        <p>Try adjusting your search or category filter.</p>
      </div>`;
    countEl.textContent = "0 templates";
    return;
  }

  // Sort: featured first
  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  sorted.forEach((t, i) => {
    const card = buildCard(t);
    card.style.animationDelay = `${i * 0.06}s`;
    grid.appendChild(card);
  });

  const n = filtered.length;
  countEl.textContent = `${n} template${n !== 1 ? "s" : ""}`;
}

/* ── Category Filter ───────────────────────────────── */
catPills.forEach(pill => {
  pill.addEventListener("click", () => {
    catPills.forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategory = pill.dataset.cat;
    renderGrid();
  });
});

/* ── Search ─────────────────────────────────────────── */
let searchTimer;

function handleSearch(val) {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = val.trim();
    // Sync both search inputs
    if (searchInput && searchInput.value !== val) searchInput.value = val;
    if (navSearch && navSearch.value !== val) navSearch.value = val;
    renderGrid();
  }, 160);
}

if (searchInput) searchInput.addEventListener("input", e => handleSearch(e.target.value));
if (navSearch)   navSearch.addEventListener("input",   e => handleSearch(e.target.value));

/* ── Navbar scroll effect ──────────────────────────── */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.style.borderBottomColor = "var(--border-hover)";
  } else {
    navbar.style.borderBottomColor = "var(--border)";
  }
}, { passive: true });

/* ── Smooth scroll for hero CTA ─────────────────────── */
document.getElementById("ctaExplore")?.addEventListener("click", () => {
  document.getElementById("templates-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ── Theme Toggle (Light / Dark) ───────────────────── */
function initTheme() {
  const saved = localStorage.getItem("sundar_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeUI(saved);

  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("sundar_theme", current);
    updateThemeUI(current);
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);
}

function updateThemeUI(theme) {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute("content", theme === "light" ? "#f6f8fa" : "#000000");
  }
  const mobileText = document.querySelector("#mobileThemeToggle .theme-text");
  const mobileIcon = document.querySelector("#mobileThemeToggle .theme-icon");
  if (mobileText) {
    mobileText.textContent = theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  }
  if (mobileIcon) {
    mobileIcon.textContent = theme === "light" ? "☽" : "☼";
  }
}

/* ── Mobile Nav Toggle ─────────────────────────────── */
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");
const mobileSearch = document.getElementById("mobileSearch");

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "flex";
    mobileNav.style.display = isOpen ? "none" : "flex";
    mobileToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close drawer when clicking template/category links
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobileNav.style.display = "none";
      mobileToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (mobileSearch) {
  mobileSearch.addEventListener("input", e => handleSearch(e.target.value));
}

/* ── Init ───────────────────────────────────────────── */
initTheme();
renderGrid();
