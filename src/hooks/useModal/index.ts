import useModalStore from "@/store/modal.store";

export const useModal = () => {
    const modalStore = useModalStore();
    return {...modalStore}
}