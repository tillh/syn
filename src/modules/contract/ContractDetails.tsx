import { Contract } from '../../common/model/contract.model';
import { LabelValue } from '../../common/component/LabelValue';

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
                <LabelValue label={'Machine Name'} value={machineName} />
            </div>

            <div className="flex mb-4">
                <div className={'flex-1 mr-2 min-w-0'}>
                    <LabelValue label={'One-Time Fee'} value={oneTimeFee} />
                </div>

                <div className={'flex-1 ml-2 min-w-0'}>
                    <LabelValue label={'Usage Fee'} value={usageFee} />
                </div>
            </div>

            <div className={'flex justify-between'}>
                <button className={'button button-red'} onClick={() => onDelete(contract)}>
                    Delete
                </button>

                <button className={'button button-primary'} onClick={() => onEdit(contract._id)}>
                    Edit
                </button>
            </div>
        </>
    );
}
