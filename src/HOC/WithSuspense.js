import React from "react";

export const withSuspense = (Component) => (props) => {
    return <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
        </React.Suspense>
}