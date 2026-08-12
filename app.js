async function loadLinks() {
  const nav = document.getElementById("links");
  if (!nav) return;

  try {
    const res = await fetch("links.json", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load links.json (${res.status})`);
    const links = await res.json();
    if (!Array.isArray(links)) throw new Error("links.json must be an array");

    const frag = document.createDocumentFragment();
    for (const item of links) {
      if (!item || typeof item.label !== "string" || typeof item.url !== "string") continue;
      const a = document.createElement("a");
      a.className = "link-btn";
      if (item.primary) a.classList.add("primary");
      if (item.url === "#" || item.url.startsWith("TODO")) a.classList.add("todo");
      a.href = item.url;
      a.textContent = item.label;
      if (item.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      frag.appendChild(a);
    }
    nav.replaceChildren(frag);
  } catch (err) {
    console.error(err);
    nav.innerHTML = '<p class="bio">Could not load links. Check links.json.</p>';
  }
}

loadLinks();
