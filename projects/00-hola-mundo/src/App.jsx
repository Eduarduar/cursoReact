import React from 'react'
import { CardFollow } from './components/CardFollow'
import './css/output.css' // This is the compiled Tailwind CSS file
export function App () {
    const users = [
        { name: 'Eduardo Arcega Rodriguez', username: 'eduarduar', uuid: '1'},
        { name: 'Oliver Gabriel Visoso Flores', username: 'VISOSO2403', inicialIsFollowing: true, uuid: '2'},
        { name: 'AAYUSH VERMA', username: 'AayushVerma2411', inicialIsFollowing: true, uuid: '3'},
    ]

    return (
        <section className="flex flex-col gap-2">
            {/* maping the users list to create a CardFollow component for each user */}
            {users.map(({ name, username, inicialIsFollowing, uuid }) => (
                <CardFollow key={uuid} name={name} username={username} inicialIsFollowing={inicialIsFollowing} />
            ))}
        </section>
    )
}