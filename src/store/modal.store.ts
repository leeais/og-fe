import { create } from "zustand";

type ModalData = {
  name: string;
  data?: any;
};

type ModalState = {
  stackModals: ModalData[];
  opening: string[] | [];
  active: string | null;
};

type ModalActions = {
  openModal: (name: string, data?: any) => void;
  closeModal: () => void;
  getData: () => any;
  clearStack: () => void;
};

const initialState: ModalState = {
  stackModals: [],
  opening: [],
  active: null,
};

const useModalStore = create<ModalState & ModalActions>((get, set) => ({
  ...initialState,

  openModal: () => set(),
  closeModal: () => set(),
  closeModalByName: () => set(),
  getData: () => set(),
  getDataByName: () => set(),
  removeModal: () => set(),
  clearStack: () => set(),
}));

export default useModalStore;
