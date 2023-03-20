import React from "react"

const Contact = ()=>{
    return(
        <>
        <div className="contact">
            <main>
                <h3>Contact Us</h3>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name"></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Your Email"></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text" placeholder="Tell us your query"></input>
                    </div>
                    <button type="submit">send</button>
                </form>
            </main>
        </div>
        </>

    );
}

export default Contact