import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'metalniga',
        name: 'Metalniga',
        isFollowing: false
    },
    {
        userName: 'tuvieja',
        name: 'Tu vieja en tanga',
        isFollowing: true
    },
]

export function App () {

    return (
        <section className='App'>
            {
            users.map(({ userName, name, isFollowing }) => (               
                    <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>    
            ))
            }
        </section>
    )
}