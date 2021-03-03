import React from 'react';
import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

const Sidebar = (props) => {

    let SidebarElements = props.state.friends.map(sb => <SidebarItem name={sb.name} />);

    return (
        <div className={s.item}>
            {SidebarElements}
        </div>
    );
}

export default Sidebar;