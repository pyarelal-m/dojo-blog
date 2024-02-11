import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [var1, setVar1] = useState('Hello World!');
    // const [blogs, setBlogs] = useState([
    //     { title: "t1", body: "body 1", author: "mario", id: 1 },
    //     { title: "t2", body: "body 2", author: "yoshi", id: 2 },
    //     { title: "t3", body: "body 3", author: "mario", id: 3 },
    //     { title: "t4", body: "body 4", author: "pyare", id: 4 }
    // ]);
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog)=>blog.id != id);
        setBlogs(newBlogs);
    };

    
    useEffect(() => {
        console.log("use effect ran !");
        // console.log(var1);
        fetch("http://localhost:3030/blogs").then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setBlogs(data);
        });
    }, []);
    // console.log('var 1: ', var1);
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />}
            {/* {blogs && <BlogList blogs={blogs.filter((blog)=>blog.author == 'mario')} title="Mario's Blogs!" handleDelete={handleDelete} />} */}
            {/* <BlogList blogs={blogs.filter((blog)=>(blog.author == 'mario'))} title="Mario's Blogs!" handleDelete={handleDelete} /> */}
            {/* <BlogList blogs={blogs.filter((blog)=>{return blog.author == 'mario'})} title="Mario's Blogs!" handleDelete={handleDelete} /> */}
            <button onClick={() => setVar1('Hello Pyare!!')}>change name</button>
            <p>{var1}</p>
        </div>
    );
}
 
export default Home;