/* ============ EDIT THIS SECTION ============
   Leave a value as "" until you have the real one.
   Empty links show as disabled instead of pointing to a fake URL. */
const CONFIG = {
  email: "kyanpaglinawan@gmail.com",                       // e.g. "you@gmail.com"
  github: "https://github.com/kyan26",                      // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/ryan-paglinawan-453765447/",                    // e.g. "https://www.linkedin.com/in/your-name"
  resume: "docs/resume.pdf",                      // e.g. "docs/resume.pdf"
  formEndpoint: "https://formspree.io/f/xzeeqeya"                 // Formspree URL, e.g. "https://formspree.io/f/xxxxxxx"
};

const PH = (t) => `[Add: ${t}]`;     // anything starting with "[" renders as a placeholder

const SKILLS = [
  { domain: "Programming Languages", items: [["Python", "Familiar"], ["JavaScript", "Familiar"]] },
  { domain: "Front-End Technologies", items: [["HTML", "Familiar"], ["CSS", "Familiar"], ["Tailwind CSS", "Currently Learning"]] },
  { domain: "Computer Vision", items: [["MediaPipe", "Currently Learning"], ["OpenCV", "Currently Learning"]] },
  { domain: "Databases", items: [["SQL", "Familiar"], ["PostgreSQL", "Currently Learning"], ["MySQL", "Familiar"]] },
  { domain: "Frameworks and Tools", items: [["Django", "Familiar"], ["Git", "Currently Learning"], ["GitHub", "Currently Learning"], ["Visual Studio Code", "Currently Learning"], ["XAMPP", "Familiar"]] }
];

const PROJECTS = [
  {
    title: "Scholarship Management System",
    status: "Academic project, May 2025",
    overview: "A Django web application that manages scholars, scholarships, applications, documents, grades, and announcements.",
    problem: "A city office offers many scholarships and handles the applications on paper. With so many scholars, paper documents can go missing, which makes it hard to keep records complete and to track each application.",
    solution: "One web application for the whole scholarship process. Scholars keep a profile, apply, and track their applications, grades, and announcements. Staff and admins manage scholarships, scholars, applications, users, and announcements from a dashboard. The system automatically rejects applications below the GPA requirement and tracks how many scholarship slots are left.",
    architecture: "Users work in the browser. Django handles the pages and business rules, with session-based login and four roles (Admin, Staff, Scholar, User). Data is stored in a MySQL database. Tailwind CSS and JavaScript handle the layout and form checks in the browser.",
    stack: "Django and Python: Django was the framework our course focused on, and it gives a ready structure for pages, forms, and the database. MySQL: stores the system's data. Tailwind CSS: styles the pages and layout. JavaScript: learned in another course and used for interactive behavior in the browser, such as form checks.",
    contributions: "Team project of 3 members. I worked on role-based access control for four user roles (Admin, Staff, Scholar, User) with session-based login, and on the automatic GPA-based rejection of applications and scholarship slot tracking. The GPA rule was the hardest part: I learned how to build it by studying online tutorials, then applied it to the system.",
    results: "I tested the features myself while building the system, and I found and fixed bugs by researching solutions online. Formal testing and testing with other users have not been done yet.",
    shots: [
      { src: "assets/scholarship-1.png", alt: "Admin dashboard of the scholarship system", caption: "Admin dashboard with application status overview" },
      { src: "assets/scholarship-2.png", alt: "User list page showing Admin and Scholar roles", caption: "User management with roles (admin view)" },
      { src: "assets/scholarship-3.png", alt: "Scholar grades page with GPA summary", caption: "Scholar's grades and GPA summary" }
    ],
    github: "", demo: ""
  },
  {
    title: "Nonoy Ice Cream Website",
    status: "Academic project, 2nd year, 1st semester",
    overview: "A website for Nonoy Ice Cream, a real ice cream shop in Brgy. Dayao, Roxas City. It began as an academic project in my second year, first semester, and I rebuilt it as a cleaner, more complete version.",
    problem: "Nonoy Ice Cream sells ice cream by the tube. Customers need an easy way to see the flavors and prices, work out their total, and find and contact the shop.",
    solution: "A responsive website where customers browse flavors with photos and prices per tube, pick how many tubes they want and see the total, read customer reviews, and find the shop through a map, directions, phone numbers, and a Facebook link. It also has a light and dark mode.",
    architecture: "A front-end website built with HTML, Tailwind CSS, and JavaScript. Tailwind CSS handles the layout on phones, tablets, and laptops. JavaScript powers the tube counter and total, the review viewer, and the light and dark mode. The shop location is shown with an embedded Google Map.",
    stack: "HTML, Tailwind CSS, and JavaScript, with an embedded Google Map for the location. " + PH("why you chose these technologies"),
    contributions: "I rebuilt the website after the original code was lost. The new version includes the flavor and tube-order section, customer reviews, a shop location map, and a light and dark mode. " + PH("whether this was solo or a team, and what you personally built"),
    results: PH("real testing outcomes only, e.g. checked on phone, tablet, and laptop, or feedback from the shop owner"),
    shots: [
      { src: "assets/nonoy-1.png", alt: "Home page of the Nonoy Ice Cream website", caption: "Home page: ice cream by the tube" },
      { src: "assets/nonoy-2.png", alt: "Flavor cards with prices per tube and a tube counter", caption: "Flavors with prices and a tube counter" },
      { src: "assets/nonoy-3.png", alt: "Customer reviews section", caption: "Customer reviews" },
      { src: "assets/nonoy-4.png", alt: "Visit us section with address, contact details, and Google Map", caption: "Shop location, contacts, and map" }
    ],
    github: "", demo: ""
  }
];

const DOCS = [
  { title: "Professional Resume", desc: "My current resume with education, skills, and projects.", file: "docs/resume.pdf" }
  // Add more later, e.g. { title: "Cover Letter", desc: "...", file: "docs/cover-letter.pdf" }
];
if (CONFIG.resume) DOCS[0].file = CONFIG.resume;

/* ============ Helpers ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const isPh = (t) => t.trim().startsWith("[");
const text = (t) => isPh(t) ? `<p class="ph">${esc(t)}</p>` : `<p class="case-text">${esc(t)}</p>`;
const chipClass = { Comfortable: "chip-comfortable", Familiar: "chip-familiar", "Currently Learning": "chip-learning" };

function linkBtn(label, href, cls = "btn-ghost") {
  return href
    ? `<a class="btn btn-sm ${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>`
    : `<span class="btn btn-sm ${cls} is-disabled" aria-disabled="true" title="Link not added yet">${label} (coming soon)</span>`;
}

/* ============ Render ============ */
$("#skillsGrid").innerHTML = SKILLS.map((g) => `
  <article class="card">
    <h3>${g.domain}</h3>
    <div class="chips">
      ${g.items.map(([n, l]) => `<span class="chip ${chipClass[l]}" title="${l}">${n}<span class="chip-level">· ${l}</span></span>`).join("")}
    </div>
  </article>`).join("");

const field = (label, body) => `<div><p class="case-label">${label}</p>${text(body)}</div>`;
$("#projectList").innerHTML = PROJECTS.map((p) => `
  <article class="card case">
    <div class="case-head">
      <h3>${esc(p.title)}</h3>
      <span class="chip chip-status">${esc(p.status)}</span>
    </div>
    <div class="case-overview">${field("Project Overview", p.overview)}</div>
    <div class="case-grid">
      ${field("Real-World Problem", p.problem)}
      ${field("Proposed Solution", p.solution)}
      ${field("System Architecture", p.architecture)}
      ${field("Technology Stack and Justification", p.stack)}
      ${field("My Individual Contributions", p.contributions)}
      ${field("Measurable Results / Testing Outcomes", p.results)}
    </div>
    <p class="case-label shots-title">Project Screenshots</p>
    <div class="shots">
      ${Array.from({ length: Math.max(3, (p.shots || []).length) }, (_, i) => i).map((i) => p.shots && p.shots[i]
        ? `<figure class="shot-fig"><a href="${esc(p.shots[i].src)}" target="_blank" rel="noopener"><img src="${esc(p.shots[i].src)}" alt="${esc(p.shots[i].alt)}" loading="lazy"></a><figcaption>${esc(p.shots[i].caption)}</figcaption></figure>`
        : `<div class="ph shot">Screenshot ${i + 1} placeholder<br>assets/${p.title.split(/[ :]/)[0].toLowerCase()}-${i + 1}.png</div>`).join("")}
    </div>
    <div class="case-actions">${linkBtn("GitHub Repository", p.github, "btn-primary")}${linkBtn("Live Demo", p.demo)}</div>
  </article>`).join("");

$("#docGrid").innerHTML = DOCS.map((d) => `
  <article class="card doc">
    <h3>${esc(d.title)}</h3>
    <p>${esc(d.desc)}</p>
    <div class="doc-body">
      ${d.file ? `<iframe class="doc-frame" src="${esc(d.file)}" title="${esc(d.title)} preview"></iframe>`
               : `<div class="doc-frame ph">PDF preview placeholder. Upload your file to docs/ and set its path in script.js</div>`}
    </div>
    <div class="doc-actions">
      ${d.file ? `<a class="btn btn-sm btn-primary" href="${esc(d.file)}" target="_blank" rel="noopener">View Document</a>
                  <a class="btn btn-sm btn-ghost" href="${esc(d.file)}" download>Download PDF</a>`
               : `<span class="btn btn-sm btn-primary is-disabled" aria-disabled="true">View Document</span>
                  <span class="btn btn-sm btn-ghost is-disabled" aria-disabled="true">Download PDF</span>`}
    </div>
  </article>`).join("");

/* ============ Links from CONFIG ============ */
function setLink(el, href, label) {
  if (href) { el.href = href; if (/^https?:/.test(href)) { el.target = "_blank"; el.rel = "noopener"; } return; }
  el.classList.add("is-disabled"); el.setAttribute("aria-disabled", "true");
  el.title = label + " not added yet"; el.addEventListener("click", (e) => e.preventDefault());
}
$$("[data-link]").forEach((el) => {
  const k = el.dataset.link, v = CONFIG[k];
  setLink(el, k === "email" && v ? "mailto:" + v : v, k);
  if (k === "email" && v) el.textContent = v;
});
$$("[data-resume]").forEach((el) => {
  setLink(el, CONFIG.resume, "Resume");
  if (CONFIG.resume) el.setAttribute("download", "");
});

/* ============ Navigation ============ */
const menuBtn = $("#menuBtn"), mobileMenu = $("#mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.hidden = !mobileMenu.hidden;
  menuBtn.setAttribute("aria-expanded", String(!mobileMenu.hidden));
});
$$("#mobileMenu a").forEach((a) => a.addEventListener("click", () => { mobileMenu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }));

const links = $$("#navLinks .nav-link");
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => spy.observe(s));

/* ============ Contact form ============ */
const form = $("#contactForm"), status = $("#formStatus");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  let ok = true;
  $$("input, textarea", form).forEach((f) => {
    const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle("invalid", bad); if (bad) ok = false;
  });
  if (!ok) { status.textContent = "Please fill in every field with a valid email address."; status.className = "status err"; return; }

  if (CONFIG.formEndpoint) {
    const btn = $("button[type=submit]", form);
    btn.disabled = true; btn.textContent = "Sending...";
    status.textContent = ""; status.className = "status";
    try {
      const res = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Request failed");
      form.reset(); status.textContent = "Message sent. Thank you, I'll get back to you soon!"; status.className = "status ok";
    } catch {
      status.textContent = "Could not send. Please email me directly at " + (CONFIG.email || "my email") + ".";
      status.className = "status err";
    } finally { btn.disabled = false; btn.textContent = "Send Message"; }
  } else if (CONFIG.email) {
    const body = `${data.message}\n\nFrom: ${data.name} (${data.email})`;
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Opening your email app..."; status.className = "status info";
  } else {
    status.textContent = "Form is not connected yet. Add your email or Formspree URL in script.js."; status.className = "status warn";
  }
});

/* ============ Name reveal (plays once) ============ */
const nameEl = $("h1");
if (nameEl && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const full = nameEl.textContent.trim();
  let n = 0;
  nameEl.setAttribute("aria-label", full);
  nameEl.innerHTML = full.split(" ").map((w) =>
    `<span class="word" aria-hidden="true">${[...w].map((c) => `<span class="ch" style="animation-delay:${200 + n++ * 45}ms">${esc(c)}</span>`).join("")}</span>`
  ).join(" ");
}

$("#year").textContent = new Date().getFullYear();