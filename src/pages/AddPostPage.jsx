import { useState } from 'react';
import './AddPostPage.css';
import { supabase } from '../client';

function AddPostPage() {
    const [inputs, setInputs] = useState({
        course: "",
        difficultyrating: 3, // Default difficulty set to 3
        contentrating: 3, // Default content set to 3
        review: "",
        likes: 0,
    });

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const addPost = async (event) => {
        event.preventDefault();
        console.log("bruh");
        await supabase
            .from('Posts')
            .insert([{ course: inputs.course, difficultyrating: inputs.difficultyrating, contentrating: inputs.contentrating, review: inputs.review, likes: inputs.likes }])
            .select();

        window.location = "/";
    };

    return (
        <div className='AddPostPage'>
            <form className='form'>
                <div className='postInfoContainer'>
                    <div className='postInfoHeaderContainer'>
                        <div className='courseContainer'>
                            <p className='white' >Course Title:</p>
                            <input className='courseInput' type='text' name="course" value={inputs.course} onChange={handleChange} />
                        </div>
                        <div className='difficultyContainer'>
                            <p className='white'>Difficulty: {inputs.difficultyrating}</p>
                            <input className='difficultyInput' type='range' name="difficultyrating" min={1} max={5} value={inputs.difficultyrating} onChange={handleChange} />
                        </div>
                        <div className='contentContainer'>
                            <p className='white'>Content: {inputs.contentrating}</p>
                            <input className='contentInput' type='range' name="contentrating" min={1} max={5} value={inputs.contentrating} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='reviewContainer'>
                        <p>Review:</p>
                        <textarea className='reviewInput' name="review" value={inputs.review} onChange={handleChange} />
                    </div>
                </div>
                <button className='addPost' onClick={addPost}>Add Post!</button>
            </form>
        </div>
    )
}

export default AddPostPage;

