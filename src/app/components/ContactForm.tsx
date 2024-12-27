'use client'
import React, { useState } from "react";

interface formData {
    name:string,
    email:string,
    message:string,
    phone:string
}

const ContactForm:React.FC=()=>{
    const [formData, setFormData] = useState<formData>({name:"",email:"",message:"",phone:""})
    const [error, setError] = useState("")

    const handleChanges=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()  //prevent the default behavior of the form or from page reloading

        if(!formData.name || !formData.email || !formData.message){
            setError("Please fill in all fields")
            return
        }

        if(formData.phone.length !== 10 && !/^[0-9]{10}&/.test(formData.phone) ){
            setError("Please enter a valid phone number")
            return
        }
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            setError("Invalid email address.");
            return;
        }

        setError("")
        alert("Form Submitted")
        console.log(formData)
        
        setFormData({name:"",email:"",message:"",phone:""})
    }

    return(
        <section>
            <form onSubmit={handleSubmit}  className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChanges}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChanges}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Contact Number
                </label>
                <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChanges}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChanges}
                    rows={4}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

           
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
                Submit
            </button>
            </form>

        </section>
    )
}

export default ContactForm