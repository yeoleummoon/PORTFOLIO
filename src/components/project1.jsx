import React from 'react';
import Styles from '../components/projectDetail.module.css';

const First = () => {
  const handleClickGithub = () => {
    const url = "https://github.com/yeoleummoon/JSchallenge";
    window.open(url);
  }
  const handleClickSite = () => {
    const url = "https://graceful-melba-77a9bf.netlify.app/";
    window.open(url);
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.image}>
      <img src="../../images/momentum1.png" alt="momentum" />
      <img src="../../images/momentum2.png" alt="momentum" />
      </div>
    <div className={Styles.index}>
        <h2>Momentum</h2>
        <p>기술스택🔥 HTML / CSS / JavaScript / WeatherAPI</p>
        <ul>
          <li>
            🟡닉네임
              <li>
              input창에 이름을 넣고 엔터 클릭시,
              메인화면의 좌하단에 있는 프로필표시 
              </li>
          </li>
          <li>🟡랜덤프로필
              <li>
              새로고침 할 때마다 랜덤 프로필 표시
              </li>
          </li>
          <li>🟡날짜와 현재시각
              <li>
              현재 날짜와 시각을 표시
              </li>
          </li>
          <li>🟡투두리스트 
              <li>
              투두리스트 추가,삭제 기능
              </li>
          </li>
          <li>🟡디데이카운터
              <li>
              2023년까지 남은 디데이표시
              </li>
          </li>
          <li>🟡현재날씨
            <li>
            날씨API를 이용해서 현재위치의 날씨를 표시
            </li>
          </li>
          <li>🟡뽀모도로 타이머
            <li>
            시작버튼을 누르면 25분 타이머 실행,
            타이머 종료후 알람이 울리고 재생버튼 생성,
            다시 생성된 재생버튼을 누르면 5분 타이머 실행,
            종료후 알람
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

export default First;