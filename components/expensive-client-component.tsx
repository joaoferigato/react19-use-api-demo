"use client"

import { use } from 'react'

export default function ExpensiveClientComponent({ expensiveFunction }: { expensiveFunction: Promise<string> }) {
    const text = use(expensiveFunction)
    
    return (
        <p>{text}</p>
    )
}