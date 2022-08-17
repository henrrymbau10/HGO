import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../Views/Home/Home';


export const Application = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
