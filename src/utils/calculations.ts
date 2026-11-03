import {
  FinancialCalculatorInputs,
  FinancialCalculationResult,
  SupplierScores,
  MandatoryChecks,
} from '../types';

export function calculateFinancials(inputs: FinancialCalculatorInputs): FinancialCalculationResult {
  const businessCustomers = Math.max(0, inputs.businessCustomers || 0);
  const monthlySubscription = Math.max(0, inputs.monthlySubscription || 0);
  const conversationsPerMonth = Math.max(0, inputs.conversationsPerMonth || 0);
  const callsPerConversation = Math.max(0, inputs.callsPerConversation || 0);
  const inputTokensPerCall = Math.max(0, inputs.inputTokensPerCall || 0);
  const outputTokensPerCall = Math.max(0, inputs.outputTokensPerCall || 0);
  const inputCostPerMillion = Math.max(0, inputs.inputCostPerMillion || 0);
  const outputCostPerMillion = Math.max(0, inputs.outputCostPerMillion || 0);
  const monthlyOperatingExpense = Math.max(0, inputs.monthlyOperatingExpense || 0);

  const monthlyRevenue = businessCustomers * monthlySubscription;
  const totalModelCalls = businessCustomers * conversationsPerMonth * callsPerConversation;
  const totalInputTokens = totalModelCalls * inputTokensPerCall;
  const totalOutputTokens = totalModelCalls * outputTokensPerCall;

  const estimatedApiCost =
    (totalInputTokens / 1_000_000) * inputCostPerMillion +
    (totalOutputTokens / 1_000_000) * outputCostPerMillion;

  const estimatedMonthlyContribution = monthlyRevenue - estimatedApiCost - monthlyOperatingExpense;
  const annualContributionEstimate = estimatedMonthlyContribution * 12;

  const marginPercent =
    monthlyRevenue > 0
      ? Math.round((estimatedMonthlyContribution / monthlyRevenue) * 100)
      : 0;

  const costPerCustomer =
    businessCustomers > 0 ? (estimatedApiCost + monthlyOperatingExpense) / businessCustomers : 0;
  const revenuePerCustomer = businessCustomers > 0 ? monthlyRevenue / businessCustomers : 0;

  return {
    monthlyRevenue,
    totalModelCalls,
    totalInputTokens,
    totalOutputTokens,
    estimatedApiCost: Number(estimatedApiCost.toFixed(2)),
    estimatedMonthlyContribution: Number(estimatedMonthlyContribution.toFixed(2)),
    annualContributionEstimate: Number(annualContributionEstimate.toFixed(2)),
    marginPercent,
    costPerCustomer: Number(costPerCustomer.toFixed(2)),
    revenuePerCustomer: Number(revenuePerCustomer.toFixed(2)),
  };
}

export function calculateSupplierScore(scores: SupplierScores): number {
  const s1 = Math.min(20, Math.max(0, Number(scores.myanmarPerformance) || 0));
  const s2 = Math.min(20, Math.max(0, Number(scores.agentApiCapability) || 0));
  const s3 = Math.min(20, Math.max(0, Number(scores.commercialTerms) || 0));
  const s4 = Math.min(15, Math.max(0, Number(scores.securityPrivacy) || 0));
  const s5 = Math.min(15, Math.max(0, Number(scores.reliabilitySupport) || 0));
  const s6 = Math.min(10, Math.max(0, Number(scores.marketFit) || 0));

  return Math.round(s1 + s2 + s3 + s4 + s5 + s6);
}

export function checkSupplierEligibility(checks: MandatoryChecks): {
  isEligible: boolean;
  failedCount: number;
  statusText: string;
} {
  const keys: (keyof MandatoryChecks)[] = [
    'servicePermitted',
    'rightsClear',
    'paymentWorkable',
    'confidentialDataSafe',
    'exportControlCleared',
  ];

  let failedCount = 0;
  for (const k of keys) {
    if (!checks[k]) {
      failedCount++;
    }
  }

  const isEligible = failedCount === 0;

  return {
    isEligible,
    failedCount,
    statusText: isEligible
      ? 'သတ်မှတ်အရည်အသွေး ပြည့်မီပါသည်'
      : 'ထပ်မံစစ်ဆေးရန် လိုအပ်သည်',
  };
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

export function formatCurrency(amount: number): string {
  return `$${new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)}`;
}
