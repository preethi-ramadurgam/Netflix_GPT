import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utility/Firebase';
import {useDispatch} from 'react-redux'
import { addUser, removeUser } from '../Utility/UserSlice';
import { useEffect } from 'react';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
        if (user) {
            //user is signed in or signed up
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName} = user;
            // update the store
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            // navigate("/browse");
            // window.location.href = "/browse";

        } else {
            // User is signed out
            dispatch(removeUser());
            // navigate("/");
        }
    });
    },[]);
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body