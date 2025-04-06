import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // If using App Router
import styles from "@/styles/Eventreg.module.css"; // Ensure styles file is correct
import Navbar from "./Navbar";

const EventRegistration = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phonenumber: "" });
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Registration successful!");
        if (formData.name && formData.email && formData.phonenumber.length === 10) {
            setMessage("Registration successful! Redirecting to payment...");
            setTimeout(() => {
                router.push("/Components/payment"); // Redirect to payment page
            }, 1500);
        } 
        else {
            setMessage("Invalid details. Redirecting to thank you page...");
            setTimeout(() => {
                router.push("/Components/thanks"); // Redirect to thanks page
            }, 1500);
        }
    };

    return (
        <>
        <Navbar />
        <div className={styles.main}>      
        <div className={styles.container}>
            <h2>Event Registration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className={styles.input}
                    type="tel"
                    name="phonenumber"
                    placeholder="Your Phone Number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Enter a valid 10-digit phone number"
                />
    
                <button className={styles.button} type="submit">Register</button>
            
            </form>
            <p>{message}</p>
        </div></div> </>
    );
};

export default EventRegistration;
