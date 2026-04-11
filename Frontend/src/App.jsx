import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx"
import "./feature/shared/styles/global.scss"
import { AuthProvider } from "./feature/auth/auth.context.jsx";

function App() {


  return (
    <AuthProvider>
      <RouterProvider  router={router} />
    </AuthProvider>
  )
}

export default App
