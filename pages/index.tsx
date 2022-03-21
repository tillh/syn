import type { NextPage } from 'next';
import { Card } from '../common/component/Card';
import { PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { ContractForm } from '../features/contract';
import { useQuery } from 'react-query';
import { Contract } from '../common/model/contract.model';
import { getContracts } from '../features/contract/contract.api';
import { ContractDetails } from '../features/contract/ContractDetails';

const Home: NextPage = () => {
    const [showContractForm, setShowContractForm] = useState(false);
    const handleShowContractForm = () => setShowContractForm(true);

    const { data } = useQuery<Array<Contract>>('contracts', getContracts);

    return (
        <section className={'flex flex-wrap -mx-2 p-4'}>
            {showContractForm ? (
                <Card>
                    <ContractForm />
                </Card>
            ) : (
                <Card>
                    <button
                        onClick={handleShowContractForm}
                        className={
                            'w-full h-full flex justify-center items-center hover:bg-primary hover:bg-opacity-10'
                        }>
                        <PlusIcon className="h-10 w-10 text-primary" />
                    </button>
                </Card>
            )}

            {data?.map((contract) => (
                <Card key={contract._id}>
                    <ContractDetails {...contract} />
                </Card>
            ))}
        </section>
    );
};

export default Home;
