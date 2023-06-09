import React, { useContext, useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; //from going from one page to another page, page will not refresh now ,it goes directly on that page without refreshing (😇)
import { UserContext } from '../App'
import { message } from 'antd'


const Header = () => {

    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear()
        message.success("Logout Successfully");
        dispatch({ type: "CLEAR" })
        navigate('/')
        window.location.reload();
    };

    const renderList = () => {
        console.log(state)
        if (state) {
            console.log(state.usertype)
            if (state.usertype == 0) { // Applicant's navbar
                return (
                    <div className="nav">
                        <div className="nav-left">
                            <a href="/"><h3>JobFinder</h3></a>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li><a href="/home">HOME</a></li>
                                <li><a href="/applications">APPLICATIONS</a></li>
                                <li><a href="/profile">PROFILE</a></li>
                                <li><button className="btn-logout" onClick={logoutHandler}>LOGOUT</button></li>
                            </ul>
                        </div>
                    </div>
                )
            }
            else {   // Recruiter's navbar
                return (
                    <div className="nav">
                        <div className="nav-left">
                            <a href="/"><h3>JobFinder</h3></a>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li><a href="/newjob">CREATE JOB</a></li>
                                <li><a href="/myjobs">MY JOBS</a></li>
                                <li><a href="/#">EMPLOYEES</a></li>
                                <li><a href="/profile">PROFILE</a></li>
                                <li><button className="btn-logout" onClick={logoutHandler}>LOGOUT</button></li>
                            </ul>
                        </div>
                    </div>
                )
            }
        }
        else { // home navbar
            return (
                <div className="nav">
                    <div className="nav-left">
                        <a href="/"><h3>JobFinder</h3></a>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <li><a href="/login">APPLICANT</a></li>
                            <li><a href="/loginrec">RECRUITER</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
    return (
        <>
            {renderList()}
        </>
    );
}

export default Header;