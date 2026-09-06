
import Home from './pages/Home'
import { useEffect } from 'react'
import getCurrentUser from './features/getCurrentUser'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './redux/userSlice'


function App() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userData)

  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrentUser()
      dispatch(setUserData(data))
    }
    getUser()
  }, [])


  return (
    <>
    <Home user={user} onLogin={(data) => dispatch(setUserData(data))} />
    </>
    
  )
}


export default App
