import React, { useState, useEffect } from "react";

const Api2 = () =>{

    const [api, setApi] = useState([])

    const load = async()=>{
        const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fed0948b96msh0e4eab8ed85e9c3p1dec7bjsn7392e4701532',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	setApi(result)
    console.log(result);
} catch (error) {
	console.error(error);
}
    }

    useEffect(() => {
        load();
    }, [])
    return(
        <>
      <div className="container mx-auto p-4">
      <div className="flex flex-wrap" id="row1">
        {api.map(book => (
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={book.title}>
            <div className="card bg-white shadow-md rounded overflow-hidden">
              <img src={book.image} alt={book.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-bold">{book.title}</h3>
                <a href={book.url} className="text-blue-500">More Info</a>
                <p className="text-gray-700"><em>Rating: {book.rating}</em></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    );
}

export default Api2;