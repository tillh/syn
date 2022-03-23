import { Card } from '../../common/component/Card';
import { ContractForm } from './ContractForm';
import { PlusIcon } from '@heroicons/react/solid';
import { useAddContract } from './useAddContract';

const NEW_CONTRACT_ID = 'create';

type CreateContractProps = {
    selectedEntry: string | undefined;
    setSelectedEntry(id: string): void;
    clearSelectedEntry(): void;
};

export function CreateContract({
    selectedEntry,
    setSelectedEntry,
    clearSelectedEntry
}: CreateContractProps) {
    const { mutate } = useAddContract();

    return selectedEntry === NEW_CONTRACT_ID ? (
        <Card selected={true}>
            <ContractForm
                onSubmit={(newContract) => {
                    mutate(newContract);
                    clearSelectedEntry();
                }}
                onCancel={clearSelectedEntry}
            />
        </Card>
    ) : (
        <Card disablePadding={true} selected={false}>
            <button
                data-testid={'createContractBtn'}
                onClick={() => setSelectedEntry(NEW_CONTRACT_ID)}
                className={
                    'w-full h-full p-1 flex justify-center items-center hover:bg-primary hover:bg-opacity-10'
                }>
                <PlusIcon className="h-10 w-10 m-6 text-primary" />
            </button>
        </Card>
    );
}
