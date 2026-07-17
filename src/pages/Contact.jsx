import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Footer from "../components/Footer";
import Header from "../components/Header";

const socialLinks = [
  {
    href: "https://instagram.com/yeda._._._",
    label: "Instagram",
    className: "btn-icon-instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://www.linkedin.com/in/yeda-rios-5b2994272/",
    label: "LinkedIn",
    className: "btn-icon-linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/dedadevye",
    label: "GitHub",
    className: "btn-icon-github",
    icon: <FaGithub />,
  },
];

function Contact() {
  return (
    <>
      <Header />

      <section className="contato">
        <h1 className="contato_titulo">Vamos Conversar</h1>

        <div className="contato_container">
          <form
            className="formulario"
            action="https://formspree.io/f/xnjbobbp"
            method="POST"
          >
            <div className="formulario_grupo">
              <label htmlFor="nome" className="formulario_label">
                Seu Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                className="formulario_input"
                placeholder="Como você se chama?"
                required
              />
            </div>

            <div className="formulario_grupo">
              <label htmlFor="email" className="formulario_label">
                Seu Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="formulario_input"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="formulario_grupo">
              <label htmlFor="assunto" className="formulario_label">
                Assunto
              </label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                className="formulario_input"
                placeholder="Do que você quer falar?"
                required
              />
            </div>

            <div className="formulario_grupo">
              <label htmlFor="mensagem" className="formulario_label">
                Sua Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                className="formulario_textarea"
                placeholder="Conte-me mais sobre seu projeto..."
                required
              ></textarea>
            </div>

            <button type="submit" className="formulario_botao">
              Enviar Mensagem
            </button>
          </form>

          <div className="contato_info">
            <h3 className="contato_info_titulo">Outras Formas de Contato</h3>

            <div className="contato_info_item">
              <div className="contato_info_item_titulo">Email</div>
              <div className="contato_info_item_texto">
                <a
                  href="mailto:mariaiedarios@hotmail.com"
                  className="contato_info_item_link"
                >
                  mariaiedarios@hotmail.com
                </a>
              </div>
            </div>

            <div className="contato_info_item">
              <div className="contato_info_item_titulo">Telefone</div>
              <div className="contato_info_item_texto">
                <a
                  href="tel:+5571996590916"
                  className="contato_info_item_link"
                >
                  71 9 9659-0916
                </a>
              </div>
            </div>

            <div className="contato_info_item">
              <div className="contato_info_item_titulo">Localização</div>
              <div className="contato_info_item_texto">
                Aracaju, Sergipe, Brasil.
              </div>
            </div>

            <div className="contato_info_item">
              <div className="contato_info_item_titulo">Redes Sociais</div>
              <div className="icon-buttons contato_social">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-icon ${link.className}`}
                    title={link.label}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
