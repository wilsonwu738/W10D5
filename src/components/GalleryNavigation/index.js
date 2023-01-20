import { NavLink} from "react-router-dom";

function GalleryNavigation(props){
    console.log((props.galleries))

    const galleries = (props.galleries).map((ele) => {
        
        return <NavLink to={`/galleries/${ele.id}`}>{ele.name}</NavLink>
        
    });

    console.log(galleries)

    
    return (
        <nav>
            <h1>Galleries</h1>
            {galleries}
        </nav>
    );
}

export default GalleryNavigation;