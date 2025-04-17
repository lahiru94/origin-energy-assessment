import React from 'react';

interface EnergyAccountErrorProps {
    isError: boolean;
    onRetry: ()=>void
}

const EnergyAccountError: React.FC<EnergyAccountErrorProps> = ({ isError, onRetry }) => {
    if (!isError) return null;

    return (
        <div className="alert alert-danger text-center" role="alert">
            <div>Failed to load energy accounts. </div>
            <button className='btn btn-link' onClick={onRetry}>Retry</button>
        </div>
    );
};

export default EnergyAccountError;
