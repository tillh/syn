import type { NextPage } from 'next';
import { Card } from '../common/component/Card';
import { PlusIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { ContractForm } from '../features/contract';

const Home: NextPage = () => {
    const [showContractForm, setShowContractForm] = useState(false);
    const handleShowContractForm = () => setShowContractForm(true);

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
        </section>
    );
};

export default Home;
