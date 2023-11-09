import React, { useState } from 'react';
import SidebarContext from './SidebarContext';

const SidebarState = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
    const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div>
      <SidebarContext.Provider value={{ isOpen, setIsOpen,openSubmenuIndex,setOpenSubmenuIndex ,collapsed, setCollapsed}}>
        {props.children}
      </SidebarContext.Provider>
    </div>
  )
}

export default SidebarState
