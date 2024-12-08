import React, { useEffect, useState } from 'react';
import styles from '../pages/Home.module.css';

const Home = () => {
  const [showProfileImg, setShowProfileImg] = useState(false); // Controle da imagem de perfil
 

  useEffect(() => {
    const profileImgDelay = 1000; // Tempo para exibir a imagem

    // Exibe a imagem de perfil
    const imgTimeout = setTimeout(() => {
      setShowProfileImg(true);
    }, profileImgDelay);

    return () => {
      clearTimeout(imgTimeout);
    };
  }, []);


  
  return (
    <>

        {/* Imagem de perfil com animação */}
        <div className={styles.profilePicture}>
    <img
      src="./src/images/fotoPerfil.jpeg"
      alt="Foto de perfil"
      className={`${styles.ProfileImg} ${showProfileImg ? styles.show : ''}`}
    />
  </div>
      <div className={styles.infoContainer}>
        <h1 className={styles['typing-effect1']}>Olá sou Jonatan Gomes Floriano!</h1>
        <h2 className={styles['typing-effect2']}>Estudante de Análise e Desenvolvimento de Sistemas</h2>
        <h3 className={styles['typing-effect3']}>
          Principais tecnologias: JavaScript, TypeScript, Node.js, Express, React e Next
        </h3>

        {/* Novas informações com efeito de digitação */}
        <p className={styles['typing-effect4']}>Desenvolvedor de aplicações web, sei trabalhar tanto no Front-end quanto no Back-end.</p>
        <p className={styles['typing-effect5']}>Udemy: Curso de Javascript e TypeScript do básico ao avançado, React e Next.js com projetos reais.</p>
        <p className={styles['typing-effect6']}>Fundação Bradesco: Fundamentos de lógica de programação.</p>
        <p className={styles['typing-effect7']}>Python.</p>
        <p className={styles['typing-effect8']}>INGLÊS: Intermediário (sei me virar tranquilo numa conversa).</p>

        {/* Experiência de trabalho */}
        <p className={styles['typing-effect9']}>
          Experiência de trabalho (todos os registros foram presenciais e período Integral): 
        </p>
        <p className={styles['typing-effect10']}><b>Operador de produção Imbera Brasil</b> (jan de 2022 - jun de 2023 · 1 ano 6 meses).</p>
        <p className={styles['typing-effect11']}><b>Operador de produção LEONI</b> (Mar de 2021 - nov de 2021 · 9 meses).</p>
        <p className={styles['typing-effect12']}><b>Almoxarife FLUXO Soluções Integradas</b> (jun de 2017 - set de 2019 · 2 anos 4 meses).</p>
        <p className={styles['typing-effect13']}><b>Carregador DHL</b> (mar de 2016 - jun de 2016 · 4 meses).</p>
      </div>

      {/* Imagem de perfil com animação */}
      <div className={styles.profilePicture}>
        {showProfileImg && (
          <img
            src="./src/images/fotoPerfil.jpeg"
            alt="Foto de perfil"
            className={`${styles.ProfileImg} ${styles.fadeInEffect}`}
          />
        )}
      </div>
    </>
  );
};

export default Home;
