import { PropsWithChildren } from 'react';

type CardProps = {
    selected: boolean;
    opacity: boolean;
    disablePadding?: boolean;
};

export function Card({
    children,
    selected,
    opacity,
    disablePadding = false
}: PropsWithChildren<CardProps>) {
    return (
        <div className={'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4'}>
            <div
                className={`rounded overflow-hidden shadow-md bg-white h-full w-full ${
                    disablePadding ? '' : 'p-4'
                } border-2 ${selected ? 'border-primary' : 'border-transparent'} ${
                    opacity ? 'opacity-40' : ''
                }`}>
                {children}
            </div>
        </div>
    );
}
