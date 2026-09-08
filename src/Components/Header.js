import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utility/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Header = () => {
  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      // navigate('/error')
    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAWiPHORowsUPy4Ef8HnCO9JXGoNeHRyWtWY4xZAfUtau5iCnG2Ko_-8QuKVa8P6wtpfnyGopi4LoAha-VghVRE_N6kRqhwpLQCpga5tzrlTEHRGHgzpa9PYmEEEgQyuEdhsyq9vmhmPR.svg"
        alt="logo"/>
        {user && <div className='flex p-2'>
          <img className="w-12 h-12" src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='logo'/>
          {/* <img src={user?.photoURL} className="w-12 h-12 rounded" alt='logo'/> */}
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>}
    </div>
  )
}
