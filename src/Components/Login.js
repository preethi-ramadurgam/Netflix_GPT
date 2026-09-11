import React, { useState ,useRef } from 'react'
import { Header } from './Header'
import { checkValidateData , checkValidateSignUpData} from '../Utility/Validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utility/Firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utility/UserSlice';
import { USER_AVATAR } from '../Utility/Constants';
import { BG_URL } from '../Utility/Constants';
const Login = () => {
    // const navigate = useNavigate();
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick=()=>{
        //Validate the form Data 
        // console.log(email.current.value);
        // console.log(password.current.value);
        // if (!isSignInForm) {
        //     console.log("Name value:", name.current?.value);
        // }
        const message = isSignInForm 
            ? checkValidateData(email.current.value, password.current.value)
            : checkValidateSignUpData(name.current.value, email.current.value, password.current.value);
        console.log(message);
        setErrorMessage(message);
        if(message)
            return;
        if(message === null){
            //create a new user->signin or signup logic
            if(!isSignInForm){
                //Sign Up Logic
                createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: USER_AVATAR
                        }).then(() => {
                            const {uid,email,displayName} = auth.currentUser;
                            dispatch(addUser({uid,email,displayName,photoURL:USER_AVATAR}));
                            // navigate("./");
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                    });
                    console.log(user); 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
            }
            else{
                //Sign In Logic
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("./browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"@"+errorMessage);
                });
            }
        }
    };
  return (
    <div className='h-screen overflow-y-hidden'>
        <Header/>
        <div className='absolute'>
            <img className='h-screen object-cover' src={BG_URL} alt="Netflix"/>
        </div>
        <form onSubmit={(e)=>{e.preventDefault()}} className='w-full md:w-3/12 absolute p-12 bg-black my-10 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type='text' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' ref={password} placeholder='password' className='p-4 my-4 w-full  bg-gray-700'/>
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New To Netflix? Sign Up Now":" Already Registered? Sign In Now "}</p>
        </form>
    </div>
    //Login Form 
  )
}

export default Login