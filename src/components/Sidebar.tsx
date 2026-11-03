import React from 'react';
import { STEPS, EVENT_DETAILS } from '../data/proposalData';
import {
  TrendingUp,
  Network,
  Building2,
  Calendar,
  CheckSquare,
  DollarSign,
  Award,
  CheckCircle2,
  Circle,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';

interface SidebarProps {
  currentStep: number;
  onSelectStep: (stepId: number) => void;
  reviewedSteps: number[];
  onToggleReviewed: (stepId: number) => void;
}

const STEP_ICONS: Record<string, React.ElementType> = {
  TrendingUp,
  Network,
  Building2,
  Calendar,
  CheckSquare,
  DollarSign,
  Award,
};

export const Sidebar: React.FC<SidebarProps> = ({
  currentStep,
  onSelectStep,
  reviewedSteps,
  onToggleReviewed,
}) => {
  const isReviewed = reviewedSteps.includes(currentStep);

  return (
    <aside className="w-full lg:w-76 shrink-0 flex flex-col justify-between p-4 bg-white border-r border-slate-200 min-h-[calc(100vh-4.5rem)] no-print">
      <div className="space-y-6">
        {/* Progress Summary Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm border border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
            <span className="font-medium">လေ့လာပြီးစီးမှု အခြေအနေ</span>
            <span className="px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/30">
              အဆင့် {currentStep} / {STEPS.length}
            </span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-2 mb-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(reviewedSteps.length / STEPS.length) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>အတည်ပြုပြီး: {reviewedSteps.length} ခု</span>
            <button
              onClick={() => onToggleReviewed(currentStep)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                isReviewed
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${isReviewed ? 'text-teal-400' : 'text-slate-400'}`} />
              {isReviewed ? 'ဖတ်ရှုပြီး' : 'ဖတ်ရှုပြီး မှတ်ရန်'}
            </button>
          </div>
        </div>

        {/* Step Navigation List */}
        <div>
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-2">
            မဟာဗျူဟာ အဆင့်များ
          </h2>
          <nav className="space-y-1">
            {STEPS.map((step) => {
              const IconComponent = STEP_ICONS[step.iconName] || Sparkles;
              const active = step.id === currentStep;
              const completed = reviewedSteps.includes(step.id);

              return (
                <button
                  key={step.id}
                  onClick={() => onSelectStep(step.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group ${
                    active
                      ? 'bg-teal-50 text-slate-900 border border-teal-300 font-semibold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-normal'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        active
                          ? 'bg-teal-600 text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <p className={`text-xs sm:text-sm truncate ${active ? 'font-semibold text-slate-950' : 'text-slate-700'}`}>
                        {step.shortTitle}
                      </p>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 inline" />
                        {step.duration}
                      </p>
                    </div>
                  </div>

                  <div>
                    {completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Circle className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-teal-600' : 'text-slate-300'}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Bottom Event Badge */}
      <div className="pt-4 border-t border-slate-200 text-xs text-slate-600 space-y-2 mt-6">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <Calendar className="w-4 h-4 text-teal-600 shrink-0" />
            <span>{EVENT_DETAILS.name}</span>
          </div>
          <p className="text-slate-600 pl-5.5 font-medium">{EVENT_DETAILS.dates}</p>
          <div className="flex items-start gap-1.5 text-slate-500 pt-1 border-t border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <span className="text-[11px] leading-tight">{EVENT_DETAILS.venue}၊ {EVENT_DETAILS.city}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
