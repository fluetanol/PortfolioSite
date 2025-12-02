'use client'
import { useEffect, useState } from "react";


export default function MainHeader(){
    const menu_items = ["메뉴1", "메뉴2", "메뉴3", "메뉴4"];
    const [menuIdx_state, setMenuIdx_state] = useState<number>(0); 
    const [menuXTranslate_state, setMenuXTranslate_state] = useState<number>(0);
    const handleMenuClick = (index :number)=>{
        setMenuIdx_state(index);
        setMenuXTranslate_state(index*6);
    }
    useEffect(()=>{
        console.log(menuIdx_state);
        console.log(menuXTranslate_state);
    }, [menuIdx_state, menuXTranslate_state])

    return(
        <header className="fixed flex w-full px-4 items-center z-50 justify-center bg-white border-b border-gray-500"> 
         <div 
            className = {`relative flex w-fit after:content-[''] after:absolute after:inset-0 after:border-b-2 after:w-24  after:transition-all after:duration-300
            ${
                menuIdx_state===0 ? 'after:translate-x-0' : 
                menuIdx_state===1 ? 'after:translate-x-24' : 
                menuIdx_state===2 ? 'after:translate-x-48' : 'after:translate-x-72'}
            `}
         >
          
          {
            menu_items.map((item, index)=>{
              return (<button key={index} className={`w-24 h-14 z-10
                hover:cursor-pointer
                `} onClick={()=>handleMenuClick(index)}>{item}</button>);
            })
          }
         </div>
        </header>
    )
}