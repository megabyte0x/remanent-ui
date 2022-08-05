import React, { ReactNode } from "react";

type Props = {
    keyValue: string;
    value: ReactNode;
    level?: number;
    className?: string;
    tooltip?: string;
};

const KeyValue = ({
    keyValue,
    value,
    level = 1,
    className = "",
    tooltip,
}: Props) => {
    return (
        <div
            className={`${
                level == 2 ? "pl-8 text-xs " + className : className
            }`}
        >
            <span className="font-semibold">{keyValue}</span>
            <span className="ml-1 mr-3">:</span>
            <span title={tooltip ? tooltip : keyValue}>{value}</span>
        </div>
    );
};

export default KeyValue;
