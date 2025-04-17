
import * as Yup from 'yup'
import ModalLayout from '../../common/components/ModalLayout'
import { useModal } from '../../common/hooks/modalHooks'
import { makePayment } from '../services/paymentService'
import Form from '../../common/components/Form'
import SubmitButton from '../../common/components/SubmitButton'
import PaymentAmountInput from './PaymentAmountInput'
import CardDetailsInput from './CardDetailsInput'
import { paymentDetailsFormData } from '../types/payments'

interface MakePaymentModalProps {
    accountId: string
}

const paymentSchema = Yup.object().shape({
    amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be positive')
        .typeError('Amount must be a number'),
    cardNumber: Yup.string()
        .required('Card number is required')
        .matches(/^\d{16}$/, 'Card number must be 16 digits'),
    cvv: Yup.string()
        .required('CVV is required')
        .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
    expiry: Yup.string()
        .required('Expiry date is required')
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry date must be in MM/YY format')
})

const MakePaymentModal: React.FC<MakePaymentModalProps> = ({ accountId }) => {
    const { showModal } = useModal()
    const handlePayment = async (values: paymentDetailsFormData) => {
        try {
            await makePayment({
                accountId,
                ...values
            })
            showModal({ modalType: "PaymentSuccessModal" })
        } catch (error) {
            // Handle error
        }
    }

    return (
        <ModalLayout title='Make a Payment'>
            <Form
                initialValues={{
                    amount: null,
                    cardNumber: "",
                    cvv: "",
                    expiry: ""
                }}
                validationSchema={paymentSchema}
                enableReinitialize={false}
                onSubmit={handlePayment}
            >
                <PaymentAmountInput
                    name='amount'
                    label='How much would you like to pay?'
                    placeholder='amount'
                />
                <CardDetailsInput />
                <div className='w-100 d-flex justify-content-center'>
                    <SubmitButton text='Pay' />
                </div>
            </Form>
        </ModalLayout>
    )
}

export default MakePaymentModal;