import GalleryNavigation from './components/GalleryNavigation/index.js';
import harvardArt from './data/harvardArt.js'
 
function App() {
  return (
    <GalleryNavigation  galleries={harvardArt.records}/>
  );
}

export default App;
