import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import AddPostPage from './pages/AddPostPage'
import PostDetailPage from './pages/PostDetailPage';
function App() {

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="addpost" element={<AddPostPage />} />
                <Route path=":id" element={<PostDetailPage/>} />
            </Routes>
        </div>
    );
}

export default App;
