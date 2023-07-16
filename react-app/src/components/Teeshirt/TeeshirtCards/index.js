import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllTeesThunk } from '../../../store/teeshirt';
import { Link } from 'react-router-dom';
import './TeeshirtCards.css'
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';

export default function TeeshirtCards() {
    const teeshirts = useSelector((state => state));
    const user = teeshirts.session.user;

    return (
        <>
            {user === null ? <LoggedOut /> : <LoggedIn />}      
            <hr style={{backgroundColor: "lightgray", border: "none", borderTop: "1px solid lightgray", marginTop: "30px", marginBottom: "30px"}}></hr>
            <footer className="single-tee-footer-container">Copyright © 2023 TeeBay All Rights Reserved. 
                <span className="single-tee-footer-span">Accessibility,</span>
                <span className="single-tee-footer-span">User Agreement,</span>
                <span className="single-tee-footer-span">Privacy,</span>
                <span className="single-tee-footer-span">Payments</span>
                <span className="single-tee-footer-span">Terms of Use,</span>
                <span className="single-tee-footer-span">Cookies,</span>
                <span className="single-tee-footer-span">Your Privacy Choices</span>
            </footer>
        </>
        
    )
}

