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
        <p>기술스택🔥 HTML / CSS / React.js / MovieAPI</p>
        <ul>
          <li>
            🟡로딩화면
              <li>
              데이터를 불러오는 동안 로딩화면 표시 (새로고침에도 동작)
              </li>
          </li>
          <li>🟡홈화면
              <li>
              평점 8.5이상의 영화리스트를 표시 (포스터/타이틀/개봉연도/시놉시스/장르)
              </li>
          </li>
          <li>🟡상세화면
              <li>
              홈화면에서 각 영화 타이틀 클릭시 상세화면 표시
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