import "./App.css"
import React, { Fragment } from "react";
import {EditorState} from "draft-js";
import { addStyles,StaticMathField } from 'react-mathquill'
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";  
import EquationsTools from "./components/EquationsTools"
import CharactersOptions from "./components/CharactersOptions"

addStyles()

class App extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  };
  onEditorStateChange = (editorState) => {this.setState({editorState})};

  render() {
    const { editorState } = this.state;

    return (

    <Fragment>
              
    
      <section className="simple">
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          toolbarCustomButtons={[<EquationsTools /> , <CharactersOptions/>]}
          blockRendererFn={this.blockRenderer}
          placeholder="Start typing here"/>
      </section>
    </Fragment>
    );
  }

  blockRenderer = (contentBlock) => {
    const type = contentBlock.getType();
    console.log('type',type)
    if (type === "atomic") {
      return {
        component: this.Component,
        editable: true,
        props: {
          "foo": "bar"
        }
      }
    }
  };
  Component = (props) => {
   const { block, contentState } = props;
   const data = contentState.getEntity(block.getEntityAt(0)).getData();
   return (
      <StaticMathField>{data.latex}</StaticMathField>    
  );
};
  
  
  onChange = editorState => this.setState({ editorState });

 }

export default App;
