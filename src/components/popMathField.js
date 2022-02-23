import React,{ useState,useEffect} from 'react';
import { Popover, Typography,Button } from "@mui/material"
import { EditableMathField  } from "react-mathquill"
import { EditorState,AtomicBlockUtils,Modifier,SelectionState } from "draft-js"

function PopMathField ({id,open,handleClose,latex,editorState,onChange}) {
     const [field, setField] = useState(latex)

     useEffect(() => {  
        console.log("3: render the drop and the field should be set",field,latex) 
        setField(latex);
        console.log(field,latex) 
        console.log("4: reder the drop and the field should be set",field,latex) 

    },[latex]);


const insertEquation = (typedLatex) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();

    const cursorPlace=selectionState._map._root.entries[3][1]
    const blockKey=selectionState._map._root.entries[2][1]
    handleClose(blockKey,cursorPlace)
       
    const contentStateWithEntity = contentState.createEntity("TEST","MUTABLE",{ latex: typedLatex });
    
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    
    const contentStateWithLatex = Modifier.applyEntity(
      contentStateWithEntity,
      selectionState,
      entityKey,
        );
    
    const newEditorState = EditorState.set(editorState, {currentContent: contentStateWithLatex});   
    onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState,entityKey," "))
};
    

    return (
      <>
        <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        onClose={handleClose}
        anchorPosition={{ top: 95, left: 440 }}
        anchorOrigin={{vertical: 'top',horizontal: 'left'}}
        transformOrigin={{vertical: 'top',horizontal: 'left'}}
      >

        <Typography sx={{ p: 2 }}>
            
        <div className="popMathField">

          <div className="field">

          <EditableMathField
          latex={latex}
          onChange={(mathField) => {
            setField(mathField.latex())

        }}
        />
          </div>
              
       <Button className="ButtonX" variant="outlined" onClick={()=>{
           insertEquation(field)}} color="secondary" size="small">Insert Equation</Button>

        </div>

        </Typography>
      </Popover>
</>

    );
  
}

export default PopMathField
