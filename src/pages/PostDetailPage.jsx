import './PostDetailPage.css';
import { useParams } from "react-router-dom";
import { supabase } from '../client'
import { useEffect, useState } from 'react';
import Post from '../components/Post';
import Comment from '../components/Comment'; // Import your Comment component here

function PostDetailPage() {

    const params = useParams();

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            let { data, error } = await supabase
                .from('Posts')
                .select('*').eq('id', params.id);

            if (error) {
                console.error('Error fetching data:', error.message);
                console.error('For character id: ', params.id)
            } else {
                if (data.length > 0) {
                    setPost({
                        'id': data[0].id,
                        'course': data[0].course,
                        'difficultyrating': data[0].difficultyrating,
                        'contentrating': data[0].contentrating,
                        'review': data[0].review,
                        'likes': data[0].likes,
                        'created_at': data[0].created_at,
                    })
                }
            }
        };

        const fetchComments = async () => {
            let { data, error } = await supabase
                .from('Comments')
                .select('*').eq('post', parseInt(params.id));

            if (error) {
                console.error('Error fetching data:', error.message);
                console.error('For character id: ', params.id)
            } else {
                if (data.length > 0) {
                    setComments(data);
                }
            }
        };
        fetchPost();
        fetchComments();

    }, [])

    const handleSubmitComment = async (event) => {
        event.preventDefault();
        await supabase
            .from('Comments')
            .insert([{ comment: newComment, post: parseInt(params.id) }])
            .select();

        setComments([...comments, { comment: newComment }])
    }


    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    }

    return (
        <div className='PostDetailPage'>
            <Post
                id={post.id}
                course={post.course}
                difficultyrating={post.difficultyrating}
                contentrating={post.contentrating}
                review={post.review}
                likes={post.likes}
                timeCreated={post.created_at}
                notHomepage={true}
            />
            <div className="commentSection">
                {comments.map(comment => (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        comment={comment.comment}
                    // Add other props as needed
                    />
                ))}
                <textarea
                    value={newComment}
                    className='textArea'
                    onChange={handleCommentChange}
                    placeholder="Write a new comment..."
                />
                <button onClick={handleSubmitComment}>Submit</button>
            </div>
        </div>
    );
}

export default PostDetailPage;
