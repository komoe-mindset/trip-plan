import React from 'react';
import { REFERENCE_SOURCES, EVENT_DETAILS } from '../data/proposalData';
import { BookOpen, ExternalLink, X, ShieldCheck, Calendar, Info } from 'lucide-react';

interface ReferenceSourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceSourcesModal: React.FC<ReferenceSourcesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs no-print">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                ကိုးကားထားသော အချက်အလက်များနှင့် ရင်းမြစ်များ
              </h3>
              <p className="text-xs text-slate-500">
                Hongqiao Tech Week 2026 တရားဝင် အချက်အလက် စာမျက်နှာများ
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>အရေးကြီး အသိပေးချက်: </strong>
              Business Matching အစီအစဉ်သည် သတ်မှတ်အရည်အချင်းပြည့်မီသော Pass (ဝင်ခွင့်ကတ်) နှင့် နှစ်ဖက်တွေ့ဆုံရန် အတည်ပြုချက် လိုအပ်ပါသည်။ ပြပွဲသို့ သွားရောက်သူတိုင်း သီးသန့်တွေ့ဆုံခွင့် အလိုအလျောက် ရရှိမည် မဟုတ်ပါ။
            </p>
          </div>

          <div className="space-y-3">
            {REFERENCE_SOURCES.map((source, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border border-slate-200 hover:border-teal-300 transition-colors bg-white space-y-1.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    {source.title}
                  </h4>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-700 hover:text-teal-800 font-semibold text-xs shrink-0 bg-teal-50 px-2 py-1 rounded-lg"
                  >
                    <span>လင့်ခ်သို့ သွားရန်</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <p className="text-xs text-slate-600">{source.description}</p>
                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <Calendar className="w-3 h-3" />
                  <span>{source.lastChecked}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
            <strong>လွတ်လပ်သော စီမံကိန်း ဖော်ပြချက်: </strong>
            {EVENT_DETAILS.disclaimer}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            ပိတ်ရန်
          </button>
        </div>
      </div>
    </div>
  );
};
