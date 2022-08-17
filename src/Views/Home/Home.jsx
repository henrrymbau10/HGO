import React from 'react'
import { Access } from './Access/Access'
import { Header } from './Header/Header'
import { Main } from './Main/Main'

export const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Access />
        </div>
    )
}
