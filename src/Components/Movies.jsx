import MoviesData from "./MoviesData";


const Movies = () =>{

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<i key={i} className="fa-solid fa-star text-yellow-500"></i>);
        } else {
            stars.push(<i key={i} className="fa-regular fa-star text-yellow-500"></i>);
        }
    }
    return stars;
};

    return(
        <>
        <h1 className="text-center text-green-600 text-4xl my-4 mt-8 mb-7">Top 3 Marathi Movies...!!!</h1>
        <div className="border w-[100vw] flex justify-center items-center ">
            {
                MoviesData.map((val, index)=>{
                    return(
                        <div className="border w-72 m-5 h-[310px] rounded-lg shadow-md">
                        <img src={val.cover} className=" w-[85%] h-[200px] rounded-t-lg" alt={val.title} />
                        <div className="p-2">
                        <h1 className="text-xl font-serif text-pink-900">{val.title}</h1>
                        <div className="star-rating my-1">
                                        <ul className="stars flex justify-start items-center mb-4 my-1">
                                            {generateStars(parseInt(val.rating))}
                                        </ul>
                                    </div>
                        <a href={val.link} className="w-20 h-20 border p-1 mt-2 bg-blue-600 p-2 rounded-md shadow-lg text-white mt-2">Watch Now</a>
                        </div>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default Movies;