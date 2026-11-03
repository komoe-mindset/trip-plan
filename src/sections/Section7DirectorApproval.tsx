import React from 'react';
import { ViewMode, DirectorReviewData } from '../types';
import { DirectorReviewPanel } from '../components/DirectorReviewPanel';
import { Award, ArrowLeft, RotateCcw } from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  reviewData: DirectorReviewData;
  onUpdateReviewData: (data: DirectorReviewData) => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
  onPrint: () => void;
  onSelectStep: (stepId: number) => void;
}

export const Section7DirectorApproval: React.FC<SectionProps> = ({
  viewMode,
  reviewData,
  onUpdateReviewData,
  onShowToast,
  onPrint,
  onSelectStep,
}) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>အဆင့် ၇ — ဒါရိုက်တာ အဆုံးအဖြတ်နှင့် အတည်ပြုချက်</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ဒါရိုက်တာထံမှ ဘာအတည်ပြုချက် လိုအပ်သလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Hongqiao Tech Week သို့ သွားရောက်မိတ်ဖက်ရှာဖွေခွင့်၊ နည်းပညာစမ်းသပ်မှု အဆိုပြုလွှာ ပြင်ဆင်ခွင့်နှင့် ကနဦး စမ်းသပ်စီမံကိန်းဆိုင်ရာ ဒါရိုက်တာ၏ မဟာဗျူဟာ သုံးသပ်ချက်။
        </p>
      </div>

      {/* Main Director Decision Dashboard */}
      <DirectorReviewPanel
        reviewData={reviewData}
        onUpdateReviewData={onUpdateReviewData}
        onShowToast={onShowToast}
        onPrint={onPrint}
      />

      {/* Navigation Footer */}
      <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <button
          onClick={() => onSelectStep(1)}
          className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 font-semibold"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>ပထမအဆင့် (အခွင့်အလမ်း) သို့ ပြန်လည်ကြည့်ရှုရန်</span>
        </button>

        <span className="text-slate-500 text-center sm:text-right text-[11px]">
          သင်၏ ရွေးချယ်မှုများကို မိမိ Browser တွင် အလိုအလျောက် မှတ်သားထားပြီး ဖြစ်ပါသည်။
        </span>
      </div>
    </div>
  );
};
