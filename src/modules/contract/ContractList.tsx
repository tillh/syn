import { useGetContracts } from './useGetContracts';
import { useUpdateContract } from './useUpdateContract';
import { useDeleteContract } from './useDeleteContract';
import { Card } from '../../common/component/Card';
import { ContractForm } from './ContractForm';
import { ContractDetails } from './ContractDetails';

type ContractListProps = {
    selectedEntry: string | undefined;
    setSelectedEntry(id: string | undefined): void;
    clearSelectedEntry(): void;
};

export function ContractList({
    selectedEntry,
    setSelectedEntry,
    clearSelectedEntry
}: ContractListProps) {
    const { data } = useGetContracts();
    const { mutate: updateContract } = useUpdateContract();
    const { mutate: deleteContract } = useDeleteContract();

    return (
        <>
            {data?.map((contract) => (
                <Card key={contract._id} selected={selectedEntry === contract._id}>
                    {selectedEntry === contract._id ? (
                        <ContractForm
                            initialData={contract}
                            onSubmit={(contractToUpdate) => {
                                updateContract(contractToUpdate);
                                clearSelectedEntry();
                            }}
                            onCancel={clearSelectedEntry}
                        />
                    ) : (
                        <ContractDetails
                            contract={contract}
                            onEdit={(id) => setSelectedEntry(id)}
                            onDelete={(contract) => deleteContract(contract)}
                        />
                    )}
                </Card>
            ))}
        </>
    );
}
