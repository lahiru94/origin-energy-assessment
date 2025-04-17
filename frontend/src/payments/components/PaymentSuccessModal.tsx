import { useModal } from '../../common/hooks/modalHooks';
import ModalLayout from '../../common/components/ModalLayout';

interface PaymentSuccessModalProps {
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = () => {

    const {hideAllModals} = useModal()

    return(
        <ModalLayout title='Payment Success'>
            <div>Your payment was successful!</div>
            <div className='w-100 d-flex justify-content-center mt-4'>
                <button className='btn btn-primary' onClick={()=>{hideAllModals()}}>Close</button>
            </div>
        </ModalLayout>
    )

}

export default PaymentSuccessModal