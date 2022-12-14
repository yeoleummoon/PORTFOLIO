import React from 'react';
import Styles from './projectDetail.module.css';

const Third = () => {
  const handleClickGithub = () => {
    const url = "https://github.com/yeoleummoon/movie-app";
    window.open(url);
  }
  const handleClickSite = () => {
    const url = "https://aesthetic-starburst-b0a647.netlify.app/";
    window.open(url);
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
      <img src="../../images/movie_app1.png" alt="movie" />
      <img src="../../images/movie_app2.png" alt="movie" />
      </div>
    <div className={Styles.index}>
        <h2>Movie-App</h2>
        <p>κΈ°μ μ€νπ₯ HTML / CSS / React.js / MovieAPI</p>
        <ul>
          <li>
            π‘λ‘λ©νλ©΄
              <li>
              λ°μ΄ν°λ₯Ό λΆλ¬μ€λ λμ λ‘λ©νλ©΄ νμ (μλ‘κ³ μΉ¨μλ λμ)
              </li>
          </li>
          <li>π‘ννλ©΄
              <li>
              νμ  8.5μ΄μμ μνλ¦¬μ€νΈλ₯Ό νμ (ν¬μ€ν°/νμ΄ν/κ°λ΄μ°λ/μλμμ€/μ₯λ₯΄)
              </li>
          </li>
          <li>π‘μμΈνλ©΄
              <li>
              ννλ©΄μμ κ° μν νμ΄ν ν΄λ¦­μ μμΈνλ©΄ νμ
              </li>
          </li>
        </ul>
        <div className={Styles.button}>
        <button className={Styles.detailButton} onClick={handleClickGithub}>GitHub</button>
        <button className={Styles.detailButton} onClick={handleClickSite}>URL</button>
        </div>
      </div>
    </div>
  )
}

export default Third;