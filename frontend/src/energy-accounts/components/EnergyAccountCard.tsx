import { EnergyAccount } from "../types/energy-acccount"
import { useModal } from "../../common/hooks/modalHooks"
import EnergyIcon from "./EnergyIcon"
import "./energy-account-card.scss"

export interface EnergyAccountCardProps extends EnergyAccount { }

const EnergyAccountCard: React.FC<EnergyAccountCardProps> = ({ id, type, balance, address }) => {

    const { showModal } = useModal()

    const getBalanceClassName = (balance: number): string => {
        return balance > 0 ? 'text-success' : balance < 0 ? 'text-danger' : 'text-secondary'
    }

    const handlePaymentClickButton = () => {
        showModal({ modalType: "MakePaymentModal", modalProps: { accountId: id } })
    }

    return (
        <div className="card shadow p-4">
            <div className="d-flex align-items-start gap-3">

                <div className="d-flex justify-content-center align-items-center my-1" style={{ width: 100 }}>
                    <EnergyIcon type={type} />
                </div>

                <div className="flex-grow-1 pe-5">
                    <h4 className="mb-1">{type}</h4>
                    <div>{id}</div>
                    <div>{address}</div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div>Account Balance</div>
                        <div className={`account-balance ${getBalanceClassName(balance)}`}>
                           $ {balance}
                        </div>
                    </div>
                    <button 
                        className="btn btn-primary mt-2" 
                        onClick={handlePaymentClickButton}
                    >
                        Make a payment
                    </button>
                </div>

            </div>

        </div>
    )

}

export default EnergyAccountCard