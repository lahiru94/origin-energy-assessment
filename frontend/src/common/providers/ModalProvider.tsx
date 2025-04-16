import { createContext, useState } from "react";
import {modalContextType, modalTypes, showModalParams, modalProps} from "../types/modals"

interface ModalProviderProps {
    children: React.ReactNode
}

export const ModalContext  = createContext<modalContextType>({  
    modalTypes: [], // stack
    modalProps: {},
    showModal: () => {},
    hideModal: () => {},
    hideAllModals: () => {},
});

const ModalProvider:React.FC<ModalProviderProps> = ({ children }) => {

    const [modalTypes, setModalTypes] = useState<modalTypes>([]);
    const [modalProps, setModalPropsByModalType] = useState<modalProps>({});

    const showModal = ({ modalType, modalProps }: showModalParams): void => {
        const modifiedModalProps = { ...modalProps };
        const modifiedModalTypes = [...modalTypes];
        modifiedModalProps[modalType] = modalProps;
        modifiedModalTypes.push(modalType);
        setModalPropsByModalType(modifiedModalProps);
        setModalTypes(modifiedModalTypes);
    };

    const hideModal = (): void => {
        const modifiedModalTypes = [...modalTypes];
        modifiedModalTypes.pop();
        setModalTypes(modifiedModalTypes);
    };

    const hideAllModals = (): void => {
        setModalPropsByModalType({});
        setModalTypes([]);
    };
    return (
        <ModalContext.Provider
            value={{
                modalTypes,
                modalProps,
                showModal,
                hideModal,
                hideAllModals,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;