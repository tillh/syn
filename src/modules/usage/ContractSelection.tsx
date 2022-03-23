import { ChevronDownIcon } from '@heroicons/react/outline';
import { Contract } from '../../common/model/contract.model';

type ContractSelectionProps = {
    contracts: Array<Contract>;
    onContractSelect(contract: Contract | undefined): void;
};

export function ContractSelection({ contracts, onContractSelect }: ContractSelectionProps) {
    return (
        <>
            <label className={'label'} htmlFor="contract">
                Contract
            </label>

            <div className="relative">
                <select
                    id={'contract'}
                    defaultValue={''}
                    onChange={(e) => {
                        const contract = contracts.find(
                            (contract) => contract._id === e.target.value
                        );
                        onContractSelect(contract);
                    }}
                    className="appearance-none w-full bg-white border hover:border-gray-500 p-2 rounded">
                    <option value={''} disabled>
                        Select contract
                    </option>

                    {contracts.map((contract) => (
                        <option key={contract._id} value={contract._id}>
                            {contract.machineName}
                        </option>
                    ))}
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDownIcon className={'w-4 h-4'} />
                </div>
            </div>
        </>
    );
}
