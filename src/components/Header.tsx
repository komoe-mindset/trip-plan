import React from 'react';
import { ViewMode } from '../types';
import { Printer, Share2, BookOpen, Layers, Sparkles, Menu, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  viewMode: ViewMode;
  onToggleViewMode: (mode: ViewMode) => void;
  onOpenSources: () => void;
  onPrint: () => void;
  onShare: () => void;
  onToggleMobileNav: () => void;
  currentStep: number;
  totalSteps: number;
}

export const Header: React.FC<HeaderProps> = ({
  viewMode,
  onToggleViewMode,
  onOpenSources,
  onPrint,
  onShare,
  onToggleMobileNav,
  currentStep,
  totalSteps,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleMobileNav}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="အဆင့်များ မီနူးဖွင့်ရန်"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/20 text-slate-950 font-bold">
                <Sparkles className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                    မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ
                  </h1>
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    စီမံကိန်းအဆိုပြုလွှာ
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  Myanmar AI Bridge • Hongqiao Tech Week 2026 Executive Briefing
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mode Switcher */}
            <div className="bg-slate-800/90 p-1 rounded-xl border border-slate-700/80 flex items-center text-xs">
              <button
                type="button"
                onClick={() => onToggleViewMode('presentation')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'presentation'
                    ? 'bg-teal-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="ဒါရိုက်တာ တင်ပြမှု (၅–၈ မိနစ် အနှစ်ချုပ်)"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">ဒါရိုက်တာ တင်ပြမှု</span>
                <span className="sm:hidden">တင်ပြမှု</span>
              </button>
              <button
                type="button"
                onClick={() => onToggleViewMode('detailed')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                  viewMode === 'detailed'
                    ? 'bg-teal-500 text-slate-950 shadow-sm font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="အသေးစိတ် စိစစ်မှု (သုတေသနနှင့် ကိန်းဂဏန်းများ)"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">အသေးစိတ် စိစစ်မှု</span>
                <span className="sm:hidden">အသေးစိတ်</span>
              </button>
            </div>

            {/* Reference Sources Button */}
            <button
              onClick={onOpenSources}
              className="p-2 sm:px-3 sm:py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors flex items-center gap-1.5"
              title="ကိုးကားထားသော အချက်အလက်များ"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline">ကိုးကားချက်များ</span>
            </button>

            {/* Share URL */}
            <button
              onClick={onShare}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors"
              title="လင့်ခ် ကူးယူရန်"
              aria-label="လင့်ခ် ကူးယူရန်"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Print Button */}
            <button
              onClick={onPrint}
              className="p-2 sm:px-3 sm:py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
              title="A4 အစီရင်ခံစာ ပုံနှိပ်/PDF သိမ်းရန်"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span className="hidden sm:inline">အစီရင်ခံစာ ပုံနှိပ်</span>
            </button>
          </div>
        </div>

        {/* Small Progress Bar */}
        <div className="w-full bg-slate-800 h-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-400 to-cyan-400 h-1 transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </header>
  );
};
