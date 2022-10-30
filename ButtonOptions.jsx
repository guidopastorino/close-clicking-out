import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import '../App.css'

const ButtonOptions = () => {

    const [visibility, setVisibility] = useState(false)

    let menuOptions = useRef(null)
    let buttonOptions = useRef(null)

    useEffect(() => {

        let handler = (e) => {
            if(e.target === buttonOptions.current) return false;
            
            if (!menuOptions.current.contains(e.target)) {
                setVisibility(false)
                console.log(menuOptions.current)
            }
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    return (
        <>
            <nav>
                <div className='options'>
                    <button ref={buttonOptions} onClick={() => setVisibility(!visibility)}>Profile Options</button>

                    <div ref={menuOptions} className={`options-menu ${visibility ? 'active' : 'inactive'}`}>
                        <ul>
                            <li>Profile</li>
                            <li>Interactions</li>
                            <li>Friends</li>
                            <li>Log out</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ButtonOptions