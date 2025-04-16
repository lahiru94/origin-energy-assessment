
import './App.css'
import ModalContainer from './common/components/ModalContainer'
import EnergyAccountCard from './energy-accounts/components/EnergyAccountCard'
import { EnergyAccount } from './energy-accounts/types/energy-acccount'

const mockData: EnergyAccount = {
  id: "A-0001",
  type: "ELECTRICITY",
  balance: 30,
  address: "1 Greville Ct, Thomastown, 3076, Victoria",
}

function App() {

  return (
      <>
      <ModalContainer />
      <div className='container-sm'>
        <div className='w-100 pt-4 d-flex flex-column align-items-center'>
          <EnergyAccountCard {...mockData} />
        </div>
      </div>
      </>
  )
}

export default App
