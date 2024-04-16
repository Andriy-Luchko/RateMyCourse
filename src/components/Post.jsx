import { Link } from 'react-router-dom'
import './Post.css'

function Post({ id, course, review, likes, difficultyrating, contentrating }) {

    return (
        <div className='Post'>
            <div className='postHeader'>
                <h3 className='course'>Course: {course}</h3>
                <h3 className='difficulty'>Difficulty: {difficultyrating}</h3>
                <h3 className='content'>Content: {contentrating}</h3>
            </div>
            <div className='post'>
                <p className='review'>{review}</p>
                <div className='likesAndComments'>
                    <div className='likesContainer'><img className='heartIcon' src='heart.png' /><p className='likes'> {likes} </p></div>
                    <Link to={"/" + id} ><img className='commentIcon' src='comment.png'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Post
