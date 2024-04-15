import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateCurrentUser} from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate=useNavigate();
    const [showpassword, setShowPassword]= useState('');
    const [formValues, setFormValues]=useState({
       email: '',
       password:'',
    });
    const handelSignIn=async()=>{
       try{
        const {email,password}=formValues;
        await createUserWithEmailAndPassword(firebaseAuth,email,password);
       }
       catch(err){
        console.log("Error in signing up", err);        
       }
    };
    onAuthStateChanged(firebaseAuth,(updateCurrentUser)=>{
        if (updateCurrentUser) navigate("/")
    })


  return (
   <Container showpassword={showpassword}>
    <BackgroundImage/>
    <div className='content'>
    <Header login/>
    <div className='body flex column a-center j-center'>
        <div className='text flex column'>
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>Ready to Watch? Enter your email to create or restart membership</h6>

        </div>
        <div className='form'>
            <input type='email' placeholder='Email Address' name='email' value={formValues.email} 
            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})}/>

            {
                showpassword &&
            (
            <input type='password' placeholder='Password' name='password' value={formValues.password} 
            onChange={(e)=>setFormValues({...formValues,[e.target.name]:e.target.value,})}/>
            )}
            
            {
                !showpassword &&
                (<button onClick={()=>setShowPassword('show') }>Get Started</button>
            )}
           

        </div>
        <button onClick={handelSignIn}>Sign Up</button>
    </div>
    </div>
   </Container>
  );
}

const Container=styled.div`
    position: relative;
    .content{
        position:absolute;
        top:0;
        left:0;
        right:0;
        background-color:rgba(0,0,0,0.5);
        height: 100vh;
        widht: 100vw;
        display: grid;
        grid-template-rows:15vh 85vh;
    .body{
        gap:1rem;
        .text{
                gap:1rem;
                text-align:center;
                font-size: 1rem;
                h1{
                    padding:0 25rem;
                }
            }
        .form{
                    display:grid;
                    grid-template-columns:${({ShowPassword})=>ShowPassword?'1fr 1fr':'2fr 1fr'};
                    width:30%;
                    input{
                    
                        color: black;
                        border:none;
                        padding:0.7rem;
                        font-size:0.85rem;
                        border-radius:0.5rem;
                        border:0.5px solid black;
                        &:focus{
                            outline: none;
                        }
                    }
                    button{
                        padding :0.5rem 1rem;
                        background-color: #e50914;
                        border:none;
                        cursor:pointer;
                        color: white;
                        font-weight: bolder;
                        font-size=1.05rem;
                    }
                }
                button{
                    padding :0.5rem 1rem;
                    background-color: #e50914;
                    border:none;
                    cursor:pointer;
                    color: white;
                    border-radius: 0.5rem;
                    font-weight: bolder;
                    font-size=1.05rem;
                }
        }
    }`;