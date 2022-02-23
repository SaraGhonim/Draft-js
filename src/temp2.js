import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, Modifier } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { Calculate, Functions } from "@mui/icons-material"
import { Popover, Typography } from "@mui/material"
import {symbols,equations} from './constants/equations'


function CustomOption({ editorState, onChange , open, anchorEl, handleClose,id }) {


const addStar = (text) => {
    
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      'text',
      editorState.getCurrentInlineStyle(),
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  
    return (
<>
      <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Typography sx={{ p: 2 }}>
        {symbols.map((item) => {
          return (
            <span
              className="span_symbol"
              key={item.id}
              onClick={this.addStar}
            >
              {item.content}
            </span>
          )
        })}
      </Typography>
    </Popover>





           <Calculate color="#000" onClick={this.addStar} />

    
           </>

    
    );
  
}

export default CustomOption
