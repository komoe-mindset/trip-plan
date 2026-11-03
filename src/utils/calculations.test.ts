import {
  calculateFinancials,
  calculateSupplierScore,
  checkSupplierEligibility,
} from './calculations';
import { FinancialCalculatorInputs, SupplierScores, MandatoryChecks } from '../types';

/**
 * Unit Test verification suite for Financial & Supplier Score calculations
 */
export function runUnitTests() {
  const results: { name: string; passed: boolean; message?: string }[] = [];

  // Test 1: Financial Calculator logic
  const sampleInputs: FinancialCalculatorInputs = {
    businessCustomers: 10,
    monthlySubscription: 100, // Monthly rev = 10 * 100 = $1,000
    conversationsPerMonth: 500,
    callsPerConversation: 2, // Total calls = 10 * 500 * 2 = 10,000 calls
    inputTokensPerCall: 1000, // Total input = 10,000,000 tokens (10M)
    outputTokensPerCall: 300, // Total output = 3,000,000 tokens (3M)
    inputCostPerMillion: 0.30, // 10 * 0.30 = $3.00
    outputCostPerMillion: 1.00, // 3 * 1.00 = $3.00 => Total API cost = $6.00
    monthlyOperatingExpense: 100,
  };

  const fin = calculateFinancials(sampleInputs);
  const finPassed =
    fin.monthlyRevenue === 1000 &&
    fin.totalModelCalls === 10000 &&
    fin.totalInputTokens === 10000000 &&
    fin.totalOutputTokens === 3000000 &&
    fin.estimatedApiCost === 6 &&
    fin.estimatedMonthlyContribution === 894; // 1000 - 6 - 100 = 894

  results.push({
    name: 'calculateFinancials standard scenario',
    passed: finPassed,
    message: finPassed ? 'Passed' : `Failed: got ${JSON.stringify(fin)}`,
  });

  // Test 2: Supplier Scorecard calculation
  const scores: SupplierScores = {
    myanmarPerformance: 18,
    agentApiCapability: 17,
    commercialTerms: 16,
    securityPrivacy: 12,
    reliabilitySupport: 13,
    marketFit: 9,
  };
  const score = calculateSupplierScore(scores);
  const scorePassed = score === 85;

  results.push({
    name: 'calculateSupplierScore 100-point total',
    passed: scorePassed,
    message: scorePassed ? 'Passed' : `Failed: expected 85, got ${score}`,
  });

  // Test 3: Supplier Mandatory Checks
  const passChecks: MandatoryChecks = {
    servicePermitted: true,
    rightsClear: true,
    paymentWorkable: true,
    confidentialDataSafe: true,
    exportControlCleared: true,
  };
  const failChecks: MandatoryChecks = {
    servicePermitted: false,
    rightsClear: true,
    paymentWorkable: true,
    confidentialDataSafe: true,
    exportControlCleared: true,
  };

  const passRes = checkSupplierEligibility(passChecks);
  const failRes = checkSupplierEligibility(failChecks);

  const checksPassed =
    passRes.isEligible === true &&
    failRes.isEligible === false &&
    failRes.statusText === 'ထပ်မံစစ်ဆေးရန် လိုအပ်သည်';

  results.push({
    name: 'checkSupplierEligibility checks',
    passed: checksPassed,
    message: checksPassed ? 'Passed' : 'Failed eligibility check validation',
  });

  return results;
}
