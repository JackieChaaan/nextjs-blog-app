"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Cards/Card";
import './page.scss'


export default function Home() {
  const [blog, setBlog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nifty.spider.ws/public/api/blogs');

        setBlog(response?.data?.data);
        console.log(response.data.data);
      } catch (error) {
        setError("Faild to fetch blog")
      }
    }
    fetchData();

  }, [])
  return (
    <main className="container">
      <section className="title">
        <h3>Page Title</h3>
        <span>Home</span>
        <span>Link One</span>
      </section>
      <section className="overlay-card">
        <figure>
          <img src={blog[0]?.featured_image?.file_path} alt="img" />
        </figure>
        <div className="overlay-body">
          <div className="category">{blog[0]?.category?.name}</div>
          <div className="title">{blog[0]?.title}</div>
          <div className="pub-date">
            <span><img src={blog[0]?.featured_image?.file_path} alt="user-img" /></span>
            <span className="user">{blog[0]?.published_by || 'user'}</span>
            <span className="date">{blog[0]?.published_on}</span>
            </div>
        </div>
      </section>
      {error && <p>{error}</p>}
      <div className="blog-cards">
        {
          blog.map((item, id) => (<Card item={item} key={id} />))
        }
      </div>
    </main>
  );
}
