import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket]=useState();
  const inputref=useRef<HTMLInputElement | null>(null)
  
  function sendMessage(){
    if(!socket){
      return
    }
    const message=inputref.current?.value;
    //@ts-ignore
    socket.send(message)

  }

  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8070");
    setSocket(ws)

    ws.onmessage=(ev)=>{
      alert(ev.data);
    }
  },[])

  return (
   <div>
    <input type="text" ref={inputref} placeholder='message...'/>
    <button onClick={sendMessage}>Send</button>
   </div>
  )
}

export default App
