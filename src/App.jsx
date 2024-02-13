
import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [passlenength, setlpassenength] = useState(8)
  const [isnumber,setisnumber]=useState(false)
  const [ischar,setischare]=useState(false)
  const [password,setpasword]=useState("")
  const [copycolor,setCopycolor] = useState("bg-lime-600")
  let passref=useRef(null)
  const Password_make=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"
    
    if(isnumber){
      str += "012456789"  
    }

    if(ischar){
      str +="!@#$%^&*"
    }

    for (let i = 1; i <=passlenength; i++) {
      let creatpass = Math.floor(Math.random()* str.length +1)
       pass += str.charAt(creatpass)
    }
    setpasword(pass)
    
  },[passlenength,isnumber,ischar,setpasword])

  const coppy_the_pass = useCallback(()=>{
    __useRef____useRef__
      setCopycolor("bg-lime-600" ? "bg-gray-400":"bg-lime-600")
  },[password])
  
  useEffect(
    ()=>{Password_make()},[passlenength,isnumber,ischar,setpasword]
  )
  console.log(password)
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-500'>
        <h1 className='text-white text-center'>password generator</h1>
          <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
            <div className='flex'>
            <input type="text"
                   value={password}
                   className='outline-none w-full py-1 px-3'
                   placeholder='password'
                   readOnly
                   ref={passref}
            />
            <button className={`outline-none ${copycolor} text-white px-3 py-8.5 shrink-0 rounded-r-lg`}
                    onClick={coppy_the_pass}>copy</button>
            </div>
            <div className='flex text-sm gap-x-2 '>
              <div className='flex items-center gap-x-1'>
                <input type="range" min={6} max={100} value={passlenength} className='cursor-pointer' 
                onChange={(e)=>{setlpassenength(e.target.value),setCopycolor( "bg-gray-400"? "bg-lime-600":"bg-gray-400")}}/>
                <label className='text-white'> Length: {passlenength}</label>
              </div>

              <div className='flex items-center gap-x-1'>

                <input type="checkbox" defaultChecked={isnumber}  id='numberinput' onChange={()=>{setisnumber((prev)=> !prev),setCopycolor( "bg-gray-400"? "bg-lime-600":"bg-gray-400")}}/>
                <label className='text-pink-300'>number</label>
                <input type="checkbox" defaultChecked={isnumber}  id='charactorinput' onChange={()=>{setischare((prev)=> !prev),setCopycolor( "bg-gray-400"? "bg-lime-600":"bg-gray-400")}}/>
                <label className='text-green-300'>Characters</label>
              </div>
            </div>

          </div>

      </div>

    </>
  )
}

export default App
