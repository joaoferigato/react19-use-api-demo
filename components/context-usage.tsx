"use client"

import { use } from "react";
import { UserContext } from "@/contexts/UserContext";

export default function ContextUsage() {
    let userContext = null
    if (true) {
        userContext = use(UserContext)
    }

    return (
        <p>{userContext.name}</p>
    )
}