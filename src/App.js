import {useState} from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message'
import NamePicker from './NamePicker'

function App() {
  
  var currUser = localStorage.getItem('currUser')

  if (currUser === '') {
    localStorage.setItem('currUser', 'Jeremy')
    currUser = localStorage.getItem('currUser')
  }

  const [messages,setMessages] = useState([])
  const [username,setUsername] = useState(currUser)
  

  console.log(messages)
  return <div className={"App"}>
 
    <header className="header">
      <div className="left-align">
        <div className="logo" />
        CHATTER
      </div>
      
      <NamePicker saveName={setUsername} />
    </header>

    <main className="messages">
      {messages.map((msg,i)=> {
        return <Message key={i} {...msg} />
      })}
    </main>

    <TextInput 
      send={(t)=> setMessages( [{text:t, name:username, date:new Date()}, ...messages] )}
    />

  </div>
}

export default App;
