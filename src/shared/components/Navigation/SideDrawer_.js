import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
        {/* FOR POP UP AND DOWN SIDEDRAWER WHEN CLICKED  */}
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );

  // REACT PORTAL TO POP THE ELEMENT 'drawer-book'
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
