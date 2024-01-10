const fs = require('fs')
const marked = require('marked')


const blogs = async (req, res)=>{
    try{
        const blog = await fs.promises.readFile(`public/content/blogs/blog.json`);
        
        if(blog) res.render('pages/blog', {blogs: JSON.parse(blog)});
        else throw Error("Ein Server Error ist aufgetreten");
      }
      catch(err){
        res.status(404).render(404);
      }
}

const blog = async (req, res)=>{
    try{
        const id = req.params.id;
        const blogs = await fs.promises.readFile(`public/content/blog/blog.json`);
        
        const blog = JSON.parse(blogs)[id]
        console.log(blog)
        res.render('pages/blog-post', {blog : blog})
    }
    catch(err)
    {
        console.log(err)
        res.send("Error: " + err.message);
    }
}

const markupBlog = async (req, res)=>{
    try{
        const id = req.params.id;
        const blogPath = `public/content/blogs/${id}/blog-post.md`;
        const markupBlog = await fs.promises.readFile(blogPath, 'utf8');
        const htmlBlog = marked.marked(markupBlog);
        
        //Make a list of 3 more mini blogposts to keep the user on our page:
        const blogList = await fs.promises.readFile(`public/content/blogs/blog.json`);
        let moreBlogs = JSON.parse(blogList).filter(b=> b.id != id);
        //get a blog post out of the blogList and push it to moreBlogs if its not the current blog id
        moreBlogs = moreBlogs.sort(()=> 0.5 - Math.random()).slice(0,3);
        
        
        const blog = {

            ...JSON.parse(blogList)[id],
            content: htmlBlog
        }

        res.render('pages/blog-post', {blog, moreBlogs});
    }
    catch(err){
        res.status(404).send("Error:" + err.message)
    }
}

module.exports = {blogs, blog, markupBlog}