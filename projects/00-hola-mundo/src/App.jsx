import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
        <TwitterFollowCard  userName="midudev" name="Miguel Angel Duran" />
        <TwitterFollowCard  userName="metalniga" name="MetalNiga" />
        <TwitterFollowCard  userName="tuvieja" name="Tu vieja en tanga" />
        </section>
    )
}