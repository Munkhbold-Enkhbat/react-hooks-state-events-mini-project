import React, { useState } from "react";

function CategoryFilter({ data }) {

  const[isActiveClass, setActiveClass] = useState(false)
 
  const handleSelect = () => {
    setActiveClass(!isActiveClass)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { 
        data.map((category, index) => {
          return <button onClick={handleSelect} className={!isActiveClass ? "selected" : null} key={index}>{category}</button>
        })
      }
    </div>
  );
}

export default CategoryFilter;
