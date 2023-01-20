import { NavLink } from "react-router-dom"


function GalleryNavigation(props) {
  console.log(props)
  return(
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/"> {galleries} </NavLink>
    </nav>
  )
}

export default GalleryNavigation