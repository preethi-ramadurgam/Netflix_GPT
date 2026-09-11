import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utility/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../Utility/UserSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGO , SUPPORTED_LANGUAGES, USER} from '../Utility/Constants';
import { toggleGptSearchView } from '../Utility/GptSlice';
import { changeLanguage } from '../Utility/ConfigSlice';
export const Header = () => {
  const navigate = useNavigate();
  const user=useSelector(store=>store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // navigate('/')
    }).catch((error) => {
      // navigate('/error')
    });
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in or signed up
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        // update the store
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
        // window.location.href = "/browse";

      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      return ()=>{
        unsubscribe();
      }
    });
  },[]);
  const handleGptSearchClick=()=>{
    //Toggle the GPT Search View 
    dispatch(toggleGptSearchView());  
  }
  const handleLanguageChange=(e)=>{
    // console.log("language",e.target.value);
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo"/>
        {user && <div className='flex p-2'>
          {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white rounded-lg' onClick={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>
            ))}
          </select>}
          <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
            { showGptSearch?"Home Page":"GPT Search"}
          </button>
          <img className="w-12 h-12" src={USER} alt='logo'/>
          {/* <img src={user?.photoURL} className="w-12 h-12 rounded" alt='logo'/> */}
          <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
        </div>}
    </div>
  )
}
