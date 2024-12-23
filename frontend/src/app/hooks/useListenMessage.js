import { useContext, useEffect, useState } from "react"
import { SocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

const useListenMessage = () => {
    const {socket}= useContext(SocketContext)
    const {messages,setMessages}=useConversation();
    
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake = true;
            setMessages([...messages,newMessage])
        })

        return ()=>socket?.off("newMessage")
        
    },[socket,messages,setMessages]);
}

export default useListenMessage