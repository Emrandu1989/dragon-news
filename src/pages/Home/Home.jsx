import { useLoaderData } from "react-router-dom";
import LeftSide from "../../components/LeftSide/LeftSide";
import RightSide from "../../components/RightSide/RightSide";
import SingleNews from "../../components/SingleNews/SingleNews";


const Home = () => {
    const news = useLoaderData();
    return (
        <>
           <div className="text-center">
           <div className="grid grid-cols-4">
                  <div className="col-span-1">
                          <LeftSide />
                  </div>
                  <div className="col-span-2">
                      {
                        news.map(item=><SingleNews
                         key={item._id}
                          item = {item}
                        ></SingleNews>)
                      }
                  </div>
                  <div className="col-span-1">
                         <RightSide />
                    </div>    
            </div>    
           </div>
        </>
    );
};

export default Home;