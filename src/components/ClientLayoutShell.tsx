"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

interface ClientLayoutShellProps {
    children: React.ReactNode;
}

const ClientLayoutShell = ({ children }: ClientLayoutShellProps) => {
    return (
        <>
            <CustomCursor />
            <SmoothScroll>{children}</SmoothScroll>
        </>
    );
};

export default ClientLayoutShell;


