import MacroTracker from './components/MacroTracker'
import Weight from './components/Weight'
export default function Home() {
  return (
    <div>
      <p>Home page</p>
      <MacroTracker greeting="hello"/>
      <Weight />
    </div>
  )
}
