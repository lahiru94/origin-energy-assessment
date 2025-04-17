
import { useEffect, useState } from 'react'
import { EnergyAccount } from '../../energy-accounts/types/energy-acccount'
import EnergyAccountCard from '../../energy-accounts/components/EnergyAccountCard'
import { getEnergyAccounts } from '../services/energyAccountService'
import FullScreenLoadingSpinner from '../../common/components/FullScreenLoadingSpinner'

interface EnergyAccountsPageProps {
}

const EnergyAccountsPage: React.FC<EnergyAccountsPageProps> = () => {

    const [energyAccounts, setEnergyAccounts] = useState<EnergyAccount[]>([])
    const [isEnergyAccountsLoading, setIsEngergyAccountsLoading] = useState(false)

    useEffect(()=>{
        const fetchAccounts = async () => {
            setIsEngergyAccountsLoading(true)
            const response = await getEnergyAccounts()
            setIsEngergyAccountsLoading(false)
            setEnergyAccounts(response.data)
        }
        fetchAccounts()
    },[])

    return (
        <div className='container-sm'>
            <div className='w-100 pt-4 d-flex flex-column align-items-center'>
                <FullScreenLoadingSpinner isLoading={isEnergyAccountsLoading} />
                {energyAccounts.map((account)=>(
                    <div className='mb-3 w-100 d-flex justify-content-center' key={account.id}>
                        <EnergyAccountCard {...account} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EnergyAccountsPage
