import Blog from "./components/Blogs";

const Headlines = () => {
    const blogs = [
        { body: "What happens when old PCs are given mordern upgrades?", title: "Reviving Retro PCs", img: "image-retro-pcs.jpg" },
        { body: "Our best pick for various needs and budgets", title: "Top 10 laptops of 2022", img: "image-top-laptops.jpg" },
        { body: "How the pandemic has sparked new oppurtunities", title: "The growth of gaming", img: "image-gaming-growth.jpg" },
    ]
    const mapBlogs = blogs.map((blog, i) => {
        return (
            <Blog key={i} index={i} blog={blog} />
        )
    })
    return (
        <div className="container">
            <div className="top">
                <div className="headline">
                    <img className="desktop" src="/images/image-web-3-desktop.jpg" alt="headline" />
                    <img className="mobile" src="/images/image-web-3-mobile.jpg" alt="headline" />
                    <section className="text">
                        <h1>The Bright Future of Web 3.0?</h1>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                            <br></br><button>READ MORE</button>
                        </p>
                    </section>
                </div>
                <div className="new">
                    <h1>New</h1>
                    <div className="item">
                        <h2><a href="#">Hydrogen VS Electric Cars</a></h2>
                        <p>Will hydrogen-feuled cars ever catch up to EVs?</p>
                    </div>
                    <div className="item">
                        <h2><a href="#">The Downsides of AI Artistry</a></h2>
                        <p>What are the possible adverse effects of on-demand AI image generation?</p>
                    </div>
                    <div className="item">
                        <h2><a href="#">Is VC Funding Drying Up?</a></h2>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                </div>
            </div>
            <div className="blogs">
                {mapBlogs}
            </div>
        </div>
    );
}

export default Headlines;