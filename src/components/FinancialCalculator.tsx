import React, { useState } from 'react';
import { FinancialCalculatorInputs } from '../types';
import {
  calculateFinancials,
  formatNumber,
  formatCurrency,
} from '../utils/calculations';
import {
  DollarSign,
  Calculator,
  TrendingUp,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  Info,
} from 'lucide-react';

interface FinancialCalculatorProps {
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

const DEFAULT_INPUTS: FinancialCalculatorInputs = {
  businessCustomers: 25,
  monthlySubscription: 120, // $120/mo per business
  conversationsPerMonth: 800, // conversations per business
  callsPerConversation: 2, // 2 model calls per conversation
  inputTokensPerCall: 900,
  outputTokensPerCall: 300,
  inputCostPerMillion: 0.35, // e.g. $0.35 / 1M input tokens
  outputCostPerMillion: 1.10, // e.g. $1.10 / 1M output tokens
  monthlyOperatingExpense: 350, // hosting, monitoring, database
};

export const FinancialCalculator: React.FC<FinancialCalculatorProps> = ({
  onShowToast,
}) => {
  const [inputs, setInputs] = useState<FinancialCalculatorInputs>(DEFAULT_INPUTS);

  const results = calculateFinancials(inputs);

  const handleInputChange = (field: keyof FinancialCalculatorInputs, val: number) => {
    setInputs((prev) => ({
      ...prev,
      [field]: Math.max(0, val),
    }));
  };

  const handleApplyPreset = (type: 'pilot' | 'growth' | 'enterprise') => {
    if (type === 'pilot') {
      setInputs({
        businessCustomers: 8,
        monthlySubscription: 80,
        conversationsPerMonth: 400,
        callsPerConversation: 2,
        inputTokensPerCall: 800,
        outputTokensPerCall: 250,
        inputCostPerMillion: 0.35,
        outputCostPerMillion: 1.10,
        monthlyOperatingExpense: 150,
      });
      onShowToast('ကနဦး စမ်းသပ်အဆင့် (Pilot Preset) ပြောင်းလဲပြီးပါပြီ', 'info');
    } else if (type === 'growth') {
      setInputs({
        businessCustomers: 40,
        monthlySubscription: 150,
        conversationsPerMonth: 1200,
        callsPerConversation: 2.2,
        inputTokensPerCall: 1000,
        outputTokensPerCall: 350,
        inputCostPerMillion: 0.30,
        outputCostPerMillion: 1.00,
        monthlyOperatingExpense: 500,
      });
      onShowToast('ပုံမှန်တိုးချဲ့အဆင့် (Growth Preset) ပြောင်းလဲပြီးပါပြီ', 'info');
    } else {
      setInputs({
        businessCustomers: 80,
        monthlySubscription: 220,
        conversationsPerMonth: 2500,
        callsPerConversation: 2.5,
        inputTokensPerCall: 1200,
        outputTokensPerCall: 450,
        inputCostPerMillion: 0.28,
        outputCostPerMillion: 0.90,
        monthlyOperatingExpense: 1200,
      });
      onShowToast('အကြီးစား လုပ်ငန်းအဆင့် (Enterprise Preset) ပြောင်းလဲပြီးပါပြီ', 'info');
    }
  };

  const handleReset = () => {
    setInputs(DEFAULT_INPUTS);
    onShowToast('မူလ တန်ဖိုးများသို့ ပြန်လည်သတ်မှတ်ပြီးပါပြီ', 'info');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-6">
      {/* Header & Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-teal-600" />
            <span>ဘဏ္ဍာရေးနှင့် ဝင်ငွေ အပြန်အလှန် တွက်ချက်မှု (Financial Scenario Calculator)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            ဖောက်သည်အရေအတွက်၊ လစဉ်ကြေးနှင့် API ကုန်ကျစရိတ်များကို အခြေခံ၍ အကျိုးအမြတ်ကို ခန့်မှန်းတွက်ချက်နိုင်သည်။
          </p>
        </div>

        {/* Preset Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap self-start sm:self-auto text-xs">
          <span className="text-slate-400 text-[11px] mr-1 hidden lg:inline">နမူနာအဆင့်များ:</span>
          <button
            onClick={() => handleApplyPreset('pilot')}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            စမ်းသပ်အဆင့် (၈ ဆိုင်)
          </button>
          <button
            onClick={() => handleApplyPreset('growth')}
            className="px-2.5 py-1 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold border border-teal-200 transition-colors"
          >
            ပုံမှန်အဆင့် (၄၀ ဆိုင်)
          </button>
          <button
            onClick={() => handleApplyPreset('enterprise')}
            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
          >
            တိုးချဲ့အဆင့် (၈၀ ဆိုင်)
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            title="မူလအတိုင်း ပြန်လည်သတ်မှတ်ရန်"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs Left, Live Results Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-6 space-y-4 text-xs">
          <h4 className="font-bold text-slate-800 uppercase tracking-wider text-xs pb-1 border-b border-slate-100">
            လုပ်ငန်းဆိုင်ရာ ယူဆချက်များ (Business Assumptions)
          </h4>

          {/* Business Customers */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">
                ၁။ မြန်မာ စီးပွားရေး ဖောက်သည်အရေအတွက် (Business Customers)
              </label>
              <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                {inputs.businessCustomers} ခု
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="200"
              value={inputs.businessCustomers}
              onChange={(e) =>
                handleInputChange('businessCustomers', parseInt(e.target.value) || 0)
              }
              className="w-full accent-teal-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>၁ ဆိုင်</span>
              <span>၁၀၀ ဆိုင်</span>
              <span>၂၀၀ ဆိုင်</span>
            </div>
          </div>

          {/* Monthly Subscription Per Customer */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">
                ၂။ ဖောက်သည်တစ်ဦးထံမှ လစဉ်ကြေး (Monthly Subscription per Customer)
              </label>
              <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                {formatCurrency(inputs.monthlySubscription)} / လ
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="500"
              step="10"
              value={inputs.monthlySubscription}
              onChange={(e) =>
                handleInputChange('monthlySubscription', parseInt(e.target.value) || 0)
              }
              className="w-full accent-teal-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>$30</span>
              <span>$250</span>
              <span>$500</span>
            </div>
          </div>

          {/* Conversations per Business per Month */}
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="font-medium text-slate-700">
                ၃။ ဖောက်သည်တစ်ဦး၏ တစ်လလျှင် စကားပြောဆိုမှု (Conversations per Month)
              </label>
              <span className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                {formatNumber(inputs.conversationsPerMonth)} ကြိမ်
              </span>
            </div>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={inputs.conversationsPerMonth}
              onChange={(e) =>
                handleInputChange(
                  'conversationsPerMonth',
                  parseInt(e.target.value) || 0
                )
              }
              className="w-full accent-teal-600 cursor-pointer"
            />
          </div>

          {/* Token Costs & Infrastructure */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <h5 className="font-bold text-slate-700 text-xs uppercase">
              နည်းပညာနှင့် API ကုန်ကျစရိတ် သတ်မှတ်ချက်များ
            </h5>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">
                  Input API Cost (per 1M tokens)
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    step="0.05"
                    value={inputs.inputCostPerMillion}
                    onChange={(e) =>
                      handleInputChange(
                        'inputCostPerMillion',
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full pl-6 pr-2 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] text-slate-500 block mb-1">
                  Output API Cost (per 1M tokens)
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    step="0.05"
                    value={inputs.outputCostPerMillion}
                    onChange={(e) =>
                      handleInputChange(
                        'outputCostPerMillion',
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="w-full pl-6 pr-2 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-500 block mb-1">
                  မေးခွန်းတစ်ခုလျှင် Input Tokens (ပျမ်းမျှ)
                </label>
                <input
                  type="number"
                  step="50"
                  value={inputs.inputTokensPerCall}
                  onChange={(e) =>
                    handleInputChange(
                      'inputTokensPerCall',
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-[11px] text-slate-500 block mb-1">
                  ဖြေကြားချက် Output Tokens (ပျမ်းမျှ)
                </label>
                <input
                  type="number"
                  step="50"
                  value={inputs.outputTokensPerCall}
                  onChange={(e) =>
                    handleInputChange(
                      'outputTokensPerCall',
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full px-2.5 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] text-slate-500 block mb-1">
                Cloud Server & စနစ်လည်ပတ်စရိတ် (Monthly Operating / Hosting)
              </label>
              <div className="relative">
                <span className="absolute left-2.5 top-2 text-slate-400 text-xs">$</span>
                <input
                  type="number"
                  step="50"
                  value={inputs.monthlyOperatingExpense}
                  onChange={(e) =>
                    handleInputChange(
                      'monthlyOperatingExpense',
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-full pl-6 pr-2 py-1.5 rounded-lg border border-slate-300 text-slate-800 text-xs focus:ring-1 focus:ring-teal-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS LIVE DASHBOARD */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-5 text-white shadow-md border border-slate-700">
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
              လစဉ် ခန့်မှန်း အသားတင် အကျိုးအမြတ် (Estimated Monthly Contribution)
            </span>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-black text-white">
                {formatCurrency(results.estimatedMonthlyContribution)}
              </span>
              <span className="text-xs text-slate-400">/ လစဉ်</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-700 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">စုစုပေါင်း လစဉ်ဝင်ငွေ:</span>
                <strong className="text-base text-teal-300">
                  {formatCurrency(results.monthlyRevenue)}
                </strong>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">တစ်နှစ်တာ ခန့်မှန်းခြေ:</span>
                <strong className="text-base text-amber-300">
                  {formatCurrency(results.annualContributionEstimate)}
                </strong>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2 text-xs">
            <h5 className="font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center justify-between">
              <span>အသေးစိတ် တွက်ချက်မှု အဆင့်ဆင့်</span>
              <span className="text-teal-700 font-semibold">
                အမြတ်ရာခိုင်နှုန်း: {results.marginPercent}%
              </span>
            </h5>

            <div className="space-y-1.5 text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">စုစုပေါင်း လစဉ်ဝင်ငွေ (Revenue)</span>
                <span className="font-bold text-slate-900">
                  {inputs.businessCustomers} ဆိုင် × ${inputs.monthlySubscription} = {formatCurrency(results.monthlyRevenue)}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">စုစုပေါင်း AI Model Calls</span>
                <span className="font-medium text-slate-800">
                  {formatNumber(results.totalModelCalls)} ကြိမ်
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Total Input Tokens</span>
                <span className="font-medium text-slate-800">
                  {formatNumber(results.totalInputTokens)} tokens
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Total Output Tokens</span>
                <span className="font-medium text-slate-800">
                  {formatNumber(results.totalOutputTokens)} tokens
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">ခန့်မှန်း API ကုန်ကျစရိတ် (API Cost)</span>
                <span className="font-bold text-rose-600">
                  - {formatCurrency(results.estimatedApiCost)}
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">လစဉ် အခြေခံစနစ်လည်ပတ်စရိတ် (Ops)</span>
                <span className="font-bold text-rose-600">
                  - {formatCurrency(inputs.monthlyOperatingExpense)}
                </span>
              </div>

              <div className="flex justify-between pt-1 font-bold text-slate-900">
                <span>ခန့်မှန်း အသားတင်ကျန်ငွေ (Contribution)</span>
                <span className="text-emerald-700 text-sm">
                  {formatCurrency(results.estimatedMonthlyContribution)}
                </span>
              </div>
            </div>
          </div>

          {/* Mandatory Disclaimer Box */}
          <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="block text-amber-950 font-bold">
                အရေးကြီး သတိပေးချက်နှင့် စည်းကမ်းချက်:
              </strong>
              <p className="leading-relaxed">
                "ဤတွက်ချက်မှုသည် စီမံကိန်းအတွက် ခန့်မှန်းတွက်ချက်မှုသာဖြစ်ပြီး အမှန်တကယ်အမြတ်ငွေကို အာမခံခြင်း မဟုတ်ပါ။"
              </p>
              <p className="text-[11px] text-amber-800 leading-snug">
                ဖော်ပြပါ API စျေးနှုန်းများသည် နမူနာခန့်မှန်းချက်သာဖြစ်ပြီး Supplier များ၏ လက်ရှိ တရားဝင် တိကျသော quotation မဟုတ်ပါ။ ဝန်ထမ်းလစာ၊ အခွန်၊ ဈေးကွက်ရှာဖွေစရိတ်နှင့် နည်းပညာဝန်ဆောင်မှု ကုန်ကျစရိတ်များ အပြည့်အစုံ ပါဝင်ခြင်း မရှိသေးပါ။
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
