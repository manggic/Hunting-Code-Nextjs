import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Blogpost = ({ title, desc }) => {
  return (
    <>
      <div className="soumya">{title}</div>
      <p style={{ textAlign: "center", margin: "50px 150px" }}>{desc}</p>
      <style jsx>
        {`
          .soumya {
            color: brown;
            display: flex;
            justify-content: center;
            align-items: center;
            // height: 90vh;
            font-size: 50px;
          }
        `}
      </style>
    </>
  );
};

export async function getServerSideProps(context) {
  let { blog } = context.params;

  let data = await fetch(`http://localhost:3000/api/getBlog?name=${blog}`);

  let blogData = await data.json();

  return {
    props: { title: blogData.title, desc: blogData.description }, // will be passed to the page component as props
  };
}

export default Blogpost;
