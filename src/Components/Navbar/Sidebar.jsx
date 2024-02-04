import { motion } from 'framer-motion';
import sidebar from './sidebar.css';

const Sidebar = () => {
    return (
        <div>

            <div className="main-container">
                <motion.div animate={{ width: "200px" }} className='sidebar'>
                    lol
                </motion.div>
            </div>

        </div>
    );
};

export default Sidebar;