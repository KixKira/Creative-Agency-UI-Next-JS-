import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura EmailJS
    emailjs
      .send(
        "service_mkp3yjb", // Reemplaza con tu Service ID
        "template_wjvp1mj", // Reemplaza con tu Template ID
        formData,
        "BXmWE_p3AP246oGhS" // Reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("¡Formulario enviado con éxito!");
          setFormData({
            name: "",
            email: "",
            budget: "",
            timeframe: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus(
            "Hubo un error al enviar el formulario. Inténtalo de nuevo."
          );
        }
      );
  };

  return (
    <section className="contact bg-top">
      <div className="container">
        <div className="heading-title">
          {/* <TitleSm title="CONTACT" /> */}
          <br />
          <br />
          <Title title="Empecemos ahora mismo" className="title-bg" />
        </div>
        <div className="content py flex1">
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>1-001-234-5678</h3>
                <span>Call us: Mon - Fri 9:00 - 19:00</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <h3>New York</h3>
                <span>
                  990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022
                </span>
              </div>
              <div className="box">
                <FiHelpCircle size={30} className="icons" />
                <h3>info@dream-theme.com</h3>
                <span>Drop us a line anytime!</span>
              </div>
              <div className="box">
                <BiUserCircle size={30} className="icons" />
                <h3>hr@dream-theme.com</h3>
                <span>Career at Seven Creative</span>
              </div>
            </div>
            <ul>
              <li className="icon">
                <BsFacebook size={25} />
              </li>
              <li className="icon">
                <AiFillBehanceCircle size={25} />
              </li>
              <li className="icon">
                <AiFillInstagram size={25} />
              </li>
              <li className="icon">
                <AiFillLinkedin size={25} />
              </li>
            </ul>
          </div>
          <div className="right w-70">
            <TitleSm title="Realizar una consulta en línea" />
            <p className="desc-p">
              ¿Tienes preguntas? ¿Ideas? Rellene el siguiente formulario para
              obtener nuestra propuesta.{" "}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="inputs">
                  <span>Nombre</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="inputs">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="grid-2">
                <div className="inputs">
                  <span>Su presupuesto</span>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
                <div className="inputs">
                  <span>Marco temporal</span>
                  <input
                    type="text"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputs">
                <span>CUÉNTENOS UN POCO SOBRE SU PROYECTO*.</span>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button className="button-primary" type="submit">
                Enviar
              </button>
            </form>
            {status && <p className="status-message">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
