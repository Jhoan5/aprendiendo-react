import { ButtonComponent } from './buttonComponent.js'
import './buttonComponent.css'

function Project1() {
  const users = [
    {
      userName: 'Jhoan',
      description: 'Frontend Developer',
      isFollowing: true
    },
    {
      userName: 'Maria',
      description: 'Frontend Developer',
      isFollowing: false
    },
    {
      userName: 'Pedro',
      description: 'Frontend Developer',
      isFollowing: true
    }
  ]

  return (
    <section className='people' style={{ color: '#3ee' }}>
      <h1>Full Stack very soon 😄</h1>
      {users.map(({ userName, description, isFollowing }) => (
        <ButtonComponent
          key={userName}
          userName={userName}
          description={description}
          initialIsFollowing={isFollowing}
        ></ButtonComponent>
      ))}
    </section>
  )
}

export default Project1

