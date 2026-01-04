import { create } from 'zustand';
interface ICalculateState {
  staff: any;
  workspace: any;
  country: any;
  provideHome: boolean;
  assistantOnboard: boolean;
  available: boolean;
  setCalculate: (newState: any) => void;
  setDefaults: () => void;
}

export const useCalculate = create<ICalculateState>((set) => ({
  staff: '1',
  workspace: '1',
  country: '1',
  provideHome: false,
  assistantOnboard: false,
  available: false,
  setCalculate: (newState: any) => {
    set((state) => ({
      ...state,
      ...newState,
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
    });
  },
}));
