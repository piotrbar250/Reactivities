import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Header, List } from 'semantic-ui-react'

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
      <Header as='h1' icon='users' content='Reactivities'/>
      <List as='ul'>
        {activities.map((activity:any) => (
          <List.Item as='li'>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  )
}
export default App
