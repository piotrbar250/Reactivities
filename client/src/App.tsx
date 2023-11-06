import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [activities, setActivites] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        setActivites(response.data)
      })
  },[]) 

  return (
    <div>
      <h1>Reactivites</h1>
      <ul>
        {activities.map((activity:any) => (
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
