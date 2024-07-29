export default function Form() {
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}