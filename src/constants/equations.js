import { addStyles, EditableMathField,StaticMathField  } from "react-mathquill"

const tex2=`\\frac{a}{b}`
const tex4=`\\int_{-\\infty}^\\infty
  \\xi\\e^{2 \\pi i}
  \\d\\xi`
const tex1=`\\frac{1}{\\sqrt{x}}`
const tex3=`\\frac{1}{\\sqrt{\\pi}}`
const tex5=`-b\\pm \\sqrt b^2 -4ac`
const tex6=`\\oint_V{a}^{b}`
const tex7=`\\int_{a}^{b} x^2`

const equations = [
    { id: 1, content:<StaticMathField>{tex1}</StaticMathField>,latex:tex1 },
    { id: 2, content:<StaticMathField>{tex2}</StaticMathField>,latex:tex2 },
    { id: 3, content:<StaticMathField>{tex3}</StaticMathField>,latex:tex3},
    { id: 4, content:<StaticMathField>{tex4}</StaticMathField>,latex:tex4},
    { id: 5, content:<StaticMathField>{tex5}</StaticMathField>,latex:tex5},
    { id: 6, content:<StaticMathField>{tex6}</StaticMathField>,latex:tex6},
    { id: 7, content:<StaticMathField>{tex7}</StaticMathField>,latex:tex7},
  ]
  

  const symbols = [
    { id: 1, content: <span className="chars">&#43;</span>},
    { id: 2, content:  <span className="chars">&#8722;</span> },
    { id: 3, content:  <span className="chars">&#247;</span> },
    { id: 4, content:  <span className="chars">&#215;</span> },
    { id: 5, content:  <span className="chars">&#61;</span> },
    { id: 6, content:  <span className="chars">&#8800;</span> },
    { id: 7, content:  <span className="chars">&#60;</span> },
    { id: 8, content:  <span className="chars">&#62;</span> },
    { id: 9, content:  <span className="chars">&#402;</span> },
    { id: 10, content:  <span className="chars">&#37;</span> },
    { id: 11, content:  <span className="chars">&#8707;</span> },
    { id: 12, content:  <span className="chars">&#8709;</span> },
    { id: 13, content:  <span className="chars">&#8712;</span> },
    { id: 14, content:  <span className="chars">&#8713;</span> },
    { id: 15, content:  <span className="chars">&#8719;</span> },
    { id: 16, content:  <span className="chars">&#8721;</span> },
    { id: 17, content:  <span className="chars">&#8727;</span> },
    { id: 18, content:  <span className="chars">&#8747;</span> },
    { id: 19, content:  <span className="chars">&#8748;</span> },
    { id: 20, content:  <span className="chars">&#8745;</span> },
    { id: 21, content:  <span className="chars">&#8746;</span> },
    { id: 22, content:  <span className="chars">&#8764;</span> },
    { id: 23, content:  <span className="chars">&#8804;</span> },
    { id: 24, content:  <span className="chars">&#8805;</span> },
  ]



  export {equations,symbols}