import React, { useState } from "react"
import { EditorState,Modifier,SelectionState } from "draft-js"
import { Calculate, Functions,SortByAlpha } from "@mui/icons-material"
import { addStyles } from "react-mathquill"
import {frenchSymbols} from '../constants/frenchSymbols'
import PopOver from './popOver'


function Characters({ editorState, onChange,IconName,content }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [cursor, setCursor] = useState(null)
  const [block, setBlockKey] = useState(null)


  const open = Boolean(anchorEl)

  addStyles()
  const id = open ? "simple-popover" : undefined

  const setCursorPosition = (block,cursor) => {

    const selection = new SelectionState({
      anchorKey: block,
      anchorOffset: cursor,
      focusKey: block,
      focusOffset: cursor,
    });

    onChange(EditorState.forceSelection(editorState,selection))
  }

  const openCharacters = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeCharacters = () => {
    setAnchorEl(null)
    setCursorPosition(block,cursor)
   
  }

  const insertCharacters = (character) => {
    // get current editor state 
    const currentContent = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const cursorPlace=selectionState._map._root.entries[3][1]
    const blockKey=selectionState._map._root.entries[2][1]

    setCursor(cursorPlace+1)
    setBlockKey(blockKey)
     
    //insert text at the selection created above 
    const textWithInsert = Modifier.insertText(currentContent, selectionState, character.props.children, null);
    const editorWithInsert = EditorState.push(editorState, textWithInsert, 'insert-characters');

    //also focuses cursor at the end of the editor 
    onChange(EditorState.forceSelection(editorWithInsert, textWithInsert.getSelectionAfter()))
       
}

  return (
    <>
      <PopOver id={id} open={open} anchorEl={anchorEl} content={content} handleClose={closeCharacters} click={insertCharacters}/> 

      <div className="maths-toolbar">          
           <div className="Icon">
              <IconName color="black" onClick={openCharacters} /> 
           </div>
       </div> 
    </>
  )
}

export default Characters

