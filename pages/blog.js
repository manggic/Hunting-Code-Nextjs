import React, { useState, useEffect } from "react";

const Blog = ({ allBlog }) => {
  // useEffect(() => {
  //   getAllData();
  // }, []);

  return (
    <div style={{ margin: "auto", width: "50vw", paddingTop:'30px' }}>
      {allBlog &&
        allBlog?.map((blog, index) => {
          return (
            <div key={index}>
              <h3  style={{textAlign:'center'}}> {blog.title}</h3>
              <h5> - {blog.description}</h5>
            </div>
          );
        })}
    </div>
  );
};

// SERVER SIDE RENDERING
export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/getAllBlog`);

  let allBlog = await data.json();

  return {
    props: { allBlog }, // will be passed to the page component as props
  };
}

export default Blog;
