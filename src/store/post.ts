import { create } from 'zustand';

interface ILoadingStore {
  post: any;
  handlePost: (tmp: any) => void;
  markDownPost: any;
  setMarkdownPost: (tmp: any) => void;
}

export const usePostStore = create<ILoadingStore>((set) => ({
  post: {},
  markDownPost: {},
  handlePost: (item: any) => {
    set(() => ({
      post: item,
    }));
  },
  setMarkdownPost: (item: any) => {
    set(() => ({
      markDownPost: item,
    }));
  },
}));
