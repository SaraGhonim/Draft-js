import React, { useState } from "react"
import PropTypes from "prop-types"
import { EditorState, Modifier } from "draft-js"
import { Popover, Typography } from "@mui/material"
import { Calculate, Functions } from "@mui/icons-material"
import { addStyles, EditableMathField,StaticMathField  } from "react-mathquill"

function MathTools({ editorState, onChange , changeLatex }) {
  const [latex, setLatex] = useState(" ")
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)

  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)

  addStyles()
  const id = open ? "simple-popover" : undefined
  const id2 = open2 ? "simple-popover" : undefined

  const tex2=`\\frac{a}{b}`
  const tex4=`\\int_{-\\infty}^\\infty
  \\xi\\e^{2 \\pi i}
  \\d\\xi`
  const tex1=`\\frac{1}{\\sqrt{x}}`
  const tex3=`\\frac{1}{\\sqrt{\\pi}}`
  const tex5=`-b\\pm \\sqrt b^2 -4ac`
  const tex6=`\\oint_V{a}^{b}`
  const tex7=`\\int_{a}^{b} x^2`

  const calcs = [
    { id: 1, content:<span>&#43;</span>},
    { id: 2, content: <span>&#8722;</span> },
    { id: 3, content: <span>&#247;</span> },
    { id: 4, content: <span>&#215;</span> },
    { id: 5, content: <span>&#61;</span> },
    { id: 6, content: <span>&#8800;</span> },
    { id: 7, content: <span>&#60;</span> },
    { id: 8, content: <span>&#62;</span> },
    { id: 9, content: <span>&#402;</span> },
    { id: 10, content: <span>&#37;</span> },
    { id: 11, content: <span>&#8707;</span> },
    { id: 12, content: <span>&#8709;</span> },
    { id: 13, content: <span>&#8712;</span> },
    { id: 14, content: <span>&#8713;</span> },
    { id: 15, content: <span>&#8719;</span> },
    { id: 16, content: <span>&#8721;</span> },
    { id: 17, content: <span>&#8727;</span> },
    { id: 18, content: <span>&#8747;</span> },
    { id: 19, content: <span>&#8748;</span> },
    { id: 20, content: <span>&#8745;</span> },
    { id: 21, content: <span>&#8746;</span> },
    { id: 22, content: <span>&#8764;</span> },
    { id: 23, content: <span>&#8804;</span> },
    { id: 24, content: <span>&#8805;</span> },
  ]

  const functions = [
    { id: 1, content:<StaticMathField>{tex1}</StaticMathField>,latex:tex1 },
    { id: 2, content:<StaticMathField>{tex2}</StaticMathField>,latex:tex2 },
    { id: 3, content:<StaticMathField>{tex3}</StaticMathField>,latex:tex3},
    { id: 4, content:<StaticMathField>{tex4}</StaticMathField>,latex:tex4},
    { id: 5, content:<StaticMathField>{tex5}</StaticMathField>,latex:tex5},
    { id: 6, content:<StaticMathField>{tex6}</StaticMathField>,latex:tex6},
    { id: 7, content:<StaticMathField>{tex7}</StaticMathField>,latex:tex7},
  ]
  const addStar = (item) => {
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      item.props.children,
      editorState.getCurrentInlineStyle(),
    )
    onChange(EditorState.push(editorState, contentState, "insert-characters"))
  }

  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const chooseEquation = (event) => {
    setAnchorEl2(event.currentTarget)
  }
 
  const closeEquation = () => {
    setAnchorEl2(null)
  }

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
          {calcs.map((item) => {
            return (
              <span
                className="span_symbol"
                key={item.id}
                onClick={(e) => addStar(item.content)}
              >
                {item.content}
              </span>
            )
          })}
        </Typography>
      </Popover>


      <Popover
        id={id2}
        open={open2}
        anchorEl={anchorEl2}
        onClose={closeEquation}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {functions.map((item) => {
            return (
              <span
                className="equations"
                key={item.id}
                onClick={(e) => {
                  e.preventDefault();
                  setLatex(item.latex)    
              }}
              >
                {item.content}
              </span>
            )
          })}
        </Typography>
      </Popover>

      <div className="maths-toolbar">
        <Calculate color="primary" onClick={handleClick} />
        <Functions color="primary" onClick={chooseEquation} />

        <EditableMathField
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex())
            console.log("changing latex",mathField.latex())
            changeLatex(latex)
          }}
        />
       </div>
    </>
  )
}

const propTypes = {
  onChange: PropTypes.func,
  editorState: PropTypes.object,
}

export default MathTools

