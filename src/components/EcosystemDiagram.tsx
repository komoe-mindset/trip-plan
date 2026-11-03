import React, { useState } from 'react';
import {
  Cpu,
  Boxes,
  Bot,
  Users2,
  ArrowDown,
  CheckCircle,
  Shield,
  Headphones,
  GraduationCap,
  Sparkles,
  Info,
} from 'lucide-react';

interface EcosystemLayer {
  id: string;
  titleMy: string;
  subtitleEn: string;
  icon: React.ElementType;
  badge: string;
  summary: string;
  responsibilities: string[];
  keyHighlight: string;
}

const ECOSYSTEM_LAYERS: EcosystemLayer[] = [
  {
    id: 'providers',
    titleMy: '၁။ တရုတ် AI နည်းပညာပံ့ပိုးသူများ',
    subtitleEn: 'Chinese AI Technology Providers',
    icon: Cpu,
    badge: 'နည်းပညာ အရင်းအမြစ်',
    summary:
      'ကမ္ဘာ့အဆင့်မီ LLM API များ၊ Reasoning Model များနှင့် Cloud/GPU အခြေခံအဆောက်အအုံများ ပံ့ပိုးပေးသော နည်းပညာကုမ္ပဏီကြီးများ။',
    responsibilities: [
      'ကုမ္ပဏီကိုယ်တိုင် ဘီလီယံနှင့်ချီ၍ Model မလေ့ကျင့်ဘဲ အဆင့်မြင့် AI API များကို တရားဝင် အသုံးပြုခွင့် ရယူခြင်း။',
      'တည်ငြိမ်ပြီး စျေးနှုန်းသက်သာသော အခြေခံအဆောက်အအုံကို ရွေးချယ်စိစစ်ခြင်း (Alibaba Cloud, DeepSeek စသည်)။',
      'တရားဝင် Enterprise API စာချုပ်နှင့် Service Level Agreement (SLA) ရယူခြင်း။',
    ],
    keyHighlight: 'မိမိကိုယ်တိုင် Foundation Model မတည်ဆောက်ဘဲ အဆင့်သင့် AI API များကို သုံးစွဲခြင်းဖြင့် ကုန်ကျစရိတ်နှင့် စွန့်စားရမှု အလွန်သက်သာစေသည်။',
  },
  {
    id: 'our-platform',
    titleMy: '၂။ ကျွန်ုပ်တို့ ကုမ္ပဏီ၏ AI ပေါင်းစပ်ပလက်ဖောင်း',
    subtitleEn: "Our Company's AI Integration Platform",
    icon: Boxes,
    badge: 'အဓိက တံတား (The Bridge)',
    summary:
      'တရုတ် AI API များကို ရယူပြီး မြန်မာစီးပွားရေးလုပ်ငန်းများ လိုအပ်ချက်နှင့် ကိုက်ညီအောင် ပြုပြင်ပေါင်းစပ်ပေးသည့် အလယ်အလတ် နည်းပညာစနစ်။',
    responsibilities: [
      'Technology Selection: အရည်အသွေးအကောင်းဆုံး API များကို စနစ်တကျ စိစစ်ရွေးချယ်ခြင်း။',
      'API Integration & Orchestration: Multi-provider failover နှင့် dynamic routing စနစ် ထည့်သွင်းခြင်း။',
      'Myanmar Localization: မြန်မာစာ ယူနီကုဒ်၊ စကားပြေနှင့် စီးပွားရေးအခေါ်အဝေါ်များကို AI နားလည်အောင် ချိန်ညှိခြင်း။',
      'Security & Data Privacy: ဖောက်သည်ဒေတာများ ပေါက်ကြားမှုမရှိစေရန် Data Encryption နှင့် Zero Retention ကျင့်သုံးခြင်း။',
    ],
    keyHighlight: 'ဤအလွှာသည် ကျွန်ုပ်တို့ ကုမ္ပဏီ၏ အဓိက Intellectual Property (IP) နှင့် ဉာဏပစ္စည်း တန်ဖိုးဖြစ်ပါသည်။',
  },
  {
    id: 'agents',
    titleMy: '၃။ မြန်မာဘာသာ လုပ်ငန်းသုံး AI Agent များ',
    subtitleEn: 'Myanmar-language Business AI Agents',
    icon: Bot,
    badge: 'လက်တွေ့ အသုံးချစနစ်',
    summary:
      'လုပ်ငန်းများ၏ ဖောက်သည်ဝန်ဆောင်မှု၊ အရောင်းလက်ခံမှု၊ စာရွက်စာတမ်းဆန်းစစ်မှုနှင့် အစီရင်ခံစာ ထုတ်ပေးမှုတို့ကို ၂၄ နာရီ ဆောင်ရွက်ပေးသော AI ဝန်ထမ်းများ။',
    responsibilities: [
      'Business Workflow Automation: Facebook Messenger, Telegram, Viber, ဝက်ဘ်ဆိုက်နှင့် POS စနစ်များ ချိတ်ဆက်ပေးခြင်း။',
      'Knowledge Base (RAG): ကုမ္ပဏီ၏ ထုတ်ကုန်စာရင်း၊ စျေးနှုန်းနှင့် စည်းကမ်းချက်များကိုသာ အခြေခံဖြေကြားစေခြင်း။',
      'Human-in-the-loop: အရေးကြီးကိစ္စများတွင် လူသားဝန်ထမ်းထံ ချက်ချင်း လွှဲပြောင်းပေးသည့် စနစ်တပ်ဆင်ခြင်း။',
    ],
    keyHighlight: 'လူသားဝန်ထမ်းများကို အစားထိုးခြင်း မဟုတ်ဘဲ ဝန်ထမ်းများ၏ လုပ်ငန်းစွမ်းဆောင်ရည်ကို ၃ ဆမှ ၅ ဆအထိ တိုးမြှင့်ပေးပါသည်။',
  },
  {
    id: 'customers',
    titleMy: '၄။ မြန်မာ့စီးပွားရေး လုပ်ငန်းသုံးစွဲသူများ',
    subtitleEn: 'Myanmar Business Customers',
    icon: Users2,
    badge: 'ဖောက်သည်နှင့် ဝင်ငွေ',
    summary:
      'နည်းပညာအခက်အခဲမရှိဘဲ မိမိလုပ်ငန်းတွင် AI ကို ချက်ချင်း အကျိုးရှိရှိ အသုံးပြုလိုသော လက်လီ၊ ကုန်သွယ်ရေး၊ ခရီးသွားနှင့် ဝန်ဆောင်မှုလုပ်ငန်းများ။',
    responsibilities: [
      'Customer Onboarding: စတင်အသုံးပြုနိုင်ရန် ဖောက်သည်လုပ်ငန်း၏ အချက်အလက်များ ထည့်သွင်းပေးခြင်း။',
      'Technical Support & SLA: ပြည်တွင်းဖုန်း၊ Chat ဖြင့် အချိန်နှင့်တစ်ပြေးညီ နည်းပညာအကူအညီ ပေးအပ်ခြင်း။',
      'Training & Maintenance: ဖောက်သည်ဝန်ထမ်းများအား အသုံးပြုနည်း သင်တန်းပေးခြင်းနှင့် ပုံမှန် စောင့်ရှောက်ခြင်း။',
    ],
    keyHighlight: 'ဖောက်သည်များထံမှ လစဉ်ကြေး (Monthly Subscription) နှင့် တပ်ဆင်ခ (Setup fee) ရယူပြီး ရေရှည်ဝင်ငွေ ဖန်တီးခြင်း။',
  },
];

export const EcosystemDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('our-platform');

  const selectedLayer =
    ECOSYSTEM_LAYERS.find((l) => l.id === selectedLayerId) || ECOSYSTEM_LAYERS[1];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Boxes className="w-5 h-5 text-teal-600" />
            <span>၄ ဆင့်ပါ မြန်မာ AI ချိတ်ဆက်မှု စနစ်ပုံစံ (Interactive Ecosystem Flow)</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            အဆင့်တစ်ခုစီကို နှိပ်ပြီး ကျွန်ုပ်တို့ ကုမ္ပဏီ၏ အခန်းကဏ္ဍနှင့် တာဝန်များကို ကြည့်ရှုနိုင်ပါသည်။
          </p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 shrink-0 self-start sm:self-auto">
          <Info className="w-3.5 h-3.5 text-teal-600" />
          အဆင့်ကို နှိပ်၍ အသေးစိတ်ဖတ်ရန်
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Flow Column */}
        <div className="lg:col-span-6 space-y-3">
          {ECOSYSTEM_LAYERS.map((layer, index) => {
            const isSelected = layer.id === selectedLayerId;
            const IconComponent = layer.icon;

            return (
              <React.Fragment key={layer.id}>
                <button
                  type="button"
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all relative group cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white border-teal-500 shadow-md ring-2 ring-teal-500/30'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                        isSelected
                          ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                          : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {layer.badge}
                    </span>
                    <span
                      className={`text-xs ${
                        isSelected ? 'text-teal-300' : 'text-slate-400'
                      }`}
                    >
                      {layer.subtitleEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-teal-500 text-slate-950 font-bold'
                          : 'bg-white text-slate-700 shadow-2xs'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4
                        className={`font-bold text-sm sm:text-base leading-snug ${
                          isSelected ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {layer.titleMy}
                      </h4>
                      <p
                        className={`text-xs line-clamp-1 mt-0.5 ${
                          isSelected ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        {layer.summary}
                      </p>
                    </div>
                  </div>
                </button>

                {index < ECOSYSTEM_LAYERS.length - 1 && (
                  <div className="flex justify-center my-0.5">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-teal-50 text-teal-800 text-[11px] font-semibold rounded-full border border-teal-200">
                      <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                      <span>တရားဝင် ချိတ်ဆက်မှု</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Explanatory Detail Card */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
              <selectedLayer.icon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                {selectedLayer.badge}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {selectedLayer.titleMy}
              </h4>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            {selectedLayer.summary}
          </p>

          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl mb-4">
            <div className="flex items-start gap-2 text-xs sm:text-sm text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-950">အဓိက အနှစ်ချုပ်: </strong>
                <span>{selectedLayer.keyHighlight}</span>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
              ကျွန်ုပ်တို့ ကုမ္ပဏီ၏ အဓိက တာဝန်နှင့် လုပ်ဆောင်ချက်များ:
            </h5>
            <ul className="space-y-2">
              {selectedLayer.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
