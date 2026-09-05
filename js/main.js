/**
 * Illusion Imaging - Corporate Frontend JavaScript
 * Solar Energy System Sales & Services | Medical Equipment Import, Supply & Service
 */

// --- Global Product Catalog Data ---
const PRODUCTS_DATA = {
  'solar-mono-550': {
    id: 'solar-mono-550',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Tier-1 High Efficiency Monocrystalline Solar Panels (550W+)',
    summary: 'High-conversion half-cut cell solar modules designed for maximum power yield in commercial and residential rooftop environments.',
    iconType: 'solar-panel',
    specs: [
      { label: 'Max Power Output', value: '550W - 585W' },
      { label: 'Module Efficiency', value: 'Up to 21.8%' },
      { label: 'Cell Type', value: 'Monocrystalline Perc / N-Type' },
      { label: 'Junction Box', value: 'IP68 Weatherproof Rated' },
      { label: 'Operating Temp', value: '-40°C to +85°C' },
      { label: 'Warranty Support', value: '12-Year Product, 25-Year Linear Power' }
    ],
    features: [
      'PID (Potential Induced Degradation) resistant design',
      'Superior low-light irradiance performance',
      'Robust aluminum alloy frame capable of 2400Pa wind & 5400Pa snow loads',
      'Ideal for both on-grid utility and off-grid battery systems'
    ]
  },
  'solar-hybrid-inverter': {
    id: 'solar-hybrid-inverter',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Smart Hybrid Solar Inverter (5kW – 15kW Pure Sine Wave)',
    summary: 'Bi-directional pure sine wave hybrid inverter with dual MPPT trackers, seamless grid switching, and intelligent lithium battery management.',
    iconType: 'inverter',
    specs: [
      { label: 'Rated AC Power', value: '5kW / 8kW / 10kW / 15kW' },
      { label: 'MPPT Voltage Range', value: '120V - 500V DC' },
      { label: 'Waveform', value: 'Pure Sine Wave (THD < 3%)' },
      { label: 'Battery Compatibility', value: 'Lithium LiFePO4 & Lead-Acid' },
      { label: 'Transfer Time', value: '< 10ms (Instant UPS Level)' },
      { label: 'Monitoring', value: 'WiFi / GPRS / RS485 Real-time App' }
    ],
    features: [
      'Dual MPPT algorithm ensuring up to 99.9% tracking efficiency',
      'Programmable supply priority: Solar, Battery, or Utility Grid',
      'Overload, short circuit, and thermal protection suite',
      'Smart generator auto-start relay support'
    ]
  },
  'solar-lifepo4-battery': {
    id: 'solar-lifepo4-battery',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Deep-Cycle LiFePO4 Energy Storage Battery (48V 100Ah / 200Ah)',
    summary: 'Ultra-safe Lithium Iron Phosphate (LiFePO4) energy storage system engineered for continuous deep cycling and long lifespan.',
    iconType: 'battery',
    specs: [
      { label: 'Nominal Voltage', value: '48V / 51.2V DC' },
      { label: 'Rated Capacity', value: '100Ah (5.12kWh) / 200Ah (10.24kWh)' },
      { label: 'Cycle Life', value: '6000+ Cycles @ 80% DoD' },
      { label: 'BMS Protection', value: 'Integrated Smart BMS with Cell Balancing' },
      { label: 'Scalability', value: 'Up to 15 Units in Parallel' },
      { label: 'Warranty Support', value: '5-Year Manufacturer Warranty' }
    ],
    features: [
      'Thermal runaway prevention chemistry for maximum safety',
      'Zero maintenance required unlike conventional flooded batteries',
      'Compact wall-mount or server-rack form factors',
      'Digital LCD display showing state of charge, voltage, and alarms'
    ]
  },
  'solar-water-pump': {
    id: 'solar-water-pump',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Solar Water Pumping System (Submersible & Surface)',
    summary: 'High-lift DC brushless and AC solar pumping solution for agricultural irrigation, livestock, and community clean water supply.',
    iconType: 'pump',
    specs: [
      { label: 'Motor Rating', value: '1.5 HP to 10 HP' },
      { label: 'Maximum Head', value: 'Up to 180 Meters' },
      { label: 'Flow Rate', value: '3,000L to 35,000L per Hour' },
      { label: 'Pump Material', value: 'AISI 304 Stainless Steel' },
      { label: 'Controller', value: 'Automatic MPPT Variable Frequency Drive' },
      { label: 'Protection', value: 'Dry-run sensor & over-voltage cut-off' }
    ],
    features: [
      'Eliminates ongoing diesel fuel expenses for farms and facilities',
      'Automatic operation from dawn to dusk without battery overhead',
      'Corrosion-resistant construction for deep well longevity'
    ]
  },
  'solar-street-light': {
    id: 'solar-street-light',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Integrated All-In-One Commercial Solar Street Lighting',
    summary: 'Heavy-duty integrated solar luminaire featuring high-lumen Philips LED chips, radar motion detection, and LiFePO4 battery pack.',
    iconType: 'streetlight',
    specs: [
      { label: 'Luminous Output', value: '6000lm - 15000lm (60W - 150W)' },
      { label: 'Color Temperature', value: '5700K Daylight White' },
      { label: 'Lighting Autonomy', value: '3-5 Continuous Rainy/Cloudy Days' },
      { label: 'Sensor Mode', value: 'Microwave Radar Motion Induction' },
      { label: 'Ingress Protection', value: 'IP65 Water & Dust Resistant' }
    ],
    features: [
      'Die-cast aluminum casing with anti-corrosion coating',
      'Automatic dusk-to-dawn intelligent light management',
      'Zero cabling requirement for easy roadway and campus installation'
    ]
  },
  'solar-rooftop-kit': {
    id: 'solar-rooftop-kit',
    category: 'solar',
    badgeText: 'Solar Energy',
    badgeClass: 'badge-solar',
    title: 'Commercial On-Grid Solar Rooftop System Package',
    summary: 'Turnkey on-grid solar solution engineered for factories, hospitals, corporate offices, and commercial establishments in Bangladesh.',
    iconType: 'rooftop',
    specs: [
      { label: 'System Capacities', value: '10kWp, 25kWp, 50kWp, 100kWp+' },
      { label: 'Net Metering', value: 'Compatible with DESCO, DPDC, REB, NESCO' },
      { label: 'Structure Type', value: 'Hot-Dip Galvanized & Anodized AL6005' },
      { label: 'Protection System', value: 'SPD Type II, DC Disconnects, Grounding' }
    ],
    features: [
      'Comprehensive feasibility engineering, 3D shadow analysis and layout',
      'Full regulatory compliance and net metering documentation assistance',
      'Significant reduction in monthly commercial electricity expenditures'
    ]
  },
  'med-ultrasound': {
    id: 'med-ultrasound',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: 'Digital Color Doppler Ultrasound Diagnostic System',
    summary: 'High-definition digital ultrasound platform offering advanced clinical imaging for abdominal, obstetrics, cardiology, and vascular diagnostics.',
    iconType: 'ultrasound',
    specs: [
      { label: 'Display Screen', value: '19-inch High-Resolution Medical LED' },
      { label: 'Probe Connectors', value: '4 Active Transducer Ports' },
      { label: 'Imaging Modes', value: 'B, 2B, 4B, M, CFM, PDI, PW, CW, 3D/4D' },
      { label: 'Transducers', value: 'Convex, Linear, Transvaginal, Cardiac' },
      { label: 'Storage', value: '500GB SSD DICOM 3.0 Compatible' },
      { label: 'Warranty & Support', value: 'Full Service & Calibration Warranty' }
    ],
    features: [
      'Speckle reduction imaging & spatial compounding technology',
      'Intuitive workflow with programmable user presets',
      'Rapid boot-time and ergonomic adjustable console swivel',
      'Comprehensive clinical measurement and reporting software'
    ]
  },
  'med-patient-monitor': {
    id: 'med-patient-monitor',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: 'Multi-Parameter ICU Patient Monitor (12.1" Touch Display)',
    summary: 'Accurate bedside physiological monitor designed for ICU, CCU, operation theaters, and general clinical wards.',
    iconType: 'monitor',
    specs: [
      { label: 'Parameters', value: 'ECG, SpO2, NIBP, RESP, 2-TEMP, PR' },
      { label: 'Optional Modules', value: 'EtCO2, 2-IBP, Cardiac Output (CO)' },
      { label: 'Display Screen', value: '12.1-inch Color TFT Multi-Touch' },
      { label: 'Battery Backup', value: 'Rechargeable Li-ion (Up to 4 Hours)' },
      { label: 'Data Storage', value: '120-Hour Trend Review & Event Recall' },
      { label: 'Connectivity', value: 'Central Monitoring System (CMS) Ready' }
    ],
    features: [
      'Anti-motion and low-perfusion SpO2 technology',
      'Arrhythmia analysis, pacemaker detection, and ST segment analysis',
      'Multi-level visual and audible alarm indications',
      'Waterproof silicone keys and easy-clean casing for infection control'
    ]
  },
  'med-xray-unit': {
    id: 'med-xray-unit',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: 'High-Frequency Mobile Radiography X-Ray Unit',
    summary: 'Compact high-frequency mobile X-ray system engineered for patient wards, trauma bays, and diagnostic centers.',
    iconType: 'xray',
    specs: [
      { label: 'Generator Power', value: '5.0kW / 100mA High-Frequency' },
      { label: 'Tube Voltage', value: '40kV – 110kV in 1kV Steps' },
      { label: 'Focal Spot', value: 'Dual Focus (0.6mm / 1.5mm)' },
      { label: 'Counterbalanced Arm', value: 'Multi-Directional 360° Reach' },
      { label: 'Detector Compatibility', value: 'Analog Cassette & Wireless Flat Panel (DR)' },
      { label: 'Power Supply', value: 'Single Phase 220V 50Hz Standard' }
    ],
    features: [
      'High-frequency inverter delivering sharp image contrast with low dose',
      'Smooth mobility with lightweight castor wheels and parking brake',
      'Pre-programmed anatomical programs (APR) for rapid parameter setup',
      'Wireless remote exposure switch for clinician radiation safety'
    ]
  },
  'med-ecg-machine': {
    id: 'med-ecg-machine',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: '12-Channel Electrocardiograph (ECG) Machine',
    summary: 'Precision 12-channel diagnostic ECG machine with automatic interpretation, high-resolution thermal printing, and digital archiving.',
    iconType: 'ecg',
    specs: [
      { label: 'Leads', value: 'Simultaneous 12-Lead Acquisition' },
      { label: 'Display Screen', value: '10-inch Color Touch Screen' },
      { label: 'Printer', value: '216mm High-Speed Thermal Roll / Z-fold' },
      { label: 'Filters', value: 'AC, EMG, Baseline Drift, Low-Pass' },
      { label: 'Internal Memory', value: '1,000+ Patient Records (SD Card / USB)' },
      { label: 'Interpretation', value: 'Glasgow/CSE Diagnostic Algorithm' }
    ],
    features: [
      'Instant rhythm strip generation and real-time freeze waveform review',
      'Direct PDF export to USB drive for paperless medical records',
      'Built-in rechargeable battery supporting over 300 ECG printouts'
    ]
  },
  'med-autoclave': {
    id: 'med-autoclave',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: 'Hospital Grade High-Pressure Steam Autoclave Sterilizer',
    summary: 'Class B pre-vacuum autoclave for surgical instruments, laboratory glassware, and clinical textile sterilization.',
    iconType: 'autoclave',
    specs: [
      { label: 'Chamber Capacity', value: '50L / 75L / 100L Vertical & Horizontal' },
      { label: 'Chamber Material', value: 'Food & Med Grade SUS304 Stainless' },
      { label: 'Sterilization Temp', value: '105°C - 134°C Programmable' },
      { label: 'Working Pressure', value: '0.22 MPa Maximum' },
      { label: 'Safety Interlocks', value: 'Overpressure safety valve, auto-door lock' }
    ],
    features: [
      'Microprocessor controlled automatic cycles with dry cycle function',
      'Independent steam generator ensuring uniform thermal distribution',
      'Audio-visual status indicators and automatic fault self-diagnosis'
    ]
  },
  'med-syringe-pump': {
    id: 'med-syringe-pump',
    category: 'medical',
    badgeText: 'Medical Equipment',
    badgeClass: 'badge-medical',
    title: 'Micro-Infusion & Syringe Pump Precision Station',
    summary: 'High-precision syringe and volumetric infusion pump system for critical medication delivery in neonatology, ICU, and oncology.',
    iconType: 'syringe',
    specs: [
      { label: 'Compatible Syringes', value: '5ml, 10ml, 20ml, 30ml, 50/60ml Standard' },
      { label: 'Infusion Flow Rate', value: '0.1ml/h - 1500ml/h' },
      { label: 'Flow Accuracy', value: '±2% (Mechanical accuracy ±1%)' },
      { label: 'Bolus Rate', value: 'Adjustable up to 1500ml/h' },
      { label: 'Occlusion Levels', value: 'Multiple dynamic pressure thresholds' }
    ],
    features: [
      'Dual CPU architecture ensuring fail-safe continuous monitoring',
      'Extensive drug library with custom dosage parameters',
      'Anti-bolus system preventing sudden burst delivery upon occlusion release',
      'Stackable design with docking station connectivity'
    ]
  }
};

// --- Helper: Icon SVG Generator ---
function getProductSvg(type) {
  switch (type) {
    case 'solar-panel':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="3 14 6 5 18 5 21 14 3 14"/>
        <line x1="12" y1="5" x2="12" y2="14"/>
        <line x1="7.5" y1="9.5" x2="16.5" y2="9.5"/>
        <line x1="9" y1="14" x2="6" y2="20"/>
        <line x1="15" y1="14" x2="18" y2="20"/>
      </svg>`;
    case 'inverter':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <line x1="7" y1="8" x2="10" y2="8"/>
        <line x1="7" y1="12" x2="10" y2="12"/>
        <path d="M14 8h3l-3 4h3"/>
        <path d="M14 16c1-1.5 2-1.5 3 0s2 1.5 3 0"/>
      </svg>`;
    case 'battery':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="16" height="12" rx="2"/>
        <line x1="6" y1="11" x2="6" y2="15"/>
        <line x1="10" y1="11" x2="10" y2="15"/>
        <line x1="14" y1="11" x2="14" y2="15"/>
        <path d="M20 11v4"/>
        <path d="M7 4h6"/>
      </svg>`;
    case 'pump':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="8"/>
        <path d="M12 2v4"/>
        <path d="M12 18v4"/>
        <path d="M4.93 4.93l2.83 2.83"/>
        <path d="M16.24 16.24l2.83 2.83"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>`;
    case 'streetlight':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 21h6"/>
        <path d="M12 21V9"/>
        <path d="M12 9a4 4 0 0 1 4-4h3"/>
        <polygon points="17 5 21 5 19 9 17 5"/>
        <path d="M18 13l-1 2"/>
        <path d="M20 13l1 2"/>
      </svg>`;
    case 'rooftop':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <circle cx="12" cy="6" r="1.5"/>
      </svg>`;
    case 'ultrasound':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="3" width="18" height="12" rx="2"/>
        <path d="M7 18h10"/>
        <path d="M12 15v6"/>
        <path d="M7 7c1.5 0 2 2 3.5 2s2-2 3.5-2"/>
        <path d="M18 9v4"/>
      </svg>`;
    case 'monitor':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <path d="M6 10h2l1.5-3 2 6 2-4 1.5 2h3"/>
      </svg>`;
    case 'xray':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2"/>
        <path d="M12 7v10"/>
        <path d="M8 10h8"/>
        <path d="M9 14h6"/>
      </svg>`;
    case 'ecg':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>`;
    case 'autoclave':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="3" x2="12" y2="7"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <line x1="3" y1="12" x2="7" y2="12"/>
        <line x1="17" y1="12" x2="21" y2="12"/>
      </svg>`;
    case 'syringe':
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 2 4 4"/>
        <path d="m17 7 3-3"/>
        <path d="M19 9 8.7 19.3c-.4.4-1 .6-1.6.6H3v-4.1c0-.6.2-1.2.6-1.6L14 3.9"/>
        <path d="m9 11 4 4"/>
        <path d="m5 19-3 3"/>
        <path d="m14 4 6 6"/>
      </svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/></svg>`;
  }
}

// --- DOM Initializer ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initScrollTop();
  initProductModal();
  initProductFilter();
  initContactForm();
  initCustomSelect();
});

// --- Header Scroll Effect ---
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// --- Mobile Navigation Drawer ---
function initMobileDrawer() {
  const toggleBtn = document.getElementById('menuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Close drawer when a link is clicked
  const drawerLinks = drawer.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// --- Scroll To Top Button ---
function initScrollTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --- Product Modal System ---
function initProductModal() {
  const modalBackdrop = document.getElementById('productModal');
  if (!modalBackdrop) return;

  const modalClose = document.getElementById('modalClose');
  const modalIconContainer = document.getElementById('modalIconContainer');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalOverview = document.getElementById('modalOverview');
  const modalSpecs = document.getElementById('modalSpecs');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalInquireBtn = document.getElementById('modalInquireBtn');

  // Open modal handler
  window.openProductModal = function(productId) {
    const product = PRODUCTS_DATA[productId];
    if (!product) return;

    // Set Icon
    modalIconContainer.innerHTML = getProductSvg(product.iconType);

    // Set Category Badge
    modalCategoryBadge.textContent = product.badgeText;
    modalCategoryBadge.className = `badge ${product.badgeClass}`;

    // Set Title and Overview
    modalTitle.textContent = product.title;
    modalOverview.textContent = product.summary;

    // Set Specs
    if (modalSpecs && product.specs) {
      modalSpecs.innerHTML = product.specs.map(spec => `
        <div class="modal-spec-item">
          <span class="modal-spec-label">${spec.label}</span>
          <span class="modal-spec-value">${spec.value}</span>
        </div>
      `).join('');
    }

    // Set Features List
    if (modalFeatures && product.features) {
      modalFeatures.innerHTML = product.features.map(f => `
        <li style="display: flex; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem; font-size: 0.885rem; color: #475569;">
          <span style="color: #0284c7; font-weight: bold;">✔</span> ${f}
        </li>
      `).join('');
    }

    // Configure Inquire Button
    if (modalInquireBtn) {
      modalInquireBtn.onclick = () => {
        closeModal();
        handleProductInquiry(product);
      };
    }

    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // Attach click listener to any button with data-product-id
  document.querySelectorAll('[data-product-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-product-id');
      window.openProductModal(id);
    });
  });
}

// --- Inquire From Modal Helper ---
function handleProductInquiry(product) {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    // Already on Products & Contact page!
    contactForm.scrollIntoView({ behavior: 'smooth' });

    // Select category dropdown if present
    const categoryValue = product.category === 'solar' ? 'solar' : 'medical';
    const categorySelect = document.getElementById('serviceCategory');
    if (categorySelect) {
      categorySelect.value = categoryValue;
      // Sync custom select UI
      setCustomSelectValue(categoryValue);
    }

    // Prefill message
    const messageInput = document.getElementById('clientMessage');
    if (messageInput) {
      messageInput.value = `Hello Illusion Imaging, I would like to request a formal quotation and technical specifications for: ${product.title}. Please contact me with delivery timeframes and commercial terms.`;
      messageInput.focus();
    }

    showToast(`Selected "${product.title}" for your quote request!`, 'info');
  } else {
    // On another page, redirect with anchor
    window.location.href = `products-contact.html?product=${encodeURIComponent(product.id)}#contact-section`;
  }
}

// --- Luxury Custom Select Dropdown System ---
function initCustomSelect() {
  const wrapper = document.getElementById('customSelectWrapper');
  if (!wrapper) return;

  const trigger = document.getElementById('customSelectTrigger');
  const optionsList = document.getElementById('customSelectOptions');
  const realSelect = document.getElementById('serviceCategory');
  const options = optionsList ? optionsList.querySelectorAll('.custom-option') : [];

  if (!trigger || !realSelect) return;

  // Toggle open/close
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = wrapper.classList.contains('open');
    if (isOpen) {
      wrapper.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    } else {
      wrapper.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });

  // Handle option click
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-value');
      const icon = opt.getAttribute('data-icon') || '◆';
      const label = opt.getAttribute('data-label') || opt.querySelector('.opt-title').textContent;

      // Update real select
      realSelect.value = val;
      realSelect.dispatchEvent(new Event('change'));

      // Update trigger UI
      const selectedContainer = trigger.querySelector('.custom-select-selected');
      if (selectedContainer) {
        selectedContainer.innerHTML = `
          <span class="custom-select-icon">${icon}</span>
          <span class="custom-select-text">${label}</span>
        `;
      }

      // Update option highlight
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      // Close dropdown
      wrapper.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper.classList.contains('open')) {
      wrapper.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

function setCustomSelectValue(val) {
  const wrapper = document.getElementById('customSelectWrapper');
  if (!wrapper) return;
  const targetOption = wrapper.querySelector(`.custom-option[data-value="${val}"]`);
  if (targetOption) {
    targetOption.click();
  }
}

// --- Product Category Filtering (Page 3) ---
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Check URL params for pre-selected product
  const urlParams = new URLSearchParams(window.location.search);
  const requestedProductId = urlParams.get('product');
  if (requestedProductId && PRODUCTS_DATA[requestedProductId]) {
    setTimeout(() => {
      window.openProductModal(requestedProductId);
    }, 400);
  }
}

// --- Contact Form Interaction & Frontend Validation ---
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clientName');
    const phoneInput = document.getElementById('clientPhone');
    const emailInput = document.getElementById('clientEmail');
    const messageInput = document.getElementById('clientMessage');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Validation
    if (!nameInput.value.trim()) {
      showToast('Please enter your full name or company name.', 'error');
      nameInput.focus();
      return;
    }

    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
      showToast('Please provide a valid contact phone number (e.g. 01771120142).', 'error');
      phoneInput.focus();
      return;
    }

    if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      showToast('Please provide a valid email address.', 'error');
      emailInput.focus();
      return;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 5) {
      showToast('Please enter your service inquiry or quotation details.', 'error');
      messageInput.focus();
      return;
    }

    // Simulate sending state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
      </svg>
      Processing Request...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      showToast('Thank you! Your quotation request has been received. Our team will contact you shortly.', 'success');
    }, 850);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Toast Notification Utility ---
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconColor = type === 'error' ? '#dc2626' : (type === 'info' ? '#0284c7' : '#10b981');
  const iconPath = type === 'error'
    ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
    : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>';

  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${iconPath}
      </svg>
    </div>
    <div class="toast-message">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 4800);
}
