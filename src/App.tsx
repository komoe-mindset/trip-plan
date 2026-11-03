import React, { useState, useEffect } from 'react';
import { ViewMode, SupplierItem, DirectorReviewData, FinancialCalculatorInputs } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import { STEPS, INITIAL_SUPPLIERS, EVENT_DETAILS } from './data/proposalData';
import { calculateFinancials } from './utils/calculations';

// Components
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Toast, ToastMessage } from './components/Toast';
import { ReferenceSourcesModal } from './components/ReferenceSourcesModal';
import { PrintableReport } from './components/PrintableReport';

// Sections
import { Section1Opportunity } from './sections/Section1Opportunity';
import { Section2Vision } from './sections/Section2Vision';
import { Section3SupplierStrategy } from './sections/Section3SupplierStrategy';
import { Section4EventPlan } from './sections/Section4EventPlan';
import { Section5SupplierEvaluation } from './sections/Section5SupplierEvaluation';
import { Section6BusinessModel } from './sections/Section6BusinessModel';
import { Section7DirectorApproval } from './sections/Section7DirectorApproval';

// Icons
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Share2,
  BookOpen,
  CheckCircle2,
  X,
  Sparkles,
} from 'lucide-react';

const INITIAL_REVIEW_DATA: DirectorReviewData = {
  approvals: {
    discovery: false,
    evaluation: false,
    pilot: false,
  },
  checklist: {
    visionUnderstood: false,
    suppliersUnderstood: false,
    partnershipModelsReviewed: false,
    risksReviewed: false,
    pilotApproachReviewed: false,
    additionalInfoRequired: false,
  },
  sentiment: '',
  directorComments: '',
  reviewedSteps: [],
  lastUpdated: '',
};

const DEFAULT_FINANCIAL_INPUTS: FinancialCalculatorInputs = {
  businessCustomers: 25,
  monthlySubscription: 120,
  conversationsPerMonth: 800,
  callsPerConversation: 2,
  inputTokensPerCall: 900,
  outputTokensPerCall: 300,
  inputCostPerMillion: 0.35,
  outputCostPerMillion: 1.10,
  monthlyOperatingExpense: 350,
};

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('presentation');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSourcesOpen, setIsSourcesOpen] = useState<boolean>(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persistent States
  const [reviewedSteps, setReviewedSteps] = useLocalStorage<number[]>(
    'myanmar_ai_reviewed_steps',
    []
  );
  const [suppliers, setSuppliers] = useLocalStorage<SupplierItem[]>(
    'myanmar_ai_suppliers_list',
    INITIAL_SUPPLIERS
  );
  const [reviewData, setReviewData] = useLocalStorage<DirectorReviewData>(
    'myanmar_ai_director_review',
    INITIAL_REVIEW_DATA
  );

  // Sync hash with current step
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/#step-(\d+)/);
      if (match) {
        const stepNum = parseInt(match[1]);
        if (stepNum >= 1 && stepNum <= STEPS.length) {
          setCurrentStep(stepNum);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectStep = (stepId: number) => {
    setCurrentStep(stepId);
    window.location.hash = `#step-${stepId}`;
    setIsMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleReviewed = (stepId: number) => {
    setReviewedSteps((prev) => {
      if (prev.includes(stepId)) {
        return prev.filter((id) => id !== stepId);
      } else {
        showToast(`အဆင့် ${stepId} ကို ဖတ်ရှုပြီးကြောင်း မှတ်သားပြီးပါပြီ`, 'success');
        return [...prev, stepId];
      }
    });
  };

  const showToast = (text: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        showToast('လက်ရှိ အဆင့်လင့်ခ်ကို ကူးယူပြီးပါပြီ (Clipboard သို့ သိမ်းဆည်းထားပါသည်)', 'success');
      });
    } else {
      showToast('လင့်ခ် ကူးယူ၍ မရသေးပါ', 'warning');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const financialResults = calculateFinancials(DEFAULT_FINANCIAL_INPUTS);

  const activeStepInfo = STEPS.find((s) => s.id === currentStep) || STEPS[0];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 font-sans flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Executive Header */}
      <Header
        viewMode={viewMode}
        onToggleViewMode={setViewMode}
        onOpenSources={() => setIsSourcesOpen(true)}
        onPrint={handlePrint}
        onShare={handleShare}
        onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)}
        currentStep={currentStep}
        totalSteps={STEPS.length}
      />

      {/* Main Layout Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex no-print">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block shrink-0 sticky top-18 h-[calc(100vh-4.5rem)] overflow-y-auto">
          <Sidebar
            currentStep={currentStep}
            onSelectStep={handleSelectStep}
            reviewedSteps={reviewedSteps}
            onToggleReviewed={handleToggleReviewed}
          />
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileNavOpen && (
          <div className="fixed inset-0 z-40 lg:hidden flex no-print">
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs"
              onClick={() => setIsMobileNavOpen(false)}
            />
            <div className="relative w-76 max-w-xs bg-white h-full shadow-2xl flex flex-col z-50">
              <div className="p-4 border-b border-slate-200 flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">
                  မဟာဗျူဟာ အဆင့်များ
                </span>
                <button
                  onClick={() => setIsMobileNavOpen(false)}
                  className="p-1 text-slate-500 hover:text-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Sidebar
                  currentStep={currentStep}
                  onSelectStep={handleSelectStep}
                  reviewedSteps={reviewedSteps}
                  onToggleReviewed={handleToggleReviewed}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 max-w-4xl mx-auto space-y-6">
          {/* Step Progress Bar & Quick Step Switcher for Mobile */}
          <div className="lg:hidden flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold">
                အဆင့် {currentStep} / {STEPS.length}
              </span>
              <span className="font-semibold text-slate-800 truncate max-w-[180px]">
                {activeStepInfo.shortTitle}
              </span>
            </div>
            <button
              onClick={() => handleToggleReviewed(currentStep)}
              className="text-teal-700 font-semibold flex items-center gap-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{reviewedSteps.includes(currentStep) ? 'ဖတ်ရှုပြီး' : 'မှတ်ရန်'}</span>
            </button>
          </div>

          {/* Section Dynamic Render */}
          <div className="min-h-[60vh]">
            {currentStep === 1 && (
              <Section1Opportunity
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(2)}
              />
            )}
            {currentStep === 2 && (
              <Section2Vision
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(3)}
              />
            )}
            {currentStep === 3 && (
              <Section3SupplierStrategy
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(4)}
              />
            )}
            {currentStep === 4 && (
              <Section4EventPlan
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(5)}
                onShowToast={showToast}
              />
            )}
            {currentStep === 5 && (
              <Section5SupplierEvaluation
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(6)}
                suppliers={suppliers}
                onUpdateSuppliers={setSuppliers}
                onShowToast={showToast}
              />
            )}
            {currentStep === 6 && (
              <Section6BusinessModel
                viewMode={viewMode}
                onNextStep={() => handleSelectStep(7)}
                onShowToast={showToast}
              />
            )}
            {currentStep === 7 && (
              <Section7DirectorApproval
                viewMode={viewMode}
                reviewData={reviewData}
                onUpdateReviewData={setReviewData}
                onShowToast={showToast}
                onPrint={handlePrint}
                onSelectStep={handleSelectStep}
              />
            )}
          </div>

          {/* Bottom Step Navigation Bar */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
            <button
              onClick={() => handleSelectStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentStep === 1
                  ? 'text-slate-300 bg-slate-100 cursor-not-allowed border border-transparent'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ရှေ့အဆင့်</span>
            </button>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span>အဆင့်</span>
              <span className="font-bold text-slate-900">{currentStep}</span>
              <span>/</span>
              <span>{STEPS.length}</span>
            </div>

            <button
              onClick={() => handleSelectStep(Math.min(STEPS.length, currentStep + 1))}
              disabled={currentStep === STEPS.length}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentStep === STEPS.length
                  ? 'text-slate-300 bg-slate-100 cursor-not-allowed border border-transparent'
                  : 'text-white bg-slate-900 hover:bg-slate-800 shadow-2xs'
              }`}
            >
              <span>နောက်အဆင့်</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6 text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-semibold text-slate-700">
              မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ (Myanmar AI Bridge)
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {EVENT_DETAILS.disclaimer}
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={() => setIsSourcesOpen(true)}
              className="text-teal-700 hover:underline font-medium"
            >
              ကိုးကားချက်များ
            </button>
            <span>•</span>
            <button
              onClick={handlePrint}
              className="text-slate-600 hover:text-slate-900"
            >
              အစီရင်ခံစာ ပုံနှိပ်/PDF
            </button>
          </div>
        </div>
      </footer>

      {/* Printable Report Component for Browser Print Mode */}
      <PrintableReport
        suppliers={suppliers}
        reviewData={reviewData}
        financialInputs={DEFAULT_FINANCIAL_INPUTS}
        financialResults={financialResults}
      />

      {/* Reference Sources Modal */}
      <ReferenceSourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
