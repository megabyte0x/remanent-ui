import React, { ReactNode } from "react";

type Props = {
    keyValue: string;
    value: ReactNode;
    level?: number;
    className?: string;
};

const KeyValue = ({
    keyValue: key,
    value,
    level = 1,
    className = "",
}: Props) => {
    return (
        <div
            className={`${
                level == 2 ? "pl-8 text-xs " + className : className
            }`}
        >
            <span className="font-semibold">{key}</span>
            <span className="ml-1 mr-3">:</span>
            <span>{value}</span>
        </div>
    );
};

export default KeyValue;
