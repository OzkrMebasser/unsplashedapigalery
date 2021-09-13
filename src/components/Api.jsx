import {useState, useEffect} from 'react';
import axios from "axios";

const count = 10;

function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
       
    axios
    .get("https://api.unsplash.com/photos?client_id=lPJqf4Zy276zDac54gNAJb1F2oI5tVaRXzWAqloWcPI")
    .then((data) => {
        setState(data.data)
    })

}, [count])
    return state;

}

function SearchImages(request){
    const [state, setState] = useState([])
    useEffect(() => {
       
    axios
    .get("https://api.unsplash.com/search/photos?query="+request+"&client_id=lPJqf4Zy276zDac54gNAJb1F2oI5tVaRXzWAqloWcPI")
    .then((data) => {
        // setState(data.data)
        setState(data.data.results);
    })

}, [request])
    return state;

}

export {LoadImages, SearchImages};
