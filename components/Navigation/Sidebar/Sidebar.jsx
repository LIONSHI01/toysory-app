import React from "react";

import classes from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h3 className={classes.sidebar__heading}>Toy Stories</h3>
      <div className={classes.sidebar__category}>
        <h4>Popular Toys</h4>
      </div>
      <div className={classes.sidebar__category}>
        <h4>Music Box</h4>
      </div>
      <div className={classes.sidebar__category}>
        <h4>Puzzles</h4>
      </div>
      <div className={classes.sidebar__category}>
        <h4>Classic Times</h4>
      </div>
    </aside>
  );
};

export default Sidebar;
