import axios from "axios";


const BlogDetails = async ({ params }) => {
    
    
    const { slug } = params;
    let blog;

    try {
        const response = await axios.get(
            `https://nifty.spider.ws/public/api/blogs/${slug}`
        );
        blog = response.data.data;
        console.log(response.data.data);
        
    } catch (error) {
        console.error("Error fetching blog details:", error);
        return <p>Failed to load blog details.</p>;
    }

    if (!blog) return <p>Loading...</p>;

    return (
        <section className='blog-details container'>
            <h1>{blog.title}</h1>
            <h6>Category: <span>{blog.category.name}</span>Published On: <span>{blog.published_on}</span></h6>
            <img src={blog.featured_image.file_path} alt={blog.title} className="img-fluid"/>
            
            <p>{blog.content}</p>
        </section>
    );
};

export default BlogDetails;
