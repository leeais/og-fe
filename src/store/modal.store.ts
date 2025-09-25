import { create } from "zustand";

type ModalData = {
  name: string;
  data?: unknown;
};

type ModalState = {
  stackModals: ModalData[];
  opening: string[];
  active: string | null;
};

type ModalActions = {
  openModal: (name: string, data?: unknown) => void;
  closeModal: (name?: string) => void;
  getData: (name?: string) => unknown;
  clearStack: () => void;
};

const initialState: ModalState = {
  stackModals: [],
  opening: [],
  active: null,
};

interface UseModalStore extends ModalState, ModalActions {}

const useModalStore = create<UseModalStore>((set, get) => ({
  ...initialState,

  openModal: (name: string, data?: unknown): void =>
    set((state) => ({
      active: name,
      stackModals: [...state.stackModals, { name, data }],
      opening: [...state.opening, name],
    })),
  closeModal: (name?: string): void =>
    set((state) => {
      if (name && state.opening.includes(name)) {
        const newOpening = state.opening.filter((n) => n !== name);
        const newStackModals = state.stackModals.filter((m) => m.name !== name);
        return {
          opening: newOpening,
          stackModals: newStackModals,
          active:
            newOpening.length > 0 ? newOpening[newOpening.length - 1] : null,
        };
      } else {
        return {
          stackModals: [],
          opening: [],
          active: null,
        };
      }
    }),
  getData: (name?: string): unknown => {
    const state = get() as ModalState;
    if (name) {
      const modal = state.stackModals.find((m) => m.name === name);
      return modal ? modal.data : null;
    } else {
      const modal = state.stackModals.find((m) => m.name === state.active);
      return modal ? modal.data : null;
    }
  },
  clearStack: (): void =>
    set(() => ({
      stackModals: [],
      opening: [],
      active: null,
    })),
}));

export default useModalStore;
