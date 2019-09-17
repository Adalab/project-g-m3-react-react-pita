import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            
                <header className="page__header">
                    <Link to="/"><h1 className="header__title">Awesome profile-cards</h1></Link>
                </header>
        )
    }
}

export default Header;