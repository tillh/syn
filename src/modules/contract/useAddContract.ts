import { useMutation, useQueryClient } from 'react-query';
import { Contract } from '../../common/model/contract.model';
import { addContract } from './contract.api';
import { CONTRACTS_QUERY_KEY } from './constant';

export const useAddContract = () => {
    const queryClient = useQueryClient();

    return useMutation<void, unknown, Contract>({
        mutationFn: addContract,
        onSuccess: () => {
            queryClient.invalidateQueries(CONTRACTS_QUERY_KEY);
        }
    });
};
