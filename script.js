/* ==========================================================================
   FAMEWOVEN — Master JavaScript Orchestration Engine
   Strict Zero-3D-Hover Policy: 2D Geometric Weave Mechanics Only
   ========================================================================== */

const FAMEWOVEN_SERVICES = [
  { id: 'FW-01', cat: 'virtual', code: '01', title: 'AI Influencer Creation', track: 'Virtual Brand Character Creation', desc: 'Character design, personality bible, custom LoRA training, and a locked visual reference system.' },
  { id: 'FW-02', cat: 'virtual', code: '02', title: 'Campaign Production', track: 'Campaign Production (Stills & Video)', desc: 'Editorial 4K images, product interaction shots, and short-form vertical films built around your brand brief.' },
  { id: 'FW-03', cat: 'virtual', code: '03', title: 'Virtual Talent Direction', track: 'Virtual Talent Casting (Existing Roster)', desc: 'Consistent casting from our 100+ avatar roster, digital wardrobe styling, global locations, and human direction.' },
  { id: 'FW-04', cat: 'virtual', code: '04', title: 'Ongoing Content & Continuity', track: 'Full-Stack Character + Creator Retainer', desc: 'A repeatable monthly creative direction, multi-channel crops, and seasonal releases for a recognisable feed.' },
  { id: 'PF-01', cat: 'content', code: '05', title: 'Sponsored X & Social Posts', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Single high-impact posts built around your brand, virtual character, or product launch across X, IG, and LinkedIn.' },
  { id: 'PF-02', cat: 'content', code: '06', title: 'Deep-Dive X Threads', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Educational, storytelling, workflow-demo, or product-led threads written for how the algorithm actually works.' },
  { id: 'PF-03', cat: 'content', code: '07', title: 'Quote Repost Amplification', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Relevant vetted creators quote and boost your official brand or virtual character launch announcements.' },
  { id: 'PF-04', cat: 'content', code: '08', title: 'Organic Amplification', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Coordinated likes, reposts, replies, and bookmarks from engaged niche accounts to ignite initial velocity.' },
  { id: 'PF-05', cat: 'campaigns', code: '09', title: 'Synchronized Launch Campaigns', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Creator posts and virtual talent drops timed together within the same 48-hour product launch window.' },
  { id: 'PF-06', cat: 'campaigns', code: '10', title: 'Product & Brand Promotion', track: 'Campaign Production (Stills & Video)', desc: 'Full-funnel awareness and demo campaigns for AI, SaaS, fashion, beauty, and consumer tech products.' },
  { id: 'PF-07', cat: 'campaigns', code: '11', title: 'Multi-Creator Waves (10–100+)', track: 'Multi-Creator Launch Wave (10–100+)', desc: '10 to 100+ vetted human and virtual creators executing under one unified campaign architecture.' },
  { id: 'PF-08', cat: 'campaigns', code: '12', title: 'Founder, CEO & Executive Twins', track: 'Virtual Brand Character Creation', desc: 'Creator campaigns and AI executive digital twins aimed directly at builders, founders, and decision-makers.' },
  { id: 'PF-09', cat: 'campaigns', code: '13', title: 'Trend & Narrative Dominance', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Dozens of creators and virtual personas talking about one product, feature, or cultural narrative simultaneously.' },
  { id: 'PF-10', cat: 'campaigns', code: '14', title: 'KPI Performance Campaigns', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Built to hit upfront agreed KPIs for reach, verified impressions, engagement rate, or cost-per-click.' },
  { id: 'PF-11', cat: 'growth', code: '15', title: 'Creator Seeding (T−7 Access)', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Your product, physical lookbook, or early beta access sent to the right AI, tech, and lifestyle creators.' },
  { id: 'PF-12', cat: 'growth', code: '16', title: 'Turnkey Influencer Outreach', track: 'Multi-Creator Launch Wave (10–100+)', desc: 'Finding creators, auditing engagement quality, negotiating rates, and onboarding them with zero-risk escrow.' },
  { id: 'PF-13', cat: 'growth', code: '17', title: 'Long-Term Creator Partnerships', track: 'Full-Stack Character + Creator Retainer', desc: 'Ongoing monthly or batch retainers combining owned virtual ambassadors with recurring creator advocates.' },
  { id: 'PF-14', cat: 'growth', code: '18', title: 'Custom Omnichannel Campaigns', track: 'Full-Stack Character + Creator Retainer', desc: 'A bespoke virtual talent and creator distribution plan engineered around your exact goals and budget.' }
];

const SIMULATOR_PROFILES = [
  { id: 'sim-1', name: 'Soraia Velt', handle: '@soraia.fw', type: 'VIRTUAL CHARACTER', niche: 'Luxury Tech & Editorial', reachNum: 280000, reachLabel: '280K Owned + Ads', er: '9.4% ER', rate: 1650, selected: true },
  { id: 'sim-2', name: 'Alex Sterling', handle: '@alex_builds', type: 'VERIFIED CREATOR ✓', niche: 'AI Engineering & LLMs', reachNum: 340000, reachLabel: '340K Devs & Founders', er: '9.2% ER', rate: 2800, selected: true },
  { id: 'sim-3', name: 'Elena Rostova', handle: '@elena.codes', type: 'VERIFIED CREATOR ✓', niche: 'Cloud & Developer Tools', reachNum: 215000, reachLabel: '215K Engineers', er: '9.8% ER', rate: 1750, selected: false },
  { id: 'sim-4', name: 'David Chen', handle: '@dchen_growth', type: 'VERIFIED CREATOR ✓', niche: 'B2B SaaS & Growth GTM', reachNum: 490000, reachLabel: '490K Tech Leaders', er: '7.9% ER', rate: 3600, selected: false }
];

const FLIGHT_STAGES = [
  { stage: '01/05', title: 'Campaign Blueprint & Identity Architecture', goal: 'Bespoke Brand Character + Multi-Creator Launch', views: '1,500,000+ verified views', channels: 'Instagram + TikTok + 𝕏 + LinkedIn', deliverable: 'Full character reference bible & campaign strategy blueprint signed off before spending $1.' },
  { stage: '02/05', title: 'Character LoRA Lock & Creator Shortlist', goal: '100% Facial Consistency + 141-Point Vetting', views: '30-Angle Studio Turnaround', channels: 'Identity Layer + Shortlist Portal', deliverable: 'Interactive virtual talent lookbook & vetted creator roster approved by your team.' },
  { stage: '03/05', title: 'Virtual Studio Production & T−7 Seeding', goal: 'Defined Light, Natural Texture & Product Demos', views: '4K Stills + 9:16 Vertical Reels', channels: 'Staging Portal + Early Access', deliverable: 'Reviewable campaign stills, short-form video drafts, and FTC disclosure tags.' },
  { stage: '04/05', title: 'Synchronized 48-Hour Launch Wave', goal: 'T−0 Launch + T+1 Quotes + T+3 Threads', views: '20 to 100+ Coordinated Posts', channels: '𝕏 + Instagram + TikTok + YouTube', deliverable: 'Synchronized multi-creator and virtual ambassador rollout inside a 48-hour window.' },
  { stage: '05/05', title: 'Plain-Language Attribution & Continuity', goal: 'Verified ROI + Next-Release Direction', views: 'Reach, Saves, CTR & Conversions', channels: 'Executive Dashboard + Archive', deliverable: 'Plain-language performance report plus archived character weights for the next release.' }
];

const SCALE_TIERS = [
  { max: 3, tier: 'TIER 01 // SINGLE DROP', title: 'Bespoke Brand Character or Single Sponsored Post', desc: 'One custom AI brand character or one well-placed creator post. A low-risk way to establish your visual identity or test a message with a specific audience.', virtualNodes: 1, creatorNodes: 2 },
  { max: 14, tier: 'TIER 02 // CAPSULE SEEDING', title: 'Virtual Campaign Shoot + Creator Seeding Pod', desc: 'A complete editorial campaign shoot (stills + 9:16 Reels) paired with 5 to 14 niche creators testing and demonstrating your product in authentic workflows.', virtualNodes: 2, creatorNodes: 8 },
  { max: 39, tier: 'TIER 03 // COORDINATED LAUNCH', title: '48-Hour Synchronized Launch Wave', desc: '20+ creators and virtual ambassadors posting inside the same 48-hour launch window—combining T−0 launch posts, T+1 quote reposts, and T+3 deep-dive threads.', virtualNodes: 3, creatorNodes: 20 },
  { max: 74, tier: 'TIER 04 // CATEGORY TAKEOVER', title: 'Multi-Channel Narrative & Trend Dominance', desc: '40 to 70+ creators and virtual talent flooding your niche simultaneously so your product becomes the inescapable topic of conversation for founders and buyers.', virtualNodes: 5, creatorNodes: 45 },
  { max: 101, tier: 'TIER 05 // ECOSYSTEM ENGINE', title: '100+ Creator Global Wave & Always-On Continuity', desc: 'Our maximum-scale deployment: an owned virtual talent roster producing ongoing monthly releases backed by 100+ global creators across global markets.', virtualNodes: 8, creatorNodes: 75 }
];

document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
    if (typeof Flip !== 'undefined') gsap.registerPlugin(Flip);
  }

  initLoomPreloader();
  initStickyNav();
  initWeaveCanvas();
  initHeroDeck();
  initServicesGrid();
  initCastingSimulator();
  initFlightConsole();
  initScaleSlider();
  initAuditForm();
  initContactForm();
  initCursor();
});

/* ==========================================================================
   1. Digital Loom Preloader Choreography
   ========================================================================== */
function initLoomPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const isLoaded = sessionStorage.getItem('fw_loaded');
  const counterObj = { val: 0 };
  const counterEl = document.getElementById('preloader-counter');
  const statusEl = document.getElementById('preloader-status');

  if (isLoaded && typeof gsap !== 'undefined') {
    // Streamlined 0.55s weave wipe for returning views
    gsap.timeline({
      onComplete: () => {
        preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    })
    .to('.loom-col', {
      yPercent: (i) => (i % 2 === 0 ? -100 : 100),
      duration: 0.55,
      stagger: 0.03,
      ease: 'expo.inOut'
    });
    return;
  }

  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('fw_loaded', 'true');
        preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    });

    tl.to('.warp-line', {
      strokeDashoffset: 0,
      duration: 0.55,
      stagger: 0.08,
      ease: 'power3.inOut'
    })
    .to('.weft-line', {
      strokeDashoffset: 0,
      duration: 0.45,
      stagger: 0.1,
      ease: 'power4.out'
    }, '-=0.25')
    .to('.weave-node', { opacity: 1, duration: 0.2 }, '-=0.1')
    .to('#loom-wordmark', { y: '0%', duration: 0.6, ease: 'expo.out' }, '-=0.3')
    .to('#loom-sub', { opacity: 1, duration: 0.4 }, '-=0.3')
    .to(counterObj, {
      val: 100,
      duration: 1.4,
      ease: 'power2.inOut',
      onUpdate: () => {
        const v = Math.round(counterObj.val);
        if (counterEl) counterEl.textContent = String(v).padStart(3, '0') + '%';
        if (statusEl) {
          if (v > 75) statusEl.textContent = 'INFLUENCE, WOVEN // READY';
          else if (v > 35) statusEl.textContent = 'LOCKING VISUAL REFERENCE SYSTEM...';
        }
      }
    }, 0)
    .to(['#loom-logo-svg', '#loom-wordmark', '#loom-sub', '.preloader-meta'], {
      opacity: 0,
      y: -16,
      duration: 0.3,
      ease: 'power2.in'
    })
    .to('.loom-col', {
      yPercent: (i) => (i % 2 === 0 ? -100 : 100),
      duration: 0.75,
      stagger: 0.04,
      ease: 'expo.inOut'
    }, '-=0.1');
  } else {
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
}

/* ==========================================================================
   2. Sticky Navigation Compaction & Mobile Menu
   ========================================================================== */
function initStickyNav() {
  const nav = document.getElementById('nav');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        nav.classList.add('h-16', 'bg-ink/95', 'border-ash/30');
        nav.classList.remove('h-20', 'bg-ink/90');
      } else {
        nav.classList.add('h-20', 'bg-ink/90');
        nav.classList.remove('h-16', 'bg-ink/95', 'border-ash/30');
      }
    });
  }

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

/* ==========================================================================
   3. Interactive 2D Warp-Weft Hero Canvas
   ========================================================================== */
function initWeaveCanvas() {
  const canvas = document.getElementById('weave-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  const spacing = 64;
  let pulses = [];

  function resize() {
    if (!canvas.parentElement) return;
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 9; i++) {
    pulses.push({
      horizontal: i % 2 === 0,
      lineIndex: Math.floor(Math.random() * 16) + 1,
      pos: Math.random() * 1000,
      speed: 1.2 + Math.random() * 1.6
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(167, 165, 155, 0.07)';
    ctx.lineWidth = 1;

    for (let x = spacing; x < width; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = spacing; y < height; y += spacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#D1F34A';
    ctx.lineWidth = 1.5;
    pulses.forEach((p) => {
      p.pos += p.speed;
      ctx.beginPath();
      if (p.horizontal) {
        const y = (p.lineIndex * spacing) % height;
        if (p.pos > width) p.pos = -80;
        ctx.moveTo(p.pos, y);
        ctx.lineTo(p.pos + 56, y);
      } else {
        const x = (p.lineIndex * spacing) % width;
        if (p.pos > height) p.pos = -80;
        ctx.moveTo(x, p.pos);
        ctx.lineTo(x, p.pos + 56);
      }
      ctx.stroke();
    });
    requestAnimationFrame(render);
  }
  render();
}

/* ==========================================================================
   4. Hero 3-Card 2D Dossier Deck Rotation
   ========================================================================== */
function initHeroDeck() {
  const deck = document.getElementById('hero-deck');
  if (!deck) return;

  const cards = deck.querySelectorAll('.deck-card');
  const tabs = deck.querySelectorAll('.deck-tab');
  const progressBars = deck.querySelectorAll('.deck-progress');
  if (cards.length === 0) return;

  let activeIndex = 0;
  let timer = null;
  const cycleDuration = 5500; // 5.5 seconds per slide

  function activateCard(index) {
    activeIndex = index;
    cards.forEach((c, i) => {
      if (i === activeIndex) {
        c.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        c.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
      } else {
        c.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        c.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
      }
    });

    tabs.forEach((t, i) => {
      if (i === activeIndex) {
        t.classList.add('text-weft', 'border-weft');
        t.classList.remove('text-ash', 'border-ash/20');
      } else {
        t.classList.remove('text-weft', 'border-weft');
        t.classList.add('text-ash', 'border-ash/20');
      }
    });

    progressBars.forEach((p, i) => {
      if (typeof gsap !== 'undefined') {
        gsap.killTweensOf(p);
        if (i < activeIndex) {
          gsap.set(p, { width: '100%' });
        } else if (i === activeIndex) {
          gsap.fromTo(p, { width: '0%' }, { width: '100%', duration: cycleDuration / 1000, ease: 'linear' });
        } else {
          gsap.set(p, { width: '0%' });
        }
      } else {
        p.style.width = i === activeIndex ? '100%' : '0%';
      }
    });
  }

  function startCycle() {
    clearInterval(timer);
    activateCard(activeIndex);
    timer = setInterval(() => {
      activeIndex = (activeIndex + 1) % cards.length;
      activateCard(activeIndex);
    }, cycleDuration);
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      activeIndex = idx;
      startCycle();
    });
  });

  startCycle();
}

/* ==========================================================================
   5. Dynamic 18-Service Grid & Form Pre-Selection Binding
   ========================================================================== */
function initServicesGrid() {
  const grid = document.getElementById('services-grid');
  const select = document.getElementById('f-type');
  const trackSelect = document.getElementById('f-track');
  const chips = document.querySelectorAll('[data-filter]');

  if (select && select.children.length <= 1) {
    FAMEWOVEN_SERVICES.forEach((s) => {
      const opt = document.createElement('option');
      opt.value = s.title;
      opt.textContent = `${s.code} — ${s.title}`;
      select.appendChild(opt);
    });
  }

  function renderServices(filter = 'all') {
    if (!grid) return;
    const items = filter === 'all' ? FAMEWOVEN_SERVICES : FAMEWOVEN_SERVICES.filter((s) => s.cat === filter);
    grid.innerHTML = items.map((s) => `
      <article class="fw-card bg-ink border border-ash/20 p-6 flex flex-col justify-between cursor-pointer hover:border-weft/60 transition-colors" data-service="${s.title}" data-track="${s.track}">
        <div>
          <div class="flex justify-between items-center font-mono text-[11px] text-ash mb-4">
            <span class="text-weft">${s.code} // ${s.cat.toUpperCase()}</span>
            <span>FAMEWOVEN</span>
          </div>
          <h3 class="text-xl font-bold text-chalk mb-2">${s.title}</h3>
          <p class="text-sm text-ash leading-relaxed">${s.desc}</p>
        </div>
        <div class="pt-6 mt-6 border-t border-ash/15 flex justify-between items-center font-mono text-xs text-chalk">
          <span class="text-ash/80">Select capability</span>
          <span class="text-weft font-bold flex items-center gap-1">Start brief ↗</span>
        </div>
      </article>
    `).join('');

    grid.querySelectorAll('[data-service]').forEach((card) => {
      card.addEventListener('click', () => {
        if (select) select.value = card.dataset.service;
        if (trackSelect && card.dataset.track) trackSelect.value = card.dataset.track;
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          flashFormField(select);
        }
      });
    });
  }

  renderServices('all');
  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => {
        c.classList.remove('bg-weft', 'text-ink', 'font-bold');
        c.classList.add('text-ash');
      });
      chip.classList.add('bg-weft', 'text-ink', 'font-bold');
      chip.classList.remove('text-ash');
      renderServices(chip.dataset.filter);
    });
  });
}

/* ==========================================================================
   6. Live Virtual Casting & Creator Sourcing Simulator
   ========================================================================== */
function initCastingSimulator() {
  const container = document.getElementById('simulator-cards');
  const countEl = document.getElementById('sim-count');
  const reachEl = document.getElementById('sim-reach');
  const costEl = document.getElementById('sim-cost');
  const bookBtn = document.getElementById('sim-book-btn');
  const simFilters = document.querySelectorAll('[data-sim-filter]');

  if (!container) return;

  let currentCategory = 'all';

  function updateSimulatorUI() {
    const active = SIMULATOR_PROFILES.filter((p) => p.selected);
    const totalReach = active.reduce((acc, p) => acc + p.reachNum, 0);
    const totalCost = active.reduce((acc, p) => acc + p.rate, 0);

    if (countEl) countEl.textContent = active.length;
    if (reachEl) reachEl.textContent = (totalReach / 1000).toFixed(0) + 'K+';
    if (costEl) costEl.textContent = '$' + totalCost.toLocaleString();

    const filtered = currentCategory === 'all'
      ? SIMULATOR_PROFILES
      : SIMULATOR_PROFILES.filter((p) => {
          if (currentCategory === 'virtual') return p.type.includes('VIRTUAL');
          if (currentCategory === 'ai') return p.niche.includes('AI') || p.niche.includes('Cloud');
          if (currentCategory === 'saas') return p.niche.includes('SaaS') || p.niche.includes('Growth');
          return true;
        });

    container.innerHTML = filtered.map((p) => `
      <div class="fw-card p-4 border ${p.selected ? 'border-weft bg-weft/10 is-selected' : 'border-ash/20 bg-ink-elevated'} cursor-pointer transition-all" data-sim-id="${p.id}">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h4 class="font-bold text-chalk text-base">${p.name}</h4>
            <span class="font-mono text-[11px] text-ash">${p.handle}</span>
          </div>
          <span class="font-mono text-[10px] px-2 py-0.5 ${p.selected ? 'bg-weft text-ink font-bold' : 'bg-plum text-chalk'}">${p.type}</span>
        </div>
        <p class="text-xs text-ash mb-3">${p.niche}</p>
        <div class="flex justify-between items-center pt-3 border-t border-ash/15 font-mono text-xs">
          <span class="text-chalk">${p.reachLabel}</span>
          <span class="text-weft font-bold">${p.er}</span>
          <span class="text-chalk font-bold">$${p.rate.toLocaleString()}</span>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('[data-sim-id]').forEach((el) => {
      el.addEventListener('click', () => {
        const profile = SIMULATOR_PROFILES.find((item) => item.id === el.dataset.simId);
        if (profile) {
          profile.selected = !profile.selected;
          updateSimulatorUI();
        }
      });
    });
  }

  simFilters.forEach((chip) => {
    chip.addEventListener('click', () => {
      simFilters.forEach((c) => {
        c.classList.remove('bg-weft', 'text-ink', 'font-bold');
        c.classList.add('text-ash');
      });
      chip.classList.add('bg-weft', 'text-ink', 'font-bold');
      chip.classList.remove('text-ash');
      currentCategory = chip.dataset.simFilter;
      updateSimulatorUI();
    });
  });

  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      const active = SIMULATOR_PROFILES.filter((p) => p.selected);
      const names = active.map((a) => a.name).join(', ');
      const msgField = document.getElementById('f-msg');
      const trackField = document.getElementById('f-track');
      const typeField = document.getElementById('f-type');

      if (trackField) trackField.value = 'Virtual Talent Casting (Existing Roster)';
      if (typeField) typeField.value = 'Virtual Talent Direction';
      if (msgField && names) {
        msgField.value = `[Simulator Shortlist Booking]: Selected talent (${active.length}): ${names}. Estimated package: $${active.reduce((acc, p) => acc + p.rate, 0).toLocaleString()} with zero-risk escrow.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        flashFormField(msgField);
      }
    });
  }

  updateSimulatorUI();
}

/* ==========================================================================
   7. End-to-End 5-Stage Flight Console State Machine
   ========================================================================== */
function initFlightConsole() {
  let idx = 0;
  const stageEl = document.getElementById('flight-stage-indicator');
  const titleEl = document.getElementById('flight-title');
  const goalEl = document.getElementById('flight-goal');
  const viewsEl = document.getElementById('flight-views');
  const channelsEl = document.getElementById('flight-channels');
  const delivEl = document.getElementById('flight-deliverable');
  const nextBtn = document.getElementById('flight-next-btn');
  const stageTabs = document.querySelectorAll('[data-flight-stage]');
  const pauseBtn = document.getElementById('flight-pause-btn');

  let isPaused = false;
  let autoTimer = null;

  function renderStage(i) {
    idx = i;
    const s = FLIGHT_STAGES[i];
    if (!s || !titleEl) return;
    if (stageEl) stageEl.textContent = `STAGE ${s.stage}`;
    if (titleEl) titleEl.textContent = s.title;
    if (goalEl) goalEl.textContent = s.goal;
    if (viewsEl) viewsEl.textContent = s.views;
    if (channelsEl) channelsEl.textContent = s.channels;
    if (delivEl) delivEl.textContent = s.deliverable;

    stageTabs.forEach((tab, tIdx) => {
      if (tIdx === idx) {
        tab.classList.add('bg-weft', 'text-ink', 'font-bold');
        tab.classList.remove('bg-ink', 'text-ash');
      } else {
        tab.classList.remove('bg-weft', 'text-ink', 'font-bold');
        tab.classList.add('bg-ink', 'text-ash');
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      idx = (idx + 1) % FLIGHT_STAGES.length;
      renderStage(idx);
    });
  }

  stageTabs.forEach((tab, tIdx) => {
    tab.addEventListener('click', () => {
      renderStage(tIdx);
    });
  });

  if (pauseBtn) {
    pauseBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? 'RESUME ▶' : 'PAUSE ❚❚';
    });
  }

  renderStage(0);
}

/* ==========================================================================
   8. Interactive Campaign Scale Slider (1 to 100+ Creators)
   ========================================================================== */
function initScaleSlider() {
  const slider = document.getElementById('scale-range');
  const outEl = document.getElementById('scale-out');
  const tierEl = document.getElementById('scale-tier');
  const typeEl = document.getElementById('scale-type');
  const descEl = document.getElementById('scale-type-desc');
  const clusterSvg = document.getElementById('cluster-svg');

  if (!slider) return;

  function updateScale() {
    const val = parseInt(slider.value, 10);
    if (outEl) outEl.textContent = val > 100 ? '100+' : String(val);
    const activeTier = SCALE_TIERS.find((t) => val <= t.max) || SCALE_TIERS[SCALE_TIERS.length - 1];
    if (tierEl) tierEl.textContent = activeTier.tier;
    if (typeEl) typeEl.textContent = activeTier.title;
    if (descEl) descEl.textContent = activeTier.desc;

    // Render 2D SVG Cluster Nodes
    if (clusterSvg) {
      const centerX = 200;
      const centerY = 200;
      let nodesHtml = `
        <!-- Concentric dashed orbital rings -->
        <circle cx="${centerX}" cy="${centerY}" r="60" stroke="#A7A59B" stroke-opacity="0.25" stroke-dasharray="4 4" fill="none" />
        <circle cx="${centerX}" cy="${centerY}" r="110" stroke="#A7A59B" stroke-opacity="0.25" stroke-dasharray="4 4" fill="none" />
        <circle cx="${centerX}" cy="${centerY}" r="160" stroke="#A7A59B" stroke-opacity="0.25" stroke-dasharray="4 4" fill="none" />

        <!-- Central FAMEWOVEN Node -->
        <circle cx="${centerX}" cy="${centerY}" r="22" fill="#D1F34A" />
        <text x="${centerX}" y="${centerY + 5}" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#111311" text-anchor="middle">F</text>
      `;

      // Spawn Virtual Nodes on inner orbit
      for (let v = 0; v < activeTier.virtualNodes; v++) {
        const angle = (v / activeTier.virtualNodes) * Math.PI * 2;
        const x = centerX + Math.cos(angle) * 60;
        const y = centerY + Math.sin(angle) * 60;
        nodesHtml += `
          <line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="#D1F34A" stroke-opacity="0.4" stroke-width="1.5" />
          <circle cx="${x}" cy="${y}" r="8" fill="#291A27" stroke="#D1F34A" stroke-width="2" />
        `;
      }

      // Spawn Creator Nodes on outer orbits
      const totalCreators = Math.min(activeTier.creatorNodes, 40); // cap for visual clarity
      for (let c = 0; c < totalCreators; c++) {
        const radius = c % 2 === 0 ? 110 : 160;
        const angle = (c / totalCreators) * Math.PI * 2 + (c % 2) * 0.3;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        nodesHtml += `
          <circle cx="${x}" cy="${y}" r="5" fill="#F1EFE8" stroke="#111311" stroke-width="1" />
        `;
      }

      clusterSvg.innerHTML = nodesHtml;
    }
  }

  slider.addEventListener('input', updateScale);
  updateScale();
}

/* ==========================================================================
   9. Lead Magnet Audit Bar to Contact Binding
   ========================================================================== */
function initAuditForm() {
  const auditSubmit = document.getElementById('audit-submit');
  const auditUrl = document.getElementById('audit-url');
  const auditNiche = document.getElementById('audit-niche');

  if (auditSubmit) {
    auditSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const urlVal = auditUrl ? auditUrl.value.trim() : '';
      const nicheVal = auditNiche ? auditNiche.value : '';

      const formUrl = document.getElementById('f-url');
      const formIndustry = document.getElementById('f-industry');
      const formTrack = document.getElementById('f-track');
      const formMsg = document.getElementById('f-msg');

      if (formUrl && urlVal) formUrl.value = urlVal;
      if (formIndustry && nicheVal) formIndustry.value = nicheVal;
      if (formTrack) formTrack.value = 'Virtual Brand Character Creation';
      if (formMsg) {
        formMsg.value = `[Instant Blueprint Request]: Brand URL: ${urlVal || 'N/A'}, Vertical: ${nicheVal || 'General'}. Requesting 30-min character & campaign architecture blueprint.`;
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        flashFormField(formUrl);
      }
    });
  }
}

/* ==========================================================================
   10. Scoped Brief & Contact Form Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successPanel = document.getElementById('form-success') || document.getElementById('form-feedback');

  // Read URL search params for instant brief pre-population
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramService = urlParams.get('service');
    const paramTrack = urlParams.get('track');
    const paramType = urlParams.get('type');
    const paramPersona = urlParams.get('persona');

    const fType = document.getElementById('f-type');
    const fTrack = document.getElementById('f-track');
    const fMsg = document.getElementById('f-msg');

    if (paramService && fType) {
      for (let i = 0; i < fType.options.length; i++) {
        if (fType.options[i].text.toLowerCase().includes(paramService.toLowerCase())) {
          fType.selectedIndex = i;
          break;
        }
      }
    } else if (paramType && fType) {
      for (let i = 0; i < fType.options.length; i++) {
        if (fType.options[i].value.toLowerCase().includes(paramType.toLowerCase())) {
          fType.selectedIndex = i;
          break;
        }
      }
    }

    if (paramTrack && fTrack) {
      for (let i = 0; i < fTrack.options.length; i++) {
        if (fTrack.options[i].value.toLowerCase().includes(paramTrack.toLowerCase()) || fTrack.options[i].text.toLowerCase().includes(paramTrack.toLowerCase())) {
          fTrack.selectedIndex = i;
          break;
        }
      }
    }

    if (paramPersona && fMsg) {
      fMsg.value = `[Talent Roster Inquiry]: Requesting booking scope and casting feasibility for virtual persona: ${paramPersona}.`;
    }
  } catch (err) {
    console.warn('URL param parse error:', err);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('f-name')?.value.trim();
      const email = document.getElementById('f-email')?.value.trim();
      const company = document.getElementById('f-company')?.value.trim();

      if (!name || !email || !company) {
        alert('Please fill out all required fields marked with * (Name, Company, and Work Email).');
        return;
      }

      form.classList.add('hidden');
      if (successPanel) {
        successPanel.classList.remove('hidden');
        successPanel.classList.add('block', 'bg-[#181B18]', 'border-[#D1F34A]', 'text-[#F1EFE8]');
        successPanel.innerHTML = `
          <div class="p-6 border border-[#D1F34A] bg-[#181B18] fw-card">
            <span class="font-mono text-xs uppercase text-[#D1F34A] block mb-2">TELEMETRY INTAKE DISPATCHED</span>
            <h3 class="text-xl font-bold text-[#F1EFE8] mb-2">Flight Brief Received, ${name}.</h3>
            <p class="text-xs font-mono text-[#A7A59B] mb-4">A senior synthetic identity engineer has been assigned to ${company}. Expect preliminary compute feasibility metrics and our NDA package within 4 business hours.</p>
            <div class="text-[11px] font-mono text-[#D1F34A]">RESERVATION STATUS: COHORT 02 SEAT PROVISIONALLY HELD</div>
          </div>
        `;
      }
    });
  }
}

/* ==========================================================================
   11. 2D Magnetic Loupe Cursor
   ========================================================================== */
function initCursor() {
  const cursor = document.getElementById('fw-cursor');
  if (!cursor || window.innerWidth < 1024) return;

  window.addEventListener('mousemove', (e) => {
    if (typeof gsap !== 'undefined') {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: 'power2.out'
      });
    } else {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });

  document.querySelectorAll('a, button, input, select, .cursor-pointer').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-hovering'));
  });

  document.querySelectorAll('.portrait-frame, [data-inspect]').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-inspecting'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-inspecting'));
  });
}

/* ==========================================================================
   Helper: Visual Flash for Form Fields on Binding
   ========================================================================== */
function flashFormField(element) {
  if (!element) return;
  element.focus();
  element.classList.add('border-weft', 'bg-weft/10');
  setTimeout(() => {
    element.classList.remove('bg-weft/10');
  }, 1200);
}
