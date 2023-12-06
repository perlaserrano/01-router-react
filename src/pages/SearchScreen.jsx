import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { Characters } from '../models/Characters'
import Card from "../components/Card";

const SearchScreen = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const {query = ""} = queryString.parse(location.search);

  const [inputValue, setInputValue] = useState(query);
  const[characters,setCharacters] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?query=${inputValue}`);

  };

  const getCharacters = () =>{
    if(inputValue.trim( ! "")){
      const value = inputValue.toLocaleLowerCase()
      const characters = Characters.filter(character => character.name.toLowerCase().includes(value))
     
      setCharacters(characters)
    } else{
      setCharacters([])
    }
  }

  useEffect(() => {
   getCharacters()
   console.log(characters);
  }, [query])
  

  return (
    <div className="container">
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <h2>Search</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100 ">
              Character: <input onChange={handleChange} autoComplete="off" value={inputValue} className="form-control" placeholder="Name Character" type="text" />
            </label>
            <button type="submit" className="btn btn-info w-100">
              Search
            </button>
          </form>
        </div>
        <div className="col-6">
            <h2>Results: {characters.length}</h2> 
            {
              characters.length === 0 && <div className="alert text-center alert-warning">Please Search Character</div>
            }

            {
              characters.map(character => <Card key={character.id} {...character}/>)
            }
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
