import React from 'react'
import {menu} from './utils/index'


export default function Menu(){
  const [list,setList] = React.useState(menu)
  
  const breakfastList = menu.filter((item)=>item.category==='breakfast')
  
  const lunchList = menu.filter((item)=>item.category==='lunch')
  
  const shakesList = menu.filter((item)=>item.category==='shakes')
  
  function handleFilter(event){
    return(
      event.target.name==="lunch"?setList(lunchList):
      event.target.name==="breakfast"?setList(breakfastList):
      event.target.name==="shakes"?setList(shakesList):setList(menu)
    )
  }

  function displayMenu(item){
    return(
  <>
    <div>
      <div className="container mt-2">
        <div className="card m-5" >
          <img src={item.img} className="card-img-top" alt="..." />
          <div className="card-body d-flex-column">
            <h5 className="card-title text-center">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <div className="container d-flex justify-content-center">
              <button className="btn btn-primary">Order now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
return (
      <>
      <div className="d-flex justify-content-center">
       <button 
       onClick={handleFilter}
       name="all"

       className="btn btn-outline-info">All</button>
       
       <button 
       onClick={handleFilter}
       name="breakfast"
       className="btn btn-outline-info">Breakfast</button>
       
       <button 
       onClick={handleFilter}
       name="lunch"
       className="btn btn-outline-info">Lunch</button>
       
       <button 
       onClick={handleFilter}
       name="shakes"
       className="btn btn-outline-info">Shakes</button>
      </div>
      {list.map(el=>displayMenu(el))}
      </>
      )
    }

