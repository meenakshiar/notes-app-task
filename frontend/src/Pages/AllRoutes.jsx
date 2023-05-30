import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginSignUpPage from './LoginSignUpPage';
import Notes from './Notes';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginSignUpPage />} />
                {/* <Route path='/signup' element={<LoginSignUpPage />} /> */}
                <Route path='/notes' element={<Notes />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;