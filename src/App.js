import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/index.js';

function App() {
  // console.log(harvardArt)
  return (
    // <h1>Hello from App</h1>
    <GalleryNavigation galleries={harvardArt.records}/> //key value pair, key is galleries
  );
}

export default App;
