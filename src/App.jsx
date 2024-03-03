import Navbar from './Navbar'
import FirstScreen from './Firstscreen'
import Secondscreen from './Secondscreen'

function App() {
  return (
    <div>
      <div className=' flex flex-col h-screen'>
        <Navbar />
        <FirstScreen />
        <Secondscreen />
      </div>
    </div>
  )
}

export default App
