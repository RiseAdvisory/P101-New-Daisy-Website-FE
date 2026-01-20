import { create } from 'zustand';

interface Breadcrumb {
  title?: string;
  description?: string;
}

interface IChoosePath {
  patnName: string;
  bredcrumb: Breadcrumb | string | any;
  choosePatnName: (newLang: string) => void;
  chooseBreadcrumb: (breadcrumb: Breadcrumb | string | any) => void;
  pathStrapi: string;
  choosePathStrapi: (path: string) => void;
}

export const useChoosePath = create<IChoosePath>((set) => ({
  patnName: '',
  bredcrumb: {},
  pathStrapi: '',
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
  choosePathStrapi: (path: string) => {
    set(() => ({
      pathStrapi: path,
    }));
  },
}));
