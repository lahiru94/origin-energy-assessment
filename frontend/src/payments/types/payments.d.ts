export interface paymentDetailsFormData {
    amount: number
    cardNumber: string
    cvv: string
    expiry: string
}

export interface paymentDetails {
    accountId: string
    amount: number
    cardNumber: string
    cvv: string
    expiry: string
}