import { useState } from "react"
export function ButtonComponent({ userName, description, initialIsFollowing }) {
  const url = "https://avatars.githubusercontent.com/u/125749979?v=4"
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? "Siguiendo" : "Seguir"
  const classIsfollowing = isFollowing ? "following" : "no-following"
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
  return (
    <article style={{ color: "white" }}>
      <header>
        <img src={url} alt='Avatar' />
        <div>
          <strong>{userName}</strong>
          <span>{description}</span>
        </div>
      </header>

      <aside className={classIsfollowing}>
        <button onClick={handleClick}>
          <span className='text1'>{text} </span>
          <span className='text2'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
