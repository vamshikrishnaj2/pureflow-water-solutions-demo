import purifierImage from '../assets/images/pureflow_hero_purifier_1790712992497.jpg';
import commercialSystemImage from '../assets/images/pureflow_commercial_system_1790713018685.jpg';
import { ServiceItem, AMCPlan, ProductItem, ServiceArea } from '../types';

export const DEMO_SERVICES: ServiceItem[] = [
  {
    id: 'installation',
    name: 'New Purifier Installation',
    category: 'installation',
    shortDesc: 'Complete residential and light commercial mounting, food-grade plumbing taps, and pressure regulator integration.',
    fullDesc: 'Comprehensive setup including wall-bracket or under-sink mounting, water source T-valve insertion, wastewater line routing, electrical surge check, and initial water purity TDS testing.',
    turnaround: 'Same day or next morning dispatch',
    estimatedPricing: 'Standard installation: $40 - $65 (Demo estimate)',
    keyCheckpoints: [
      'Raw water input pressure test (10 - 40 PSI gauge)',
      'Food-grade polyethylene tubing & leak-tight brass fittings',
      'Dual tank flushing & TDS baseline calibration',
      'User operation and safety cutoff walkthrough'
    ],
    recommendedFor: 'New purifier owners or home relocations requiring professional re-installation.'
  },
  {
    id: 'repair',
    name: 'Breakdown & Diagnostics Repair',
    category: 'repair',
    shortDesc: 'Fast resolution for low water output, motor vibration, continuous drainage, foul taste, or electrical faults.',
    fullDesc: 'Systematic diagnosis of booster pumps, solenoid valves (SV), auto-shutoff valves, and high-pressure switches to restore optimal filtration performance.',
    turnaround: 'Within 2 to 4 hours in primary demo zones',
    estimatedPricing: 'Inspection fee: $15 (Waived if repair undertaken) (Demo estimate)',
    keyCheckpoints: [
      'Booster pump pressure output & diaphragm integrity check',
      'Auto-flush and solenoid valve electrical trigger test',
      'Micro-leak detection across tubing elbows and connector joints',
      'Electrical SMPS power supply stability check'
    ],
    recommendedFor: 'Units leaking, making abnormal hums, or stopped dispensing water.'
  },
  {
    id: 'maintenance',
    name: 'Preventive Filter Maintenance',
    category: 'maintenance',
    shortDesc: 'Scheduled replacement of sediment cartridges, activated carbon blocks, post-carbon polishing, and system sanitization.',
    fullDesc: 'Thorough chemical-free sanitization of water storage tanks, UV chamber de-scaling, and replacement of pre-filters to protect costly RO membranes from silt fouling.',
    turnaround: 'Scheduled appointment at your preferred hour',
    estimatedPricing: 'Basic filter service: $30 - $55 depending on stages (Demo estimate)',
    keyCheckpoints: [
      '5-micron spun polypropylene sediment filter replacement',
      'Extruded activated carbon block replenishment for chlorine removal',
      'Quartz sleeve cleaning and UV sterilizer radiation check',
      'Tank interior disinfection with food-grade sanitizing wash'
    ],
    recommendedFor: 'Systems operating for 6 to 12 months since last cartridge update.'
  },
  {
    id: 'amc',
    name: 'Annual Maintenance Contracts (AMC)',
    category: 'amc',
    shortDesc: 'Comprehensive peace of mind with 3 scheduled preventive checkups, complimentary consumables, and prioritized service dispatch.',
    fullDesc: 'All-inclusive protection plans that eliminate unexpected repair bills, guarantee timely filter changes, and provide unlimited emergency breakdown callouts.',
    turnaround: 'Priority queue dispatch within 2 hours',
    estimatedPricing: 'Plans from $75/year to $145/year (Demo estimate)',
    keyCheckpoints: [
      '3 to 4 scheduled quarterly visits with full checklist audit',
      'Mandatory free replacement of sediment, pre-carbon, and post-carbon filters',
      'Unlimited zero-charge breakdown service visits',
      'Discounted genuine replacement rates for booster pumps and RO membranes'
    ],
    recommendedFor: 'Homes and offices seeking zero-downtime clean drinking water year-round.'
  }
];

export const DEMO_AMC_PLANS: AMCPlan[] = [
  {
    id: 'basic-care',
    title: 'Essential Care Plan',
    priceNote: '$79 / year (Sample Demo Rate)',
    visitsPerYear: 3,
    filterReplacements: '1x Sediment + 1x Activated Carbon included',
    breakdownVisits: 'Up to 2 complimentary emergency calls',
    labourCharges: '100% Free on all scheduled visits',
    idealFor: 'Municipal tap water users with standard household consumption (up to 4 members)',
    features: [
      '3 Scheduled preventive maintenance audits',
      '1 Complete set of pre-filter cartridges',
      'Quarterly TDS and flow rate logging',
      'Free labour on breakdown repairs',
      'Electrical component sanity testing'
    ]
  },
  {
    id: 'premium-shield',
    title: 'Complete Comprehensive Shield',
    badge: 'Most Popular',
    priceNote: '$139 / year (Sample Demo Rate)',
    visitsPerYear: 4,
    filterReplacements: 'Full consumable bundle + 1x RO Membrane replacement if fouled',
    breakdownVisits: 'Unlimited priority emergency visits',
    labourCharges: '100% Free labour & diagnosis year-round',
    idealFor: 'High TDS borewell water or households with high daily purified water usage',
    features: [
      '4 Quarterly comprehensive on-site inspections',
      'Full replacement: Sediment, Pre-Carbon, Post-Carbon & Mineralizer',
      'Coverage for 1 RO Membrane replacement',
      'Unlimited zero-charge emergency callouts within 2-4 hours',
      'Storage tank ultrasonic hygiene wash',
      'Complimentary raw water quality re-tests'
    ]
  },
  {
    id: 'business-commercial',
    title: 'Workplace & Commercial Care',
    priceNote: '$249 / year (Sample Demo Rate)',
    visitsPerYear: 6,
    filterReplacements: 'Heavy-duty 20" jumbo cartridges + dual membrane checks',
    breakdownVisits: 'Unlimited 2-hour priority emergency SLA',
    labourCharges: 'Dedicated corporate technician team',
    idealFor: 'Offices, clinics, gyms, and commercial pantries with continuous demand',
    features: [
      'Bi-monthly scheduled preventive maintenance',
      'Heavy-duty industrial cartridge changeouts included',
      'Guaranteed 2-hour emergency response window',
      'Compliance documentation & water testing logs for audit',
      'Standby backup unit provision during major repairs'
    ]
  }
];

export const DEMO_PRODUCTS: ProductItem[] = [
  {
    id: 'pureflow-aquapure-ro',
    name: 'PureFlow AquaPure Pro 8L',
    category: 'under_sink',
    categoryLabel: 'Under-Sink RO',
    tagline: 'Multi-stage Reverse Osmosis with post-mineral rejuvenation for domestic kitchens.',
    tdsRange: 'Up to 1,800 ppm TDS input',
    filtrationStages: ['5-Micron Sediment', 'Activated Carbon', 'Reverse Osmosis Membrane', 'Post-Mineral Alkaline Filter'],
    capacity: '8 Litre hermetic food-grade tank',
    flowRate: '15 Litres / hour recovery rate',
    dimensions: '380mm (W) x 270mm (D) x 480mm (H)',
    powerConsumption: '36W operating wattage',
    warrantyDemo: '12 Months Demo Limited Warranty',
    highlightSpecs: [
      'Under-sink compact footprint with countertop gooseneck faucet',
      'Automatic high-pressure auto-flush extending membrane life',
      'Food-grade BPA-free antibacterial storage reservoir',
      'Mineral replenishment cartridge balancing pH between 7.2 - 8.0'
    ],
    description: 'A quiet, space-saving reverse osmosis purifier engineered for residential kitchens. Tucks discreetly beneath the counter while delivering pristine water through a dedicated brushed steel tap.',
    image: purifierImage,
    demoModelNumber: 'PF-AS8-DEMO'
  },
  {
    id: 'pureflow-ecowall-uv',
    name: 'PureFlow EcoWall UV+UF',
    category: 'wall_mount',
    categoryLabel: 'Wall-Mount UV',
    tagline: 'High-speed chemical-free disinfection for treated municipal and low-TDS tap supplies.',
    tdsRange: 'Up to 250 ppm TDS (Treated municipal supply)',
    filtrationStages: ['Fine Sediment Prefilter', 'Silver Impregnated Carbon', '0.01 Micron Ultrafiltration (UF)', '11W High-Intensity UV Chamber'],
    capacity: '7 Litre transparent visible level tank',
    flowRate: '30 Litres / hour direct flow',
    dimensions: '320mm (W) x 240mm (D) x 450mm (H)',
    powerConsumption: '22W low standby power',
    warrantyDemo: '12 Months Demo Limited Warranty',
    highlightSpecs: [
      'Zero wastewater discharge technology ideal for water conservation',
      'Instant continuous water dispensing without waiting for tank recharge',
      'Stainless steel 304 UV disinfection chamber',
      'Digital LED filter life and UV lamp status alerts'
    ],
    description: 'Designed specifically for apartments and houses supplied with treated municipal tap water. Preserves natural beneficial minerals while neutralizing microbial contaminants with zero water wastage.',
    image: purifierImage,
    demoModelNumber: 'PF-EW7-DEMO'
  },
  {
    id: 'pureflow-hardwater-max',
    name: 'PureFlow MaxShield Borewell RO',
    category: 'under_sink',
    categoryLabel: 'Under-Sink RO',
    tagline: 'High-pressure multi-stage system built for severe groundwater hardness and heavy silt.',
    tdsRange: 'Up to 2,500 ppm TDS input',
    filtrationStages: ['Heavy-Duty Anti-Scalant Pre-Filter', 'Dual Sediment Cartridges', 'Carbon Block', '75 GPD Thin-Film RO Membrane', 'Taste Polisher'],
    capacity: '10 Litre pressurized storage reservoir',
    flowRate: '15 Litres / hour purification speed',
    dimensions: '410mm (W) x 290mm (D) x 510mm (H)',
    powerConsumption: '48W heavy-duty booster pump',
    warrantyDemo: '12 Months Demo Limited Warranty',
    highlightSpecs: [
      'Scale inhibitor chamber prevents calcium salt caking on membranes',
      'Heavy-duty 100 PSI booster motor for deep well low-pressure supply',
      'Integrated TDS regulator screw for customized mineralization',
      'Double O-ring housing canisters preventing micro-leaks under pressure'
    ],
    description: 'Engineered for tough groundwater conditions where calcium carbonate scale, high salinity, and heavy sediment shorten ordinary filter life. Features a specialized anti-scalant feeder and high-torque pump.',
    image: purifierImage,
    demoModelNumber: 'PF-HW10-DEMO'
  },
  {
    id: 'pureflow-commercial-50l',
    name: 'PureFlow Commercial Pro 50LPH',
    category: 'commercial',
    categoryLabel: 'Commercial / Office',
    tagline: 'High-capacity continuous water station for offices, clinics, staff cafeterias, and boutique cafes.',
    tdsRange: 'Up to 2,000 ppm TDS input',
    filtrationStages: ['20-Inch Jumbo Sediment', '20-Inch Granular Carbon', 'Dual 100 GPD Commercial Membranes', 'Inline UV Disinfection', 'Post Polisher'],
    capacity: '50 Litres / hour continuous purification (Connectable to external cooling tank)',
    flowRate: '50 Litres / hour',
    dimensions: '520mm (W) x 340mm (D) x 780mm (H)',
    powerConsumption: '120W commercial grade motor',
    warrantyDemo: '12 Months Demo Limited Warranty',
    highlightSpecs: [
      'Heavy-gauge stainless steel 304 skid frame with front pressure gauges',
      'Dual commercial thin-film composite membranes in parallel',
      'Auto-start / auto-cut float switch integration for rooftop dispensers',
      'Handles continuous staff consumption up to 60-80 people'
    ],
    description: 'Robust commercial filtration package mounted on a corrosion-resistant steel chassis. Built with front-panel input/output pressure gauges and industrial-grade pre-filtration for demanding business environments.',
    image: commercialSystemImage,
    demoModelNumber: 'PF-COM50-DEMO'
  }
];

export const DEMO_SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'north-valley',
    zoneName: 'North Valley & Hill Crest',
    code: 'ZONE-A1',
    standardResponse: '2 - 3 Hours',
    coverageStatus: 'Express Available',
    description: 'Primary residential zone with dedicated daily van routes for rapid filter replacement and installations.'
  },
  {
    id: 'riverdale-green',
    zoneName: 'Riverdale Heights & Green District',
    code: 'ZONE-B2',
    standardResponse: '2 - 4 Hours',
    coverageStatus: 'Full Coverage',
    description: 'Comprehensive coverage covering residential apartment complexes, townhomes, and private residences.'
  },
  {
    id: 'metro-tech',
    zoneName: 'Metro Central & Tech Park Corridor',
    code: 'ZONE-C3',
    standardResponse: '1 - 2 Hours',
    coverageStatus: 'Express Available',
    description: 'High-density commercial and residential hub with priority fast-track technician dispatch available.'
  },
  {
    id: 'south-lake',
    zoneName: 'South Lake & Harbor Promenade',
    code: 'ZONE-D4',
    standardResponse: 'Same Day',
    coverageStatus: 'Full Coverage',
    description: 'Daily scheduled morning and evening maintenance rounds across waterfront and coastal residences.'
  },
  {
    id: 'west-meadows',
    zoneName: 'West Meadows & Suburb Sector 9',
    code: 'ZONE-E5',
    standardResponse: 'Within 24 Hours',
    coverageStatus: 'Scheduled Visits',
    description: 'Scheduled semi-weekly routes for installations, planned AMC inspections, and groundwater testing.'
  }
];

export const DEMO_FAQS = [
  {
    question: 'How do I know whether my home needs an RO or a UV purifier?',
    answer: 'The primary decision factor is Total Dissolved Solids (TDS) and water hardness. If your tap water has TDS higher than 250-300 ppm (common with borewell or groundwater), Reverse Osmosis (RO) is required to remove dissolved minerals, heavy metals, and excess salts. If you receive municipal tap water with low TDS (< 250 ppm) but want protection from bacteria and viruses, a UV+UF system is ideal because it purifies without wasting water or stripping essential natural minerals.'
  },
  {
    question: 'How often should water purifier filters be replaced?',
    answer: 'As a general guideline: (1) The external 5-micron sediment pre-filter should be replaced every 3 to 6 months depending on local silt levels. (2) Activated carbon cartridges should be replaced every 8 to 12 months. (3) The semi-permeable RO membrane usually lasts 18 to 24 months with regular pre-filter maintenance. In our AMC plans, these cartridge replacements are scheduled proactively so you never have to remember the dates.'
  },
  {
    question: 'What is included in an Annual Maintenance Contract (AMC)?',
    answer: 'An AMC covers regular scheduled preventive checkups (3 to 4 visits per year), free replacement of key consumable filter cartridges (sediment, carbon, post-filter), free sanitization of storage tanks, and zero-charge technician visits whenever an unexpected breakdown or leak occurs. It ensures uninterrupted clean water without surprise expenses.'
  },
  {
    question: 'Can PureFlow technicians service water purifiers from other brands?',
    answer: 'Yes! Our service technicians carry universal high-grade replacement parts, standard booster pumps, solenoid valves, food-grade connectors, and certified RO membranes compatible with 95% of standard domestic and commercial water purifiers on the market.'
  },
  {
    question: 'What is TDS and do technicians test it on-site?',
    answer: 'TDS stands for Total Dissolved Solids—measured in parts per million (ppm). It represents the combined content of all organic and inorganic substances dissolved in water (such as calcium, magnesium, chlorides, and nitrates). During every installation, service, or AMC visit, our technicians test both your raw input water and your purified output water using calibrated digital TDS meters.'
  },
  {
    question: 'Is PureFlow Water Solutions a real commercial business?',
    answer: 'No. This website is a fictional demonstration portfolio project. No actual orders will be fulfilled, no real technicians will be dispatched, and all pricing, model names, and service areas shown here are simulated for UI/UX evaluation purposes.'
  }
];
