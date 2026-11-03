import React, { useState } from 'react';
import { SupplierItem, SupplierScores, MandatoryChecks } from '../types';
import {
  calculateSupplierScore,
  checkSupplierEligibility,
} from '../utils/calculations';
import { INITIAL_SUPPLIERS } from '../data/proposalData';
import {
  Building2,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Download,
  RotateCcw,
  Plus,
  Trash2,
  ExternalLink,
  Save,
  Check,
  ShieldCheck,
  FileSpreadsheet,
} from 'lucide-react';

interface SupplierComparisonToolProps {
  suppliers: SupplierItem[];
  onUpdateSuppliers: (suppliers: SupplierItem[]) => void;
  onShowToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

export const SupplierComparisonTool: React.FC<SupplierComparisonToolProps> = ({
  suppliers,
  onUpdateSuppliers,
  onShowToast,
}) => {
  const [selectedSupplierId, setSelectedSupplierId] = useState<string>(
    suppliers[0]?.id || 'sup-1'
  );
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  const selectedSupplier =
    suppliers.find((s) => s.id === selectedSupplierId) || suppliers[0];

  const handleScoreChange = (
    field: keyof SupplierScores,
    maxVal: number,
    value: number
  ) => {
    if (!selectedSupplier) return;
    const clamped = Math.min(maxVal, Math.max(0, value));
    const updated = suppliers.map((s) => {
      if (s.id === selectedSupplier.id) {
        return {
          ...s,
          scores: {
            ...s.scores,
            [field]: clamped,
          },
        };
      }
      return s;
    });
    onUpdateSuppliers(updated);
  };

  const handleMandatoryCheckToggle = (field: keyof MandatoryChecks) => {
    if (!selectedSupplier) return;
    const updated = suppliers.map((s) => {
      if (s.id === selectedSupplier.id) {
        return {
          ...s,
          mandatoryChecks: {
            ...s.mandatoryChecks,
            [field]: !s.mandatoryChecks[field],
          },
        };
      }
      return s;
    });
    onUpdateSuppliers(updated);
  };

  const handleInfoChange = (field: keyof SupplierItem, value: any) => {
    if (!selectedSupplier) return;
    const updated = suppliers.map((s) => {
      if (s.id === selectedSupplier.id) {
        return {
          ...s,
          [field]: value,
        };
      }
      return s;
    });
    onUpdateSuppliers(updated);
  };

  const handleAddSupplier = () => {
    const newId = `sup-${Date.now()}`;
    const newSupplier: SupplierItem = {
      id: newId,
      companyName: 'Supplier အသစ်',
      productService: 'AI Model / Cloud API',
      website: 'https://',
      contactName: 'ကိုယ်စားလှယ် အမည်',
      contactDetails: 'အီးမေးလ် သို့မဟုတ် ဖုန်း',
      meetingStatus: 'proposed',
      notes: 'ရှန်ဟိုင်းပွဲတွင် တွေ့ဆုံမေးမြန်းမည့် အချက်များ',
      nextAction: 'မိတ်ဆက်အီးမေးလ် ပေးပို့ရန်',
      scores: {
        myanmarPerformance: 12,
        agentApiCapability: 14,
        commercialTerms: 12,
        securityPrivacy: 10,
        reliabilitySupport: 10,
        marketFit: 7,
      },
      mandatoryChecks: {
        servicePermitted: false,
        rightsClear: false,
        paymentWorkable: false,
        confidentialDataSafe: false,
        exportControlCleared: false,
      },
    };

    const updated = [...suppliers, newSupplier];
    onUpdateSuppliers(updated);
    setSelectedSupplierId(newId);
    onShowToast('Supplier အသစ် ထည့်သွင်းပြီးပါပြီ', 'success');
  };

  const handleDeleteSupplier = (id: string) => {
    if (suppliers.length <= 1) {
      onShowToast('အနည်းဆုံး Supplier တစ်ခု ရှိရပါမည်', 'warning');
      return;
    }
    const updated = suppliers.filter((s) => s.id !== id);
    onUpdateSuppliers(updated);
    setSelectedSupplierId(updated[0].id);
    onShowToast('Supplier ကို စာရင်းမှ ဖယ်ရှားပြီးပါပြီ', 'info');
  };

  const handleResetToDefault = () => {
    onUpdateSuppliers(INITIAL_SUPPLIERS);
    setSelectedSupplierId(INITIAL_SUPPLIERS[0].id);
    setShowResetConfirm(false);
    onShowToast('မူလ စံသတ်မှတ်ချက်များသို့ ပြန်လည်သတ်မှတ်ပြီးပါပြီ', 'info');
  };

  const handleCopySummary = () => {
    if (!selectedSupplier) return;
    const score = calculateSupplierScore(selectedSupplier.scores);
    const eligibility = checkSupplierEligibility(selectedSupplier.mandatoryChecks);

    const summaryText = `[မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ - Supplier စိစစ်ချက်]
ကုမ္ပဏီအမည်: ${selectedSupplier.companyName}
ထုတ်ကုန်/ဝန်ဆောင်မှု: ${selectedSupplier.productService}
ဝက်ဘ်ဆိုက်: ${selectedSupplier.website}
အဆင့်သတ်မှတ်ချက် ရမှတ်: ${score}/၁၀၀
အရည်အသွေးပြည့်မီမှု: ${eligibility.statusText} (${eligibility.isEligible ? 'အချက် ၅ ချက်စလုံး ကိုက်ညီပါသည်' : `မပြည့်မီချက် ${eligibility.failedCount} ချက်ရှိပါသည်`})
အဓိကမှတ်ချက်: ${selectedSupplier.notes}
နောက်တစ်ဆင့်ဆောင်ရွက်ရန်: ${selectedSupplier.nextAction}`;

    navigator.clipboard.writeText(summaryText).then(() => {
      onShowToast('Supplier အနှစ်ချုပ်ကို ကူးယူပြီးပါပြီ', 'success');
    });
  };

  const handleExportReport = () => {
    const reportData = {
      project: 'မြန်မာ AI စီးပွားရေးချိတ်ဆက်ရေး မဟာဗျူဟာ (Myanmar AI Bridge)',
      exportDate: new Date().toISOString(),
      suppliers: suppliers.map((s) => ({
        ...s,
        totalScore: calculateSupplierScore(s.scores),
        eligibility: checkSupplierEligibility(s.mandatoryChecks),
      })),
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `myanmar-ai-suppliers-evaluation-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    onShowToast('Supplier အစီရင်ခံစာ ဒေါင်းလုဒ်ရယူပြီးပါပြီ', 'success');
  };

  const currentScore = selectedSupplier
    ? calculateSupplierScore(selectedSupplier.scores)
    : 0;
  const currentEligibility = selectedSupplier
    ? checkSupplierEligibility(selectedSupplier.mandatoryChecks)
    : { isEligible: false, failedCount: 5, statusText: '' };

  return (
    <div className="space-y-6">
      {/* Top Controls & Supplier Tabs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-600" />
              <span>Supplier များ ရွေးချယ်စိစစ်မှု ကိရိယာ (Scorecard Tool)</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              အချက် ၁၀၀ အခြေခံ ရမှတ်များနှင့် မဖြစ်မနေ စစ်ဆေးရမည့် ၅ ချက်ဖြင့် စိစစ်သုံးသပ်နိုင်ပါသည်။
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <button
              onClick={handleAddSupplier}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-700 text-white transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Supplier အသစ်ထည့်ရန်</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="အနှစ်ချုပ် ကူးယူရန်"
            >
              <Copy className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">ကူးယူရန်</span>
            </button>

            <button
              onClick={handleExportReport}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              title="အစီရင်ခံစာ Export ထုတ်ရန်"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>

            <button
              onClick={() => setShowResetConfirm(true)}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="မူလအတိုင်း ပြန်လည်သတ်မှတ်ရန်"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Supplier Selector Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {suppliers.map((s) => {
            const isSelected = s.id === selectedSupplierId;
            const score = calculateSupplierScore(s.scores);
            const { isEligible } = checkSupplierEligibility(s.mandatoryChecks);

            return (
              <button
                key={s.id}
                onClick={() => setSelectedSupplierId(s.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-teal-500 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <span>{s.companyName}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded font-bold ${
                    isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {score} မှတ်
                </span>
                {!isEligible && (
                  <span
                    className="w-2 h-2 rounded-full bg-amber-400"
                    title="ထပ်မံစစ်ဆေးရန် လိုအပ်သည်"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Reset Confirmation Dialog */}
      {showResetConfirm && (
        <div className="p-4 bg-amber-50 border border-amber-300 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-amber-900">
          <div>
            <strong>မူလစံပြ Supplier စာရင်းသို့ ပြန်ထားလိုပါသလား?</strong>
            <p className="text-amber-700 text-xs mt-0.5">
              သင်ပြင်ဆင်ထားသော ရမှတ်များနှင့် မှတ်ချက်များ အားလုံး မူလအခြေအနေသို့ ပြန်လည်ရောက်ရှိသွားပါမည်။
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-3 py-1.5 bg-white border border-amber-300 rounded-lg text-slate-700 hover:bg-slate-100 text-xs"
            >
              မလုပ်တော့ပါ
            </button>
            <button
              onClick={handleResetToDefault}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-xs"
            >
              အတည်ပြု ပြန်လည်သတ်မှတ်မည်
            </button>
          </div>
        </div>
      )}

      {selectedSupplier && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Supplier Metadata & Mandatory Eligibility Checks */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status & Eligibility Banner */}
            <div
              className={`p-5 rounded-2xl border ${
                currentEligibility.isEligible
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/80 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">
                  စိစစ်ရွေးချယ်မှု အဆင့်အတန်း
                </span>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    currentEligibility.isEligible
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-500 text-slate-950'
                  }`}
                >
                  {currentEligibility.statusText}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold">{currentScore}</span>
                <span className="text-xs text-slate-500">/ ၁၀၀ မှတ်</span>
              </div>

              <p className="text-xs leading-relaxed">
                {currentEligibility.isEligible
                  ? 'မဖြစ်မနေ စစ်ဆေးရမည့် ၅ ချက်စလုံး ကိုက်ညီသဖြင့် အဆိုပြု စာရင်းတွင် ထည့်သွင်းနိုင်ပါသည်။'
                  : `သတိပြုရန်- ရမှတ်မြင့်မားစေကာမူ အရေးကြီး စစ်ဆေးချက် ${currentEligibility.failedCount} ချက် မပြည့်မီသေးသဖြင့် "Approved" အဖြစ် တရားဝင် မသတ်မှတ်နိုင်သေးပါ။`}
              </p>
            </div>

            {/* Mandatory Checks List */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>မဖြစ်မနေ ပြည့်မီရမည့် အချက် ၅ ချက် (Mandatory Eligibility Checks)</span>
              </h4>

              <div className="space-y-2.5">
                {[
                  {
                    key: 'servicePermitted',
                    label: '၁။ မြန်မာနိုင်ငံအတွက် တရားဝင် စီးပွားဖြစ် ဝန်ဆောင်မှု ပေးခွင့်ပြုခြင်း',
                  },
                  {
                    key: 'rightsClear',
                    label: '၂။ စာချုပ်နှင့် API အသုံးပြုခွင့် သတ်မှတ်ချက်များ ရှင်းလင်းမှုရှိခြင်း',
                  },
                  {
                    key: 'paymentWorkable',
                    label: '၃။ နိုင်ငံတကာ ငွေပေးချေမှုနှင့် တရားဝင် ပြေစာရယူနိုင်မှု အဆင်ပြေခြင်း',
                  },
                  {
                    key: 'confidentialDataSafe',
                    label: '၄။ ဖောက်သည်များ၏ လျှို့ဝှက်ဒေတာများကို မော်ဒယ်လေ့ကျင့်ရာတွင် မသုံးစွဲရန် အာမခံခြင်း',
                  },
                  {
                    key: 'exportControlCleared',
                    label: '၅။ နိုင်ငံတကာ ပိတ်ဆို့မှုနှင့် နည်းပညာ ပို့ကုန်ကန့်သတ်ချက်များ ကင်းရှင်းခြင်း',
                  },
                ].map(({ key, label }) => {
                  const checked =
                    selectedSupplier.mandatoryChecks[key as keyof MandatoryChecks];

                  return (
                    <label
                      key={key}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer text-xs text-slate-800 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          handleMandatoryCheckToggle(key as keyof MandatoryChecks)
                        }
                        className="mt-0.5 rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                      />
                      <span className={checked ? 'font-medium' : 'text-slate-600'}>
                        {label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Supplier Details Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase">Supplier အချက်အလက်</h4>
                <button
                  onClick={() => handleDeleteSupplier(selectedSupplier.id)}
                  className="text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>ဖျက်ရန်</span>
                </button>
              </div>

              <div>
                <label className="text-slate-500 block mb-1">ကုမ္ပဏီအမည်</label>
                <input
                  type="text"
                  value={selectedSupplier.companyName}
                  onChange={(e) => handleInfoChange('companyName', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-500 block mb-1">ထုတ်ကုန် / ဝန်ဆောင်မှု</label>
                <input
                  type="text"
                  value={selectedSupplier.productService}
                  onChange={(e) => handleInfoChange('productService', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-slate-500 block mb-1">ဝက်ဘ်ဆိုက်</label>
                  <input
                    type="text"
                    value={selectedSupplier.website}
                    onChange={(e) => handleInfoChange('website', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-slate-500 block mb-1">တွေ့ဆုံမှု အခြေအနေ</label>
                  <select
                    value={selectedSupplier.meetingStatus}
                    onChange={(e) => handleInfoChange('meetingStatus', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="proposed">လျာထားဆဲ (Proposed)</option>
                    <option value="requested">ချိန်းဆိုထား (Requested)</option>
                    <option value="confirmed">အတည်ပြုပြီး (Confirmed)</option>
                    <option value="completed">တွေ့ဆုံပြီး (Completed)</option>
                    <option value="postponed">ရွှေ့ဆိုင်း (Postponed)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-slate-500 block mb-1">တွေ့ရှိချက် မှတ်ချက်</label>
                <textarea
                  rows={2}
                  value={selectedSupplier.notes}
                  onChange={(e) => handleInfoChange('notes', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-500 block mb-1">နောက်တစ်ဆင့် ဆောင်ရွက်ရန်</label>
                <input
                  type="text"
                  value={selectedSupplier.nextAction}
                  onChange={(e) => handleInfoChange('nextAction', e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:ring-2 focus:ring-teal-500 focus:outline-none"
                />
              </div>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-500">
                လုံခြုံရေး အသိပေးချက်: ဤမှတ်ချက်များသည် မိမိ Browser ၏ LocalStorage တွင်သာ သိမ်းဆည်းထားပြီး အခြားသူများထံသို့ အလိုအလျောက် ပေးပို့ခြင်း မရှိပါ။
              </div>
            </div>
          </div>

          {/* Right Column: 100-Point Weighted Scorecard Sliders */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  အမှတ် ၁၀၀ အလေးပေး ရမှတ်ဇယား (100-Point Weighted Scorecard)
                </h4>
                <p className="text-xs text-slate-500">
                  စံနှုန်းတစ်ခုစီအတွက် အမှတ်ပေးနိုင်ပြီး စုစုပေါင်းရမှတ်ကို အလိုအလျောက် တွက်ချက်ပေးပါသည်။
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-teal-600">{currentScore}</span>
                <span className="text-xs text-slate-400"> / ၁၀၀</span>
              </div>
            </div>

            <div className="space-y-5">
              {/* Criterion 1: Myanmar language performance (20 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၁။ မြန်မာဘာသာစကား နားလည်မှုနှင့် ဖြေကြားနိုင်မှု (Myanmar-language performance)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.myanmarPerformance} / ၂၀ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={selectedSupplier.scores.myanmarPerformance}
                  onChange={(e) =>
                    handleScoreChange(
                      'myanmarPerformance',
                      20,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  ယူနီကုဒ် ဖတ်ရှုနိုင်မှု၊ မြန်မာစကားပြေ သဘာဝကျမှုနှင့် လုပ်ငန်းသုံး အသုံးအနှုန်းများ နားလည်နိုင်စွမ်း။
                </p>
              </div>

              {/* Criterion 2: AI Agent & API capabilities (20 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၂။ AI Agent နှင့် API နည်းပညာ စွမ်းဆောင်ရည် (AI Agent & API capabilities)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.agentApiCapability} / ၂၀ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={selectedSupplier.scores.agentApiCapability}
                  onChange={(e) =>
                    handleScoreChange(
                      'agentApiCapability',
                      20,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  Function calling၊ RAG စာရွက်စာတမ်း ဖတ်ရှုနိုင်မှု၊ response speed (တုံ့ပြန်ချိန်) နှင့် API တည်ငြိမ်မှု။
                </p>
              </div>

              {/* Criterion 3: Commercial & partnership terms (20 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၃။ စီးပွားရေးဆိုင်ရာ စျေးနှုန်းနှင့် မိတ်ဖက်စည်းကမ်းများ (Commercial & partnership terms)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.commercialTerms} / ၂၀ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={selectedSupplier.scores.commercialTerms}
                  onChange={(e) =>
                    handleScoreChange(
                      'commercialTerms',
                      20,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  Token စျေးနှုန်း သက်သာမှု၊ လျှော့စျေးမူဝါဒနှင့် စီးပွားဖြစ် application တည်ဆောက်ခွင့် စာချုပ်စည်းကမ်းများ။
                </p>
              </div>

              {/* Criterion 4: Security, privacy & data governance (15 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၄။ လုံခြုံရေး၊ ဒေတာလျှို့ဝှက်ချက်နှင့် စီမံအုပ်ချုပ်မှု (Security, privacy & governance)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.securityPrivacy} / ၁၅ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={selectedSupplier.scores.securityPrivacy}
                  onChange={(e) =>
                    handleScoreChange(
                      'securityPrivacy',
                      15,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  Zero Data Retention မူဝါဒ၊ ISO/SOC 2 အသိအမှတ်ပြုလက်မှတ်နှင့် လုပ်ငန်းဒေတာ လျှို့ဝှက်ထိန်းသိမ်းမှု။
                </p>
              </div>

              {/* Criterion 5: Reliability and technical support (15 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၅။ စနစ်တည်ငြိမ်မှုနှင့် နည်းပညာအကူအညီ (Reliability & technical support)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.reliabilitySupport} / ၁၅ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={selectedSupplier.scores.reliabilitySupport}
                  onChange={(e) =>
                    handleScoreChange(
                      'reliabilitySupport',
                      15,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  99.9% Uptime SLA အာမခံချက်၊ အရေးပေါ်ပြဿနာဖြေရှင်းမှု အချိန် (Level 2/3 Support) ရရှိနိုင်မှု။
                </p>
              </div>

              {/* Criterion 6: Myanmar market compatibility (10 pts) */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">
                    ၆။ မြန်မာ့စျေးကွက် လိုအပ်ချက်နှင့် ကိုက်ညီမှု (Myanmar market compatibility)
                  </span>
                  <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {selectedSupplier.scores.marketFit} / ၁၀ မှတ်
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={selectedSupplier.scores.marketFit}
                  onChange={(e) =>
                    handleScoreChange('marketFit', 10, parseInt(e.target.value) || 0)
                  }
                  className="w-full accent-teal-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500">
                  ပြည်တွင်း SME လုပ်ငန်းများ သုံးစွဲနိုင်သော စရိတ်စကနှင့် ဒေသတွင်း ဆက်သွယ်ရေး အခြေအနေ။
                </p>
              </div>
            </div>

            {/* Quick Summary Table for all suppliers */}
            <div className="pt-4 border-t border-slate-200">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-teal-600" />
                <span>Supplier များ အကျဉ်းချုပ် နှိုင်းယှဉ်ချက် (Quick Comparison Matrix)</span>
              </h5>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-semibold">
                    <tr>
                      <th className="p-2.5">ကုမ္ပဏီ</th>
                      <th className="p-2.5">ရမှတ် (၁၀၀)</th>
                      <th className="p-2.5">စိစစ်ချက်</th>
                      <th className="p-2.5">အခြေအနေ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {suppliers.map((s) => {
                      const sc = calculateSupplierScore(s.scores);
                      const el = checkSupplierEligibility(s.mandatoryChecks);
                      return (
                        <tr
                          key={s.id}
                          className={`hover:bg-slate-50 ${
                            s.id === selectedSupplier.id ? 'bg-teal-50/50 font-medium' : ''
                          }`}
                        >
                          <td className="p-2.5 font-bold text-slate-900">{s.companyName}</td>
                          <td className="p-2.5 font-bold text-teal-700">{sc} မှတ်</td>
                          <td className="p-2.5">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                el.isEligible
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-amber-100 text-amber-800'
                              }`}
                            >
                              {el.statusText}
                            </span>
                          </td>
                          <td className="p-2.5 text-slate-600 capitalize">{s.meetingStatus}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
