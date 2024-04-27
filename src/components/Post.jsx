import { Link } from 'react-router-dom'
import './Post.css'
import { supabase } from '../client';
import { useState, useEffect} from 'react';

function Post({ id, course, review, likes, difficultyrating, contentrating, notHomepage, timeCreated }) {
    const [count, setCount] = useState(likes);
    useEffect(() => {
        setCount(likes);
    }, [likes]);



    async function handleLike() {
        const { data, error } = await supabase
            .from('Posts')
            .update({ likes: count + 1 })
            .eq('id', id)
            .select()
        setCount(count + 1);
    }
    const deletePost = async () => {
        try {
            const { error } = await supabase
                .from('Posts')
                .delete()
                .eq('id', id); // Assuming 'id' is the primary key of your Post table
            if (error) {
                throw error;
            }
            window.location = "/";
            // Handle successful deletion, e.g., redirect or update state
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='Post'>
            <div className='postHeader'>
                <h3 className='course'>Course: {course}</h3>
                <h3 className='difficulty'>Difficulty: {difficultyrating}</h3>
                <h3 className='content'>Content: {contentrating}</h3>
                <h3 className='time'>time Created: {new Date(timeCreated).toLocaleString()}</h3>
            </div>
            {notHomepage ? <div className='post'>
                <p className='review'>{review}</p>
                <div className='likesAndComments'>
                    <button onClick={handleLike} className='likesContainer'><img className='heartIcon' src='heart.png' /><p className='likes'>{count}</p></button>
                    <Link to={"/" + id} ><img className='commentIcon' src='comment.png' /></Link>
                    <button onClick={deletePost}>Delete Post</button>
                </div>
            </div>
                : <div className='post'>
                    <div className='likesAndComments'>
                        <button onClick={handleLike} className='likesContainer'><img className='heartIcon' src='heart.png' /><p className='likes'> {likes} </p></button>
                        <Link to={"/" + id} ><img className='commentIcon' src='comment.png' /></Link>
                    </div>
                </div>}
        </div>
    )
}

export default Post
