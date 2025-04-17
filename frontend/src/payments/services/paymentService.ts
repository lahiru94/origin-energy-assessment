import backendApiHandler from "../../common/services/backendApiHandler"

export const makePayment = async ( paymentDetails: paymentDetails) => {
    const res = await backendApiHandler.post("/payments", paymentDetails)
    return res.data
}
