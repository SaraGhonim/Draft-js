import React, { Fragment } from "react";
import {
    Editor,
    EditorState,
    AtomicBlockUtils,Modifier,SelectionState
} from "draft-js";
import { addStyles,StaticMathField } from 'react-mathquill'
import MathTools from "./MathTools"
import "./App.css"

addStyles()

class App extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    latex:'\\frac{1}{\\sqrt{2}}\\cdot 2',
  };

  render() {
    const { editorState } = this.state;

    return (

      <Fragment>
        
        <MathTools editorState={editorState} onChange={this.onChange} changeLatex={this.changeLatex} ></MathTools>

        <button onClick={()=> this.insertBlock(this.state.latex)}>insertEquation</button>
 
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRenderer}
        />
      </Fragment>
    );
  }

  blockRenderer = (contentBlock) => {
    const { latex } = this.state;
    const type = contentBlock.getType();
  
    if (type === "atomic") {
      return {
        component: this.Component,
        editable: true,
        props: {
          latex: latex
        }
      };
    }
  };
  Component = (props) => {
   const { block, contentState, blockProps } = props;
   const data = contentState.getEntity(block.getEntityAt(0)).getData();
   return (
      <StaticMathField>{data.latex}</StaticMathField>    
  );
};
  
  
  onChange = editorState => this.setState({ editorState });
  changeLatex = latex => this.setState({ latex });

  insertBlock = () => {
    const { editorState,latex } = this.state;
    const contentState = editorState.getCurrentContent();

    const cursor = editorState.getSelection();
    console.log("cusrsor",cursor._map._root.entries[3][1])
    console.log("insertEq function what is the latex",latex)
    // create new selection state where focus is at the end
    const cursorPlace=cursor._map._root.entries[3][1]
    const blockKey=cursor._map._root.entries[2][1]
      
    const selectionState = new SelectionState({
           anchorKey: blockKey,
           anchorOffset: cursorPlace,
           focusKey: blockKey,
           focusOffset: cursorPlace,
         });
   
   
    const contentStateWithEntity = contentState.createEntity(
      "TEST",
      "MUTABLE",
      { latex: latex }
    );

    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    const contentStateWithLatex = Modifier.applyEntity(
      contentStateWithEntity,
      selectionState,
      entityKey,
    );

    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithLatex
    });

    this.setState({
      editorState: AtomicBlockUtils.insertAtomicBlock(
        newEditorState,
        entityKey,
        " "
      )
    });
  };
}

export default App;
