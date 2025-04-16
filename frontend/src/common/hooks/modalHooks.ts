import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";
import { useModalReturnType } from "../types/modals";

/**
 * Hook that lets you `show` and `hide` modals from anywhere in the app 
 * without worrying about the modal render implementation details. (like overalays and 
 * modal stacking. Make sure that the modal is registered in the 
 * "/src/common/components/ModalContainer" component)
 */
export const useModal = ():useModalReturnType => {
    const { showModal, hideModal, hideAllModals } = useContext(ModalContext);
    return { showModal, hideModal, hideAllModals };
};