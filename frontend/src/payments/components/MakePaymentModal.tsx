import { useState } from 'react'
import ModalLayout from '../../common/components/ModalLayout'
import { useModal } from '../../common/hooks/modalHooks'

interface MakePaymentModalProps {
}

const MakePaymentModal: React.FC<MakePaymentModalProps> = () => {
    const [amount, setAmount] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvv, setCvv] = useState('')
    const [expiry, setExpiry] = useState('')
    const { showModal } = useModal()
 
    const handlePayment = () => {
        showModal({modalType:"PaymentSuccessModal"})
    }

    return (
        <ModalLayout title='Make a Payment'>
            <div className="card-text">How much would you like to pay?</div>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div className="card-text">How would you like to pay?</div>
            <input
                className='w-100'
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="d-flex justify-content-between">
                <input
                    className='mr-4 flex-grow-1'
                    type="text"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                />
                <input
                    className='flex-grow-1'
                    type="text"
                    placeholder="Expiry (MM/YY)"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                />
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary" onClick={handlePayment}>Pay</button>
            </div>
        </ModalLayout>
    )
}

export default MakePaymentModal;