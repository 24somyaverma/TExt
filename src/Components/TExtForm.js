import React,{ useState } from 'react'
// import PropTypes from 'prop-types'

export default function TExtForm(props) {
    const [text, settext] = useState('');
    const handleupclick = ()=>{
        console.log("Buttoncliccked")
        let newtext = text.toUpperCase();
        console.log(newtext)
        settext(newtext)

    }
    const handledownclick = ()=>{
        console.log("Buttoncliccked")
        let newtext = text.toLowerCase();
        console.log(newtext)
        settext(newtext)

    }
    const clearf = ()=>{
        console.log("Buttoncliccked")
        let newtext = '';
        console.log(newtext)
        settext(newtext)

    }
    // const [text, settext] = useState('Enter the text');
    const handlechange = (event)=>{
        console.log("changed")
        settext(event.target.value)

    }
    return (
        <div>


        <div classname="mb-3"> 
            {
                <h1> Enter Text to convert</h1>
            /* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} placeholder='Enter the text' onChange={handlechange} id="myBox" rows="10"></textarea>
            {/* <textarea className="form-control"  id="myBox" rows="8"></textarea> */}
        </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleupclick}>Click here to convert to uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handledownclick}>Click here to convert to lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={clearf}>Click here to clear</button>
        
        
        {/* <div className="mb-3"> 
            <textarea className="form-control" value={text}  id="myBox" rows="8"></textarea>
            </div> */}
        </div>

    )
}
// import React, {useState} from 'react'


// export default function TextForm() {
//     // const handleUpClick = ()=>{
//     //     // console.log("Uppercase was clicked: " +  text);
//     //     let newText = text.toUpperCase();
//     //     setText(newText)
//     // }

//     // const handleOnChange = (event)=>{
//     //     // console.log("On change");
//     //     setText(event.target.value)
//     // }

//     const [text, setText] = useState('Enter text here2'); 
//     // // text = "new text"; // Wrong way to change the state
//     // // setText("new text"); // Correct way to change the state
//     return (
//         <div> 
//             {/* <h1>{props.heading}</h1> */}
//             <div className="mb-3"> 
//             <textarea className="form-control" value={text}  id="myBox" rows="8"></textarea>
//             </div>
//             {/* <button className="btn btn-primary">Convert to Uppercase</button> */}
//         </div>
//     )
// }