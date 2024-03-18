import { useState } from 'react'
export function TwitterFollowCard ({ userName, children, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? `Siguiendo` : `Seguir`
    const buttonClassName = isFollowing ? `tw-followCard-button is-following` : `tw-followCard-button`    

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El Avatar de midudev" src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick} className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}