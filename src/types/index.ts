export type ViewMode = 'presentation' | 'detailed';

export interface StepInfo {
  id: number;
  hash: string;
  shortTitle: string;
  fullTitle: string;
  duration: string;
  iconName: string;
}

export interface SupplierScores {
  myanmarPerformance: number; // max 20
  agentApiCapability: number; // max 20
  commercialTerms: number; // max 20
  securityPrivacy: number; // max 15
  reliabilitySupport: number; // max 15
  marketFit: number; // max 10
}

export interface MandatoryChecks {
  servicePermitted: boolean;
  rightsClear: boolean;
  paymentWorkable: boolean;
  confidentialDataSafe: boolean;
  exportControlCleared: boolean;
}

export interface SupplierItem {
  id: string;
  companyName: string;
  productService: string;
  website: string;
  contactName: string;
  contactDetails: string;
  meetingStatus: 'proposed' | 'requested' | 'confirmed' | 'completed' | 'postponed';
  notes: string;
  nextAction: string;
  scores: SupplierScores;
  mandatoryChecks: MandatoryChecks;
}

export interface FinancialCalculatorInputs {
  businessCustomers: number;
  monthlySubscription: number;
  conversationsPerMonth: number;
  callsPerConversation: number;
  inputTokensPerCall: number;
  outputTokensPerCall: number;
  inputCostPerMillion: number;
  outputCostPerMillion: number;
  monthlyOperatingExpense: number;
}

export interface FinancialCalculationResult {
  monthlyRevenue: number;
  totalModelCalls: number;
  totalInputTokens: number;
  totalOutputTokens: number;
  estimatedApiCost: number;
  estimatedMonthlyContribution: number;
  annualContributionEstimate: number;
  marginPercent: number;
  costPerCustomer: number;
  revenuePerCustomer: number;
}

export interface DirectorReviewData {
  approvals: {
    discovery: boolean;
    evaluation: boolean;
    pilot: boolean;
  };
  checklist: {
    visionUnderstood: boolean;
    suppliersUnderstood: boolean;
    partnershipModelsReviewed: boolean;
    risksReviewed: boolean;
    pilotApproachReviewed: boolean;
    additionalInfoRequired: boolean;
  };
  sentiment: 'interested' | 'discuss_more' | 'need_info' | '';
  directorComments: string;
  reviewedSteps: number[];
  lastUpdated: string;
}

export interface MeetingChecklistItem {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  note?: string;
}
