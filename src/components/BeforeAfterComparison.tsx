import React, { useState } from 'react';
import { UserCheck, AlertTriangle, Clock, Check, Sparkles, ShieldAlert, ShieldCheck } from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-teal-600" />
            <span>လက်တွေ့ လုပ်ငန်းခွင် နှိုင်းယှဉ်ချက် (Before vs After Comparison)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            လက်ဖြင့်လုပ်ကိုင်ခြင်းမှ AI Agent လက်တွဲကူညီသော လုပ်ငန်းခွင်သို့ ကူးပြောင်းပုံ
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-medium self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'both' ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600'
            }`}
          >
            နှစ်ဖက်ယှဉ်ကြည့်ရန်
          </button>
          <button
            onClick={() => setActiveTab('before')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'before' ? 'bg-white text-rose-700 shadow-xs font-semibold' : 'text-slate-600'
            }`}
          >
            ယခင်အခြေအနေ
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'after' ? 'bg-white text-teal-700 shadow-xs font-semibold' : 'text-slate-600'
            }`}
          >
            AI Agent နှင့် အခြေအနေ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BEFORE CARD */}
        {(activeTab === 'both' || activeTab === 'before') && (
          <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 text-xs font-bold border border-rose-300">
                ယခင် လက်ရှိ အခြေအနေ (Before)
              </span>
              <AlertTriangle className="w-5 h-5 text-rose-600" />
            </div>

            <h4 className="font-bold text-slate-900 text-base">
              ဝန်ထမ်းများ လက်ဖြင့် တိုက်ရိုက် တာဝန်ယူရသော လုပ်ငန်းခွင်
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>ဖောက်သည် မက်ဆေ့ခ်ျများ: </strong>
                  ညဘက်နှင့် အားလပ်ရက်များတွင် ပြန်လည်မဖြေကြားနိုင်ဘဲ ဖောက်သည်များ အခြားဆိုင်သို့ ပြောင်းသွားခြင်း။
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>အော်ဒါစာရင်းသွင်းမှု: </strong>
                  ဝန်ထမ်းများ မေးခွန်းဟောင်းများကို ထပ်ခါတလဲလဲ ဖြေနေရပြီး အော်ဒါမှတ်တမ်းတွင် အမှားအယွင်းများ မကြာခဏ ဖြစ်ပေါ်ခြင်း။
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>စာရွက်စာတမ်း ရှာဖွေစစ်ဆေးခြင်း: </strong>
                  စာချုပ်များ၊ သွင်းကုန်ပြေစာများနှင့် စာရင်းဇယားများကို လက်ဖြင့် နာရီပေါင်းများစွာ ရှာဖွေစစ်ဆေးနေရခြင်း။
                </span>
              </li>
            </ul>

            <div className="p-3 bg-white/80 rounded-xl border border-rose-200 text-xs text-rose-900">
              <strong>အားနည်းချက်: </strong> ကုန်ကျစရိတ် မြင့်တက်ပြီး ဝန်ထမ်းများ လုပ်ငန်းဝန်ပိကာ ပျက်ကွက်မှု/ထွက်ခွာမှု များပြားခြင်း။
            </div>
          </div>
        )}

        {/* AFTER CARD */}
        {(activeTab === 'both' || activeTab === 'after') && (
          <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 text-xs font-bold border border-teal-300">
                AI Agent ကူညီသော အခြေအနေ (After)
              </span>
              <Sparkles className="w-5 h-5 text-teal-600" />
            </div>

            <h4 className="font-bold text-slate-900 text-base">
              AI Agent က ၂၄ နာရီ ကူညီပြီး လူသားက အရေးကြီးဆုံးဖြတ်ချက် ထိန်းကျောင်းခြင်း
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>ချက်ချင်း တုံ့ပြန်မှု: </strong>
                  AI Agent က FAQ မေးခွန်း ၈၀% ကို စက္ကန့်ပိုင်းအတွင်း သဘာဝကျသော မြန်မာဘာသာဖြင့် ၂၄ နာရီ တိကျစွာ ဖြေကြားပေးခြင်း။
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>စနစ်တကျ အော်ဒါကောက်ယူမှု: </strong>
                  ဖောက်သည် လိပ်စာနှင့် ပစ္စည်းအချက်အလက်ကို AI က စနစ်တကျ ကောက်ယူပြီး ဝန်ထမ်းထံ အတည်ပြုချက် တောင်းခံခြင်း။
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>
                  <strong>မြန်ဆန်သော အနှစ်ချုပ်: </strong>
                  စာမျက်နှာ ရာချီရှိသော စာချုပ်များနှင့် ပြေစာများကို AI က မိနစ်ပိုင်းအတွင်း အနှစ်ချုပ်ပေးပြီး ကွဲလွဲချက်များကို ထောက်ပြပေးခြင်း။
                </span>
              </li>
            </ul>

            <div className="p-3 bg-white/90 rounded-xl border border-teal-200 text-xs text-teal-900">
              <strong>အရေးကြီး အခြေခံသဘောတရား: </strong>
              လုပ်ငန်းတိုင်းကို အပြည့်အဝ အလိုအလျောက် စက်တပ်ဆင်ခြင်း မဟုတ်ပါ။ အရေးကြီး ဆုံးဖြတ်ချက်များကို လူသားကသာ ထိန်းချုပ်ထားမည် ဖြစ်ပါသည်။
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2 text-xs text-slate-700">
        <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
        <span>
          <strong>လူသားနှင့် AI ပေါင်းစပ်မှု (Human-in-the-loop): </strong>
          ငွေလွှဲပြေစာ အတည်ပြုခြင်း၊ ပစ္စည်းထုတ်ပေးခြင်းနှင့် ဥပဒေရေးရာ ဆုံးဖြတ်ချက်များတွင် လူသားဝန်ထမ်း၏ အတည်ပြုချက် မဖြစ်မနေ လိုအပ်ပါသည်။
        </span>
      </div>
    </div>
  );
};
