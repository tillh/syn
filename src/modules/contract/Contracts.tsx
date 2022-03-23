import { useState } from 'react';
import { Backdrop } from '../../common/component/Backdrop';
import { CreateContract } from './CreateContract';
import { ContractList } from './ContractList';

export function Contracts() {
    const [selectedEntry, setSelectedEntry] = useState<string | undefined>(undefined);

    const clearSelection = () => setSelectedEntry(undefined);

    return (
        <>
            {selectedEntry ? <Backdrop /> : null}

            <CreateContract
                selectedEntry={selectedEntry}
                setSelectedEntry={setSelectedEntry}
                clearSelectedEntry={clearSelection}
            />

            <ContractList
                selectedEntry={selectedEntry}
                setSelectedEntry={setSelectedEntry}
                clearSelectedEntry={clearSelection}
            />
        </>
    );
}
