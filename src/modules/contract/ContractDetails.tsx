import { Contract } from '../../common/model/contract.model';
import styles from './Contract.module.css';

type ContractProps = {
    contract: Contract;
    onEdit(id: string): void;
    onDelete(contract: Contract): void;
};

export function ContractDetails({ contract, onEdit, onDelete }: ContractProps) {
    const { machineName, usageFee, oneTimeFee } = contract;

    return (
        <>
            <div className={'mb-4'}>
                <span className={styles.label}>Machine Name</span>
                <h2 className={'p-2 border border-transparent bg-gray-50 rounded'}>
                    {machineName}
                </h2>
            </div>

            <div className="flex mb-4">
                <div className={'flex-1 mr-2'}>
                    <span className={styles.label}>One-Time Fee</span>
                    <p className={'p-2 border border-transparent bg-gray-50 rounded'}>
                        {oneTimeFee}
                    </p>
                </div>
                <div className={'flex-1 ml-2'}>
                    <span className={styles.label}>Usage Fee</span>
                    <p className={'p-2 border border-transparent bg-gray-50 rounded'}>{usageFee}</p>
                </div>
            </div>

            <div className={'flex justify-between'}>
                <button
                    className={'button button-red bg-red-500'}
                    onClick={() => onDelete(contract)}>
                    Delete
                </button>

                <button className={'button button-primary'} onClick={() => onEdit(contract._id)}>
                    Edit
                </button>
            </div>
        </>
    );
}
