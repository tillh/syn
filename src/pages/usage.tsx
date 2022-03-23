import { GetServerSideProps, NextPage } from 'next';
import { Usage } from '../modules/usage';
import { connectToDatabase } from '../common/db/mongodb';
import { Contract } from '../common/model/contract.model';
import { CONTRACTS_COLLECTION } from '../constant/constants';

type UsagePageProps = {
    contracts: Array<Contract>;
};

const UsagePage: NextPage<UsagePageProps> = ({ contracts }) => {
    return <Usage contracts={contracts} />;
};

export default UsagePage;

export const getServerSideProps: GetServerSideProps<UsagePageProps> = async () => {
    const { db } = await connectToDatabase();
    const contracts = await db
        .collection<Contract>(CONTRACTS_COLLECTION)
        .find({})
        .sort({ machineName: 1 })
        .toArray();

    return {
        props: {
            contracts: JSON.parse(JSON.stringify(contracts))
        }
    };
};
