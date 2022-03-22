import { useQuery } from 'react-query';
import { Contract } from '../../common/model/contract.model';
import { getContracts } from './contract.api';
import { CONTRACTS_QUERY_KEY } from './constant';

export const useGetContracts = () => useQuery<Array<Contract>>(CONTRACTS_QUERY_KEY, getContracts);
