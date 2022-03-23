import { Path, UseFormRegister } from 'react-hook-form';
import { Contract } from '../../common/model/contract.model';

type NumberInputProps = {
    id: Path<Contract>;
    register: UseFormRegister<Contract>;
};

export function NumberInput({ id, register }: NumberInputProps) {
    return (
        <input
            id={id}
            type="number"
            className={'input'}
            {...register(id, {
                setValueAs: (value) => {
                    const parsedValue = parseFloat(value);

                    return isNaN(parsedValue) ? undefined : parsedValue;
                },
                required: true,
                min: 1
            })}
        />
    );
}
