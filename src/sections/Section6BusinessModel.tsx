import React, { useState } from 'react';
import { ViewMode } from '../types';
import { FinancialCalculator } from '../components/FinancialCalculator';
import { ROADMAP_STAGES, RISK_REGISTER } from '../data/proposalData';
import {
  DollarSign,
  TrendingUp,
  Map,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

export const Section6BusinessModel: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
  onShowToast,
}) => {
  const [expandedRiskId, setExpandedRiskId] = useState<string>('risk-1');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <DollarSign className="w-3.5 h-3.5" />
          <span>အဆင့် ၆ — စီးပွားရေးပုံစံ၊ ဘဏ္ဍာရေးတွက်ချက်မှုနှင့် စွန့်စားရမှုများ</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ဒီလုပ်ငန်းက ဘယ်လိုဝင်ငွေရနိုင်မလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          ဝင်ငွေရရှိနိုင်မည့် လမ်းကြောင်းများ၊ ကုန်ကျစရိတ်နှင့် အကျိုးအမြတ် ခန့်မှန်းတွက်ချက်မှု၊ အဆင့်ဆင့် အကောင်အထည်ဖော်မည့် Roadmap နှင့် စွန့်စားရမှု ထိန်းချုပ်ရေး မူဝါဒများ။
        </p>
      </div>

      {/* Six Revenue Sources */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-teal-600" />
          <span>ဝင်ငွေရရှိနိုင်သော လမ်းကြောင်း ၆ မျိုး (Revenue Streams)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၁။ ကနဦး စနစ်တပ်ဆင်ခ (Setup Fees)</span>
            <p className="text-slate-600 leading-relaxed">
              ဖောက်သည်လုပ်ငန်း၏ ထုတ်ကုန်စာရင်း၊ FAQ များနှင့် စာရွက်စာတမ်းများကို AI ထဲသို့ စတင်ထည့်သွင်းပေးသည့် တစ်ကြိမ်ပေး ဝန်ဆောင်ခ။
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၂။ လစဉ် စာရင်းသွင်းကြေး (Subscriptions)</span>
            <p className="text-slate-600 leading-relaxed">
              AI Agent ၂၄ နာရီ စဉ်ဆက်မပြတ် အသုံးပြုနိုင်မှုနှင့် Cloud Server များအတွက် ဖောက်သည်တစ်ဦးစီထံမှ လစဉ်ကြေး ရယူခြင်း (အဓိက ပုံမှန်ဝင်ငွေ)။
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၃။ သီးသန့် ချိတ်ဆက်မှုစရိတ် (Custom Integration)</span>
            <p className="text-slate-600 leading-relaxed">
              လုပ်ငန်းကြီးများ၏ ERP၊ POS၊ စာရင်းကိုင်ဆော့ဖ်ဝဲများနှင့် AI ကို တိုက်ရိုက်ချိတ်ဆက်ပေးသည့် သီးသန့် အင်ဂျင်နီယာ ဝန်ဆောင်ခ။
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၄။ သင်တန်းနှင့် အကူအညီ (Training & Support)</span>
            <p className="text-slate-600 leading-relaxed">
              ဖောက်သည်၏ အရောင်းနှင့် ဝန်ဆောင်မှု ဝန်ထမ်းများအား AI ကို အကျိုးရှိရှိ လက်တွဲသုံးစွဲနိုင်ရန် သင်တန်းပေးခြင်းနှင့် လက်စွဲစာအုပ် ပံ့ပိုးခ။
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၅။ ပြုပြင်ထိန်းသိမ်းရေး စာချုပ် (Maintenance)</span>
            <p className="text-slate-600 leading-relaxed">
              လစဉ် အချက်အလက်အသစ်များ မွမ်းမံခြင်း၊ AI ဖြေကြားချက် မှန်ကန်မှု ပြန်လည်စစ်ဆေးခြင်းနှင့် SLA အဆင့်မြှင့်တင်ခြင်း စာချုပ်များ။
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-teal-700 block text-xs">၆။ ပြန်လည်ဖြန့်ချိခွင့် ကော်မရှင် (Reseller Margins)</span>
            <p className="text-slate-600 leading-relaxed">
              တရုတ် Supplier ထံမှ တရားဝင် Reseller စာချုပ် ရရှိပါက Enterprise Cloud နှင့် Model API ရောင်းချမှုအပေါ် ရရှိမည့် ကော်မရှင်ငွေ။
            </p>
          </div>
        </div>
      </div>

      {/* Financial Scenario Calculator Component */}
      <FinancialCalculator onShowToast={onShowToast} />

      {/* Implementation Roadmap */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Map className="w-5 h-5 text-teal-600" />
            <span>အကောင်အထည်ဖော်မည့် အဆင့်ဆင့် လမ်းပြမြေပုံ (Implementation Roadmap)</span>
          </h3>
          <span className="text-xs text-slate-500">
            (အဆိုပြုထားသော ရည်မှန်းချက်များဖြစ်ပြီး အတည်ပြုချက်ရရှိမှ ဆောင်ရွက်မည်)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROADMAP_STAGES.map((stage, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between space-y-3 text-xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded text-[11px]">
                    {stage.period}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {stage.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{stage.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-700 bg-white p-2 rounded-lg">
                <strong className="text-slate-900 block mb-0.5">ရလဒ် အထောက်အထား:</strong>
                <span>{stage.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Register with Expandable Mitigations */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <span>စွန့်စားရမှုများ စီမံခန့်ခွဲရေး မှတ်တမ်း (Risk Register & Mitigations)</span>
            </h3>
            <p className="text-xs text-slate-500">
              ဖြစ်ပေါ်လာနိုင်သော စွန့်စားရမှု ၈ ရပ်နှင့် ကြိုတင်ကာကွယ်ရန် အစီအစဉ်များ
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          {RISK_REGISTER.map((risk) => {
            const isExpanded = expandedRiskId === risk.id;

            return (
              <div
                key={risk.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all text-xs"
              >
                <button
                  type="button"
                  onClick={() => setExpandedRiskId(isExpanded ? '' : risk.id)}
                  className="w-full text-left p-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ${
                        risk.severity === 'အလွန်အရေးကြီး'
                          ? 'bg-rose-100 text-rose-800 border border-rose-300'
                          : 'bg-amber-100 text-amber-800 border border-amber-300'
                      }`}
                    >
                      {risk.severity}
                    </span>
                    <span className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                      {risk.title}
                    </span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-4 bg-white space-y-2 border-t border-slate-200 animate-fadeIn">
                    <div className="text-rose-950 bg-rose-50/70 p-2.5 rounded-lg border border-rose-100">
                      <strong>ထိခိုက်နိုင်ခြေ (Impact): </strong>
                      <span>{risk.impact}</span>
                    </div>

                    <div className="text-teal-950 bg-teal-50/70 p-2.5 rounded-lg border border-teal-100">
                      <strong>ကြိုတင်ကာကွယ်ရေး အစီအစဉ် (Mitigation Strategy): </strong>
                      <span>{risk.mitigation}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Box & Next Step */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဆင့် ၆ ၏ အဓိက အနှစ်ချုပ်
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            စီးပွားရေးအရ လစဉ်ကြေး ပုံမှန်ရရှိနိုင်ပြီး စွန့်စားရမှုများကို စနစ်တကျ ကာကွယ်ထားသဖြင့် လုပ်ငန်းငယ် ၅–၁၀ ခုနှင့် ကနဦး စမ်းသပ်ခြင်းသည် စီမံခန့်ခွဲမှုအတွက် အန္တရာယ်ကင်းသော အဆင့်ဖြစ်ပါသည်။
          </p>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: ဒါရိုက်တာ အတည်ပြုချက်</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
