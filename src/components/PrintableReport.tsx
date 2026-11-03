import React from 'react';
import {
  CORE_STRATEGY_QUOTE,
  FINAL_MOTTO,
  EVENT_DETAILS,
  RESEARCH_TARGET_COMPANIES,
  PARTNERSHIP_MODELS,
  USE_CASES,
  SHANGHAI_ITINERARY,
  ROADMAP_STAGES,
  RISK_REGISTER,
} from '../data/proposalData';
import {
  SupplierItem,
  DirectorReviewData,
  FinancialCalculationResult,
  FinancialCalculatorInputs,
} from '../types';
import {
  calculateSupplierScore,
  checkSupplierEligibility,
  formatCurrency,
  formatNumber,
} from '../utils/calculations';

interface PrintableReportProps {
  suppliers: SupplierItem[];
  reviewData: DirectorReviewData;
  financialInputs: FinancialCalculatorInputs;
  financialResults: FinancialCalculationResult;
}

export const PrintableReport: React.FC<PrintableReportProps> = ({
  suppliers,
  reviewData,
  financialInputs,
  financialResults,
}) => {
  return (
    <div className="print-only p-8 text-slate-900 bg-white font-sans max-w-4xl mx-auto space-y-6">
      {/* Document Header */}
      <div className="border-b-2 border-slate-900 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-slate-600">
              ကုမ္ပဏီအတွင်း မဟာဗျူဟာ စီမံကိန်းအဆိုပြုလွှာ (Internal Strategic Briefing)
            </span>
            <h1 className="text-2xl font-black text-slate-950 mt-1">
              မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ
            </h1>
            <p className="text-sm font-semibold text-teal-800">
              Myanmar AI Bridge • Hongqiao Tech Week 2026 Executive Proposal
            </p>
          </div>
          <div className="text-right text-xs text-slate-600">
            <p>
              <strong>ရက်စွဲ: </strong>
              {new Date().toLocaleDateString('en-GB')}
            </p>
            <p>
              <strong>အဆင့်အတန်း: </strong>
              ဒါရိုက်တာ စိစစ်ဆဲ
            </p>
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-100 rounded-lg text-xs space-y-1">
          <p>
            <strong>ပွဲအမည်: </strong> {EVENT_DETAILS.name} ({EVENT_DETAILS.dates})
          </p>
          <p>
            <strong>နေရာ: </strong> {EVENT_DETAILS.venue}၊ {EVENT_DETAILS.city}
          </p>
          <p>
            <strong>ရည်ရွယ်ချက်: </strong> Managing Director နှင့် စီမံခန့်ခွဲမှုအဖွဲ့သို့ တရုတ် AI မိတ်ဖက်များ ရှာဖွေရေးနှင့် မြန်မာ AI Agent စီးပွားရေးစနစ် တည်ဆောက်ရေး တင်ပြချက်။
          </p>
        </div>
      </div>

      {/* Core Strategy Quote */}
      <div className="p-4 bg-slate-50 border-l-4 border-teal-600 rounded-r-lg text-xs italic leading-relaxed">
        <strong>အဓိက မဟာဗျူဟာ သဘောတရား: </strong>
        "{CORE_STRATEGY_QUOTE}"
      </div>

      {/* Step 1 & 2 Summary */}
      <div className="print-break-inside-avoid space-y-2">
        <h2 className="text-base font-bold border-b border-slate-300 pb-1 text-slate-900">
          ၁။ စီးပွားရေး အခွင့်အလမ်းနှင့် AI စနစ် တည်ဆောက်ပုံ
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          ကျွန်ုပ်တို့ ကုမ္ပဏီသည် အခြေခံ Foundation Model ကိုယ်တိုင် တည်ဆောက်ခြင်း မပြုဘဲ တရုတ် AI API များနှင့် cloud အခြေခံအဆောက်အအုံများကို ရယူကာ ဒေသတွင်း workflow automation၊ မြန်မာဘာသာ localization၊ လုံခြုံရေးနှင့် customer service ပေါင်းစပ်မှုများ ပြုလုပ်ပေးမည့် <strong>တံတား (Bridge)</strong> အဖြစ် ဆောင်ရွက်မည်။
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-2.5 border border-slate-200 rounded">
            <strong>AI Customer Service: </strong>
            ဖောက်သည် မေးမြန်းမှုများကို မြန်မာလို ၂၄ နာရီ ချက်ချင်း တုံ့ပြန်ခြင်း။
          </div>
          <div className="p-2.5 border border-slate-200 rounded">
            <strong>AI Sales & Order Assistant: </strong>
            ကုန်ပစ္စည်း ကတ်တလောက်နှင့် စျေးနှုန်း အလိုအလျောက် စာရင်းသွင်းပေးခြင်း။
          </div>
          <div className="p-2.5 border border-slate-200 rounded">
            <strong>AI Document Assistant: </strong>
            စာချုပ်များနှင့် ပြေစာများကို မြန်မာလို အနှစ်ချုပ် ဆန်းစစ်ခြင်း။
          </div>
          <div className="p-2.5 border border-slate-200 rounded">
            <strong>AI Workflow Automation: </strong>
            လုပ်ငန်းတွင်း ဌာနဆိုင်ရာ အစီရင်ခံစာများ အလိုအလျောက် ပေါင်းစပ်ခြင်း။
          </div>
        </div>
      </div>

      {/* Step 3 & 4 Summary */}
      <div className="print-break-inside-avoid space-y-2 pt-2">
        <h2 className="text-base font-bold border-b border-slate-300 pb-1 text-slate-900">
          ၂။ တရုတ် AI နည်းပညာ မိတ်ဖက်များနှင့် ရှန်ဟိုင်း ၃ ရက်တာ အစီအစဉ်
        </h2>
        <p className="text-xs text-slate-700">
          လေ့လာရန် လျာထားသော ကုမ္ပဏီများ: Alibaba Cloud (Qwen), DeepSeek, Zhipu AI (GLM), Moonshot AI (Kimi), MiniMax, ByteDance (Volcano Engine)။
          <em> (ပွဲတွင် ပါဝင်မှု မအတည်ပြုရသေးသော လေ့လာရန် ရည်ရွယ်ချက်သာ ဖြစ်ပါသည်)</em>
        </p>

        <div className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs space-y-1">
          <p>
            <strong>၂၀ နိုဝင်ဘာ: </strong> နည်းပညာပြခန်းများ လေ့လာခြင်းနှင့် မိတ်ဖက်များ စတင်ရှာဖွေခြင်း (Discovery)။
          </p>
          <p>
            <strong>၂၁ နိုဝင်ဘာ: </strong> API နည်းပညာစွမ်းဆောင်ရည်နှင့် မြန်မာဘာသာ နားလည်နိုင်စွမ်း စစ်ဆေးခြင်း (Evaluation)။
          </p>
          <p>
            <strong>၂၂ နိုဝင်ဘာ: </strong> ကနဦး မိတ်ဖက်ပူးပေါင်းရေး စီးပွားရေးဆွေးနွေးမှု (Partnership Discussions)။
          </p>
        </div>
      </div>

      {/* Step 5 Summary: Supplier Comparison Table */}
      <div className="print-break-inside-avoid space-y-2 pt-2">
        <h2 className="text-base font-bold border-b border-slate-300 pb-1 text-slate-900">
          ၃။ Supplier စိစစ်သုံးသပ်ချက် အနှစ်ချုပ် (၁၀၀ မှတ် ရမှတ်ဇယား)
        </h2>
        <table className="w-full text-left text-xs border border-slate-300">
          <thead className="bg-slate-100 font-bold">
            <tr>
              <th className="p-2 border-b border-slate-300">ကုမ္ပဏီ</th>
              <th className="p-2 border-b border-slate-300">ထုတ်ကုန်/API</th>
              <th className="p-2 border-b border-slate-300">ရမှတ်</th>
              <th className="p-2 border-b border-slate-300">စိစစ်ချက်</th>
              <th className="p-2 border-b border-slate-300">တွေ့ရှိချက် မှတ်ချက်</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {suppliers.map((s) => {
              const sc = calculateSupplierScore(s.scores);
              const el = checkSupplierEligibility(s.mandatoryChecks);
              return (
                <tr key={s.id}>
                  <td className="p-2 font-bold">{s.companyName}</td>
                  <td className="p-2">{s.productService}</td>
                  <td className="p-2 font-bold">{sc} / ၁၀၀</td>
                  <td className="p-2">
                    <span className={el.isEligible ? 'text-emerald-700' : 'text-amber-700 font-bold'}>
                      {el.statusText}
                    </span>
                  </td>
                  <td className="p-2 text-slate-600">{s.notes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Step 6: Financial Model & Budget Projection */}
      <div className="print-break-inside-avoid space-y-2 pt-2">
        <h2 className="text-base font-bold border-b border-slate-300 pb-1 text-slate-900">
          ၄။ ဘဏ္ဍာရေး တွက်ချက်မှုနှင့် ဝင်ငွေခန့်မှန်းခြေ
        </h2>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="p-3 border border-slate-200 rounded">
            <span className="text-slate-500 block">ဖောက်သည်အရေအတွက်</span>
            <strong className="text-sm">{financialInputs.businessCustomers} ဆိုင်</strong>
            <p className="text-[11px] text-slate-500 mt-1">
              လစဉ်ကြေး: ${financialInputs.monthlySubscription}
            </p>
          </div>
          <div className="p-3 border border-slate-200 rounded">
            <span className="text-slate-500 block">စုစုပေါင်း လစဉ်ဝင်ငွေ</span>
            <strong className="text-sm">{formatCurrency(financialResults.monthlyRevenue)}</strong>
            <p className="text-[11px] text-slate-500 mt-1">
              API စရိတ်: -{formatCurrency(financialResults.estimatedApiCost)}
            </p>
          </div>
          <div className="p-3 border border-slate-200 rounded bg-slate-50">
            <span className="text-slate-500 block">လစဉ် အသားတင် အကျိုးအမြတ်</span>
            <strong className="text-sm text-teal-800">
              {formatCurrency(financialResults.estimatedMonthlyContribution)}
            </strong>
            <p className="text-[11px] text-slate-500 mt-1">
              အမြတ်ရာခိုင်နှုန်း: {financialResults.marginPercent}%
            </p>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 italic">
          * "ဤတွက်ချက်မှုသည် စီမံကိန်းအတွက် ခန့်မှန်းတွက်ချက်မှုသာဖြစ်ပြီး အမှန်တကယ်အမြတ်ငွေကို အာမခံခြင်း မဟုတ်ပါ။"
        </p>
      </div>

      {/* Step 7: Director Decision & Approvals */}
      <div className="print-break-inside-avoid space-y-3 pt-3 border-t-2 border-slate-900">
        <h2 className="text-base font-bold text-slate-900">
          ၅။ ဒါရိုက်တာထံမှ အတည်ပြုချက်နှင့် လမ်းညွှန်ချက်
        </h2>

        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="p-2.5 border rounded">
            <strong>၁။ Supplier Discovery: </strong>
            <p className="text-teal-700 font-bold">
              {reviewData.approvals.discovery ? '✓ သဘောတူသည်' : 'မသဘောတူရသေး'}
            </p>
          </div>
          <div className="p-2.5 border rounded">
            <strong>၂။ နည်းပညာ PoC အဆိုပြုလွှာ: </strong>
            <p className="text-teal-700 font-bold">
              {reviewData.approvals.evaluation ? '✓ သဘောတူသည်' : 'မသဘောတူရသေး'}
            </p>
          </div>
          <div className="p-2.5 border rounded">
            <strong>၃။ စမ်းသပ်စီမံကိန်း (Pilot): </strong>
            <p className="text-teal-700 font-bold">
              {reviewData.approvals.pilot ? '✓ သဘောတူသည်' : 'မသဘောတူရသေး'}
            </p>
          </div>
        </div>

        <div className="p-3 border border-slate-300 rounded text-xs space-y-1">
          <p>
            <strong>ဒါရိုက်တာ၏ သဘောထား အဆင့်အတန်း: </strong>
            {reviewData.sentiment === 'interested'
              ? 'စိတ်ဝင်စားသည် (အဆိုပြုချက် ရှေ့ဆက်ရန် ထောက်ခံသည်)'
              : reviewData.sentiment === 'discuss_more'
              ? 'ထပ်မံဆွေးနွေးလိုသည်'
              : reviewData.sentiment === 'need_info'
              ? 'အချက်အလက် ထပ်မံလိုအပ်သည်'
              : 'မသတ်မှတ်ရသေး'}
          </p>
          <p>
            <strong>ဒါရိုက်တာ၏ သီးသန့် လမ်းညွှန်မှတ်ချက်: </strong>
            {reviewData.directorComments || '(မှတ်ချက် မရှိပါ)'}
          </p>
        </div>

        <div className="pt-6 grid grid-cols-2 gap-12 text-xs">
          <div>
            <div className="border-b border-slate-400 h-8" />
            <p className="pt-1 text-slate-600">တင်ပြသူ (Project Lead / Strategic Consultant)</p>
          </div>
          <div>
            <div className="border-b border-slate-400 h-8" />
            <p className="pt-1 text-slate-600">Managing Director / Senior Management</p>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="pt-4 border-t border-slate-300 text-[10px] text-slate-500 text-center">
        {EVENT_DETAILS.disclaimer} • Myanmar AI Bridge 2026
      </div>
    </div>
  );
};
