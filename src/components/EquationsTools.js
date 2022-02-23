import React, { useState } from "react"
import { EditorState,Modifier,SelectionState } from "draft-js"
import { Functions } from "@mui/icons-material"
import { addStyles } from "react-mathquill"
import {equations} from '../constants/equations'
import PopOver from './popOver'
import PopMathField from './popMathField'


function MathTools({ editorState, onChange }) {
  const [latex, setLatex] = useState(" ")
  const [anchorEl1, setAnchorEl1] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)

  const open1 = Boolean(anchorEl1)
  const open2 = Boolean(anchorEl2)

  addStyles()
  const id1 = open1 ? "simple-popover" : undefined
  const id2 = open2 ? "simple-popover" : undefined

  const setCursorPosition = (block,cursor) => {

    const selection = new SelectionState({
      anchorKey: block,
      anchorOffset: cursor,
      focusKey: block,
      focusOffset: cursor,
    });

    onChange(EditorState.forceSelection(editorState,selection))
 

  }

  
  const closeEquations = () => {
    setAnchorEl2(null)

  }
  const openEquations = (event) => {
    setAnchorEl2(event.currentTarget)
  }
  
  const openMathField = (event) => {
    setAnchorEl1(event.currentTarget)
  }
  const closeMathField = (block,cursor) => {
    setAnchorEl1(null)
    setCursorPosition(block,cursor)

  }
  const chooseEquation = (item,e) => {
    setLatex(item.props.children)
    closeEquations()
    openMathField(e)

  }
  
  return (
    <>
      <PopMathField id={id1} open={open1} handleClose={closeMathField} latex={latex} onChange={onChange} editorState={editorState}/> 
      <PopOver id={id2} open={open2} anchorEl={anchorEl2} content={equations} handleClose={closeEquations} click={chooseEquation}/> 
      <div className="maths-toolbar"> 
          <div className="Icon">
             <Functions color="black" onClick={openEquations} />
           </div>
      </div> 
    </>
  )
}

export default MathTools

