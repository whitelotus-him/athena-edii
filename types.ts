export type Language = 'en' | 'ta';

export interface OnboardingData {
  // Step 1: Product
  productName: string;
  category: string;
  productionCapacity: string;
  sellingPrice: number;
  costPrice: number;
  
  // Step 2: Stage
  experienceLevel: string;
  revenue: string;
  salesChannels: string[];
  customerCount: string;

  // Step 3: Resources
  budget: number;
  teamSize: string;
  hasSmartphone: boolean;
  shippingCapability: string;

  // Step 4: Goals
  primaryStruggle: string;
  threeMonthGoal: string;

  // Step 5: Location
  location: string;
  travelWillingness: string;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

export interface AutomationTask {
  id: string;
  text: string;
  status: 'running' | 'approval_needed' | 'completed';
  timeEstimate: string;
  benefit: string;
}

export interface Insight {
  title: string;
  description: string;
  type: 'opportunity' | 'financial' | 'recommendation';
}

export interface AiAnalysisResult {
  businessProfileSummary: string;
  roadmap: RoadmapPhase[];
  actionItems: AutomationTask[];
  insights: Insight[];
}

export type ModuleId = 'discovery' | 'marketing' | 'inventory' | 'finance' | 'care' | 'logistics' | 'compliance';

export interface Lead {
  id: string;
  name: string;
  source: 'WhatsApp' | 'Instagram' | 'B2B' | 'Other';
  city: string;
  type: 'Retail' | 'B2B';
  interest: 'Cold' | 'Warm' | 'Hot';
  lastContact: string;
  nextAction: string;
  status: 'Open' | 'Won' | 'Lost';
}

export interface ProductionLog {
  id: string;
  date: string;
  milkCollected: number;
  gheeProduced: number;
  spoilage: number;
  notes?: string;
}

export interface StockItem {
  type: 'bulk' | 'packaged' | 'material';
  name: string;
  quantity: number;
  unit: string;
  expiryDate?: string; // For perishable
  threshold: number;
}

export interface Expense {
  category: string;
  amount: number;
  isFixed: boolean;
}

export interface SaleChannel {
  name: string;
  litresSold: number;
  pricePerLitre: number;
}

export interface Interaction {
  id: string;
  customerName: string;
  channel: 'WhatsApp' | 'Phone' | 'Instagram' | 'Store' | 'Other';
  city: string;
  type: 'Question' | 'Complaint' | 'Order' | 'Feedback';
  messageSnippet: string;
  status: 'New' | 'In Progress' | 'Resolved';
  date: string;
  isUrgent?: boolean;
}

export interface CustomerFeedback {
  id: string;
  customerName: string;
  rating: number; // 1-5
  comment: string;
  category: 'Taste' | 'Packaging' | 'Delivery' | 'Price' | 'Other';
  actionTaken: string;
}

export interface RepeatCustomer {
  id: string;
  name: string;
  city: string;
  usualQty: string;
  lastOrderDate: string;
  nextExpectedDate: string;
  status: 'On Track' | 'Due Soon' | 'Overdue';
}

export interface DeliveryBatch {
  id: string;
  destination: string;
  orderCount: number;
  totalWeight: number;
  dispatchDate: string;
  status: 'Planning' | 'Ready' | 'Shipped';
  method: string;
}

export interface ComplianceDoc {
  id: string;
  name: string; // e.g., FSSAI, GST
  number: string;
  issueDate: string;
  expiryDate: string;
  storageLocation: string;
}