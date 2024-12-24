/* eslint-disable react/prop-types */
import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {Context} from "../context/Context"
function PreviewBtn({id}) {
    const navigate = useNavigate();
    const {navigation} = useContext(Context)

    const handlePreview = ()=>{
        return(
            navigate(`/${id}`)
        )
    }

  return (
    <React.Fragment>
        <button onClick={handlePreview}  className={` ${!navigation&&"z-10"} bg-white font-semibold 
        rounded-sm`}>Preview</button>
    </React.Fragment>
  )
}

export default PreviewBtn