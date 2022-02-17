import React, { useState, useEffect } from "react"
// import { render } from "react-dom";
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"
import "./styles.css"

const CustomHeart = () => <span>♥</span>

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">
      <CustomHeart />
    </button>
  </div>
)

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size")
Size.whitelist = ["extra-small", "small", "medium", "large"]
Quill.register(Size, true)

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font")

Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida",
]
Quill.register(Font, true)

const Editor = (props) => {
  const [editorHtml, seteditorHtml] = useState("")
  const [quill, setquill] = useState()

  function insertHeart() {
    const cursorPosition = quill.getSelection().index
    quill.insertText(cursorPosition, "♥")
    quill.setSelection(cursorPosition + 1)
  }

  const modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertHeart: insertHeart,
      },
    },
  }

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ]

  const handleChange = (html) => {
    seteditorHtml(html)
  }

  useEffect(() => {
    var quillIns = new Quill("#editor", {
      theme: "snow",
    })
    setquill(quillIns)
  }, [])

  return (
    <div>
      <div className="text-editor" id="editor">
        <CustomToolbar />
        <ReactQuill
          value={editorHtml}
          onChange={handleChange}
          placeholder={props.placeholder}
          modules={modules}
          formats={formats}
        />
      </div>
    </div>
  )
}

export default function Test() {
  return (
    <div className="custom-toolbar-example">
      <h3>Custom Toolbar with React Quill (Fully working)</h3>
      <Editor placeholder={"Write something or insert a heart ♥"} />
    </div>
  )
}
