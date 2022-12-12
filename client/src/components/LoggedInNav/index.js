import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';
import Auth from '../../utils/Auth'
import Logo from "../../assets/logo.png";

function LoggedInNavbar() {
    const [expandNavBar, setExpandNavBar] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpandNavBar(false)
    }, ([location]));

    return (
        <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={() => { setExpandNavBar((prev) => !prev); }}> < ReorderIcon /> </button>
            </div>
            <div className='links'>
                <Link to="/">
                    {" "}
                    <img className="logo" src={Logo} alt="company logo" />{" "}
                </Link>
                <Link to='/dashboard' id='cubic'> <span title="Dashboard"> Dashboard</span> </Link>
                <Link to='/savedrecipes' id='cubic'> <span title="Recipes"> Recipes </span>  </Link>
                <Link to='/profile' id='cubic'> <span title="Profile"> Profile </span> </Link>
                <Link to='/' id='cubic' onClick={Auth.logout}> <span title="BYE"> Logout </span> </Link>

            </div>
        </div>
    );
}

export default LoggedInNavbar;