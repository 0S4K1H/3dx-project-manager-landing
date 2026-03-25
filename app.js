// app.js - Render engine

document.addEventListener("DOMContentLoaded", () => {
  const t = window.pageData;

  const setHtml = (id, content) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = content;
  };

  const renderList = (id, items) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = items.map(item => `<li>${item}</li>`).join("");
  };

  const renderChips = (id, items) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = items.map(item => `<div class="contact-chip"><strong>${item}</strong></div>`).join("");
  };

  // 1. Hero
  setHtml("hero-kicker", t.hero.kicker);
  setHtml("hero-title", t.hero.title);
  setHtml("hero-subtitle", t.hero.subtitle);
  setHtml("hero-pitch", t.hero.pitch);

  // Marquee
  if (t.socialProof) {
    const marquee = document.getElementById("marquee-container");
    if (marquee) {
      const items = t.socialProof.map(item => `<span><span style="color:var(--accent);">✦</span> ${item}</span>`).join("");
      marquee.innerHTML = items + items + items; // Duplicate for smooth infinite scroll
    }
  }

  // 2. Slide 2 & 3
  setHtml("s2-kicker", t.slide2.kicker);
  setHtml("s2-title", t.slide2.title);
  setHtml("s2-desc", t.slide2.description);
  
  setHtml("s2-left-title", t.slide2.leftTitle);
  setHtml("s2-left-desc", t.slide2.leftDesc);
  renderList("s2-left-list", t.slide2.leftList);
  
  setHtml("s2-right-title", t.slide2.rightTitle);
  setHtml("s2-right-desc", t.slide2.rightDesc);
  renderList("s2-right-list", t.slide2.rightList);

  setHtml("s3-kicker", t.slide3.kicker);
  setHtml("s3-question", t.slide3.question);
  renderChips("s3-needs", t.slide3.needs);

  // 4. Slide 4 & 5
  setHtml("s4-kicker", t.slide4.kicker);
  setHtml("s4-title", t.slide4.title);
  setHtml("s4-desc", t.slide4.description);

  setHtml("s5-conclusion", t.slide5.conclusion);
  
  const orbitalWrapper = document.getElementById("orbital-wrapper");
  if (orbitalWrapper && t.slide5.requirements) {
    let nodesHTML = "";
    
    // Create the center
    nodesHTML += `
      <div class="orbital-center">
        <div style="width: 150px; height: 150px; border-radius: 50%; position: absolute; inset: 0; overflow: hidden; box-shadow: inset 0 -4px 20px rgba(0,0,0,0.7);">
          <img src="Logo%203dx.png" alt="3DX Logo" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.22); width: 100%; height: 100%; object-fit: contain; pointer-events: none;">
        </div>
        <span style="position: absolute; bottom: -45px; left: 50%; transform: translateX(-50%); font-size: 0.95rem; font-weight:700; font-family:var(--font-sans); color:var(--forest); text-align: center; line-height: 1.25; width: 250px;">Single Source of Truth</span>
      </div>
      <div class="orbital-ring"></div>
    `;

    orbitalWrapper.innerHTML = `<div class="orbital-container" id="orbital-container">${nodesHTML}</div>`;
    const container = document.getElementById("orbital-container");

    t.slide5.requirements.forEach((req, i) => {
      const angle = (i / t.slide5.requirements.length) * 2 * Math.PI - (Math.PI / 2);
      
      const left = 50 + 42 * Math.cos(angle);
      const top = 50 + 42 * Math.sin(angle);

      const node = document.createElement("div");
      node.className = "orbital-node";
      node.style.left = `${left}%`;
      node.style.top = `${top}%`;
      node.title = req.desc;
      node.innerHTML = `
        <span class="node-icon">${req.icon}</span>
        <strong>${req.title}</strong>
      `;
      container.appendChild(node);

      const particle = document.createElement("div");
      particle.className = "data-particle";
      container.appendChild(particle);

      particle.animate([
        { left: `${left}%`, top: `${top}%`, opacity: 0, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 1, offset: 0.1 },
        { opacity: 1, offset: 0.8 },
        { left: '50%', top: '50%', opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' }
      ], {
        duration: 2500 + Math.random() * 2000,
        iterations: Infinity,
        delay: Math.random() * 2000
      });
    });

    // Spotlight Hover Logic
    container.addEventListener("mouseenter", () => container.classList.add("dimmed"));
    container.addEventListener("mouseleave", () => container.classList.remove("dimmed"));
  }

  // 5. Maturity Flow (Timeline)
  if (t.maturityFlow) {
    setHtml("flow-kicker", t.maturityFlow.kicker);
    setHtml("flow-title", t.maturityFlow.title);
    
    const timelineGrid = document.getElementById("flow-timeline");
    if (timelineGrid) {
      timelineGrid.innerHTML = t.maturityFlow.steps.map(step => `
        <div class="process-step">
          <div class="step-number">${step.id}</div>
          <h3 class="step-title">${step.title}</h3>
          <div class="step-apps">
            ${step.apps.map(app => `<span>${app}</span>`).join('')}
          </div>
        </div>
      `).join("");
    }
  }

  // 6. Slide 6
  setHtml("s6-kicker", t.slide6.kicker);
  setHtml("s6-title", t.slide6.title);
  setHtml("s6-desc", t.slide6.description);
  setHtml("s6-list1-title", t.slide6.list1Title);
  renderList("s6-list1", t.slide6.list1);
  setHtml("s6-list2-title", t.slide6.list2Title);
  renderList("s6-list2", t.slide6.list2);
  setHtml("s6-conclusion", t.slide6.conclusion);

  // 7. Slide 7 & 8
  setHtml("s7-kicker", t.slide7.kicker);
  setHtml("s7-title", t.slide7.title);
  setHtml("s7-desc", t.slide7.description);
  
  // Interactive Mockup
  if (t.mockupFeature) {
    const mockupHTML = `
      <div class="mockup-menu">
        ${t.mockupFeature.items.map((item, index) => `
          <div class="mockup-item ${index === 0 ? 'active' : ''}" data-id="${index}">
            <strong style="display:block;">${item.title}</strong>
          </div>
        `).join('')}
      </div>
      <div class="mockup-screen">
        <div class="mockup-screen-content" id="mockup-display" style="width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; padding: 0;">
          ${(() => {
            const firstItem = t.mockupFeature.items[0];
            let iframeUrl = firstItem.iframeSrc || "";
            if (iframeUrl.includes("watch?v=")) iframeUrl = iframeUrl.replace("watch?v=", "embed/").split("&")[0];
            else if (iframeUrl.includes("youtu.be/")) iframeUrl = iframeUrl.replace("youtu.be/", "youtube.com/embed/").split("?")[0];
            
            if (firstItem.iframeSrc) {
              return `<iframe src="${iframeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; aspect-ratio:16/9; border:none; display:block;"></iframe>`;
            } else if (firstItem.imgSrc) {
              return `<img src="${firstItem.imgSrc}" alt="${firstItem.title}" style="width:100%; aspect-ratio:16/9; object-fit:contain; background:#111a18; display:block;">`;
            } else {
              return `<div style="padding: 40px; aspect-ratio:16/9; display:flex; flex-direction:column; justify-content:center; align-items:center;"><span class="mockup-icon-lg">${firstItem.icon}</span><h3>${firstItem.title}</h3><p>${firstItem.desc}</p></div>`;
            }
          })()}
        </div>
      </div>
    `;
    const layout = document.getElementById("mockup-layout");
    if (layout) {
      layout.innerHTML = mockupHTML;
      
      const items = document.querySelectorAll(".mockup-item");
      const display = document.getElementById("mockup-display");
      
      items.forEach(item => {
        item.addEventListener("click", function() {
          items.forEach(i => i.classList.remove("active"));
          this.classList.add("active");
          const data = t.mockupFeature.items[this.getAttribute("data-id")];
          
          display.style.animation = "none";
          display.offsetHeight; // trigger reflow
          display.style.animation = "fadeIn 0.4s ease forwards";
          
          let iframeUrl = data.iframeSrc || "";
          if (iframeUrl.includes("watch?v=")) iframeUrl = iframeUrl.replace("watch?v=", "embed/").split("&")[0];
          else if (iframeUrl.includes("youtu.be/")) iframeUrl = iframeUrl.replace("youtu.be/", "youtube.com/embed/").split("?")[0];

          display.innerHTML = data.iframeSrc
            ? `<iframe src="${iframeUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; aspect-ratio:16/9; border:none; display:block;"></iframe>`
            : data.imgSrc 
              ? `<img src="${data.imgSrc}" alt="${data.title}" style="width:100%; aspect-ratio:16/9; object-fit:contain; background:#111a18; display:block;">`
              : `<div style="padding: 40px; aspect-ratio:16/9; display:flex; flex-direction:column; justify-content:center; align-items:center;"><span class="mockup-icon-lg">${data.icon}</span><h3>${data.title}</h3><p>${data.desc}</p></div>`;
        });
      });
    }
  }

  setHtml("s8-impact-title", t.slide8.impactTitle);
  renderList("s8-impact-list", t.slide8.impactList);
  setHtml("s8-ssot", t.slide8.ssotBox);

  // 8. CTA
  setHtml("cta-kicker", t.cta.kicker);
  setHtml("cta-title", t.cta.title);
  setHtml("cta-statement1", t.cta.statement1);
  setHtml("cta-statement2", t.cta.statement2);
  setHtml("cta-next-step", t.cta.nextStep);
  const ctaBtn = document.getElementById("cta-button");
  if (ctaBtn) ctaBtn.textContent = t.cta.buttonText;
  
  // Animation (Reveal)
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("is-visible");
      }
    }
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load
});
