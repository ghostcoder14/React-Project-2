import { useState , useCallback , useEffect } from 'react';
import './App.css'

const App = () => {
 const[length , setlength] = useState(8);
 const[number , Setnumber] = useState(false);
 const[char , setchar] = useState(false);
 const[Password , setpassword] = useState("");

  const PasswordGenerator =   useCallback( () => {
     let pass = " ";
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
     
         if(number) str += "0123456789"
         if(char) str += "!@#$%^&*()_+`~{}[]="

            for (let index = 1; index <= length; index++) {
              let char = Math.floor(Math.random() * str.length + 1);
               pass += str.charAt(char);
            }
            setpassword(pass)

    } , [length , number , char , setpassword])
    useEffect(() => {
      PasswordGenerator()
    }, [length, number, char, PasswordGenerator])

      return(
       <>
       <div className=' w-full grid  max-w-md mx-auto shadow-md rounded-lg px-10 my-10 text-orange-500 bg-gray-700'>
              <h1 className='text-white text-2xl text-center my-3'>Password Generator</h1>
             <div className='className ="flex-shadow rounded-lg  overflow-hidden mb-4"'>
              <input 
              type="text"
              value ={Password}
              className='outlint-none w-full py-1 px-3'
              placeholder='password'
              readOnly
               />
           <button className='outlinr-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
                   Copy
               </button>
             </div>
             <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
              <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              Setnumber((prev) => !prev);
          }}
      />
                <label htmlFor="numberInput">Number</label>
              </div>
              <div className='flex items-center gap-x-1'>
              <input type="checkbox" 
                defaultChecked = {char} 
                id='numberInput'
                onChange={() => {
                  setchar((prev) => !(prev));
                }}
                />
                <label htmlFor="char"> Character</label>
              </div>
             </div>
       </div>
       
       </>
      );
    }

    export default App
