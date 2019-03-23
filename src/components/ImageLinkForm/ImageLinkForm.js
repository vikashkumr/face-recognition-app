import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {'This magic Brain will detect faces in your picture.'}
            </p>
            <div className='center'>
            <div>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
            </div>
            </div>
            </div>
        </div>
        
    )
}

export default ImageLinkForm;