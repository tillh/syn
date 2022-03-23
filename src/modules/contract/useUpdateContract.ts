import { useMutation, useQueryClient } from 'react-query';
import { Contract } from '../../common/model/contract.model';
import { updateContract } from './contract.api';
import { CONTRACTS_QUERY_KEY } from './useGetContracts';

export const useUpdateContract = () => {
    const queryClient = useQueryClient();

    return useMutation<void, unknown, Contract>({
        mutationFn: updateContract,
        onMutate: async (contractToUpdate) => {
            const previousContracts =
                queryClient.getQueryData<Array<Contract>>(CONTRACTS_QUERY_KEY);
            const contractToUpdateIndex = previousContracts?.findIndex(
                (contract) => contract._id === contractToUpdate._id
            );

            if (previousContracts && contractToUpdateIndex !== undefined) {
                queryClient.setQueryData<Array<Contract>>(CONTRACTS_QUERY_KEY, () =>
                    Object.assign([], previousContracts, {
                        [contractToUpdateIndex]: contractToUpdate
                    })
                );
            }
        },
        onSettled: () => {
            queryClient.invalidateQueries(CONTRACTS_QUERY_KEY);
        }
    });
};
