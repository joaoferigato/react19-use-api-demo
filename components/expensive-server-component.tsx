import { Suspense } from 'react'
import { expensiveFunction } from '@/util/utils'
import ExpensiveClientComponent from '@/components/expensive-client-component'

export default function ExpensiveServerComponent({ seconds }: { seconds: number }) {
    const eF = expensiveFunction(seconds)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <ExpensiveClientComponent expensiveFunction={eF} />
        </Suspense>
    )
}