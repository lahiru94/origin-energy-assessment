import { useModal } from '../../common/hooks/modalHooks';

interface ModalLayoutProps {
    title: string
    children: React.ReactNode
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ title, children }) => {
    const { hideModal } = useModal()

    const handleClose = () => {
        hideModal()
    }

    return (
        <div className="card">
            <h5 className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center">
                <div>{title}</div>
                <button className='btn' onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </button>
            </h5>
            <div className="card-body p-4">
                {children}
            </div>
        </div>
    )
}

export default ModalLayout;