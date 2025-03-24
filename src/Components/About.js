import React from 'react'

export default function About(props) {
  let myStyle={
    color:props.mode === "dark"? "white":"black",
    backgroundColor:props.mode === "dark"? "#054444":"white"
  }
  let myStyle2={
    backgroundColor:props.mode==="dark"?"#175757":"white",
    color:props.mode === "dark"? "white":"black",
  }
  return (
    <div className='container'>
      <h3 className='my-3'>About Us</h3>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
      <strong>Analyze Your text </strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle2}
      
      >
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
       
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo"  style={myStyle}>
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body"style={myStyle2}>
       TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit..
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree"  style={myStyle}>
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body"style={myStyle2}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc. 
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
