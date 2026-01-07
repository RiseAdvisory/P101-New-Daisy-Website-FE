import { create } from 'zustand';

// Toggle state with tier requirement
interface IToggleState {
  enabled: boolean;
  minimumTierIndex: number; // 0-based index of minimum required tier
}

interface ICalculateState {
  staff: any;
  workspace: any;
  country: any;
  // Legacy toggle states (kept for backward compatibility)
  provideHome: boolean;
  assistantOnboard: boolean;
  available: boolean;
  // Dynamic toggles map: toggleId -> toggle state
  toggles: Record<string, IToggleState>;
  // Computed minimum tier index based on enabled toggles
  getMinimumRequiredTierIndex: () => number;
  setCalculate: (newState: any) => void;
  setToggle: (toggleId: string, enabled: boolean, minimumTierIndex: number) => void;
  setDefaults: () => void;
}

export const useCalculate = create<ICalculateState>((set, get) => ({
  staff: '1',
  workspace: '1',
  country: '1',
  provideHome: false,
  assistantOnboard: false,
  available: false,
  toggles: {},
  getMinimumRequiredTierIndex: () => {
    const { toggles } = get();
    let maxTierIndex = 0;
    Object.values(toggles).forEach((toggle) => {
      if (toggle.enabled && toggle.minimumTierIndex > maxTierIndex) {
        maxTierIndex = toggle.minimumTierIndex;
      }
    });
    return maxTierIndex;
  },
  setCalculate: (newState: any) => {
    set((state) => ({
      ...state,
      ...newState,
    }));
  },
  setToggle: (toggleId: string, enabled: boolean, minimumTierIndex: number) => {
    set((state) => ({
      ...state,
      toggles: {
        ...state.toggles,
        [toggleId]: { enabled, minimumTierIndex },
      },
      // Also update legacy fields for backward compatibility
      ...(toggleId === 'provideHome' && { provideHome: enabled }),
      ...(toggleId === 'assistantOnboard' && { assistantOnboard: enabled }),
      ...(toggleId === 'available' && { available: enabled }),
    }));
  },
  setDefaults: () => {
    set({
      staff: '1',
      workspace: '1',
      country: '1',
      provideHome: false,
      assistantOnboard: false,
      available: false,
      toggles: {},
    });
  },
}));
