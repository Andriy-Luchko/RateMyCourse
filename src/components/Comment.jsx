import './Comment.css'

function Comment({ comment }) {

    return (
        <div className='Comment'>
            <p className='commentText'>{comment}</p> 
        </div>
    )
}

export default Comment
