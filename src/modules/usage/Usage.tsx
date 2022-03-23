import { useEffect, useState } from 'react';
import { Contract } from '../../common/model/contract.model';
import { Card } from '../../common/component/Card';
import { calculatePrice, PRICE_DEFAULT_VALUE } from './priceCalculator';
import { LabelValue } from '../../common/component/LabelValue';
import { ContractSelection } from './ContractSelection';

type UsageProps = {
    contracts: Array<Contract>;
};

export function Usage({ contracts }: UsageProps) {
    const [usage, setUsage] = useState('');
    const [selectedContract, setSelectedContract] = useState<Contract | undefined>(undefined);
    const [contractPrice, setContractPrice] = useState(PRICE_DEFAULT_VALUE);

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
                <ContractSelection contracts={contracts} onContractSelect={setSelectedContract} />
            </div>

            <LabelValue label={'Contract'} value={contractPrice} testId={'contractPrice'} />
        </Card>
    );
}
