/*
Supports displaying multuple modals at once.
Modals can be stackable.
When hiding stacked modals the top-most one will go out first.(LIFO)
Show/hide functionality will be handled via a custom hook. (check: /src/common/hooks/modalHooks.ts)
Modals will blur the backgrounds. Clicking on the background won't close the modal.
*/

import { useContext } from "react";
import { ModalContext } from "../providers/ModalProvider";

import "./modal-container.scss";
import { modalContextType } from "../types/modals";

// register your modals here.
const modalContent: Record<string, React.ComponentType> = {
    ExampleModalOne: () =>(<div className="p-4"><h1>Modal One</h1></div>),
};

export default function ModalContainer() {
    const { modalProps, modalTypes }: modalContextType= useContext(ModalContext);

    return modalTypes.map((modalType) => {
        const CurrModalComponent = modalContent[modalType];
        const currModalProps = modalProps[modalType];

        return (
            <div
                className="modal-container"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <CurrModalComponent {...currModalProps} />
            </div>
        );
    });
}