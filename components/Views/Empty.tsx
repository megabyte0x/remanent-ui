/* eslint-disable @next/next/no-img-element */
import React from "react";

const Empty = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
            <img src="./empty.svg" alt="Empty" className="h-96 w-96" />
            <span>No records found</span>
        </div>
    );
};

export default Empty;
