import React, { useState } from 'react';
import { ViewMode, MeetingChecklistItem } from '../types';
import {
  EVENT_DETAILS,
  SHANGHAI_ITINERARY,
  INITIAL_MEETING_CHECKLIST,
} from '../data/proposalData';
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckSquare,
  Plus,
  Info,
} from 'lucide-react';

interface SectionProps {
  viewMode: ViewMode;
  onNextStep: () => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

export const Section4EventPlan: React.FC<SectionProps> = ({
  viewMode,
  onNextStep,
  onShowToast,
}) => {
  const [checklist, setChecklist] = useState<MeetingChecklistItem[]>(
    INITIAL_MEETING_CHECKLIST
  );

  const handleToggleCheck = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleAddCheckItem = () => {
    const newItem: MeetingChecklistItem = {
      id: `chk-${Date.now()}`,
      title: 'ပြင်ဆင်ရမည့် အချက်သစ်',
      category: 'အထွေထွေ',
      completed: false,
    };
    setChecklist((prev) => [...prev, newItem]);
    onShowToast('ပြင်ဆင်မှုစာရင်းအသစ် ထည့်သွင်းပြီးပါပြီ', 'success');
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-800 border border-teal-200 mb-3">
          <Calendar className="w-3.5 h-3.5" />
          <span>အဆင့် ၄ — ရှန်ဟိုင်းပြပွဲ လက်တွေ့လုပ်ငန်းစဉ်</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
          ရှန်ဟိုင်းပွဲမှာ ဘာတွေ လုပ်ဆောင်မလဲ?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Hongqiao Tech Week 2026 သို့ သွားရောက်လေ့လာမည့် ၃ ရက်တာ စနစ်တကျ အစီအစဉ်နှင့် ပြင်ဆင်ရမည့် အချက်များ။
        </p>
      </div>

      {/* Confirmed Event Information Card */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 sm:p-6 shadow-md border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-700">
          <div>
            <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider block mb-1">
              တရားဝင် အတည်ပြုပြီးသော ပြပွဲအချက်အလက်များ
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {EVENT_DETAILS.name}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Business Matching & Enterprise Technology Exhibition
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 text-xs">
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[11px]">ကျင်းပမည့်ရက်:</span>
                <strong className="text-white">{EVENT_DETAILS.dates}</strong>
              </div>
            </div>
            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
              <div>
                <span className="text-slate-400 block text-[11px]">နေရာ:</span>
                <strong className="text-white">{EVENT_DETAILS.venue}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Business Matching Pass Eligibility Warning */}
        <div className="mt-4 p-3.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>အရေးကြီး စည်းမျဉ်းသတိပေးချက်: </strong>
            Business Matching အစီအစဉ်သည် အရည်အချင်းပြည့်မီသော ဝင်ခွင့် Pass နှင့် အပြန်အလှန် ချိန်းဆိုမှု အတည်ပြုချက် လိုအပ်ပါသည်။ ပြပွဲသို့ ဝင်ရောက်ခွင့်ရရုံဖြင့် သီးသန့် အစည်းအဝေး အလိုအလျောက် ရရှိမည် မဟုတ်ပါ။
          </p>
        </div>
      </div>

      {/* 3-Day Proposed Itinerary */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-teal-600" />
            <span>၃ ရက်တာ စီစဉ်ထားသော လုပ်ငန်းအစီအစဉ် (Proposed 3-Day Itinerary)</span>
          </h3>
          <span className="text-xs text-slate-500 hidden sm:inline">
            (အဆိုပြုထားသော အစီအစဉ်ဖြစ်ပြီး အတည်ပြုပြီးသော ချိန်းဆိုမှု မဟုတ်ပါ)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SHANGHAI_ITINERARY.map((day, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs hover:border-teal-400 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                    {day.day}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {day.date}
                  </span>
                </div>

                <h4 className="font-bold text-slate-900 text-sm leading-snug">
                  {day.titleMy}
                </h4>

                <ul className="space-y-2 text-xs text-slate-600">
                  {day.activities.map((act, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[11px] text-amber-800 bg-amber-50/60 p-2 rounded-lg">
                <strong>သတိပြုရန်: </strong> {day.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meeting Preparation Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-teal-600" />
              <span>ခရီးစဉ်အကြို ပြင်ဆင်မှု စစ်ဆေးချက်စာရင်း (Meeting Preparation Checklist)</span>
            </h3>
            <p className="text-xs text-slate-500">
              မထွက်ခွာမီ ပြင်ဆင်ပြီးစီးမှုများကို အမှန်ခြစ်၍ စစ်ဆေးနိုင်ပါသည်။
            </p>
          </div>
          <button
            onClick={handleAddCheckItem}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>အချက်သစ်ထည့်ရန်</span>
          </button>
        </div>

        <div className="space-y-2">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => handleToggleCheck(item.id)}
              className={`p-3 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all ${
                item.completed
                  ? 'bg-emerald-50/50 border-emerald-300 text-slate-900'
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleToggleCheck(item.id)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4 cursor-pointer"
                />
                <span className={`text-xs sm:text-sm ${item.completed ? 'line-through text-slate-500 font-normal' : 'font-medium'}`}>
                  {item.title}
                </span>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500 shrink-0">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Box & Next Step */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
            အဆင့် ၄ ၏ အဓိက အနှစ်ချုပ်
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            ရှန်ဟိုင်းခရီးစဉ်ကို အလည်အပတ်သဘောမဟုတ်ဘဲ နည်းပညာစိစစ်ရေး၊ မြန်မာစာစွမ်းရည် တိုက်ရိုက်စမ်းသပ်ရေးနှင့် မိတ်ဖက်အခွင့်အလမ်း စူးစမ်းရေးအတွက် တိကျသော ၃ ရက်တာ လုပ်ငန်းစဉ်ဖြင့် စနစ်တကျ အကောင်အထည်ဖော်ပါမည်။
          </p>
        </div>

        <button
          onClick={onNextStep}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-md shrink-0 self-start sm:self-auto"
        >
          <span>နောက်တစ်ဆင့်: Supplier စိစစ်ရွေးချယ်မှု</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
