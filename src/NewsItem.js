import React from 'react'
import image1 from './image1.jpg'
export const NewsItem = ({title, description, src, url }) => {
  return (
    <>
  <div className="card text-light bg-dark d-inline-block mx-3 my-3 py-3 px-3" style={{width:"330px"}} >
  <img src={src ? src: image1} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,70)}</h5>
    <p className="card-text">{description ? description.slice(0,100):"Dear Sports Enthusiasts Exciting developments in the sports world In football, a nail-biting finish saw underdogs triumph, shaking up league standings."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </>
  )
}
