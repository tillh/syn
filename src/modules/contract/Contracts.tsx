import { useGetContracts } from './useGetContracts';
import { useAddContract } from './useAddContract';
import { useUpdateContract } from './useUpdateContract';
import { useDeleteContract } from './useDeleteContract';
import { useState } from 'react';
import { Card } from '../../common/component/Card';
import { ContractForm } from './ContractForm';
import { PlusIcon } from '@heroicons/react/solid';
import { ContractDetails } from './ContractDetails';
import { Backdrop } from '../../common/component/Backdrop';

export function Contracts() {
    const { data } = useGetContracts();
    const { mutate: addContract } = useAddContract();
    const { mutate: updateContract } = useUpdateContract();
    const { mutate: deleteContract } = useDeleteContract();

    const [selectedEntry, setSelectedEntry] = useState<string | undefined>(undefined);

    const clearSelection = () => setSelectedEntry(undefined);

    return (
        <>
            {selectedEntry ? <Backdrop /> : null}

            {selectedEntry === 'create' ? (
                <Card selected={true}>
                    <ContractForm
                        onSubmit={(newContract) => {
                            addContract(newContract);
                            setSelectedEntry(undefined);
                        }}
                        onCancel={clearSelection}
                    />
                </Card>
            ) : (
                <Card disablePadding={true} selected={false}>
                    <button
                        data-testid={'createContractBtn'}
                        onClick={() => setSelectedEntry('create')}
                        className={
                            'w-full h-full flex justify-center items-center hover:bg-primary hover:bg-opacity-10'
                        }>
                        <PlusIcon className="h-10 w-10 text-primary" />
                    </button>
                </Card>
            )}

            {data?.map((contract) => (
                <Card key={contract._id} selected={selectedEntry === contract._id}>
                    {selectedEntry === contract._id ? (
                        <ContractForm
                            initialData={contract}
                            onSubmit={(contractToUpdate) => {
                                updateContract(contractToUpdate);
                                clearSelection();
                            }}
                            onCancel={clearSelection}
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
