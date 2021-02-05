import React from 'react';
import './index.css';
import BlogList from './BlogList';
import useFetch from './useFetch'

const Home = () => {
    // fetching data with custom hook called useFetch!
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    //returning the data and putting it in the blog component template
    return (
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;




/*
how to filter blog posts (by auther):

          <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario')  } title="Mario's Blogs!" />

//delete button under blogposts
    const handleDelete = (id) => {
       const newBlogs = blogs.filter(blog => blog.id !== id);
       setBlogs(newBlogs);
    }
*/