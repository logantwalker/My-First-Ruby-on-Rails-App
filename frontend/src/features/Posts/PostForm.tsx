import React, {useState} from "react";
import { useDispatch } from "react-redux";

function PostForm(){
    const dispatch: AppDispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault();

        const formData = {
            post : {
                title: title,
                body: body
            }
        }

        dispatch(createPostAsync(formData));
        resetState();
    }

    const resetState = () =>{
        setTitle('');
        setBody('');
    }

    return(
        <React.Fragment>
            <h1>Post Form</h1>
            <form>
                <input type='text' className="form-control text-start" name='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea className="form-control text-start" name='body' value={body} onChange={e => setBody(e.target.value)}/>
                <button type='submit' onClick={e => submitHandler(e)}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default PostForm;