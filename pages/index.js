import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [allBlog, setAllBlog] = useState([]);

  const getAllData = async () => {
    let data = await fetch(`http://localhost:3000/api/getAllBlog`);

    let parsedData = await data.json();

    setAllBlog(parsedData);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
       console.log('hello')
      `,
        }}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coders</h1>
        <h3 style={{ color: "blue", fontSize: "20px" }}>Popular Blogs </h3>
        {/* <Image src="/image.jpg" width={200} height={200} /> */}

       <ul>
       {allBlog.map((blog, index) => {
          return (
            <Link
              href={`/blogpost/${blog.blogName
                .split(" ")
                .join("_")
                .toLocaleLowerCase()}`}
            >
              <li style={{ cursor: "pointer", padding: '10px 0px' }}>
                 {blog.blogName}
              </li>
            </Link>
          );
        })}
       </ul>
        
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
