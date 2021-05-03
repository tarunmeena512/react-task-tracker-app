import React from "react";
const HeaderComponent = (props) => {
    return (
        <header className="header">
          <h1>{props.title}</h1>
          <button className={props.showAddTask ? 'btn btnRed' : 'btn'}  onClick={props.onAddHeader}>{props.showAddTask ? 'Close' : 'Add'}</button>
        </header>
      );
}
 
export default HeaderComponent;
