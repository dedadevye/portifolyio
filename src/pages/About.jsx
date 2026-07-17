import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

const skills = [
  {
    title: "Desenvolvimento",
    text: "HTML5, CSS3, JavaScript, React, TypeScript",
  },
  {
    title: "Design",
    text: "Figma, Photoshop, Illustrator, Inkscape",
  },
  {
    title: "Edição & Criação",
    text: "Adobe Premiere, GIMP, Krita, Edição de Vídeo",
  },
];

function About() {
  return (
    <>
      <Header />

      <section className="sobre">
        <h1 className="sobre_titulo">Sobre Mim</h1>

        <div className="sobre_conteudo">
          <div className="sobre_secao">
            <h2 className="sobre_secao_titulo">Formação Acadêmica</h2>

            <p className="sobre_secao_texto">
              <strong>Bacharelado Interdisciplinar em Artes</strong>
              <br />
              Universidade Federal da Bahia (UFBA) - Instituto de Humanidades,
              Artes e Ciências Prof. Milton Santos.
            </p>

            <p className="sobre_secao_texto">
              <strong>Produção de Conteúdo para Internet</strong>
              <br />
              Academia Internacional de Cinema (AIC)
            </p>

            <p className="sobre_secao_texto">
              <strong>Jovem Tech - Desenvolvimento de Sistemas</strong>
              <br />
              Programa de formação em desenvolvimento de sistemas e lógica de
              programação.
            </p>

            <p className="sobre_secao_texto">
              <strong>Geração Tech - Desenvolvimento Full-Stack</strong>
              <br />
              Programa de formação em desenvolvimento completo de aplicações
              web.
            </p>
          </div>

          <div className="sobre_secao">
            <h2 className="sobre_secao_titulo">Habilidades & Competências</h2>

            <div className="habilidades_grid">
              {skills.map((skill) => (
                <div className="habilidade_card" key={skill.title}>
                  <div className="habilidade_card_titulo">{skill.title}</div>
                  <div className="habilidade_card_texto">{skill.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sobre_secao">
            <h2 className="sobre_secao_titulo">Minha Filosofia</h2>

            <p className="sobre_secao_texto">
              Transformo conceitos criativos em experiências digitais que
              conectam arte e tecnologia, sempre focando em interfaces
              funcionais, responsivas e acessíveis.
            </p>

            <p className="sobre_secao_texto">
              Cada projeto é uma oportunidade de criar algo significativo.
              Combino princípios de design com tecnologia para construir
              interfaces que não apenas funcionam, mas que também inspiram e
              conectam com os usuários.
            </p>
          </div>

          <div className="sobre_secao sobre_cta">
            <h2 className="sobre_secao_titulo">Pronto para Colaborar?</h2>
            <p className="sobre_secao_texto">
              Tenho certeza de que podemos criar algo incrível juntos. Vamos
              conversar sobre seu projeto!
            </p>
            <Link className="apresentacao_links_link secundario" to="/contact">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
