import { useQuery } from 'react-query';
import { Contract } from '../../common/model/contract.model';
import { getContracts } from './contract.api';

export const CONTRACTS_QUERY_KEY = 'contracts';

export const useGetContracts = () => useQuery<Array<Contract>>(CONTRACTS_QUERY_KEY, getContracts);
