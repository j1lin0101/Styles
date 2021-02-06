import {useState} from 'react'

function NamePicker(props){
    var currUser = localStorage.getItem('currUser')

    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(currUser)

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('currUser', username);
    }
    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={save} className="no-bg">OK</button>
        </div>
    }

    if(username==='') {
        return <div className="name-picker">
        <div>Set Username: </div>
        <button onClick={()=> setShowInput(true)} className="bg">
            
        </button>
    </div>
    }
    return <div className="name-picker">
        <div>{username}</div>
        <button onClick={()=> setShowInput(true)} className="bg">
            
        </button>
    </div>
}

export default NamePicker