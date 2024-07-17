import { isRouteErrorResponse, useRouteError } from "react-router-dom"
function RootBoundary() {
  const error = useRouteError()
  console.error(error)
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1>📚 404: Page Not Found 😄</h1>
    }
  }
}

export default RootBoundary
