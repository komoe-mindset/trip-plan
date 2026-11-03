import React from 'react';
import { ViewMode } from '../types';
import { BeforeAfterComparison } from '../components/BeforeAfterComparison';
import {
  TrendingUp,
  Search,
  Building,
  Headphones,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
}

export const Section1Opportunity: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>အဆင့် ၁ — အခွင့်အလမ်းနှင့် စျေးကွက် လိုအပ်ချက်</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ဒီအခွင့်အလမ်းကို ဘာကြောင့် စဉ်းစားသင့်သလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          ကမ္ဘာ့ AI နည်းပညာ တိုးတက်လာမှုနှင့်အတူ မြန်မာစီးပွားရေးလုပ်ငန်းများအတွက် အမှန်တကယ် လက်တွေ့အသုံးချနိုင်မည့် အခွင့်အလမ်းသစ်များကို ဖော်ထုတ်ခြင်း။
        </p>
      </div>

      {/* Strategic Market Hypotheses vs Verified Facts */}
      <div className="p-4 bg-gradient-to-r from-teal-50/80 via-white to-cyan-50/80 border border-teal-200 rounded-2xl shadow-2xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900 font-bold block">
              စျေးကွက် ယူဆချက်နှင့် ရှာဖွေတွေ့ရှိမည့် အချက်များ (Market Hypotheses to Validate):
            </strong>
            <p className="leading-relaxed">
              အမေရိကန်နှင့် နိုင်ငံတကာ AI ကုမ္ပဏီများအပြင် တရုတ်နိုင်ငံမှ AI ပံ့ပိုးသူများသည်လည်း အဆင့်မြင့် Model API များနှင့် Cloud အခြေခံအဆောက်အအုံများကို ပိုမိုသက်သာသော ဈေးနှုန်းဖြင့် ပံ့ပိုးပေးလာကြသည်။ သို့သော် ၎င်းတို့၏ မြန်မာစာ ယူနီကုဒ် နားလည်မှု၊ စီးပွားဖြစ် အသုံးပြုခွင့်နှင့် ဒေသတွင်း သင့်လျော်မှုကို ရှန်ဟိုင်းပွဲတွင် လက်တွေ့ စိစစ်အတည်ပြုရပါမည်။ <em>(မည်သည့်အခါမျှ တရုတ်မော်ဒယ်များသည် အမြဲတမ်း ပိုသက်သာသည် သို့မဟုတ် ပိုတိကျသည်ဟု ကြိုတင်မယူဆပါ)</em>
            </p>
          </div>
        </div>
      </div>

      {/* Three Opportunity Cards */}
      <div>
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <span>အဓိက အခွင့်အလမ်း မဏ္ဍိုင် ၃ ရပ် (Three Core Pillars)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-teal-400 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-base">
              ၁
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              နည်းပညာအသစ်များ ရှာဖွေခြင်း
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              နိုင်ငံတကာတွင် ထင်ရှားသော DeepSeek, Qwen, GLM ကဲ့သို့သော AI Model API များကို မျက်မြင်တွေ့ဆုံပြီး နည်းပညာစွမ်းဆောင်ရည်နှင့် ဈေးနှုန်းများကို တိုက်ရိုက် စုံစမ်းခြင်း။
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-teal-400 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-base">
              ၂
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              မြန်မာလုပ်ငန်းများအတွက် အသုံးချခြင်း
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              မြန်မာလုပ်ငန်းများသည် နည်းပညာကိုယ်တိုင် ရေးဆွဲရန် မဖြစ်နိုင်ပါ။ ဈေးနှုန်းသက်သာပြီး မြန်မာလို အမေးအဖြေလုပ်နိုင်သော အဆင့်သင့် AI စနစ်များကို လိုအပ်နေပါသည်။
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-teal-400 transition-all space-y-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-base">
              ၃
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              ရေရှည်ဝန်ဆောင်မှုလုပ်ငန်း တည်ဆောက်ခြင်း
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ကျွန်ုပ်တို့ ကုမ္ပဏီက နည်းပညာတပ်ဆင်ခြင်း၊ ဝန်ထမ်းသင်တန်းပေးခြင်း၊ လစဉ် ထိန်းသိမ်းစောင့်ရှောက်ခြင်းတို့ကို ဝန်ဆောင်မှုပေးကာ လစဉ်ပုံမှန်ဝင်ငွေ (Recurring Revenue) ဖန်တီးခြင်း။
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Before / After Comparison */}
      <BeforeAfterComparison />

      {/* Mode B Detailed Section */}
      {viewMode === 'detailed' && (
        <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 text-xs sm:text-sm">
          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">
            အသေးစိတ် စိစစ်ချက် — မြန်မာ့စီးပွားရေး အခြေအနေနှင့် AI အသုံးချမှု
          </h4>
          <p className="text-slate-700 leading-relaxed">
            လက်ရှိတွင် မြန်မာနိုင်ငံရှိ စီးပွားရေးလုပ်ငန်း ၈၀% ကျော်သည် Customer Inquiries များကို လူကိုယ်တိုင် လူမှုကွန်ရက် Chat များမှတစ်ဆင့် တုံ့ပြန်နေရပါသည်။ ညဘက်နှင့် အားလပ်ရက်များတွင် ဝန်ထမ်းမရှိသဖြင့် ဖောက်သည်လက်လွတ်ဆုံးရှုံးမှု များပြားသည်။ AI Agent ကို မိတ်ဆက်ပေးခြင်းဖြင့် ဝန်ထမ်းကုန်ကျစရိတ်ကို အဆမတန် မတိုးစေဘဲ ၂၄ နာရီ ဝန်ဆောင်မှုပေးနိုင်မည့် အားသာချက်ရှိပါသည်။
          </p>
        </div>
      )}

      {/* Three Takeaways & Next Step Action */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဓိက အနှစ်ချုပ် အချက် ၃ ချက်
          </span>
          <ul className="text-xs sm:text-sm text-slate-300 space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>မြန်မာစီးပွားရေးလုပ်ငန်းများအတွက် အသင့်သုံး AI ဝန်ဆောင်မှု လိုအပ်ချက် မြင့်မားနေသည်။</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>တရုတ် AI API များကို သုံးစွဲခြင်းဖြင့် မော်ဒယ်လေ့ကျင့်စရိတ် မကုန်ဘဲ လျင်မြန်စွာ စတင်နိုင်သည်။</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>လူသားဝန်ထမ်းများနှင့် လက်တွဲလုပ်ဆောင်သော AI Agent စနစ်ကို တည်ဆောက်မည်။</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: AI စီးပွားရေးစနစ်</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
