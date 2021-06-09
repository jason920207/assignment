import { useRouter } from "next/router";
import { useEffect } from 'react'
import React from "react";

function Name() {
    const router = useRouter();
    useEffect(() => {
        router.push('/404')
    }, [])

    return <p>Redirecting...</p>
}

export default Name;