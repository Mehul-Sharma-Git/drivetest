import './App.css';
import react from 'react';
import config from '../../config';
import axios from 'axios';
import Banner from '../../Components/Banner';
import Nav from '../../Components/Nav';

function Movies() {
const [list, setList]=react.useState<any>([]);

  react.useEffect(() => {
    async function fetchData(){
    const request=await axios.get("https://www.googleapis.com/drive/v3/files?q="+"'"+`${config.rootFolder}`+"'"+"+in+parents&key="+`${config.apikey}`)
    if(request.data){
    setList(request.data['files'])
    }
    return request
    }
    fetchData();
    return () => {
    };
  
  }, []);


  // Array of API discovery doc URLs for APIs


      /**
       *  On load, called to load the auth2 library and API client library.
       */
      
  /**
   *  Sign in the user upon button click.
   */
  return (
    <div className="Movies">
      <header className="Movies-header">
        {console.log(list)}
        <Nav/>
        <Banner banner={list[Math.floor(Math.random() * list.length-1)]}/>
        
      
      </header>
    </div>
  );
}

export default Movies;
