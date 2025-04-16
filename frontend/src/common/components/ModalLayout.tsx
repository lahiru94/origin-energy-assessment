import { useModal } from '../../common/hooks/modalHooks';

interface ModalLayoutProps {
    title: string
    children: React.ReactNode
}

const ModalLayout: React.FC<ModalLayoutProps> = ({title, children }) => {
    const { hideModal } = useModal()

    const handleClose = () => {
        hideModal()
    }

    return (
        <div className="card">
            <h5 className="card-header d-flex justify-content-between">
                <div>{title}</div>
                <button onClick={handleClose}>close</button>
            </h5>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default ModalLayout;