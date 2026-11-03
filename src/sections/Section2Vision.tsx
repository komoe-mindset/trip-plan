import React, { useState } from 'react';
import { ViewMode } from '../types';
import { EcosystemDiagram } from '../components/EcosystemDiagram';
import { USE_CASES } from '../data/proposalData';
import {
  Network,
  Bot,
  MessageSquare,
  ShoppingCart,
  FileText,
  Workflow,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
}

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  'customer-service': MessageSquare,
  'sales-order': ShoppingCart,
  'document-assistant': FileText,
  'workflow-automation': Workflow,
};

export const Section2Vision: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
}) => {
  const [expandedCaseId, setExpandedCaseId] = useState<string>('customer-service');

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <Network className="w-3.5 h-3.5" />
          <span>အဆင့် ၂ — AI စီးပွားရေးစနစ်နှင့် အသုံးချမှုပုံစံများ</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          မြန်မာ AI စီးပွားရေးစနစ်ကို ဘယ်လိုတည်ဆောက်မလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          တရုတ် AI နည်းပညာရှင်များနှင့် မြန်မာ့စီးပွားရေးလုပ်ငန်းများကြားတွင် ကျွန်ုပ်တို့ ကုမ္ပဏီက တန်ဖိုးမြှင့် ပေါင်းကူးတံတားအဖြစ် ရပ်တည်မည့် အစီအစဉ်။
        </p>
      </div>

      {/* Interactive Ecosystem Diagram */}
      <EcosystemDiagram />

      {/* Four Practical Use Cases */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Bot className="w-5 h-5 text-teal-600" />
            <span>လက်တွေ့ အသုံးချနိုင်မည့် AI Agent အမျိုးအစား ၄ မျိုး (Practical Use Cases)</span>
          </h3>
          <span className="text-xs text-slate-500">
            (နမူနာ လုပ်ငန်းများဖြင့် လေ့လာဆန်းစစ်ထားခြင်း ဖြစ်ပါသည်)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {USE_CASES.map((uc) => {
            const Icon = USE_CASE_ICONS[uc.id] || Bot;
            const isExpanded = expandedCaseId === uc.id || viewMode === 'detailed';

            return (
              <div
                key={uc.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:border-teal-300 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                          {uc.titleMy}
                        </h4>
                        <span className="text-[11px] text-teal-700 font-medium">
                          {uc.target}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCaseId(isExpanded && viewMode !== 'detailed' ? '' : uc.id)
                      }
                      className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                      title={isExpanded ? 'လျှို့ဝှက်ရန်' : 'အသေးစိတ်ကြည့်ရန်'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-2 text-xs text-slate-700 mt-3">
                    <div className="p-2.5 bg-rose-50/60 rounded-xl border border-rose-100">
                      <strong className="text-rose-950 font-bold block mb-0.5">
                        လုပ်ငန်းပြဿနာ:
                      </strong>
                      <span>{uc.problem}</span>
                    </div>

                    <div className="p-2.5 bg-teal-50/60 rounded-xl border border-teal-100">
                      <strong className="text-teal-950 font-bold block mb-0.5">
                        AI Agent ကူညီပုံ:
                      </strong>
                      <span>{uc.solution}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="pt-3 border-t border-slate-100 space-y-2.5 text-xs text-slate-600 animate-fadeIn">
                      <div>
                        <strong className="text-slate-900 block mb-0.5">အလုပ်လုပ်ပုံ အဆင့်ဆင့်:</strong>
                        <p className="bg-slate-50 p-2 rounded-lg border border-slate-200">
                          {uc.workflow}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100 text-emerald-950">
                          <strong>တိုင်းတာနိုင်သော အကျိုးကျေးဇူး: </strong>
                          <span>{uc.benefits}</span>
                        </div>
                        <div className="p-2 bg-amber-50 rounded-lg border border-amber-100 text-amber-950">
                          <strong>စနစ်၏ ကန့်သတ်ချက်: </strong>
                          <span>{uc.limitations}</span>
                        </div>
                      </div>

                      <div className="p-2 bg-slate-100 rounded-lg text-[11px] text-slate-700 flex items-start gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>လူသားစစ်ဆေးရန် လိုအပ်ချက်: </strong>
                          <span>{uc.humanReview}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() =>
                      setExpandedCaseId(isExpanded && viewMode !== 'detailed' ? '' : uc.id)
                    }
                    className="text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                  >
                    {isExpanded ? 'အနှစ်ချုပ်သို့ ပြန်ရန် ↑' : 'အသေးစိတ် အချက်အလက်များ ဖတ်ရန် ↓'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Box & Next Step */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဆင့် ၂ ၏ အဓိက အနှစ်ချုပ်
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            ကျွန်ုပ်တို့သည် သာမန် software ရောင်းချသူမဟုတ်ဘဲ နည်းပညာရွေးချယ်မှု၊ မြန်မာဘာသာ ပြုပြင်မှု၊ ဖောက်သည်တပ်ဆင်မှုနှင့် ၂၄ နာရီ နည်းပညာစောင့်ရှောက်မှုတို့ ပါဝင်သော <strong>ပြည့်စုံသည့် ဝန်ဆောင်မှုစနစ် (End-to-End Managed AI)</strong> ကို တည်ဆောက်မည် ဖြစ်သည်။
          </p>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: တရုတ် AI မိတ်ဖက်များ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
