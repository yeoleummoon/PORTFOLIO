import React from 'react';
import Styles from '../components/projectDetail.module.css';

const Second = () => {
  const handleClickGithub = () => {
    const url = "https://github.com/yeoleummoon/Youtube";
    window.open(url);
      }
  return (      
        <div className={Styles.container}>
          <div className={Styles.image}>
          <img src="../../images/youtube1.png" alt="youtube" />
          <img src="../../images/youtube2.png" alt="youtube" />
          </div>
        <div className={Styles.index}>
            <h2>Youtube</h2>
            <p>기술스택🔥 HTML / CSS / React.js / YoutubeAPI</p>
            <ul>
            <li>
            🟡홈화면
              <li>
              유튜브API를 이용해, 한국에서 가장 인기있는 동영상 25개를 표시.
              각 동영상별로 타이틀,채널명,조회수 표시
              </li>
          </li>
          <li>🟡상세페이지
              <li>
              홈화면에 있는 타이틀 클릭시, 상세페이지 화면 표시.
              동영상 재생, 타이틀과 영상에 관련된 정보 표시
              </li>
          </li>
          <li>🟡유튜브 타이틀
              <li>
              유튜브 타이틀 클릭시, 홈화면으로 이동
              </li>
          </li>
          <li>🟡검색창
              <li>
              검색어를 입력시, 검색어와 관련된 가장 인기있는 동영상 25개를 표시.
              각 동영상 별로 타이틀, 채널명 표시
              </li>
          </li>
            </ul>
            <div className={Styles.button}>
            <button  className={Styles.detailButton} onClick={handleClickGithub}>GitHub</button>
            </div>
          </div>
        </div>
      )
    }
export default Second;