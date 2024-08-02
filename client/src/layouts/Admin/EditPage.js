export default function EditPage() {
    return (
        <>
            <div className="container">
                <div className="flex-d">
                    <h3>Home</h3>
                    <form>
                        <input className="form-control" type="text" />
                        <input className="form-control" type="text" />
                        <input className="form-control" type="text" />
                    </form>
                </div>
                <div>
                    <h3>Astrophotography</h3>
                    <form>
                        <input type="text" />
                    </form>
                </div>
                <div>
                    <h3>Bookbindery</h3>
                    <form>
                        <input type="text" />
                    </form>
                </div>
            </div>
            
        </>
    )
}