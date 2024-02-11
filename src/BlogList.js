// const BlogList = (props) => { //it also works combination 1
const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;//it also works combination 1
    // const title = props.title;//it also works combination 1
    return (
        <div className="blog-list">
            <h2>{title}</h2>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author}</p>
                <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
            </div>
        ))}
        </div>
    );
}
 
export default BlogList;