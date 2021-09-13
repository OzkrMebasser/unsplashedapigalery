import { useState} from 'react';
import { LoadImages, SearchImages } from './components/Api';
import './App.css';
import Image from './components/Image'


function App() {
  const [request, setRequest] = useState([])
  const [searchR, setSearch] = useState([])
  const data = LoadImages();
  const search = () =>{
    setSearch(request)

  }
  const searchData = SearchImages(searchR);
  console.log(SearchImages(searchData));

  return (
    <div className="App">
      <h1 className="center">galeria</h1>
      <div>
        
        <h3 className="center">Type the word to search for an image</h3>
        <input name="search" className="center" type="text" onChange={(event)=> setRequest(event.target.value)} placeholder="Type your search. e.g. Car or Boy" required/>
        <button onClick={search} className="button">Search</button>
        <h5 className="center">Hover on image 🖱️</h5>

      </div>
      <div className="contain">
      {searchR ? searchData.map ((img, key) => (
        <Image src={img.urls.thumb} key={key} />

      )) : data.map((img, key) => (
        <Image src={img.urls.thumb} key={key} />
      ))}
    

      </div>


    </div>
  );
}

export default App;
