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
          <br />
          <br />
          <Title title="Empecemos a Producir!" className="title-bg" />
        </div>
        <div className="content py flex1">
          <div className="left w-30">
            <div className="contact-deatils">
              <div className="box">
                <FiHeadphones size={30} className="icons" />
                <h3>+56 9 8232 6892</h3>
                <span>Llamadas y WhatsApp: Lun - Vie 9:00 - 19:00</span>
              </div>
              <div className="box">
                <IoLocationOutline size={30} className="icons" />
                <h3>Santiago</h3>
                <span>
                  Los Militares 5620, Of. 905, Las Condes, Santiago, Chile
                </span>
              </div>
              <div className="box">
                <FiHelpCircle size={30} className="icons" />
                <h3>contacto@juweare.cl</h3>
                <span>Escríbenos un correo cuando quieras</span>
              </div>
              <div className="box">
                <BiUserCircle size={30} className="icons" />
                <h3>team@juweare.cl</h3>
                <span>Se parte de nosotros!</span>
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
            <TitleSm title="Estamos encantados de saber más sobre tus idea y proyectos" />
            <p className="desc-p">
              ¿Tienes preguntas? ¿Propuestas? Rellena el siguiente formulario
              para recibir nuestra ayuda.
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
                    placeholder="Jhon Doe"
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
                    placeholder="example@myemail.com"
                  />
                </div>
              </div>
              <div className="grid-2">
                <div className="inputs">
                  <span>Teléfono</span>
                  <input
                    type="tel" // Cambiado a "tel" para un campo telefónico
                    name="phone" // Cambiado el nombre del campo
                    value={formData.phone} // Actualizado para reflejar el nuevo campo
                    onChange={handleChange}
                    required // Hacer que el campo sea obligatorio
                    pattern="[0-9+() -]*" // Validación básica para números de teléfono
                    placeholder="+56 9 1234 5678" // Ejemplo de formato
                  />
                </div>
                {/* <div className="inputs">
                  <span>Marco temporal</span>
                  <input
                    type="text"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                  />
                </div> */}
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
                  placeholder="Escribe tu mensaje aquí..."
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
