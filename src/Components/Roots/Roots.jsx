import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Navbar/Sidebar';

const Roots = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;