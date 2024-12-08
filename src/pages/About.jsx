
import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import styles from '../pages/About.module.css';

const About = () => {


  return (
    <>
      <h1>Sobre Mim</h1>
    <div className={styles.containerAbout}>
      <h2>
          desenvolvedor front-end com foco em React e JavaScript. Estou cursando
        Análise e Desenvolvimento de Sistemas e tenho paixão por criar interfaces elegantes e funcionais.
      </h2>
      <h3>
        Meu objetivo é crescer na área de tecnologia, aplicando minhas habilidades de programação para resolver
        problemas reais e construir soluções inovadoras.
      </h3>
      <h4>
        Atualmente, estou cursando Análise e Desenvolvimento de Sistemas no CEUNSP, com previsão de conclusão em
        2026. Meu aprendizado acadêmico é complementado por projetos práticos que desenvolvo por conta própria.
      </h4>
      <h5>
        Tenho experiência prática com linguagens como HTML, CSS, JavaScript, PHP e React. Além disso, já trabalhei
        com projetos em Python e integração com MySQL, sempre buscando melhorar meu conhecimento em backend e análise
        de dados.
        <br />
        Sou dedicado, organizado e apaixonado por aprender novas tecnologias. Acredito na colaboração como chave
        para o sucesso e sempre busco entregar código limpo e eficiente.
      </h5>
      <h6>
        Fique à vontade para explorar meu portfólio. Caso queira colaborar ou saber mais sobre meus projetos,{' '}<br></br><br></br>
      </h6>
        <Link to="/Contact" className={styles.contactButton}>
          contato
        </Link>
    </div>
    </>
  );
};

export default About;
