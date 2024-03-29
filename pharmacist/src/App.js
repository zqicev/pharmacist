// import Context from './context';
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Main from './pages/Main';
import Info from './pages/Info';
import Auth from './pages/Auth';
import Reg from './pages/Reg';
import Forgot from './pages/Forgot';
import Cart from './pages/Cart';
import Notfound from './pages/Notfound';

// const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
	// const [token, setToken] = useState();

	// if (!token){
	// 	return <Auth setToken={setToken} />
	// }

	const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            navigate("/login");
        }
    }, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<Notfound />} />
				<Route path="/info" element={<Info />} />
				<Route path="/login" element={<Auth />} />
				<Route path="/register" element={<Reg />} />
				<Route path="/forgot" element={<Forgot />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</>
	)
}

export default App;
