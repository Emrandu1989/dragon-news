import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const RightSide = () => {
    return (
        <>
                 <div className="mr-2">
                        <div >
                           <h2 className="my-5 text-2xl font-bold text-start">Login With</h2>  
                           <div className="flex flex-col gap-3">
                           <button className="btn"> <FaGoogle /> Google  </button> 
                           <button className="btn"> <FaGithub /> GitHub </button> 
                           </div>
                        </div>
                        <div className="my-5">
                             <h2 className="text-3xl font-bold text-pink-500 text-start my-3">Find Us</h2>    
                             <div className="flex flex-col gap-3">
                           <button className="btn"> <FaFacebook /> FaceBook  </button> 
                           <button className="btn"> <FaTwitter /> Twitter </button> 
                           <button className="btn"> <FaInstagram /> Instagram </button> 
                           </div>
                        </div> 
                        <div>
                        <h2 className="text-3xl font-bold text-pink-500 text-start my-3">Q Zone</h2>  
                          <div className="flex flex-col">
                                <img src={qZone1} alt="" />
                                <img src={qZone2} alt="" />
                                <img src={qZone3} alt="" />
                         </div>   
                        </div> 
                           
                </div>  
        </>
    );
};

export default RightSide;