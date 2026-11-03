import React from 'react';
import { ViewMode, SupplierItem } from '../types';
import { SupplierComparisonTool } from '../components/SupplierComparisonTool';
import {
  CheckSquare,
  ShieldCheck,
  Scale,
  ArrowRight,
  Sparkles,
  Info,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
  suppliers: SupplierItem[];
  onUpdateSuppliers: (suppliers: SupplierItem[]) => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

export const Section5SupplierEvaluation: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
  suppliers,
  onUpdateSuppliers,
  onShowToast,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <CheckSquare className="w-3.5 h-3.5" />
          <span>အဆင့် ၅ — Supplier ရွေးချယ်စိစစ်ရေး မူဘောင်</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ဘယ် Supplier ကို ရွေးချယ်သင့်သလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          အချက် ၁၀၀ အလေးပေး ရမှတ်ဇယားနှင့် မဖြစ်မနေ ပြည့်မီရမည့် ၅ ချက်ဖြင့် Supplier များကို ဘက်မလိုက်ဘဲ စနစ်တကျ ချိန်တွယ်ဆန်းစစ်ခြင်း။
        </p>
      </div>

      {/* Weighted Scorecard Guide Cards */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <Scale className="w-4 h-4 text-teal-600" />
          <span>အမှတ် ၁၀၀ အလေးပေး ရမှတ် ၆ မျိုး ခွဲဝေမှု (Weighting Distribution)</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-xs">
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၂၀%</span>
            <span className="text-slate-700 font-medium">မြန်မာစာစွမ်းရည်</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၂၀%</span>
            <span className="text-slate-700 font-medium">Agent/API စွမ်းရည်</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၂၀%</span>
            <span className="text-slate-700 font-medium">စျေးနှုန်း/မိတ်ဖက်</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၁၅%</span>
            <span className="text-slate-700 font-medium">ဒေတာလုံခြုံရေး</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၁၅%</span>
            <span className="text-slate-700 font-medium">တည်ငြိမ်မှု/SLA</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl border border-slate-200">
            <span className="text-lg font-black text-teal-700 block">၁၀%</span>
            <span className="text-slate-700 font-medium">မြန်မာ့စျေးကွက်</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Tool */}
      <SupplierComparisonTool
        suppliers={suppliers}
        onUpdateSuppliers={onUpdateSuppliers}
        onShowToast={onShowToast}
      />

      {/* Summary Box & Next Step */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဆင့် ၅ ၏ အဓိက အနှစ်ချုပ်
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Supplier တစ်ခုသည် ရမှတ်မြင့်မားရုံဖြင့် မလုံလောက်ပါ။ မြန်မာနိုင်ငံသို့ တရားဝင် ဝန်ဆောင်မှုပေးနိုင်ခြင်းနှင့် ဒေတာလုံခြုံရေး အာမခံချက်ရှိမှသာ ကျွန်ုပ်တို့ ကုမ္ပဏီက တရားဝင် ပူးပေါင်းဆောင်ရွက်ပါမည်။
          </p>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: ဝင်ငွေနှင့် ဘဏ္ဍာရေးတွက်ချက်မှု</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
