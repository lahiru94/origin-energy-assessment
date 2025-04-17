
import { useEffect, useState } from 'react'
import { EnergyAccount } from '../../energy-accounts/types/energy-acccount'
import EnergyAccountCard from '../../energy-accounts/components/EnergyAccountCard'
import { getEnergyAccounts } from '../services/energyAccountService'
import FullScreenLoadingSpinner from '../../common/components/FullScreenLoadingSpinner'
import EnergyAccountError from '../components/EnergyAccountError'

interface EnergyAccountsPageProps {
}

const EnergyAccountsPage: React.FC<EnergyAccountsPageProps> = () => {

    const [energyAccounts, setEnergyAccounts] = useState<EnergyAccount[]>([])
    const [isEnergyAccountsLoading, setIsEngergyAccountsLoading] = useState(false)
    const [isEnergyAccountsError, setIsEnergyAccountsError] = useState(false)
    const [filter, setFilter] = useState("ALL")

    const fetchAccounts = async () => {
        try {
            setIsEngergyAccountsLoading(true)
            const response = await getEnergyAccounts()
            setIsEnergyAccountsError(false)
            setEnergyAccounts(response.data)
        } catch (e) {
            setIsEnergyAccountsError(true)
        } finally {
            setIsEngergyAccountsLoading(false)
        }
    }

    useEffect(() => {
        fetchAccounts()
    }, [])

    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value)
    }

    const filteredAccounts = energyAccounts.filter(account =>
        filter === "ALL" ? true : account.type === filter
    )

    return (
        <div className='container-sm'>
            <div className='w-100 pt-4 d-flex flex-column align-items-center'>
                <div>
                <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Filter</label>
                <select className="form-select" id="inputGroupSelect01" onChange={handleFilterChange}>
                    <option value="ALL" selected>All</option>
                    <option value="ELECTRICITY">ELECTRICITY</option>
                    <option value="GAS">GAS</option>
                </select>
                </div>
                </div>
                <EnergyAccountError isError={isEnergyAccountsError} onRetry={fetchAccounts} />
                <FullScreenLoadingSpinner isLoading={isEnergyAccountsLoading} />
                {filteredAccounts.map((account) => (
                    <div className='mb-3 w-100 d-flex justify-content-center' key={account.id}>
                        <EnergyAccountCard {...account} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EnergyAccountsPage
