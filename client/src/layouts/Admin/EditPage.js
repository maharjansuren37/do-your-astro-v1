export default function EditPage() {
    return (
        <>
            <div className="container">
                <div>
                    <h3>Home</h3>
                    <form>
                        <div className="home-section">
                            <div className="form-group">
                                <label htmlFor="hero-title">Hero Title</label>
                                <input className="form-control" type="text" name="hero-title" placeholder="Hero Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hero-subtitle">Hero Subtitle</label>
                                <textarea className="form-control" type="text" name="hero-subtitle" placeholder="Hero Subtitle" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="hero-image" />
                                <input className="form-control" type="file" name="hero-image" placeholder="Hero Image" accept="image/*" />
                            </div>
                        </div>
                        
                        <div className="astro-section">
                            <div className="form-group">
                                <label htmlFor="astro-title" />
                                <input className="form-control" type="text" name="astro-title" placeholder="Astro Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="astro-subtitle" />
                                <textarea className="form-control" type="text" name="astro-subtitle" placeholder="Astro Subtitle" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="astro-image" />
                                <input className="form-control" type="file" name="astro-image" placeholder="Astro Image" accept="image/*" />
                            </div>
                        </div>
                        
                        <div className="bookbindery-section">
                            <div className="form-group">
                                <label htmlFor="bookbindery-title" />
                                <input className="form-control" type="text" name="bookbindery-title" placeholder="Bookbindery Title" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookbindery-subtitle" />
                                <textarea className="form-control" type="text" name="bookbindery-subtitle" placeholder="Bookbindery Subtitle" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bookbindery-image" />
                                <input className="form-control" type="file" name="bookbindery-image" placeholder="Bookbindery Image" accept="image/*" />
                            </div>
                        </div>
                        
                        <button className="btn">Update</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}