type LabelValueProps = {
    label: string;
    value: string | number;
    testId?: string;
};

export function LabelValue({ label, value, testId }: LabelValueProps) {
    return (
        <>
            <span className={'label'}>{label}</span>
            <p
                className={
                    'p-2 border border-transparent bg-gray-50 rounded text-ellipsis overflow-hidden whitespace-nowrap'
                }
                data-testid={testId ?? ''}>
                {value}
            </p>
        </>
    );
}
