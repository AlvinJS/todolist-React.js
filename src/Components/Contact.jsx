import React from "react";

function Contact () {
    return(
        <div className="py-10 px-10 bg-blue-50 text-lg">
            <h1 className="mb-10 font-bold">Contact Us</h1>
            <p className="mb-5 font-semibold text-gray-600">You can contact us via: </p>
                <div className="flex justify-between mt-10">
                 <ul >
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>LinkedIn</li>
                 </ul>
                     
                 <ul>
                     <li>Instagram</li>
                     <li>Email</li>
                     <li>Call us on:</li>
                 </ul>
                 </div> 
        </div>
    )
}

export default Contact;