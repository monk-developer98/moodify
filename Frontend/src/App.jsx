import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx"
import "./feature/shared/styles/global.scss"
import { AuthProvider } from "./feature/auth/auth.context.jsx";
import { SongContextProvider } from "./feature/home/song.context.jsx";

function App() {


  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider  router={router} />
      </SongContextProvider>
    </AuthProvider>
  )
}

export default App
