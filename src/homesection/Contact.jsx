import React from "react";
import Form from "react-bootstrap/Form";
import Navbutton from "../component/Navbutton";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChangename = (event) => {
    setName(event.target.value);
  };
  const handleChangeemail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangemessage = (event) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      message,
    };
    const template = "template_5rhjq1e";
    const service = "service_yaa6qh1";
    const publickey = "yGlyi-VKTW8uUO3Vu";

    try {
      await emailjs.send(service, template, data, publickey);
      setSent(true);
      setLoading(false);

      setTimeout(() => {
        setSent(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 10000); // Reset form after 10 seconds
    } catch (error) {
      console.error("Error sending email:", error);
      setLoading(false);
    }
  };

  return (
    <div className="py-5 text-light">
      <div className="d-flex justify-content-center">
        <div></div>
        <div>
          <h1>Want to get in touch?</h1>
          <h1>Drop me an email!</h1>
        </div>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center control">
            <Form.Group
              className="mb-3 mx-1 control"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChangename}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mx-1 control"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={handleChangeemail}
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <div></div>
            <div>
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>MESSAGE</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  style={{ width: "330px" }}
                  value={message}
                  onChange={handleChangemessage}
                />
              </Form.Group>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btnClass py-1 px-3"
              disabled={loading}
            >
              {loading ? "Sending..." : sent ? "SENT!!" : "SEND"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
