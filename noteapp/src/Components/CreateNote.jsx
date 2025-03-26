import React from 'react'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char = 100;
    const charLimit = char - inputText.length;
    
    return (
        <div className='note'>
            <textarea
                cols={10}
                rows={5}
                placeholder='Write your note here...'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={100}
                className='note-textarea'
            ></textarea>
            <div className='note_footer'>
                <span className={`char-limit ${charLimit < 20 ? 'warn' : ''}`}>{charLimit} characters left</span>
                <button 
                    className={`note_save ${inputText.trim() === '' ? 'disabled' : ''}`} 
                    onClick={saveHandler} 
                    disabled={inputText.trim() === ''}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateNote
