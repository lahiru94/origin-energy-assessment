import ModalLayout from '../../common/components/ModalLayout';

interface PaymentSuccessModalProps {
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = () => {

    return(
        <ModalLayout title='Confirm Payment'>
            <div>Payment Successful</div>
            <button>Close</button>
        </ModalLayout>
    )

}

export default PaymentSuccessModal