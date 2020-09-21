import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";
import db from "./firebase";
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if(id) {
            db.collection("rooms").doc(id).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot => {
                console.log(snapshot.docs.map((doc) => doc.data()));
                setMessages(snapshot.docs.map((doc) => doc.data()));
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat room");
        if(roomName) {
            db.collection("rooms").add({
                name: roomName
            });
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[messages.length - 1]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3>Add new Chat</h3>
        </div>
    )
}

export default SidebarChat
