import React from "react";

export default function Form() {
    return (
        <form className="form">
            <div className="form-wrapper">
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input className="input-control" type="text" name="name" placeholder="Your Name" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input className="input-control" type="text" name="email" placeholder="Your Email Address" />
                </div>
            </div>
            <div className="form__btn text-center">
                <button type="button" className="btn btn__send">Send</button>
            </div>
        </form>
    )
}