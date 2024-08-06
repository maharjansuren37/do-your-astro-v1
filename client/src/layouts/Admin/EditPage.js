import { useEffect, useState } from "react";

export default function EditPage() {
    const [selectedFile1, setSelectedFile1] = useState();
    const [selectedFile2, setSelectedFile2] = useState();
    const [preview1, setPreview1] = useState();
    const [preview2, setPreview2] = useState();

    useEffect(() => {
        if (!selectedFile1) {
            setPreview1(undefined);
            return;
        }

        if (!selectedFile2) {
            setPreview2(undefined);
            return;
        }

        const objectUrl1 = URL.createObjectURL(selectedFile1);
        const objectUrl2 = URL.createObjectURL(selectedFile2);
        setPreview1(objectUrl1);
        setPreview2(objectUrl2);

        return () => {
            URL.revokeObjectURL(objectUrl1);
            URL.revokeObjectURL(objectUrl2);
        };
    }, [selectedFile1, selectedFile2]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile1(undefined);
            return;
        }

        setSelectedFile1(e.target.files[0]);
    }

    const onSelectFile2 = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile2(undefined);
            return;
        }

        setSelectedFile2(e.target.files[0]);
    }
    return (
        <>
            <div className="container mt-1">
                <div>
                    <h3 className="edit-page-title">Home</h3>
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
                                {selectedFile1 && <img className="uploaded-img" src={preview1} />}
                                <input className="form-control" type="file" name="hero-image" placeholder="Hero Image" accept="image/*" onChange={onSelectFile} />
                                
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
                                {selectedFile2 && <img className="uploaded-img" src={preview2} />}
                                <input className="form-control" type="file" name="astro-image" placeholder="Astro Image" accept="image/*" onChange={onSelectFile2} />
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
                        
                        <button className="btn btn-update" type="submit">Update</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}