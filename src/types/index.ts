export type ServiceType = 
  | 'installation'
  | 'repair'
  | 'maintenance'
  | 'amc'
  | 'filter_replacement'
  | 'new_purifier_consult';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceType;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  estimatedPricing: string;
  keyCheckpoints: string[];
  recommendedFor: string;
}

export interface AMCPlan {
  id: string;
  title: string;
  badge?: string;
  priceNote: string;
  visitsPerYear: number;
  filterReplacements: string;
  breakdownVisits: string;
  labourCharges: string;
  idealFor: string;
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'under_sink' | 'wall_mount' | 'commercial';
  categoryLabel: string;
  tagline: string;
  tdsRange: string;
  filtrationStages: string[];
  capacity: string;
  flowRate: string;
  dimensions: string;
  powerConsumption: string;
  warrantyDemo: string;
  highlightSpecs: string[];
  description: string;
  image?: string;
  demoModelNumber: string;
}

export interface ServiceArea {
  id: string;
  zoneName: string;
  code: string;
  standardResponse: string;
  coverageStatus: 'Full Coverage' | 'Express Available' | 'Scheduled Visits';
  description: string;
}

export interface ServiceRequestSubmission {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email?: string;
  serviceType: ServiceType;
  locationArea: string;
  preferredDate: string;
  timeSlot: string;
  waterSource: string;
  message: string;
  status: 'Simulation Created' | 'Demo Queued' | 'Technician Simulated';
}
