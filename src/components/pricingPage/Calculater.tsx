import { useState, useEffect } from 'react';
import { useCalculate } from '@/store/calculateResult';
import { Input } from '../ui/input';
import { ToggleButton } from './ToggleButton';

// Helper to sanitize input to only allow English numerals
const sanitizeNumberInput = (value: string): string => {
  return value.replace(/[^0-9]/g, '');
};

// Toggle item interface for dynamic toggles
interface ToggleItem {
  id: string;
  title: string;
  description: string;
  minimumTierIndex?: number; // 0=Basic/Starter, 1=Growth/Professional, 2=Business/Elite
}

// Default minimum tier indices for legacy toggles (until backend is updated)
// Based on pricing card features:
// - provideHome: Available from Basic (0)
// - assistantOnboard: "Free Assisted Onboarding" is Business-only feature (2)
// - available (concierge): Premium feature, requires Growth (1)
const LEGACY_TOGGLE_DEFAULTS: Record<string, number> = {
  provideHome: 0, // Basic tier
  assistantOnboard: 2, // Business tier
  available: 1, // Growth tier
};

// Helper to convert legacy toggle format to array format
const getTogglesArray = (calculate: any): ToggleItem[] => {
  // Check if new toggles array format exists
  if (calculate?.toggles && Array.isArray(calculate.toggles)) {
    return calculate.toggles;
  }

  // Fall back to legacy format (toggleFirst, toggleSecond, toggleThird)
  const legacyToggles: ToggleItem[] = [];

  if (calculate?.toggleFirst) {
    legacyToggles.push({
      id: 'provideHome',
      title: calculate.toggleFirst.title,
      description: calculate.toggleFirst.description,
      minimumTierIndex:
        calculate.toggleFirst.minimumTierIndex ??
        LEGACY_TOGGLE_DEFAULTS.provideHome,
    });
  }

  if (calculate?.toggleSecond) {
    legacyToggles.push({
      id: 'assistantOnboard',
      title: calculate.toggleSecond.title,
      description: calculate.toggleSecond.description,
      minimumTierIndex:
        calculate.toggleSecond.minimumTierIndex ??
        LEGACY_TOGGLE_DEFAULTS.assistantOnboard,
    });
  }

  if (calculate?.toggleThird) {
    legacyToggles.push({
      id: 'available',
      title: calculate.toggleThird.title,
      description: calculate.toggleThird.description,
      minimumTierIndex:
        calculate.toggleThird.minimumTierIndex ??
        LEGACY_TOGGLE_DEFAULTS.available,
    });
  }

  return legacyToggles;
};

export const Calculater = ({
  homeService,
  setHomeService,
  onboarding,
  setOnboarding,
  conciergeService,
  setConciergeService,
  calculationFormRef,
  titleTypeCalculate,
  overflowText,
}: any) => {
  const { workspace, country, setCalculate, staff } = useCalculate();

  // Dynamic toggle states - keyed by toggle ID
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

  // Get toggles array from backend data
  const togglesArray = getTogglesArray(titleTypeCalculate);

  // Initialize toggle states when toggles array changes
  useEffect(() => {
    const initialStates: Record<string, boolean> = {};
    togglesArray.forEach((toggle) => {
      // Use existing state or default to false
      initialStates[toggle.id] = toggleStates[toggle.id] ?? false;
    });
    setToggleStates(initialStates);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleTypeCalculate]);

  // Create toggle state setter for a specific toggle ID
  const createToggleSetter = (toggleId: string) => (value: boolean) => {
    setToggleStates((prev) => ({ ...prev, [toggleId]: value }));
    // Also update legacy state handlers for backward compatibility
    if (toggleId === 'provideHome') setHomeService(value);
    if (toggleId === 'assistantOnboard') setOnboarding(value);
    if (toggleId === 'available') setConciergeService(value);
  };

  // Get toggle state for a specific toggle ID
  const getToggleState = (toggleId: string): boolean => {
    // Check dynamic state first, then fall back to legacy state
    if (toggleId in toggleStates) return toggleStates[toggleId];
    if (toggleId === 'provideHome') return homeService;
    if (toggleId === 'assistantOnboard') return onboarding;
    if (toggleId === 'available') return conciergeService;
    return false;
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-between scroll-mt-[250px]"
        ref={calculationFormRef}
      >
        <div className="mt-6 w-full ltr:mr-12">
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.firstInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.firstInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => {
                const sanitized = sanitizeNumberInput(e.target.value);
                setCalculate({ staff: sanitized });
              }}
              onKeyDown={(e) => {
                // Allow: backspace, delete, tab, escape, enter, arrows
                if (
                  [
                    'Backspace',
                    'Delete',
                    'Tab',
                    'Escape',
                    'Enter',
                    'ArrowLeft',
                    'ArrowRight',
                  ].includes(e.key)
                ) {
                  return;
                }
                // Block non-English digits (0-9)
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full md:w-20 ml-0 md:ml-8 mt-2 md:mt-0 focus:border-[#A67F6B] text-center py-[14px] md:py-2"
              defaultValue={staff}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-6">
            <div className="md:min-h-[84px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.secondInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.secondInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => {
                const sanitized = sanitizeNumberInput(e.target.value);
                setCalculate({ workspace: sanitized });
              }}
              onKeyDown={(e) => {
                // Allow: backspace, delete, tab, escape, enter, arrows
                if (
                  [
                    'Backspace',
                    'Delete',
                    'Tab',
                    'Escape',
                    'Enter',
                    'ArrowLeft',
                    'ArrowRight',
                  ].includes(e.key)
                ) {
                  return;
                }
                // Block non-English digits (0-9)
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              defaultValue={workspace}
              min="1"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:min-h-[56px]">
              <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                {titleTypeCalculate?.thirdInput.title}
              </h2>
              <p className="ltr:font-montserrat text-[#455150] mt-1 md:mt-0">
                {titleTypeCalculate?.thirdInput.description}
              </p>
            </div>
            <Input
              onChange={(e) => {
                const sanitized = sanitizeNumberInput(e.target.value);
                setCalculate({ country: sanitized });
              }}
              onKeyDown={(e) => {
                // Allow: backspace, delete, tab, escape, enter, arrows
                if (
                  [
                    'Backspace',
                    'Delete',
                    'Tab',
                    'Escape',
                    'Enter',
                    'ArrowLeft',
                    'ArrowRight',
                  ].includes(e.key)
                ) {
                  return;
                }
                // Block non-English digits (0-9)
                if (!/^[0-9]$/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="w-full md:w-20 md:ml-8 mt-4 md:mt-0 focus:border-[#A67F6B] text-center py-2"
              defaultValue={country}
              min="1"
            />
          </div>
        </div>
        <div className="mt-6 w-full">
          {/* Dynamic toggles rendering */}
          {togglesArray.map((toggle, index) => (
            <div
              key={toggle.id}
              className={`flex flex-col md:flex-row ${index === togglesArray.length - 1 ? 'md:justify-between' : 'justify-between mb-6'}`}
            >
              <div className={index === 1 ? 'min-h-[84px]' : 'min-h-[56px]'}>
                <h2 className="ltr:font-montserrat font-semibold text-[18px] leading-7">
                  {toggle.title}
                </h2>
                <p className="ltr:font-montserrat text-[#455150]">
                  {toggle.description}
                </p>
              </div>
              <ToggleButton
                name={toggle.id}
                homeService={getToggleState(toggle.id)}
                setHomeService={createToggleSetter(toggle.id)}
                textButton={overflowText?.btnTextCalculate}
                minimumTierIndex={toggle.minimumTierIndex ?? 0}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
