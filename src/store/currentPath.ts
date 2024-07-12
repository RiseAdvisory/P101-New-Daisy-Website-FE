import { create } from 'zustand';

interface IChoosePath {
  patnName: string;
  bredcrumb: any;
  choosePatnName: (newLang: string) => void;
  chooseBreadcrumb: (newLang: string) => void;
}

export const useChoosePath = create<IChoosePath>((set) => ({
  patnName: '',
  bredcrumb: {},
  choosePatnName: (chooseTabs: string) => {
    set(() => ({
      patnName: chooseTabs,
    }));
  },
  chooseBreadcrumb: (choose: any) => {
    set(() => ({
      bredcrumb: choose,
    }));
  },
}));
