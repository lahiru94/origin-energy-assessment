
export type modalType = string
export type modalTypes = modalType[]
export type modalProps = Record<modalType, object | undefined>

export type showModalParams = {
    modalType: modalType
    modalProps?: modalProps
}

export type modalContextType = {
    modalTypes: modalTypes
    modalProps: modalProps
    showModal: (params:showModalParams) => void
    hideModal: () => void
    hideAllModals: () => void
}

export type useModalReturnType = {
    showModal: (params: showModalParams) => void
    hideModal: () => void
    hideAllModals: () => void
}