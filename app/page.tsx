import ExpensiveServerComponent from "@/components/expensive-server-component"
import ContextUsage from "@/components/context-usage"

export default function Page() {
  return (
    <section className="space-y-6">
      <div>
        <h1>Usage of use #1</h1>
        <p>In Server Components, it can read a Promise without async/await and can be used with Suspense</p>
        <ExpensiveServerComponent seconds={4} />
        <ExpensiveServerComponent seconds={8} />
        <ExpensiveServerComponent seconds={12} />
      </div>

      <div>
        <h1>Usage of use #2</h1>
        <p>Replaces useContext and is better because it is more flexibe. You can call it inside an if or for statements</p>
        <ContextUsage />
      </div>
    </section>
  )
}