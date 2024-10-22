import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Swal from 'sweetalert2'; // Asegúrate de que este import esté correctamente
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico válido.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
      return;
    }

    // Si todo está bien, muestra un mensaje de éxito
    Swal.fire({
      title: 'Mensaje enviado',
      text: 'Gracias por contactarnos, te responderemos pronto.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#0a8821'
    });

    // Reiniciar formulario
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
