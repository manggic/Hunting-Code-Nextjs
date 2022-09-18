import React, { useState } from "react";

const Contact = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    let data = await fetch("http://localhost:3000/api/submitContact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    let actualData = await data.json();
    if (actualData.success) {
      alert("Sucesss");
    } else {
      alert(`Failed`);
    }
    setUserInfo({ email: "", phone: "" });
  };
  return (
    <>
      <div className="soumya">
        <div className="container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabindex="2"
                required
                value={userInfo.email}
                onChange={(e) => handleInput(e)}
                name="email"
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabindex="3"
                required
                value={userInfo.phone}
                onChange={(e) => handleInput(e)}
                name="phone"
              />
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={() => submitForm()}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .soumya {
            color: brown;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
            font-size: 50px;
          }

          @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            -o-font-smoothing: antialiased;
            font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
          }

          body {
            font-family: "Roboto", Helvetica, Arial, sans-serif;
            font-weight: 100;
            font-size: 12px;
            line-height: 30px;
            color: #777;
            background: #4caf50;
          }

          .container {
            max-width: 400px;
            width: 100%;
            margin: 0 auto;
            position: relative;
          }

          #contact input[type="text"],
          #contact input[type="email"],
          #contact input[type="tel"],
          #contact input[type="url"],
          #contact textarea,
          #contact button[type="submit"] {
            font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
          }

          #contact {
            background: #f9f9f9;
            padding: 25px;
            margin: 150px 0;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2),
              0 5px 5px 0 rgba(0, 0, 0, 0.24);
          }

          #contact h3 {
            display: block;
            font-size: 30px;
            font-weight: 300;
            margin-bottom: 10px;
          }

          #contact h4 {
            margin: 5px 0 15px;
            display: block;
            font-size: 13px;
            font-weight: 400;
          }

          fieldset {
            border: medium none !important;
            margin: 0 0 10px;
            min-width: 100%;
            padding: 0;
            width: 100%;
          }

          #contact input[type="text"],
          #contact input[type="email"],
          #contact input[type="tel"],
          #contact input[type="url"],
          #contact textarea {
            width: 100%;
            border: 1px solid #ccc;
            background: #fff;
            margin: 0 0 5px;
            padding: 10px;
          }

          #contact input[type="text"]:hover,
          #contact input[type="email"]:hover,
          #contact input[type="tel"]:hover,
          #contact input[type="url"]:hover,
          #contact textarea:hover {
            -webkit-transition: border-color 0.3s ease-in-out;
            -moz-transition: border-color 0.3s ease-in-out;
            transition: border-color 0.3s ease-in-out;
            border: 1px solid #aaa;
          }

          #contact textarea {
            height: 100px;
            max-width: 100%;
            resize: none;
          }

          #contact button[type="submit"] {
            cursor: pointer;
            width: 100%;
            border: none;
            background: #4caf50;
            color: #fff;
            margin: 0 0 5px;
            padding: 10px;
            font-size: 15px;
          }

          #contact button[type="submit"]:hover {
            background: #43a047;
            -webkit-transition: background 0.3s ease-in-out;
            -moz-transition: background 0.3s ease-in-out;
            transition: background-color 0.3s ease-in-out;
          }

          #contact button[type="submit"]:active {
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
          }

          .copyright {
            text-align: center;
          }

          #contact input:focus,
          #contact textarea:focus {
            outline: 0;
            border: 1px solid #aaa;
          }

          ::-webkit-input-placeholder {
            color: #888;
          }

          :-moz-placeholder {
            color: #888;
          }

          ::-moz-placeholder {
            color: #888;
          }

          :-ms-input-placeholder {
            color: #888;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
