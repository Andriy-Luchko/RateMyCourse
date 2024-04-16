import { Link } from 'react-router-dom';
import './HomePage.css';
import { useEffect, useState } from 'react';
import { supabase } from '../client';
import Post from '../components/Post';

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('Posts')
                .select('*');
            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                console.log(data);
                setPosts(data);
            }
        };
        
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSortNewest = () => {
        const sortedPosts = [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setPosts(sortedPosts);
    };

    const handleSortMostPopular = () => {
        const sortedPosts = [...posts].sort((a, b) => b.likes - a.likes);
        setPosts(sortedPosts);
    };

    const filteredPosts = posts.filter(post =>
        post.course.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='HomePage'>
            <div className='searchBarsContainer'>
                <button className='newest' onClick={handleSortNewest}>Newest</button>
                <button className='mostPopular' onClick={handleSortMostPopular}>Most Popular</button>
                <input 
                    placeholder="Search for Course 🔍" 
                    className="courseSearchbar" 
                    type='text'
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <Link to={"addpost"}><img className="plusIcon" src="plus.png" alt="Plus icon" /></Link>
            </div>
            <div className='postsContainer'>
                {filteredPosts.map((post) => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        course={post.course}
                        difficultyrating={post.difficultyrating}
                        contentrating={post.contentrating}
                        review={post.review}
                        likes={post.likes}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;

