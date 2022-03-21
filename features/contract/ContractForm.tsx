import { useMutation } from 'react-query';
import { NewContract } from '../../common/model/contract.model';
import { useForm } from 'react-hook-form';
import styles from './Contract.module.css';
import { addContract } from './contract.api';

type ContractFormProps = {};

export function ContractForm({}: ContractFormProps) {
    const { mutate } = useMutation({ mutationFn: addContract });
    const { register, handleSubmit } = useForm<NewContract>();
    const submit = (contract: NewContract) => {
        mutate(contract);
    };

    return (
        <form onSubmit={handleSubmit(submit)} noValidate={true}>
            <div className={'mb-4'}>
                <label className={styles.label} htmlFor="machineName">
                    Machine Name
                </label>

                <input
                    id="machineName"
                    type="text"
                    {...register('machineName')}
                    autoComplete={'off'}
                    className={styles.input}
                />
            </div>

            <div className={'flex mb-4'}>
                <div className={'mr-2 flex-1'}>
                    <label className={styles.label} htmlFor="oneTimeFee">
                        One-Time Fee
                    </label>

                    <input
                        id="oneTimeFee"
                        type="number"
                        {...register('oneTimeFee', {
                            setValueAs: (value) => parseFloat(value)
                        })}
                        className={styles.input}
                    />
                </div>

                <div className={'ml-2 flex-1'}>
                    <label className={styles.label} htmlFor="usageFee">
                        Usage Fee
                    </label>

                    <input
                        id="usageFee"
                        type="number"
                        {...register('usageFee', {
                            setValueAs: (value) => parseFloat(value)
                        })}
                        className={styles.input}
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <button className="button button-primary" type="submit">
                    Save
                </button>
            </div>
        </form>
    );
}
