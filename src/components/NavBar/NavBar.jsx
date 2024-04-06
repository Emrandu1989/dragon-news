import { NavLink } from "react-router-dom";
import userImg from '../../assets/user.png';

const NavBar = () => {
    const links = <>
           <li> <NavLink className='mr-2' to='/'>Home</NavLink>  </li>
           <li> <NavLink className='mr-2'  to='/about'>About</NavLink> </li>
           <li> <NavLink className='mr-2'  to='/career'>Career</NavLink>  </li>
           <li> <NavLink className='mr-2'  to='/login'>Login</NavLink>  </li>
           <li> <NavLink to='/register'>Register</NavLink>  </li>
     </>
    return (
        <>
             <div className="navbar my-12  bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
      </ul>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-2">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <img className="w-12 mr-3" src={userImg} alt="" />
    <button className="btn">LogOut</button>
  </div>
</div>     
        </>
    );
};

export default NavBar;