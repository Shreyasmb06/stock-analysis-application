import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Awards from './Awards';
import OpenAccount from '../OpenAccount';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function HomePage() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
        if (!cookies.token) {
            navigate("/login");
        }
        const { data } = await axios.post(
            "http://localhost:3002/",
            {},
            { withCredentials: true }
        );
        const { status, user } = data;
        setUsername(user);
        return status
            ? toast(`Hello ${user}`, {
                position: "top-right",
            },navigate("/"))
            : (removeCookie("token"), navigate("/login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };
    return (
        <div className='container'>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        <div className="home_page ms-5">
           
            <button onClick={Logout}>LOGOUT</button>
        </div>
        <ToastContainer />
        </div>
    );
}

export default HomePage;