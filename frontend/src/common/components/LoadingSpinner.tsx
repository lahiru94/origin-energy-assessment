

interface LoadingSpinnerProps {
    isLoading: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {

    if (!isLoading) return null

    return (
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default LoadingSpinner;