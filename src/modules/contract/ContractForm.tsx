import { Contract } from '../../common/model/contract.model';
import { useForm } from 'react-hook-form';

type ContractFormProps = {
    initialData?: Contract;
    onSubmit(contract: Contract): void;
};

export function ContractForm({ initialData, onSubmit }: ContractFormProps) {
    const { register, handleSubmit } = useForm<Contract>({
        defaultValues: initialData,
        mode: 'onChange'
    });

    const submitHandler = (contract: Contract) => onSubmit(contract);

    return (
        <form onSubmit={handleSubmit(submitHandler)} noValidate={true}>
            <div className={'mb-4'}>
                <label className={'label'} htmlFor="machineName">
                    Machine Name*
                </label>

                <input
                    id="machineName"
                    type="text"
                    {...register('machineName')}
                    autoComplete={'off'}
                    className={'input'}
                />
            </div>

            <div className={'flex mb-4'}>
                <div className={'mr-2 flex-1'}>
                    <label className={'label'} htmlFor="oneTimeFee">
                        One-Time Fee
                    </label>

                    <input
                        id="oneTimeFee"
                        type="number"
                        {...register('oneTimeFee', {
                            setValueAs: (value) => parseFloat(value)
                        })}
                        className={'input'}
                    />
                </div>

                <div className={'ml-2 flex-1'}>
                    <label className={'label'} htmlFor="usageFee">
                        Usage Fee
                    </label>

                    <input
                        id="usageFee"
                        type="number"
                        {...register('usageFee', {
                            setValueAs: (value) => parseFloat(value)
                        })}
                        className={'input'}
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
