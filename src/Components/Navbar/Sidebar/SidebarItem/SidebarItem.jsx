import React from 'react';
import s from './SidebarItem.module.css';

const SidebarItem = (props) => {
    return (
        <div>
            {props.friends}
        </div>
    );
}

export default SidebarItem;