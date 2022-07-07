import React from "react";
function Views({ currentView, changeView }) {
  if (currentView === "all") {
    return (
      <>
        <span className="view current-view" onClick={() => changeView("all")}>
          all
        </span>
        <span className="view " onClick={() => changeView("active")}>
          active
        </span>
        <span className="view" onClick={() => changeView("completed")}>
          completed
        </span>
      </>
    );
  } else if (currentView === "active") {
    return (
      <>
        <span className="view" onClick={() => changeView("all")}>
          all
        </span>
        <span
          className="view current-view"
          onClick={() => changeView("active")}
        >
          active
        </span>
        <span className="view" onClick={() => changeView("completed")}>
          completed
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="view" onClick={() => changeView("all")}>
          all
        </span>
        <span className="view " onClick={() => changeView("active")}>
          active
        </span>
        <span
          className="view current-view"
          onClick={() => changeView("completed")}
        >
          completed
        </span>
      </>
    );
  }
}
export default Views;
