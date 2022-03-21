import { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren<{}>) {
    return (
        <div className={'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-2 mb-4'}>
            <div className={'rounded overflow-hidden shadow-md bg-white h-full w-full p-4'}>
                {children}
            </div>
        </div>
    );
}
