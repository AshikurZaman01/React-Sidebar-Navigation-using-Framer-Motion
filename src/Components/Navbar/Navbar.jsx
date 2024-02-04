import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = [
        { id: 1, name: 'Home', path: '/' },
        { id: 1, name: 'Dashboard', path: '/dashboard' },
        { id: 1, name: 'FileManager', path: '/fileManager' },
        { id: 1, name: 'Analytic', path: '/analytic' },
        { id: 1, name: 'Order', path: '/order' },
        { id: 1, name: 'Users', path: '/users' },
    ]

    return (
        <div>

            <nav>
                <ul>
                    {
                        navItems.map(item => {
                            return (
                                <li key={item.id}><Link to={item.path}>{item.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;