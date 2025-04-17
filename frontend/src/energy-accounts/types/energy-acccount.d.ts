
export type energyAccountType = "ELECTRICITY" | "GAS"

export interface EnergyAccount {
    id: string
    type: "ELECTRICITY" | "GAS"
    balance: number
    address: string
}