import { useSelector } from 'react-redux';
import './TeeshirtCards.css'
import LoggedOut from './LoggedOut';
import LoggedIn from './LoggedIn';
import Footer from '../../Footer';

export default function TeeshirtCards() {
    const teeshirts = useSelector((state => state));
    const user = teeshirts.session.user;

    return (
        <>
            {user === null ? <LoggedOut /> : <LoggedIn />}      
            <Footer />
        </>       
    )
}

