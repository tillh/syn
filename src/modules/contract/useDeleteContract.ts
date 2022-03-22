import { Contract } from '../../common/model/contract.model';
import { useMutation, useQueryClient } from 'react-query';
import { deleteContract } from './contract.api';
import { CONTRACTS_QUERY_KEY } from './constant';

export const useDeleteContract = () => {
    const queryClient = useQueryClient();

    return useMutation<void, unknown, Contract>({
        mutationFn: deleteContract,
        onSuccess: () => queryClient.invalidateQueries(CONTRACTS_QUERY_KEY)
    });
};
