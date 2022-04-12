import React, { useState } from "react";
// import Task from "./Task"

function CategoryFilter({ categories }) {

  const[isActiveClass, setActiveClass] = useState(false)
  const[selectedCategory, setSelectedCategory] = useState("All")
 
  const handleSelect = (e) => {
    setSelectedCategory(e.target.textContent)
    setActiveClass(!isActiveClass)
  }

  const displaySelectedCategoryItems = categories.filter(items => {
    if(selectedCategory === "All") {
      return true
    } else {
      return items.category === selectedCategory
    }
  })

  // const renderFilteredItems = displaySelectedCategoryItems.map(item => {

  // })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      { 
        categories.map((category, index) => {
          return <button onClick={handleSelect} className={!isActiveClass ? "selected" : null} key={index}>{category}</button>
        })        
      }     
    </div>
  );
}

export default CategoryFilter;
