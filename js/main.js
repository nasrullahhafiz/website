/**
 * Main Controller for Graphic Designer, Printing Expert & Typography Specialist Portfolio
 * Delight-inspired aesthetic with Interactive CMYK Plate Separator, Print Estimator,
 * and 1-Click Bilingual (English <-> বাংলা) Language Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initInteractiveMouseEffects();
  initAvatarInteractions();
  initNavigation();
  initBrandLogoCycle();
  initServices();
  initPrepressStudio();
  initPortfolio();
  initEstimatorCalculator();
  initProcessAndWhy();
  initFaqs();
  initFooterSocialPopover();
  initFooterBrandSpotlight();
  initCtaCardBorderGlow();
});

/* ==========================================================================
   1. THEME CONTROLLER (Locked to Permanent Dark Mode)
   ========================================================================== */
function initTheme() {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('delight-theme', 'dark');

  // Fixed signature accent: Solar Gold to Sunset Orange (#f48000 / #f8c118)
  document.documentElement.style.setProperty('--accent-primary', '#f48000');
  document.documentElement.style.setProperty('--accent-primary-hover', '#d95a00');
  document.documentElement.style.setProperty('--accent-glow', 'rgba(244, 128, 0, 0.40)');
  document.documentElement.style.setProperty('--border-accent', 'rgba(244, 128, 0, 0.45)');
}

/* ==========================================================================
   2. 1-CLICK BILINGUAL CONTROLLER (English <-> বাংলা)
   ========================================================================== */
function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle');
  const savedLang = localStorage.getItem('delight-lang') || 'en';
  applyLanguage(savedLang, false);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.documentElement.getAttribute('data-lang') || 'en';
      const next = current === 'en' ? 'bn' : 'en';
      applyLanguage(next);
    });
  }
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  localStorage.setItem('delight-lang', lang);

  // Update button indicator text (if in English, button indicates "বাং" to switch to Bengali, and vice-versa)
  const langIndicator = document.getElementById('lang-indicator');
  if (langIndicator) {
    langIndicator.innerText = lang === 'en' ? 'বাং' : 'EN';
  }

  // Get dictionary safely from all scopes
  const translationsObj = (typeof window !== 'undefined' && window.TRANSLATIONS) 
    ? window.TRANSLATIONS 
    : (typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS : null);
  
  const dict = translationsObj && translationsObj[lang] ? translationsObj[lang] : null;

  if (dict) {
    let updatedCount = 0;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
        updatedCount++;
      }
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    console.log(`[i18n] Successfully translated ${updatedCount} elements to ${lang}`);
  } else {
    console.error('[i18n] Translations dictionary not found for language:', lang, translationsObj);
  }

  // Re-render dynamic components with localized data
  renderServices();
  renderPortfolio();
  renderProcessAndWhy();
  renderFaqs();

  // Recalculate estimator outputs for language labels
  if (typeof window.recalcEstimator === 'function') {
    window.recalcEstimator();
  }
}

/* ==========================================================================
   3. INTERACTIVE MOUSE POINTER & AMBIENT LIGHTING
   ========================================================================== */
function initInteractiveMouseEffects() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const heroContainer = document.getElementById('hero');
  const heroSpotlight = document.getElementById('hero-spotlight');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (dot) {
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      dot.style.opacity = '1';
    }

    if (heroContainer && heroSpotlight) {
      const rect = heroContainer.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const spotX = e.clientX - rect.left;
        const spotY = e.clientY - rect.top;
        heroSpotlight.style.setProperty('--spot-x', `${spotX}px`);
        heroSpotlight.style.setProperty('--spot-y', `${spotY}px`);
      }
    }
  });

  function renderFrame() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    if (ring) {
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      ring.style.opacity = '1';
    }

    requestAnimationFrame(renderFrame);
  }

  requestAnimationFrame(renderFrame);

  const interactives = document.querySelectorAll('a, button, input, select, textarea, .service-card, .delight-project-card, .plate-btn, .brand-pill-btn');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (ring) {
        ring.style.transform += ' scale(1.6)';
        ring.style.borderColor = 'var(--accent-primary)';
      }
    });
    el.addEventListener('mouseleave', () => {
      if (ring) {
        ring.style.transform = ring.style.transform.replace(' scale(1.6)', '');
        ring.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      }
    });
  });
}

/* ==========================================================================
   4. CLIENT AVATAR INTERACTIONS
   ========================================================================== */
function initAvatarInteractions() {
  const avatarImgs = document.querySelectorAll('.trust-avatar-circle');
  avatarImgs.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.22) translateY(-2px)';
      img.style.borderColor = 'var(--accent-primary)';
    });
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1) translateY(0)';
      img.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    });
  });
}

/* ==========================================================================
   5. NAVIGATION CONTROLLER (Sticky Navbar & Mobile Menu)
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .btn-mobile-nav-cta');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      navMenu.classList.toggle('mobile-open', isOpen);
      mobileMenuBtn.classList.toggle('active', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active', 'mobile-open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active', 'mobile-open');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ==========================================================================
   5.1 BRAND LOGO CYCLE CONTROLLER (Periodically Reveals Full Name on Mobile Only)
   ========================================================================== */
function initBrandLogoCycle() {
  const brandPill = document.getElementById('brand-pill');
  if (!brandPill) return;

  let isManualTap = false;
  let manualResetTimer = null;

  function expandBrand() {
    // Strictly mobile only (<= 768px); Desktop relies purely on :hover
    if (window.innerWidth > 768 || isManualTap) return;
    brandPill.classList.add('is-expanded');
    setTimeout(() => {
      if (!isManualTap) {
        brandPill.classList.remove('is-expanded');
      }
    }, 3200); // Displays "NASRULLAH HAFIZ" for 3.2s on mobile
  }

  // Initial expansion after 2.5 seconds only on mobile
  setTimeout(() => {
    if (window.innerWidth <= 768) {
      expandBrand();
    }
  }, 2500);

  // Periodic subtle expansion every 8.5 seconds strictly on mobile
  setInterval(() => {
    if (window.innerWidth <= 768) {
      expandBrand();
    }
  }, 8500);

  // Mobile Tap / Touch support
  brandPill.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      isManualTap = true;
      clearTimeout(manualResetTimer);
      const isNowExpanded = brandPill.classList.toggle('is-expanded');
      if (isNowExpanded) {
        manualResetTimer = setTimeout(() => {
          brandPill.classList.remove('is-expanded');
          isManualTap = false;
        }, 4000);
      } else {
        isManualTap = false;
      }
    }
  });

  // Ensure desktop always remains collapsed unless hovered with mouse
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      brandPill.classList.remove('is-expanded');
      isManualTap = false;
      clearTimeout(manualResetTimer);
    }
  });
}

/* ==========================================================================
   6. SERVICES INJECTION (3 Core Creative Disciplines with Interactive Details)
   ========================================================================== */
function initServices() {
  renderServices();
  initServiceTabs();
}

let activeServiceFilter = 'all';

function initServiceTabs() {
  const tabs = document.querySelectorAll('.service-tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeServiceFilter = btn.getAttribute('data-filter') || 'all';
      filterServices(activeServiceFilter);
    });
  });
}

function filterServices(filter) {
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    const serviceId = card.getAttribute('data-service-id');
    if (filter === 'all' || serviceId === filter) {
      card.style.display = 'flex';
      if (filter !== 'all') {
        card.classList.add('is-expanded');
        const trigger = card.querySelector('.service-expand-trigger-btn');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      }
    } else {
      card.style.display = 'none';
    }
  });
}

function renderServices() {
  const container = document.getElementById('services-grid');
  const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  if (!container || !data || !data.services) return;
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

  container.innerHTML = data.services.map((s) => `
    <div class="service-card is-expanded" data-service-id="${s.id}" id="service-card-${s.id}">
      <div class="service-card-header">
        <div class="service-card-top">
          <div class="service-icon-box">${s.icon}</div>
          <span class="service-badge-pill">${isBn && s.badge_bn ? s.badge_bn : s.badge}</span>
          <span class="service-number">${s.number}</span>
        </div>
        <h3 class="service-title">${isBn && s.title_bn ? s.title_bn : s.title}</h3>
        <p class="service-desc">${isBn && s.desc_bn ? s.desc_bn : s.desc}</p>
      </div>

      <!-- Interactive Expandable Deliverables Details -->
      <div class="service-details-collapse">
        <div class="service-details-inner">
          <div class="service-deliverables-heading">
            <span class="deliverables-icon">✦</span>
            <span>${isBn ? 'মূল ডেলিভারেবলস ও সুবিধাসমূহ' : 'Key Capabilities & Deliverables'}</span>
          </div>
          <ul class="service-bullets-list">
            ${((isBn && s.items_bn) ? s.items_bn : s.items).map(item => `
              <li class="service-bullet-item">
                <span class="bullet-dot"></span>
                <span class="bullet-text">${item}</span>
              </li>
            `).join('')}
          </ul>

          <div class="service-action-footer">
            <a href="#footer" class="service-inquire-btn">
              <span>${isBn ? 'এই সার্ভিসের কথা বলুন' : 'Inquire This Service'}</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Toggle Button & Tags Bar -->
      <div class="service-card-bottom">
        <div class="service-tags">
          ${((isBn && s.tags_bn) ? s.tags_bn : s.tags).map(t => `<span class="service-tag-pill">${t}</span>`).join('')}
        </div>
        <button class="service-expand-trigger-btn" type="button" aria-expanded="true" aria-label="Toggle details">
          <span class="expand-label-more">${isBn ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
          <span class="expand-label-less">${isBn ? 'সংক্ষিপ্ত করুন' : 'Hide Details'}</span>
          <svg class="expand-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `).join('');

  // Attach card interaction listeners
  container.querySelectorAll('.service-card').forEach(card => {
    const trigger = card.querySelector('.service-expand-trigger-btn');
    const header = card.querySelector('.service-card-header');

    const toggle = (e) => {
      if (e && e.target && e.target.closest('.service-inquire-btn')) return;
      const isExpanded = card.classList.toggle('is-expanded');
      if (trigger) {
        trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      }
    };

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle(e);
      });
    }

    if (header) {
      header.addEventListener('click', toggle);
    }
  });

  // Re-apply filter if active
  if (activeServiceFilter && activeServiceFilter !== 'all') {
    filterServices(activeServiceFilter);
  }
}

/* ==========================================================================
   7. FEATURE 2: PRINT & PREPRESS SPECS SHOWCASE (CMYK Plate Separator)
   ========================================================================== */
function initPrepressStudio() {
  const plateImg = document.getElementById('prepress-plate-img');
  const plateButtons = document.querySelectorAll('.plate-btn');
  const dielineOverlay = document.getElementById('dieline-overlay');
  const toggleDielineBtn = document.getElementById('toggle-dieline-btn');
  const artworkSelect = document.getElementById('prepress-artwork-select');
  if (!plateImg) return;

  // Spec Info Elements
  const specScreenAngle = document.getElementById('spec-screen-angle');
  const specInkType = document.getElementById('spec-ink-type');
  const specDensity = document.getElementById('spec-density');

  const PLATE_SPECS = {
    cmyk: {
      angle: "Full Process (Rotated)",
      angle_bn: "ফুল প্রসেস (ঘূর্ণায়মান কোণ)",
      ink: "Cyan, Magenta, Yellow, Black (Process)",
      ink_bn: "সায়ান, ম্যাজেন্টা, হলুদ, কালো (প্রসেস)",
      density: "TAC: 290% Max",
      density_bn: "টিএসি: সর্বোচ্চ ২৯০%"
    },
    cyan: {
      angle: "15° Standard Offset Screen",
      angle_bn: "১৫° স্ট্যান্ডার্ড অফসেট স্ক্রিন",
      ink: "Process Cyan (Process Blue)",
      ink_bn: "প্রসেস সায়ান (প্রসেস ব্লু)",
      density: "Solid Density: 1.45 D",
      density_bn: "সলিড ডেনসিটি: ১.৪৫ D"
    },
    magenta: {
      angle: "75° Standard Offset Screen",
      angle_bn: "৭৫° স্ট্যান্ডার্ড অফসেট স্ক্রিন",
      ink: "Process Magenta (Process Red)",
      ink_bn: "প্রসেস ম্যাজেন্টা (প্রসেস রেড)",
      density: "Solid Density: 1.40 D",
      density_bn: "সলিড ডেনসিটি: ১.৪০ D"
    },
    yellow: {
      angle: "0° (90°) Halftone Screen",
      angle_bn: "০° (৯০°) হাফটোন স্ক্রিন",
      ink: "Process Yellow",
      ink_bn: "প্রসেস ইয়েলো (হলুদ)",
      density: "Solid Density: 1.05 D",
      density_bn: "সলিড ডেনসিটি: ১.০৫ D"
    },
    black: {
      angle: "45° Dominant Halftone Screen",
      angle_bn: "৪৫° প্রধান হাফটোন স্ক্রিন",
      ink: "Process Key / Carbon Black",
      ink_bn: "প্রসেস কি / কার্বন ব্ল্যাক",
      density: "Solid Density: 1.70 D",
      density_bn: "সলিড ডেনসিটি: ১.৭০ D"
    }
  };

  plateButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      plateButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const plate = btn.getAttribute('data-plate');
      
      // Update image filter class
      if (plateImg) {
        plateImg.className = 'prepress-plate-img';
        plateImg.classList.add(`plate-mode-${plate}`);
      }

      const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

      // Update Spec info
      if (PLATE_SPECS[plate]) {
        if (specScreenAngle) specScreenAngle.innerText = isBn ? PLATE_SPECS[plate].angle_bn : PLATE_SPECS[plate].angle;
        if (specInkType) specInkType.innerText = isBn ? PLATE_SPECS[plate].ink_bn : PLATE_SPECS[plate].ink;
        if (specDensity) specDensity.innerText = isBn ? PLATE_SPECS[plate].density_bn : PLATE_SPECS[plate].density;
      }
    });
  });

  // Toggle Dieline & Bleed Marks
  if (toggleDielineBtn && dielineOverlay) {
    toggleDielineBtn.addEventListener('click', () => {
      const isVisible = dielineOverlay.classList.toggle('visible');
      toggleDielineBtn.classList.toggle('active', isVisible);
    });
  }

  // Switch Sample Artwork
  if (artworkSelect && plateImg) {
    artworkSelect.addEventListener('change', (e) => {
      plateImg.src = e.target.value;
    });
  }
}

/* ==========================================================================
   8. FEATURE 3: BRANDING & IDENTITY PORTFOLIO
   ========================================================================== */
let activePortfolioFilter = 'all';

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.port-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activePortfolioFilter = btn.getAttribute('data-filter');
      renderPortfolio(activePortfolioFilter);
    });
  });

  renderPortfolio('all');
}

function renderPortfolio(category = activePortfolioFilter) {
  const container = document.getElementById('portfolio-grid');
  const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  if (!container || !data || !data.projects) return;

  activePortfolioFilter = category;
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

  const filtered = category === 'all'
    ? data.projects
    : data.projects.filter(p => p.filterCategory === category);

  container.innerHTML = filtered.map(p => `
    <div class="delight-project-card">
      <div class="project-img-box">
        <img src="${p.image}" alt="${p.title}" class="project-img-thumb" loading="lazy" />
        <span class="project-badge-delight">${isBn && p.badge_bn ? p.badge_bn : p.badge}</span>
      </div>
      <div class="project-card-body">
        <span class="project-category-delight">${isBn && p.category_bn ? p.category_bn : p.category}</span>
        <h3 class="project-title-delight">${isBn && p.title_bn ? p.title_bn : p.title}</h3>
        <p class="project-desc-delight">${isBn && p.shortDesc_bn ? p.shortDesc_bn : p.shortDesc}</p>
        
        <div class="project-specs-bar">
          <div><strong>${isBn ? 'কাগজ ও উপাদান:' : 'Paper Substrate:'}</strong> ${isBn && p.specs.paper_bn ? p.specs.paper_bn : p.specs.paper}</div>
          <div><strong>${isBn ? 'রং ও ফিনিশিং:' : 'Color & Finish:'}</strong> ${isBn && p.specs.color_bn ? p.specs.color_bn : p.specs.color} · ${isBn && p.specs.finishing_bn ? p.specs.finishing_bn : p.specs.finishing}</div>
          <div><strong>${isBn ? 'প্রিন্ট মেশিন:' : 'Press Machine:'}</strong> ${isBn && p.specs.printMethod_bn ? p.specs.printMethod_bn : p.specs.printMethod}</div>
        </div>

        <div class="project-card-bottom">
          <span style="font-size:0.85rem; color:var(--text-gray);">${isBn && p.metric_bn ? p.metric_bn : p.metric}</span>
          <button class="view-case-study-btn" onclick="openCaseStudy('${p.id}')">
            <span>${isBn ? 'কেস স্টাডি দেখুন' : 'View Case Study'}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Case Study Modal
window.openCaseStudy = function(id) {
  const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  if (!data || !data.projects) return;
  const project = data.projects.find(p => p.id === id);
  const modal = document.getElementById('case-study-modal');
  const content = document.getElementById('case-study-modal-body');

  if (!project || !modal || !content) return;
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

  content.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="section-tag-delight" style="font-size:0.8rem;">( ${isBn ? 'কেস স্টাডি' : 'Case Study'} )</span>
      <h2 style="font-size: 2.2rem; margin-bottom: 0.5rem;">${isBn && project.title_bn ? project.title_bn : project.title}</h2>
      <p style="color:var(--text-gray); font-size:1.05rem;">${isBn && project.shortDesc_bn ? project.shortDesc_bn : project.shortDesc}</p>
    </div>

    <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:var(--radius-inner); margin-bottom:1.5rem; max-height:420px; object-fit:cover; border:1px solid var(--border-light);" />

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap:1rem; margin-bottom:2rem; background:var(--bg-surface); padding:1.25rem; border-radius:var(--radius-inner); border:1px solid var(--border-light);">
      <div>
        <div style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase;">${isBn ? 'ক্লায়েন্ট' : 'Client'}</div>
        <div style="font-weight:700; font-size:0.95rem;">${isBn && project.caseStudy.client_bn ? project.caseStudy.client_bn : project.caseStudy.client}</div>
      </div>
      <div>
        <div style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase;">${isBn ? 'সময়সীমা' : 'Timeline'}</div>
        <div style="font-weight:700; font-size:0.95rem;">${isBn && project.caseStudy.duration_bn ? project.caseStudy.duration_bn : project.caseStudy.duration}</div>
      </div>
      <div>
        <div style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase;">${isBn ? 'দায়িত্ব' : 'Role'}</div>
        <div style="font-weight:700; font-size:0.95rem;">${isBn && project.caseStudy.role_bn ? project.caseStudy.role_bn : project.caseStudy.role}</div>
      </div>
    </div>

    <div style="background:var(--bg-surface); border:1px solid var(--border-red); border-radius:var(--radius-inner); padding:1.25rem; margin-bottom:1.75rem;">
      <h4 style="color:var(--accent-red); font-size:0.95rem; text-transform:uppercase; margin-bottom:0.75rem; font-family:var(--font-mono);">${isBn ? 'ইন্ডাস্ট্রিয়াল প্রিন্ট স্পেসিফিকেশন' : 'Industrial Print Specifications'}</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; font-size:0.875rem;">
        <div><strong>${isBn ? 'কাগজ:' : 'Paper Stock:'}</strong> ${isBn && project.specs.paper_bn ? project.specs.paper_bn : project.specs.paper}</div>
        <div><strong>${isBn ? 'কালার স্পেস:' : 'Color Space:'}</strong> ${isBn && project.specs.color_bn ? project.specs.color_bn : project.specs.color}</div>
        <div><strong>${isBn ? 'স্পেশাল ফিনিশ:' : 'Special Finishes:'}</strong> ${isBn && project.specs.finishing_bn ? project.specs.finishing_bn : project.specs.finishing}</div>
        <div><strong>${isBn ? 'প্রিন্টিং প্রেস:' : 'Printing Press:'}</strong> ${isBn && project.specs.printMethod_bn ? project.specs.printMethod_bn : project.specs.printMethod}</div>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size:1.3rem; margin-bottom:0.5rem;">${isBn ? 'মূল চ্যালেঞ্জ' : 'The Challenge'}</h3>
      <p style="color:var(--text-gray);">${isBn && project.caseStudy.challenge_bn ? project.caseStudy.challenge_bn : project.caseStudy.challenge}</p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h3 style="font-size:1.3rem; margin-bottom:0.5rem; color:var(--accent-red);">${isBn ? 'সৃজনশীল ও প্রি-প্রেস সমাধান' : 'Creative & Prepress Solution'}</h3>
      <p style="color:var(--text-gray);">${isBn && project.caseStudy.solution_bn ? project.caseStudy.solution_bn : project.caseStudy.solution}</p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h3 style="font-size:1.3rem; margin-bottom:0.75rem;">${isBn ? 'মূল প্রোডাকশন আউটপুট' : 'Key Production Outcomes'}</h3>
      <ul style="list-style:disc; padding-left:1.5rem; display:flex; flex-direction:column; gap:0.4rem; color:var(--text-gray);">
        ${((isBn && project.caseStudy.results_bn) ? project.caseStudy.results_bn : project.caseStudy.results).map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:1rem; padding-top:1.5rem; border-top:1px solid var(--border-light);">
      <button onclick="closeCaseStudy()" class="btn-pill-dark">${isBn ? 'উইন্ডো বন্ধ করুন' : 'Close Window'}</button>
      <a href="#footer" onclick="closeCaseStudy()" class="btn-pill-red">${isBn ? 'কথা বলুন' : 'Get In Touch'}</a>
    </div>
  `;

  modal.showModal();
};

window.closeCaseStudy = function() {
  const modal = document.getElementById('case-study-modal');
  if (modal) modal.close();
};

document.addEventListener('click', (e) => {
  const modal = document.getElementById('case-study-modal');
  if (modal && e.target === modal) {
    modal.close();
  }
});

/* ==========================================================================
   9. FEATURE 5: PRINT ESTIMATOR & CLIENT INQUIRY FORM
   ========================================================================== */
function initEstimatorCalculator() {
  const projectType = document.getElementById('calc-project-type');
  const priceDisplay = document.getElementById('calc-price-display');
  if (!projectType || !priceDisplay) {
    window.recalcEstimator = () => {};
    return;
  }

  const paperStock = document.getElementById('calc-paper-stock');
  const quantityInput = document.getElementById('calc-quantity');
  const quantityVal = document.getElementById('calc-quantity-val');
  const finishCheckboxes = document.querySelectorAll('.finish-checkbox');

  // Outputs
  const turnaroundDisplay = document.getElementById('calc-turnaround-display');
  const pressDisplay = document.getElementById('calc-press-display');
  const summarySpecs = document.getElementById('calc-summary-specs');

  const inquiryForm = document.getElementById('print-inquiry-form');

  function calculate() {
    if (!projectType || !quantityInput) return;

    const isBn = document.documentElement.getAttribute('data-lang') === 'bn';
    const qty = parseInt(quantityInput.value, 10);
    if (quantityVal) {
      quantityVal.innerText = isBn ? `${qty.toLocaleString()} কপি` : `${qty.toLocaleString()} Units`;
    }

    // Base pricing factors
    let basePrice = 350;
    let days = 7;
    let pressType = "Sheet-Fed Offset Press (Heidelberg 4-Color)";
    let pressTypeBn = "শীট-ফেড অফসেট প্রেস (হাইডেলবার্গ ৪-কালার)";

    const type = projectType.value;
    if (type === 'packaging') {
      basePrice = 650;
      days = 10;
      pressType = "Industrial 6-Color Offset + Die-Cutting Line";
      pressTypeBn = "ইন্ডাস্ট্রিয়াল ৬-কালার অফসেট ও ডাই-কাটিং লাইন";
    } else if (type === 'branding') {
      basePrice = 800;
      days = 14;
      pressType = "Specialty Letterpress & Precision Digital Indigo";
      pressTypeBn = "লেটারপ্রেস ও প্রিসিশন ডিজিটাল ইনডিগো প্রেস";
    } else if (type === 'typography') {
      basePrice = 500;
      days = 8;
      pressType = "High-Res Vector Font OpenType Export + Screen Print";
      pressTypeBn = "হাই-রেজ ভেক্টর ওপেনটাইপ এক্সপোর্ট ও স্ক্রিন প্রিন্ট";
    } else if (type === 'editorial') {
      basePrice = 750;
      days = 12;
      pressType = "Web Offset & Case Binding Production Line";
      pressTypeBn = "ওয়েব অফসেট ও কেইস বাইন্ডিং প্রোডাকশন লাইন";
    }

    // Paper stock cost factor
    const paper = paperStock ? paperStock.value : 'artcard';
    let paperMultiplier = 1.0;
    if (paper === 'cotton') paperMultiplier = 1.35;
    if (paper === 'kraft') paperMultiplier = 1.15;
    if (paper === 'rigid') paperMultiplier = 1.45;

    // Finishes
    let finishCount = 0;
    finishCheckboxes.forEach(cb => {
      if (cb.checked) finishCount++;
    });

    const finishCost = finishCount * 90;
    const qtyFactor = Math.log10(qty / 200) * 0.45 + 0.8;

    const totalMin = Math.round((basePrice * paperMultiplier + finishCost) * qtyFactor);
    const totalMax = Math.round(totalMin * 1.3);

    if (priceDisplay) {
      priceDisplay.innerHTML = `$${totalMin.toLocaleString()} <span style="font-size:1.4rem; color:var(--text-dim); font-weight:500;">- $${totalMax.toLocaleString()} USD</span>`;
    }

    if (turnaroundDisplay) {
      const minD = days + Math.min(finishCount, 3);
      const maxD = minD + 4;
      turnaroundDisplay.innerText = isBn ? `${minD} - ${maxD} কর্মদিবস` : `${minD} - ${maxD} Business Days`;
    }

    if (pressDisplay) {
      pressDisplay.innerText = isBn ? pressTypeBn : pressType;
    }

    if (summarySpecs) {
      const selectedFinishes = Array.from(finishCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value)
        .join(', ') || (isBn ? 'স্ট্যান্ডার্ড ম্যাট বার্নিশ' : 'Standard Matte Varnish');

      summarySpecs.innerHTML = `
        <div><strong>${isBn ? 'নির্বাচিত প্রজেক্ট:' : 'Selected Scope:'}</strong> ${projectType.options[projectType.selectedIndex].text}</div>
        <div><strong>${isBn ? 'কাগজ ও উপাদান:' : 'Substrate:'}</strong> ${paperStock.options[paperStock.selectedIndex].text}</div>
        <div><strong>${isBn ? 'ফিনিশিং স্তর:' : 'Finishing Layers:'}</strong> ${selectedFinishes}</div>
        <div><strong>${isBn ? 'প্রিন্ট ভলিউম:' : 'Print Volume:'}</strong> ${qty.toLocaleString()} ${isBn ? 'কপি' : 'Units'}</div>
      `;
    }
  }

  window.recalcEstimator = calculate;

  [projectType, paperStock, quantityInput].forEach(el => {
    if (el) el.addEventListener('change', calculate);
    if (el) el.addEventListener('input', calculate);
  });

  finishCheckboxes.forEach(cb => {
    cb.addEventListener('change', calculate);
  });

  calculate();

  // Inquiry Submission Handling
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isBn = document.documentElement.getAttribute('data-lang') === 'bn';
      const name = document.getElementById('inq-name').value.trim();
      const email = document.getElementById('inq-email').value.trim();

      if (!name || !email) {
        showToast(isBn ? 'অনুগ্রহ করে আপনার নাম ও ইমেইল পূরণ করুন।' : 'Please provide your name and email.');
        return;
      }

      const sendBtn = document.getElementById('send-inquiry-btn');
      if (sendBtn) {
        sendBtn.innerHTML = isBn ? `কোটেশন রিকোয়েস্ট পাঠানো হচ্ছে...` : `Sending Quotation Request...`;
        sendBtn.disabled = true;
      }

      setTimeout(() => {
        if (sendBtn) {
          sendBtn.innerHTML = isBn ? `রিকোয়েস্ট সফলভাবে পাঠানো হয়েছে!` : `Quotation Request Sent!`;
          sendBtn.disabled = false;
        }

        const quoteSummary = `Hello! Print Inquiry from ${name} (${email}): ${projectType.options[projectType.selectedIndex].text} - ${quantityInput.value} Units.`;
        
        showToast(isBn ? '🚀 রিকোয়েস্ট পাঠানো হয়েছে! আগামী ২৪ ঘণ্টার মধ্যে প্রেস স্পেসিফিকেশন জানানো হবে।' : '🚀 Print Inquiry Submitted! We will respond within 24 hours with exact press specs.');

        // WhatsApp direct link
        const whatsappUrl = `https://wa.me/8801700000000?text=${encodeURIComponent(quoteSummary)}`;
        const whatsappAction = document.getElementById('whatsapp-direct-link');
        if (whatsappAction) {
          whatsappAction.href = whatsappUrl;
          whatsappAction.style.display = 'inline-flex';
        }
      }, 1000);
    });
  }
}

/* ==========================================================================
   10. WORKING PROCESS & WHY CHOOSE ME INJECTION
   ========================================================================== */
function initProcessAndWhy() {
  renderProcessAndWhy();
}

function renderProcessAndWhy() {
  const processGrid = document.getElementById('process-grid');
  const whyGrid = document.getElementById('why-grid');
  const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

  if (processGrid && data && data.processSteps) {
    processGrid.innerHTML = data.processSteps.map(p => `
      <div class="process-card">
        <span class="process-step-num">${p.step}</span>
        <h4 class="process-title">${isBn && p.title_bn ? p.title_bn : p.title}</h4>
        <p class="process-desc">${isBn && p.desc_bn ? p.desc_bn : p.desc}</p>
      </div>
    `).join('');
  }

  if (whyGrid && data && data.whyChooseMe) {
    whyGrid.innerHTML = data.whyChooseMe.map(w => `
      <div class="why-card">
        <div class="why-num">${w.number}</div>
        <h4 class="why-title">${isBn && w.title_bn ? w.title_bn : w.title}</h4>
        <p class="why-desc">${isBn && w.desc_bn ? w.desc_bn : w.desc}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   11. FAQS ACCORDION CONTROLLER
   ========================================================================== */
function initFaqs() {
  renderFaqs();
}

function renderFaqs() {
  const container = document.getElementById('faqs-container');
  const data = (typeof window !== 'undefined' && window.PORTFOLIO_DATA) ? window.PORTFOLIO_DATA : (typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null);
  if (!container || !data || !data.faqs) return;
  const isBn = document.documentElement.getAttribute('data-lang') === 'bn';

  container.innerHTML = data.faqs.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-question-btn" onclick="toggleFaq(this)">
        <span>${isBn && f.question_bn ? f.question_bn : f.question}</span>
        <span class="faq-icon-cross">+</span>
      </button>
      <div class="faq-answer-panel">
        <p class="faq-answer-text">${isBn && f.answer_bn ? f.answer_bn : f.answer}</p>
      </div>
    </div>
  `).join('');
}

window.toggleFaq = function(button) {
  const item = button.closest('.faq-item');
  if (item) {
    item.classList.toggle('open');
  }
};

/* ==========================================================================
   12. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(msg) {
  let container = document.getElementById('toast-box');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-box';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
    document.body.appendChild(container);
  }
  container.innerHTML = ''; // Clear previous toasts to avoid stacking

  const toast = document.createElement('div');
  toast.style.cssText = 'background:#18181c;border:1px solid var(--accent-primary, #8b5cf6);color:#fff;padding:0.75rem 1.25rem;border-radius:92px;font-size:0.875rem;box-shadow:0 10px 30px rgba(0,0,0,0.6);animation:fadeIn 0.3s ease;pointer-events:auto;font-family:var(--font-primary);';
  toast.innerText = msg;

  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3200);
}

/* ==========================================================================
   13. FOOTER CREATOR CREDIT & SOCIAL CONNECT POPOVER
   ========================================================================== */
function initFooterSocialPopover() {
  const trigger = document.getElementById('footer-credit-trigger');
  const popover = document.getElementById('creator-social-popover');
  const closeBtn = document.getElementById('popover-close-btn');

  if (!trigger || !popover) return;

  function openPopover() {
    popover.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    popover.setAttribute('aria-hidden', 'false');
  }

  function closePopover() {
    popover.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    popover.setAttribute('aria-hidden', 'true');
  }

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popover.classList.contains('is-open')) {
      closePopover();
    } else {
      openPopover();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePopover();
    });
  }

  // Prevent clicks inside popover from closing it
  popover.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', () => {
    if (popover.classList.contains('is-open')) {
      closePopover();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popover.classList.contains('is-open')) {
      closePopover();
    }
  });
}

/* ==========================================================================
   13. FOOTER BRAND INTERACTIVE SPOTLIGHT (Cursor Tracking Radial Flow)
   Follows cursor position smoothly across typography, concentrating the
   velvety wine-red gradient directly beneath the mouse and diffusing outward.
   ========================================================================== */
function initFooterBrandSpotlight() {
  const brandTitle = document.querySelector('.footer-brand-title');
  if (!brandTitle) return;

  let targetX = 50;
  let targetY = 50;
  let currentX = 50;
  let currentY = 50;
  let isHovered = false;
  let rAF = null;

  function tick() {
    // Silky smooth damping interpolation (lerp)
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

    brandTitle.style.setProperty('--spotlight-x', `${currentX.toFixed(2)}%`);
    brandTitle.style.setProperty('--spotlight-y', `${currentY.toFixed(2)}%`);

    const dx = Math.abs(targetX - currentX);
    const dy = Math.abs(targetY - currentY);

    if (isHovered || dx > 0.05 || dy > 0.05) {
      rAF = requestAnimationFrame(tick);
    } else {
      rAF = null;
    }
  }

  function getCoords(e) {
    const rect = brandTitle.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    return {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y))
    };
  }

  brandTitle.addEventListener('mouseenter', (e) => {
    isHovered = true;
    const coords = getCoords(e);
    targetX = coords.x;
    targetY = coords.y;
    currentX = coords.x;
    currentY = coords.y;
    brandTitle.style.setProperty('--spotlight-x', `${currentX.toFixed(2)}%`);
    brandTitle.style.setProperty('--spotlight-y', `${currentY.toFixed(2)}%`);
    brandTitle.classList.add('has-spotlight');
    if (!rAF) rAF = requestAnimationFrame(tick);
  });

  brandTitle.addEventListener('mousemove', (e) => {
    const coords = getCoords(e);
    targetX = coords.x;
    targetY = coords.y;
    if (!rAF) rAF = requestAnimationFrame(tick);
  });

  brandTitle.addEventListener('mouseleave', () => {
    isHovered = false;
    brandTitle.classList.remove('has-spotlight');
  });
}

/* ==========================================================================
   14. CTA CARD DYNAMIC BORDER/STROKE GLOW (Cursor Proximity Responsive)
   Tracks cursor coordinates relative to the CTA banner card. As the cursor
   moves, the stroke edge closest to the pointer dynamically illuminates with
   a silky coral-rose breathing gradient, calculating real-time edge distance.
   ========================================================================== */
function initCtaCardBorderGlow() {
  const card = document.querySelector('.cta-banner-card');
  if (!card) return;

  let targetX = 50;
  let targetY = 50;
  let targetProx = 0.5;
  let currentX = 50;
  let currentY = 50;
  let currentProx = 0.5;
  let isHovered = false;
  let rAF = null;

  function tick() {
    currentX += (targetX - currentX) * 0.12;
    currentY += (targetY - currentY) * 0.12;
    currentProx += (targetProx - currentProx) * 0.12;

    card.style.setProperty('--card-mouse-x', `${currentX.toFixed(2)}%`);
    card.style.setProperty('--card-mouse-y', `${currentY.toFixed(2)}%`);
    card.style.setProperty('--edge-proximity', `${currentProx.toFixed(3)}`);

    const dx = Math.abs(targetX - currentX);
    const dy = Math.abs(targetY - currentY);
    const dp = Math.abs(targetProx - currentProx);

    if (isHovered || dx > 0.05 || dy > 0.05 || dp > 0.005) {
      rAF = requestAnimationFrame(tick);
    } else {
      rAF = null;
    }
  }

  function updateCoords(e) {
    const rect = card.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // Percentages (0 to 100)
    const pctX = (relX / rect.width) * 100;
    const pctY = (relY / rect.height) * 100;
    targetX = Math.max(0, Math.min(100, pctX));
    targetY = Math.max(0, Math.min(100, pctY));

    // Distance from edges (top, bottom, left, right in px)
    const distLeft = Math.max(0, relX);
    const distRight = Math.max(0, rect.width - relX);
    const distTop = Math.max(0, relY);
    const distBottom = Math.max(0, rect.height - relY);
    const minDist = Math.min(distLeft, distRight, distTop, distBottom);

    // Proximity: 1.0 when right near the border/stroke, smoothly scaling as it moves inward
    const maxThreshold = Math.min(rect.width, rect.height) * 0.45;
    const proximity = Math.max(0.2, Math.min(1, 1 - (minDist / Math.max(1, maxThreshold))));
    targetProx = proximity;
  }

  card.addEventListener('mouseenter', (e) => {
    isHovered = true;
    updateCoords(e);
    currentX = targetX;
    currentY = targetY;
    currentProx = targetProx;
    card.style.setProperty('--card-mouse-x', `${currentX.toFixed(2)}%`);
    card.style.setProperty('--card-mouse-y', `${currentY.toFixed(2)}%`);
    card.style.setProperty('--edge-proximity', `${currentProx.toFixed(3)}`);
    card.classList.add('is-hovered');
    if (!rAF) rAF = requestAnimationFrame(tick);
  });

  card.addEventListener('mousemove', (e) => {
    updateCoords(e);
    if (!rAF) rAF = requestAnimationFrame(tick);
  });

  card.addEventListener('mouseleave', () => {
    isHovered = false;
    card.classList.remove('is-hovered');
    targetX = 50;
    targetY = 50;
    targetProx = 0.4;
    if (!rAF) rAF = requestAnimationFrame(tick);
  });
}


