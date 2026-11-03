import React from 'react';
import { DirectorReviewData } from '../types';
import { FINAL_MOTTO } from '../data/proposalData';
import {
  Award,
  CheckCircle2,
  FileText,
  Copy,
  Download,
  ShieldAlert,
  Send,
  MessageSquare,
  Sparkles,
  Printer,
} from 'lucide-react';

interface DirectorReviewPanelProps {
  reviewData: DirectorReviewData;
  onUpdateReviewData: (data: DirectorReviewData) => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
  onPrint: () => void;
}

export const DirectorReviewPanel: React.FC<DirectorReviewPanelProps> = ({
  reviewData,
  onUpdateReviewData,
  onShowToast,
  onPrint,
}) => {
  const handleToggleApproval = (key: keyof DirectorReviewData['approvals']) => {
    onUpdateReviewData({
      ...reviewData,
      approvals: {
        ...reviewData.approvals,
        [key]: !reviewData.approvals[key],
      },
      lastUpdated: new Date().toLocaleDateString('my-MM'),
    });
  };

  const handleToggleChecklist = (key: keyof DirectorReviewData['checklist']) => {
    onUpdateReviewData({
      ...reviewData,
      checklist: {
        ...reviewData.checklist,
        [key]: !reviewData.checklist[key],
      },
      lastUpdated: new Date().toLocaleDateString('my-MM'),
    });
  };

  const handleSentimentChange = (val: DirectorReviewData['sentiment']) => {
    onUpdateReviewData({
      ...reviewData,
      sentiment: val,
      lastUpdated: new Date().toLocaleDateString('my-MM'),
    });
    onShowToast('ဒါရိုက်တာ၏ သုံးသပ်ချက် အဆင့်အတန်း မှတ်တမ်းတင်ပြီးပါပြီ', 'success');
  };

  const handleCommentsChange = (val: string) => {
    onUpdateReviewData({
      ...reviewData,
      directorComments: val,
      lastUpdated: new Date().toLocaleDateString('my-MM'),
    });
  };

  const handleCopySummary = () => {
    const summary = `[ဒါရိုက်တာထံမှ သုံးသပ်ချက် အနှစ်ချုပ် - Myanmar AI Bridge]
ရက်စွဲ: ${new Date().toLocaleDateString()}
ဒါရိုက်တာ ဆုံးဖြတ်ချက် အခြေအနေ: ${
      reviewData.sentiment === 'interested'
        ? 'စိတ်ဝင်စားသည် (အဆိုပြုချက် ရှေ့ဆက်ရန် ထောက်ခံသည်)'
        : reviewData.sentiment === 'discuss_more'
        ? 'ထပ်မံဆွေးနွေးလိုသည်'
        : reviewData.sentiment === 'need_info'
        ? 'အချက်အလက် ထပ်မံလိုအပ်သည်'
        : 'မသတ်မှတ်ရသေး'
    }

မဟာဗျူဟာ ခွင့်ပြုချက်များ:
- Supplier Discovery (ရှန်ဟိုင်းပွဲ မိတ်ဖက်ရှာဖွေခွင့်): ${reviewData.approvals.discovery ? 'သဘောတူသည်' : 'မသဘောတူရသေး'}
- Technical PoC (နည်းပညာစမ်းသပ်မှု အဆိုပြုလွှာတင်ပြခွင့်): ${reviewData.approvals.evaluation ? 'သဘောတူသည်' : 'မသဘောတူရသေး'}
- Controlled Business Pilot (စမ်းသပ်လုပ်ငန်းခွင့်ပြုချက်): ${reviewData.approvals.pilot ? 'သဘောတူသည်' : 'မသဘောတူရသေး'}

ဒါရိုက်တာ၏ လမ်းညွှန်မှတ်ချက်:
${reviewData.directorComments || '(မှတ်ချက် မရှိပါ)'}

(ဤမှတ်တမ်းသည် ကုမ္ပဏီတွင်း ဆွေးနွေးသုံးသပ်ချက်သာဖြစ်ပြီး စာချုပ်ချုပ်ဆိုခြင်း သို့မဟုတ် တရားဝင် စည်းနှောင်မှု မဟုတ်ပါ)`;

    navigator.clipboard.writeText(summary).then(() => {
      onShowToast('ဒါရိုက်တာ သုံးသပ်ချက် အနှစ်ချုပ်ကို ကူးယူပြီးပါပြီ', 'success');
    });
  };

  const handleExportSummary = () => {
    const exportContent = {
      project: 'မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ',
      directorReview: reviewData,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportContent, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `director-strategic-review-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('သုံးသပ်ချက် အစီရင်ခံစာကို Download ရယူပြီးပါပြီ', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Three Strategic Approvals */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-teal-600" />
            <span>ဒါရိုက်တာထံမှ တောင်းခံသည့် မဟာဗျူဟာ အတည်ပြုချက် ၃ ရပ်</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            ရှန်ဟိုင်းခရီးစဉ်နှင့် စီမံကိန်းရှေ့ဆက်ရန် ဒါရိုက်တာထံမှ အောက်ပါ အဆင့် ၃ ဆင့်ကို ခွင့်ပြုချက် တောင်းခံပါသည်။
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Approval 1 */}
          <div
            onClick={() => handleToggleApproval('discovery')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              reviewData.approvals.discovery
                ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                ခွင့်ပြုချက် ၁
              </span>
              <input
                type="checkbox"
                checked={reviewData.approvals.discovery}
                readOnly
                className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              Supplier ရှာဖွေတွေ့ဆုံခွင့် (Supplier Discovery)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hongqiao Tech Week 2026 တွင် လျာထားသော တရုတ် AI မိတ်ဖက်များနှင့် တွေ့ဆုံဆွေးနွေးခွင့်၊ အချက်အလက်နှင့် ဈေးနှုန်း စုဆောင်းခွင့်။
            </p>
          </div>

          {/* Approval 2 */}
          <div
            onClick={() => handleToggleApproval('evaluation')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              reviewData.approvals.evaluation
                ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                ခွင့်ပြုချက် ၂
              </span>
              <input
                type="checkbox"
                checked={reviewData.approvals.evaluation}
                readOnly
                className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              နည်းပညာ စမ်းသပ်မှု အဆိုပြုလွှာ (Technical Evaluation)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              ခရီးစဉ်အပြီး စုဆောင်းရရှိသော အချက်အလက်များအပေါ် အခြေခံပြီး ကုန်ကျစရိတ် သီးသန့်တွက်ချက်ထားသော PoC စမ်းသပ်မှု အစီအစဉ် ရေးဆွဲတင်ပြခွင့်။
            </p>
          </div>

          {/* Approval 3 */}
          <div
            onClick={() => handleToggleApproval('pilot')}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              reviewData.approvals.pilot
                ? 'bg-teal-50 border-teal-400 ring-2 ring-teal-500/20'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">
                ခွင့်ပြုချက် ၃
              </span>
              <input
                type="checkbox"
                checked={reviewData.approvals.pilot}
                readOnly
                className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
              />
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">
              စမ်းသပ်စီမံကိန်း စတင်နိုင်မှု (Controlled Business Pilot)
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Supplier အရည်အသွေး ပြည့်မီမှုနှင့် နည်းပညာစမ်းသပ်မှု အောင်မြင်ပြီးမှသာ ပြည်တွင်းလုပ်ငန်း ၅–၁၀ ခုနှင့် စမ်းသပ်ရန် ရန်ပုံငွေ စဉ်းစားခွင့်။
            </p>
          </div>
        </div>

        {/* Clear Non-Binding Disclaimer Notice */}
        <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-2.5 text-xs text-rose-900">
          <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>စည်းကမ်းဆိုင်ရာ ကန့်သတ်ချက်: </strong>
            ဤရှင်းလင်းတင်ပြချက်သည် ကုမ္ပဏီအတွင်း မဟာဗျူဟာဆွေးနွေးရန်အတွက်သာ ဖြစ်ပြီး စာချုပ်ချုပ်ဆိုခြင်း၊ စပေါ်ငွေပေးချေခြင်း၊ သီးသန့်မိတ်ဖက်ကတိပြုခြင်း သို့မဟုတ် ဖောက်သည်များ၏ လျှို့ဝှက်ဒေတာများ ပေးအပ်ခြင်းအတွက် တရားဝင် ခွင့်ပြုချက် မဟုတ်ပါ။
          </p>
        </div>
      </div>

      {/* Review Checklist & Sentiment & Comments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Checklist */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>ဒါရိုက်တာ စစ်ဆေးချက် စာရင်း (Director Review Checklist)</span>
          </h4>

          <div className="space-y-2.5 text-xs text-slate-800">
            {[
              { key: 'visionUnderstood', label: 'မြန်မာ AI စီးပွားရေးစနစ် တည်ဆောက်ပုံ အမြင်ကို နားလည်သဘောပေါက်ပါသည်' },
              { key: 'suppliersUnderstood', label: 'လေ့လာမည့် တရုတ် AI နည်းပညာ မိတ်ဖက်များ၏ အခန်းကဏ္ဍကို စိစစ်ပြီးပါပြီ' },
              { key: 'partnershipModelsReviewed', label: 'စီးပွားရေး ပူးပေါင်းဆောင်ရွက်မှု ပုံစံ ၄ မျိုးကို သုံးသပ်ပြီးပါပြီ' },
              { key: 'risksReviewed', label: 'ဖြစ်ပေါ်လာနိုင်သော စွန့်စားရမှုများနှင့် ကြိုတင်ကာကွယ်မှုများကို စစ်ဆေးပြီးပါပြီ' },
              { key: 'pilotApproachReviewed', label: 'အဆင့်ဆင့် စမ်းသပ်အကောင်အထည်ဖော်မည့် Roadmap ကို လက်ခံပါသည်' },
              { key: 'additionalInfoRequired', label: 'အသေးစိတ် နည်းပညာနှင့် စာချုပ်ဆိုင်ရာ အချက်အလက်များ ထပ်မံတောင်းခံလိုပါသည်' },
            ].map(({ key, label }) => {
              const checked = reviewData.checklist[key as keyof DirectorReviewData['checklist']];
              return (
                <label
                  key={key}
                  className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleToggleChecklist(key as keyof DirectorReviewData['checklist'])}
                    className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                  />
                  <span className={checked ? 'font-medium text-slate-900' : 'text-slate-600'}>
                    {label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Sentiment & Notes */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-sm text-xs">
          <div>
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2.5">
              ဒါရိုက်တာ၏ သဘောထား အဆင့်အတန်း (Review Status)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { val: 'interested', label: 'စိတ်ဝင်စားသည်', color: 'teal' },
                { val: 'discuss_more', label: 'ထပ်မံဆွေးနွေးလိုသည်', color: 'cyan' },
                { val: 'need_info', label: 'အချက်အလက် ထပ်မံလိုအပ်သည်', color: 'amber' },
              ].map(({ val, label }) => {
                const isSelected = reviewData.sentiment === val;
                return (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleSentimentChange(val as DirectorReviewData['sentiment'])}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white border-teal-500 font-semibold shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              (ဤအချက်များသည် စီမံခန့်ခွဲမှု ဆွေးနွေးချက် အညွှန်းကိန်းများသာဖြစ်ပြီး တရားဝင် ဒစ်ဂျစ်တယ် လက်မှတ် မဟုတ်ပါ)
            </p>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1.5">
              ဒါရိုက်တာ၏ သီးသန့် လမ်းညွှန်မှတ်ချက် (Director Comments)
            </label>
            <textarea
              rows={3}
              value={reviewData.directorComments}
              onChange={(e) => handleCommentsChange(e.target.value)}
              placeholder="ရှန်ဟိုင်းခရီးစဉ် မတိုင်မီ သတိပြုရမည့် အချက်များ၊ မေးမြန်းစေလိုသော စုံစမ်းချက်များ သို့မဟုတ် လမ်းညွှန်ချက်များကို ရေးသားနိုင်ပါသည်။"
              className="w-full p-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 flex-wrap">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors shadow-xs"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>အနှစ်ချုပ် ကူးယူရန်</span>
            </button>

            <button
              onClick={handleExportSummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export ဒေါင်းလုဒ်</span>
            </button>

            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium transition-colors ml-auto"
            >
              <Printer className="w-3.5 h-3.5 text-amber-300" />
              <span>အစီရင်ခံစာ ပုံနှိပ်</span>
            </button>
          </div>
        </div>
      </div>

      {/* Prominent Final Vision Motto Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white border border-teal-800/40 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-400/20 text-teal-300 border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            ကုမ္ပဏီ၏ အန္တိမ ရည်မှန်းချက် (Core Mission)
          </span>

          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white leading-relaxed">
            "{FINAL_MOTTO}"
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            Myanmar AI Bridge စီမံကိန်းသည် နိုင်ငံတကာ နည်းပညာ တိုးတက်မှုများနှင့် မြန်မာ့စီးပွားရေးလုပ်ငန်းများ၏ လက်တွေ့ဘဝကြားတွင် ယုံကြည်စိတ်ချရသော ဒေသတွင်း ပေါင်းကူးတံတားအဖြစ် ရေရှည် ရပ်တည်သွားမည် ဖြစ်ပါသည်။
          </p>
        </div>
      </div>
    </div>
  );
};
