import { useEffect, useState } from "react";


const LeftSide = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
          fetch('categories.json')
          .then(res=>res.json())
          .then(data=> setCategory(data))
    },[])
    return (
        <>
            <div className="text-center font-bold">
              <h2>LeftSide: {category.length} </h2>   
             <div >
             {
                category.map(item => <p className="my-3 text-blue-500" key={item.id}>{item.name}</p> )
              }
             </div>
            </div>
        </>
    );
};

export default LeftSide;