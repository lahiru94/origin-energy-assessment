import "./energy-account-card.scss"
import React from "react"
import { EnergyAccount } from "../types/energy-acccount"
import { useModal } from "../../common/hooks/modalHooks"


export interface EnergyAccountCardProps extends EnergyAccount { }

const EnergyAccountCard: React.FC<EnergyAccountCardProps> = ({ id, type, balance, address }) => {

    const { showModal } = useModal()

    const handlePaymentClickButton = () => {
        showModal({modalType:"ExampleModalOne", modalProps:{}})
    }

    return (
        <div className="card shadow p-4">
            <div className="d-flex align-items-start gap-3">

                <div className="icon-circle">Icon</div>

                <div className="flex-grow-1">
                    <h4 className="mb-1">{type}</h4>
                    <div>{id}</div>
                    <div>{address}</div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div>Account Balance</div>
                        <div className="account-balance">{balance}</div>
                    </div>
                    <button className="btn btn-primary mt-2" onClick={handlePaymentClickButton}>Make a payment</button>
                </div>

            </div>

        </div>
    )

}

export default EnergyAccountCard