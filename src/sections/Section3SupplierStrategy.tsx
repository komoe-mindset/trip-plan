import React, { useState } from 'react';
import { ViewMode } from '../types';
import {
  SUPPLIER_CATEGORIES,
  RESEARCH_TARGET_COMPANIES,
  PARTNERSHIP_MODELS,
} from '../data/proposalData';
import {
  Building2,
  Cpu,
  Layers,
  Handshake,
  ExternalLink,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Check,
  Search,
  CheckCircle2,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
}

export const Section3SupplierStrategy: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          <span>အဆင့် ၃ — နည်းပညာ မိတ်ဖက်များ ရှာဖွေရေး မဟာဗျူဟာ</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ဘယ်လို တရုတ် AI နည်းပညာမိတ်ဖက်တွေ ရှာဖွေမလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          တရုတ်နိုင်ငံ၏ ထိပ်တန်း AI နှင့် Cloud ပံ့ပိုးသူများကို စနစ်တကျ ချဉ်းကပ်ရန် ရည်ရွယ်ထားသော မိတ်ဖက်ရှာဖွေရေး မူဘောင်။
        </p>
      </div>

      {/* Three Sourcing Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
            ၁
          </div>
          <h4 className="font-bold text-slate-900 text-sm">
            Supplier Sourcing — နည်းပညာကုမ္ပဏီ ရှာဖွေခြင်း
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            NECC ပြပွဲတွင် အလားအလာရှိသော AI မော်ဒယ်နှင့် Cloud အခြေခံအဆောက်အအုံ ကုမ္ပဏီများကို မျက်မြင်လေ့လာ မှတ်တမ်းတင်ခြင်း။
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-xs">
            ၂
          </div>
          <h4 className="font-bold text-slate-900 text-sm">
            Technology Evaluation — နည်းပညာနှင့် ကုန်ကျစရိတ် စစ်ဆေးခြင်း
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            API တုံ့ပြန်မှု မြန်ဆန်မှု၊ မြန်မာစာ ယူနီကုဒ် ဖတ်ရှုနိုင်မှု၊ Enterprise SLA နှင့် Token စျေးနှုန်းများကို စိစစ်ခြင်း။
          </p>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
            ၃
          </div>
          <h4 className="font-bold text-slate-900 text-sm">
            Partnership Negotiation — စီးပွားရေးပူးပေါင်းမှု ဆွေးနွေးခြင်း
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            မြန်မာနိုင်ငံတွင် စီးပွားဖြစ် တရားဝင် အသုံးပြုခွင့်၊ လျှော့စျေးနှင့် အနာဂတ်တွင် ပြည်တွင်း မိတ်ဖက်ဖြစ်လာနိုင်ခြေ ဆွေးနွေးခြင်း။
          </p>
        </div>
      </div>

      {/* Five Supplier Categories */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-600" />
          <span>ကျွန်ုပ်တို့ လိုအပ်သော Supplier အမျိုးအစား ၅ မျိုး</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {SUPPLIER_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-colors space-y-1.5 text-xs"
            >
              <span className="text-[10px] font-bold uppercase text-teal-700 tracking-wider">
                {cat.title}
              </span>
              <h5 className="font-bold text-slate-900 text-sm">{cat.titleMy}</h5>
              <p className="text-slate-600 leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Companies Directory */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Search className="w-5 h-5 text-teal-600" />
              <span>လေ့လာရန် လျာထားသော တရုတ် AI ကုမ္ပဏီများ (Target Directory)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              အောက်ပါ ကုမ္ပဏီများသည် ကျွန်ုပ်တို့ သုတေသနပြုလုပ်ရန် ရည်ရွယ်ထားသော ကုမ္ပဏီများ ဖြစ်ပါသည်။
            </p>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>ရှင်းလင်းချက်: </strong>
            ဤစာရင်းတွင် ပါဝင်သော ကုမ္ပဏီများသည် ကျွန်ုပ်တို့ ကုမ္ပဏီဘက်မှ လေ့လာရန် ရည်ရွယ်ထားသော ကုမ္ပဏီများသာ ဖြစ်ပြီး Hongqiao Tech Week တွင် အမှန်တကယ် ပြခန်းပါဝင်မှု သို့မဟုတ် အစည်းအဝေး တက်ရောက်ရန် အတည်ပြုထားခြင်း မဟုတ်သေးပါ။
          </p>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESEARCH_TARGET_COMPANIES.map((company) => (
            <div
              key={company.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:border-teal-400 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {company.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">
                      {company.category}
                    </span>
                  </div>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-slate-400 hover:text-teal-600 rounded-lg hover:bg-slate-100 transition-colors"
                    title="တရားဝင် ဝက်ဘ်ဆိုက်သို့ သွားရန်"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Mandatory Tag for Every Single Entry */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-semibold border border-amber-200">
                  {company.statusTag}
                </div>

                <div className="text-xs space-y-1.5 text-slate-700 pt-1">
                  <p>
                    <strong className="text-slate-900">အားသာချက်: </strong>
                    {company.strength}
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    <strong className="text-slate-700">စိစစ်ရမည့်အချက်: </strong>
                    {company.consideration}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>သုတေသန ပစ်မှတ်</span>
                <span className="text-teal-700 font-semibold">{company.website.replace('https://', '')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supplier Partnership Models */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
          <Handshake className="w-5 h-5 text-teal-600" />
          <span>စီးပွားရေး ပူးပေါင်းဆောင်ရွက်မှု ပုံစံ ၄ မျိုး (Partnership Models)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PARTNERSHIP_MODELS.map((model) => (
            <div
              key={model.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                  {model.status}
                </span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm leading-snug">
                {model.nameMy}
              </h4>
              <p className="text-slate-600 leading-relaxed">{model.desc}</p>
              <div className="p-2 bg-white rounded-lg border border-slate-200 text-slate-700 text-[11px]">
                <strong>အဓိက သတိပြုရန်: </strong>
                <span>{model.keyNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Crucial Advisory Box */}
        <div className="p-4 bg-teal-50/70 border border-teal-200 rounded-xl text-xs text-teal-950 space-y-1">
          <strong className="block font-bold">
            မဟာဗျူဟာ အကြံပြုချက်:
          </strong>
          <p className="leading-relaxed">
            ကနဦးတွင် <strong>API Integration</strong> နှင့် <strong>Managed AI Services</strong> (အက်ပလီကေးရှင်း ရေးဆွဲခြင်းနှင့် ဝန်ဆောင်မှုပေးခြင်း) ဖြင့် စတင်ရန် အကြံပြုပါသည်။ မြန်မာ့စျေးကွက်တွင် ဖောက်သည်လက်ခံမှု အတည်ပြုပြီးမှသာ တရားဝင် Channel Reseller သို့မဟုတ် White-label စာချုပ်များသို့ တိုးချဲ့သင့်ပါသည်။
          </p>
          <p className="text-rose-800 font-semibold pt-1">
            * သာမန် API စာရင်းသွင်းရုံဖြင့် ပြန်လည်ဖြန့်ချိခွင့် (Reseller Rights) မရရှိနိုင်ကြောင်း ရှင်းလင်းစွာ သတိပြုရမည်။
          </p>
        </div>
      </div>

      {/* Summary Box & Next Step */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဆင့် ၃ ၏ အဓိက အနှစ်ချုပ်
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            တရုတ် AI ပံ့ပိုးသူများကို မျက်ကန်းယုံကြည်ခြင်း မပြုဘဲ နည်းပညာစွမ်းရည်၊ စာချုပ်တရားဝင်မှုနှင့် ကုန်ကျစရိတ်တို့ကို ဘက်စုံစိစစ်၍ စတင်ရာတွင် API ဝန်ဆောင်မှုပုံစံဖြင့် စွန့်စားမှုနည်းစွာ စတင်မည်။
          </p>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: ရှန်ဟိုင်းပွဲ အစီအစဉ်</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
