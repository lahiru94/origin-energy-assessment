import backendApiHandler from "../../common/services/backendApiHandler"

export const getEnergyAccounts = async () => {
    const res = await backendApiHandler.get("/accounts")
    return res.data
}