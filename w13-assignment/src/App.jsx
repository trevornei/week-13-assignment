// imports components from other files in the src directory.
import Navigation from './Nav.jsx'
import Login from './login.jsx'


// Export default allows the app component to be called in the main.jsx file.
export default function App() {
  return (
    <div className='w-screen h-screen'>
      <Navigation></Navigation>
      <Login></Login>
    </div>
  )
}