import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MagnetizeButton from "../components/MagnetizeButton";
import foto from "../assets/icon.png";
import matrix from "../assets/jogo-html.png";
import miauchiatto from "../assets/miauchiatto.png";

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

const projects = [
  {
    title: "Miauchiatto",
    description: "projeto de um cafe gateiro.",
    image: miauchiatto,
    github: "https://github.com/dedadevye/miauchiatto_site",
    deploy: "https://miauchiatto-site.vercel.app/",
  },

  {
    title: "Adivinhe o número",
    description: "Jogo interativo para adivinhar o número secreto.",
    image: matrix,
    github: "https://github.com/dedadevye/adivinhe-o-numero",
    deploy: "https://adivinhe-o-numero-orpin.vercel.app/",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <main className="apresentacao">
        <section className="apresentacao_conteudo">
          <h1 className="apresentacao_conteudo_titulo">
            Eleve seu negócio digital
            <br />
            <strong className="titulo-destaque">
              com front-end de qualidade
            </strong>
          </h1>

          <p className="apresentacao_conteudo_texto">
            Sou <strong>Yeda Maria, desenvolvedora Front-End</strong> com uma
            visão diferenciada para o digital.{" "}
            <strong>Bacharel Interdisciplinar em Artes</strong> pela UFBA, trago
            uma abordagem única que integra design, narrativa visual, proposição
            e código.
          </p>
          <MagnetizeButton onClick={() => navigate("/contact")}>
            Converse comigo aqui
          </MagnetizeButton>
        </section>

        <div className="icon-buttons" aria-label="Redes sociais">
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

        <img
          className="apresentacao_imagem"
          src={foto}
          alt="Foto de Yeda Maria"
        />
      </main>

      <section className="galeria">
        <h2 className="galeria_titulo">Projetos em Destaque</h2>

        <p className="galeria_descricao">
          Aqui você encontrará uma seleção dos meus trabalhos mais recentes,
          onde combino design criativo com desenvolvimento técnico sólido.
        </p>

        <div className="galeria_grid">
          {projects.map((project) => (
            <article className="projeto_card" key={project.title}>
              <img
                className="projeto_imagem"
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
              />

              <div className="projeto_conteudo">
                <h3 className="projeto_titulo">{project.title}</h3>
                <p className="projeto_descricao">{project.description}</p>

                <div className="projeto_links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>

                  {project.deploy && (
                    <a href={project.deploy} target="_blank" rel="noreferrer">
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="galeria_descricao">
          Quer ver mais?{" "}
          <Link className="link-destaque" to="/contact">
            Vamos conversar sobre seus projetos!
          </Link>
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
