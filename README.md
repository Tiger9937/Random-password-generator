
# React + Vite (project No. 2-98)

## 1. what is this project ?

this is random password generator that generat the random password and make your life easy. many time you tary to 
get complex password quick and vary easily but the Problem is that you not remember quickly and complex password is the necessary thing for your security. to solve this problem i creat a app that give you the complex password less than one second.

## 2. step of making this app ?
__NO.1 installation step__

Step A-----> Creat #React+vite app by using npm

```bash
  npm create vite@latest my-project -- --template react
```
step B----> run your #React+vite app
```bash
   npm run dev 
```
remember all the step are work only if you install nodejs and npm package manager on your computer. if you are not install nodejs&npm first install them and then try to this 
two step 

Step C----> install tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
now further step you can go to official document of tailwindcss.

__click this logo go to tailwindcss official guides__
  
[![twitter](data:image/jpeg;base64,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)](https://tailwindcss.com/docs/guides/vite)

__NO.2 setup your all react hooks__

in this step i setup my all hooks that required to making this project. in this project i use __useState,useCallback,useEffect,useRef__. 

import all the hooks inside your React components  
```bash
   import { useState,useCallback,useEffect,useRef } from 'react'
```

this is my all __useState__ that use this project
```bash
  const [passlenength, setlpassenength] = useState(8)
  const [isnumber,setisnumber]=useState(false)
  const [ischar,setischare]=useState(false)
  const [password,setpasword]=useState("")
  const [copycolor,setCopycolor] = useState("bg-lime-600")
```

now create the function that prodeus the password

```
  const Password_make=useCallback(()=>{
    //inside of this all logic are written here 
  },[passlenength,isnumber,ischar,setpasword])
```

now the time to execute the function by using __useEffect__
```
   useEffect(
     ()=>{Password_make(),[passlenength,isnumber,ischarsetpasword]}
   )
```
Rember this __[passlenength,isnumber,ischarsetpasword]__ is use to Rerun the function it means that if somting change happened in this 3 element the Password_make() function are run again.

__useRef__ this hook is use to pass the reference of the compnent that have support to manipulate the particular state.

for better understand __useRef__ i give the youtube video link 🔗 https://youtu.be/yviJikU4gwk?si=UOlR_EVvh1lbbQS4



__NO.3 make the copy button__

to making the copy button i use this two method one method is copy to the selected word and other method arre use to pass the reference of the copy state 
``` bash
passref.current?.select()
window.navigator.clipboard.writeText(password)
 ```
 ## 3.technology used



| technology             | version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| NodeJS | ![]() 21.6.1 |
| ReactJs | ![]() 18.2.0 |
| vite | ![]() 5.1.1 |
| tailwind CSS  | ![]() 3.4.1 |


## 4.learing concepts 
 - [useState hook](https://legacy.reactjs.org/docs/hooks-state.html)
 - [useRef](https://react.dev/reference/react/useRef)
 - [useEffect](https://legacy.reactjs.org/docs/hooks-effect.html)
 - [useCallback](https://react.dev/reference/react/useCallback)

## 5. about this project
this is the sample random password generator that help to make more complex password vare easily and effectly. this project give you the better understanding of how the thre hooks are work of practical worlds.

also this project is the part of my react __100 project change__ that change give myself. in is change i make the 100 project by using Reactjs and this is the 2 project of this change.

   __Authors__
- [@JagannathSahoo](https://github.com/Tiger9937)

__Social media__
- [LinkedIn](https://www.linkedin.com/in/jagannath-sahoo-0a455a2a9/)

