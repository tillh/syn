import { Contract, NewContract } from '../common/model/contract.model';

export const testNewContract: NewContract = {
    machineName: 'any machine name',
    usageFee: 2,
    oneTimeFee: 4
};
export const testContract: Contract = {
    _id: 'any-id',
    createdAt: new Date('2022-03-22'),
    machineName: 'any machine name',
    usageFee: 2,
    oneTimeFee: 4
};

export const testContracts: Array<Contract> = [
    {
        _id: 'any-id-1',
        createdAt: new Date('2022-03-22'),
        machineName: 'any machine name 1',
        usageFee: 2,
        oneTimeFee: 4
    },
    {
        _id: 'any-id-2',
        createdAt: new Date('2022-03-22'),
        machineName: 'any machine name 2',
        usageFee: 4,
        oneTimeFee: 9
    },
    {
        _id: 'any-id-3',
        createdAt: new Date('2022-03-22'),
        machineName: 'any machine name 3',
        usageFee: 5,
        oneTimeFee: 4
    }
];
