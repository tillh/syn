import { Contract } from '../../common/model/contract.model';
import { useForm } from 'react-hook-form';
import { NumberInput } from './NumberInput';

type ContractFormProps = {
    initialData?: Contract;
    onSubmit(contract: Contract): void;
    onCancel(): void;
};

export function ContractForm({ initialData, onSubmit, onCancel }: ContractFormProps) {
    const { register, handleSubmit, formState } = useForm<Contract>({
        defaultValues: initialData,
        mode: 'onChange'
    });
    const { isValid } = formState;

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
                    className={'input'}
                    autoComplete={'off'}
                    autoFocus={!initialData?.machineName}
                    {...register('machineName', { required: true })}
                />
            </div>

            <div className={'flex mb-4'}>
                <div className={'mr-2 flex-1'}>
                    <label className={'label'} htmlFor="oneTimeFee">
                        One-Time Fee*
                    </label>

                    <NumberInput id={'oneTimeFee'} register={register} />
                </div>

                <div className={'ml-2 flex-1'}>
                    <label className={'label'} htmlFor="usageFee">
                        Usage Fee*
                    </label>

                    <NumberInput id={'usageFee'} register={register} />
                </div>
            </div>

            <div className="flex justify-between">
                <button className="button-outline" type="button" onClick={onCancel}>
                    Cancel
                </button>

                <button className="button button-primary" type="submit" disabled={!isValid}>
                    Save
                </button>
            </div>
        </form>
    );
}
