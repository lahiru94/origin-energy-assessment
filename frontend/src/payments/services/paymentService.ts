import backendApiHandler from "../../common/services/backendApiHandler"
import { paymentDetails } from "../types/payments"

export const makePayment = async ( paymentDetails: paymentDetails) => {
    const res = await backendApiHandler.post("/payments", paymentDetails)
    return res.data
}
