import '../../../css/videochat.css';
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from './context/SocketProvider';

export default function Lobby(): JSX.Element {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit('room:join', { email, room });
    },
    [email, room, socket],
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate],
  );

  useEffect(() => {
    socket.on('room:join', handleJoinRoom);
    return () => {
      socket.off('room:join', handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl text-purple-200 font-bold py-10 '>Lobby</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email" className="text-white mr-5">Идентификатор</label>
        <input className='rounded-2xl' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="room" className='text-white mr-5'>Номер комнаты</label>
        <input className='rounded-2xl my-3' type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)} />
        <br />
        <button className='rounded-lg w-24 border my-5 border-gray-400 text-gray-200 h-8 hover:bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700' type="submit">Войти</button>
      </form>
    </div>
  );
}
