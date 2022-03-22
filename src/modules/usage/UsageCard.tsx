import { useEffect, useState } from 'react';
import { Contract } from '../../common/model/contract.model';
import { useGetContracts } from '../contract/useGetContracts';
import { Card } from '../../common/component/Card';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { calculatePrice, PRICE_DEFAULT_VALUE } from './priceCalculator';

export function UsageCard() {
    const [usage, setUsage] = useState('');
    const [selectedContract, setSelectedContract] = useState<Contract | undefined>(undefined);
    const [contractPrice, setContractPrice] = useState(PRICE_DEFAULT_VALUE);

    const { data } = useGetContracts();

    useEffect(() => {
        if (!selectedContract || usage === '') {
            setContractPrice(PRICE_DEFAULT_VALUE);

            return;
        }

        const usageAsNumber = parseFloat(usage);
        setContractPrice(
            calculatePrice(selectedContract.oneTimeFee, selectedContract.usageFee, usageAsNumber)
        );
    }, [usage, selectedContract]);

    return (
        <Card>
            <div className={'mb-4'}>
                <label className={'label'} htmlFor="usage">
                    Usage
                </label>

                <input
                    id="usage"
                    type="number"
                    className={'input'}
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                />
            </div>

            <div className={'mb-4'}>
                <label className={'label'} htmlFor="contract">
                    Contract
                </label>

                <div className="relative">
                    <select
                        id={'contract'}
                        defaultValue={''}
                        onChange={(e) => {
                            const contract = data?.find(
                                (contract) => contract._id === e.target.value
                            );
                            setSelectedContract(contract);
                        }}
                        className="appearance-none w-full bg-white border hover:border-gray-500 p-2 rounded">
                        <option value={''} disabled>
                            Select contract
                        </option>

                        {data?.map((contract) => (
                            <option key={contract._id} value={contract._id}>
                                {contract.machineName}
                            </option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDownIcon className={'w-4 h-4'} />
                    </div>
                </div>
            </div>

            <div>
                <span className={'label'}>Contract Price</span>
                <p className={'p-2 border border-transparent bg-gray-50 rounded'}>
                    {contractPrice}
                </p>
            </div>
        </Card>
    );
}
