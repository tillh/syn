export type NewContract = {
    machineName: string;
    oneTimeFee: number;
    usageFee: number;
};

export type Contract = NewContract & {
    _id: string;
    createdAt: Date;
};
