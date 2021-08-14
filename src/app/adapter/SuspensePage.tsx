import React, {Children, Suspense} from "react";

interface SuspensePageProps {
    children: React.ReactNode;
}

const FallbackPage = () => <div>Wait a minute</div>

export const SuspensePage = (props: SuspensePageProps) => {
    return <Suspense fallback={<FallbackPage />}>{props.children}</Suspense>
}