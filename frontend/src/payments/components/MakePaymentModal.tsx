
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
        .max(100000, "maximum payment is $100,100") //setting a reasonable maximum
        .required('required')
        .positive('must be positive')
        .typeError('must be a number'),
    cardNumber: Yup.string()
        .required('required')
        .matches(/^(\d{4} ){3}\d{4}$/, 'must be 16 digits'), //validates the formatted card number here.
    cvv: Yup.string()
        .required('required')
        .matches(/^\d{3,4}$/, 'must be 3 or 4 digits'),
    expiry: Yup.string()
        .required('equired')
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'must be in MM/YY')
})

const MakePaymentModal: React.FC<MakePaymentModalProps> = ({ accountId }) => {
    const { showModal } = useModal()
    const handlePayment = async (values: paymentDetailsFormData) => {
        const formattedCardNumber = values.cardNumber.replace(/\s+/g, '');
        try {
            await makePayment({
                accountId,
                amount: values.amount,
                cardNumber: formattedCardNumber,
                cvv: values.cvv,
                expiry: values.expiry
            })
            showModal({ modalType: "PaymentSuccessModal" })
        } catch (error) {
            // Handle error
            // TODO: Show an error modal here
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
                <div className='mt-4'>
                    <CardDetailsInput />
                </div>
                <div className='w-100 d-flex justify-content-center mt-3'>
                    <SubmitButton text='Pay' />
                </div>
            </Form>
        </ModalLayout>
    )
}

export default MakePaymentModal;