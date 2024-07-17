import { Link, Outlet, useParams } from 'react-router-dom'
// Projects
import Project1 from './projects/Project1/Project1'
// import Project2 from '../projects/Project2/Project2'
// import Project3 from '../projects/Project3/Project3'
// import Project5 from '../projects/Project4/Project4'
// import Project6 from '../projects/Project5/Project5'

function Home() {
  return (
    <>
      <h1>🌎 Hello World !</h1>
      <ul>
        <li>
          <Link to={'/project/1'}>Project1</Link>
        </li>
        <li>
          <Link to={'/project/2'}>Project2</Link>
        </li>
        <li>
          <Link to={'/project/3'}>Project3</Link>
        </li>
        <li>
          <Link to={'/project/5'}>Project5</Link>
        </li>
        <li>
          <Link to={'/project/6'}>Project6</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}
function Project() {
  const { projectId } = useParams()
  if (projectId) {
    switch (projectId) {
      case '1':
        return <Project1 />
      // case '2':
      //  return <Project2 />
      // case '3':
      //  return <Project3 />
      // case '5':
      //  return <Project5 />
      // case '6':
      //  return <Project6 />
    }
  }
  return <h1>Project not found</h1>
}
export default Home
export { Project }

