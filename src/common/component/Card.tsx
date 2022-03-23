import { PropsWithChildren } from 'react';

type CardProps = {
    selected?: boolean;
    disablePadding?: boolean;
};

export function Card({
    children,
    selected = false,
    disablePadding = false
}: PropsWithChildren<CardProps>) {
    return (
        <div
            className={`w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w-1/6 px-2 mb-4${
                selected ? ' z-20' : ''
            }`}>
            <div
                className={`rounded overflow-hidden shadow-md bg-white h-full w-full ${
                    disablePadding ? '' : 'p-4'
                } border-2 ${selected ? 'border-primary' : 'border-transparent'}`}>
                {children}
            </div>
        </div>
    );
}
