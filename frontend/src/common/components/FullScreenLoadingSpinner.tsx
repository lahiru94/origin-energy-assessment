import LoadingSpinner from "./LoadingSpinner"

interface FullScreenLoadingSpinnerProps {
    isLoading: boolean
}

const FullScreenLoadingSpinner: React.FC<FullScreenLoadingSpinnerProps> = ({ isLoading }) => {

    if (!isLoading) return null

    return (
        <div className='vh-100 d-flex flex-column justify-content-center'>
            <LoadingSpinner isLoading={isLoading} />
        </div>
    )
}

export default FullScreenLoadingSpinner;