import { Contract } from '../../common/model/contract.model';
import styles from './Contract.module.css';

type ContractProps = Contract;

export function ContractDetails({ machineName, usageFee, oneTimeFee }: ContractProps) {
    return (
        <>
            <div className={'mb-4'}>
                <span className={styles.label}>Machine Name</span>
                <h2 className={'py-2 border border-transparent'}>{machineName}</h2>
            </div>

            <div className="flex">
                <div className={'flex-1'}>
                    <span className={styles.label}>One-Time Fee</span>
                    <p className={'py-2 border border-transparent'}>{oneTimeFee}</p>
                </div>
                <div className={'flex-1'}>
                    <span className={styles.label}>Usage Fee</span>
                    <p className={'py-2 border-transparent'}>{usageFee}</p>
                </div>
            </div>
        </>
    );
}
