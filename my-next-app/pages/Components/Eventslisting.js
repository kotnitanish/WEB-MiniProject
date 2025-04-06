import React from "react";
import styles from "@/styles/Eventslisting.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
const eventsData = [
  {
    id: 1,
    image: "/tc.jpg",
    title: "Tech Conference 2025",
    date: "April 7, 2025",
    location: "Hyderabad",
    description: "Join the biggest tech event of the year, featuring expert speakers and networking opportunities.",
    link: "/Eventregistration",
    buttonText: "Register Now",
  },
  {
    id: 2,
    image: "/AI.jpg",
    title: "AI & ML Workshop",
    date: "April 13, 2025",
    location: "Chennai",
    description: "A hands-on workshop on Artificial Intelligence and Machine Learning.",
    link: "/Eventregistration",
    buttonText: "Join Now",
  },
  {
    id: 3,
    image: "/scra.webp",
    title: "Python Scraper Bootcamp 2025",
    date: "April 19, 2025",
    location: "Hyderabad",
    description: "Join the biggest web scraping event featuring Python networking using Node.js.",
    link: "/Eventregistration",
    buttonText: "Register Now",
  },
  {
    id: 4,
    image: "/front.png",
    title: "Frontend Fusion 2025",
    date: "April 25, 2025",
    location: "Hyderabad",
    description: "Biggest Frontend Event in Asia",
    link: "/Eventregistration",
    buttonText: "Register Now",
  },
  {
    id: 5,
    image: "/bck.avif",
    title: "The Backend Blueprint 2025",
    date: "April 26, 2025",
    location: "Hyderabad",
    description: "Biggest Backend Event in Asia featuring speakers from top tech companies.",
    link: "/Eventregistration",
    buttonText: "Register Now",
  },
  {
    id: 6,
    image: "/su.jpg",
    title: "Startup Meetup",
    date: "May 1, 2025",
    location: "Chennai",
    description: "Meet investors, startup founders, and industry leaders to build connections.",
    link: "/Eventregistration",
    buttonText: "Learn More",
  },
  {
    id: 7,
    image: "/Music.jpg",
    title: "Music Fest 2025",
    date: "May 4, 2025",
    location: "Gurugram",
    description: "Experience an electrifying music festival with top artists performing live.",
    link: "/Eventregistration",
    buttonText: "Get Tickets",
  },
];

const EventsList = () => {
  return (
    <div className={styles.events_container}>
      <Navbar/>

      <section className={styles.events_grid}>
        {eventsData.map((event) => (
          <div className={styles.fevent_card} key={event.id}>
            <img src={event.image} alt={event.title} height="300px" width="500px" />
            <div className={styles.event_info} >              
              <h2>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <Link href={"/Components/Eventsreg"} className={styles.btn}>{event.buttonText}</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EventsList;