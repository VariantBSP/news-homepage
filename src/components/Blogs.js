const Blog = ({ blog, index }) => {
    return (
        <div className="block">
            <img src={`/images/${blog.img}`} alt="gaming-growth" />
            <article>
                <h1>{index+1}</h1>
                <h2><a href="#">{blog.title}</a></h2>
                <p>{blog.body}</p>
            </article>
        </div>
    );
}

export default Blog;