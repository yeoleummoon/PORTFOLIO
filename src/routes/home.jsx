import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const navigate = useNavigate();
  return(
    <div className={styles.wrap}>
      <div className={styles.me_box}>
      <img src="../images/yeoleum.png" alt="profile" />
        <h2 className={styles.name}>문열음</h2>
          <p className={styles.bar}></p>
          <p className={styles.developer}>Frontend Developer</p>
      </div>
      <section className={styles.info}>
          <p className={styles.iam}>열매를 열리게 하는 개발자로</p>
            <div className={styles.button}>
              <button className={styles.project} onClick={() => {
                navigate('/project');
              }}>PROJECT</button>
            </div>
            <div className={styles.story}>
            <p>Frontend를 깊이 있게 다져나가고자 주니어 개발자에 지원합니다.</p>
            <p>다양한 경험을 쌓았으며, 매번 새로운 계획과 도전은 큰 자극제가 되어 주었습니다.</p>
            <p>앞으로도 스스로에게 새로운 과제를 내어주며 계속해서 발전해 나갈 기회를 만들어주고자 합니다.</p>
            <div className={styles.contact}>
              <button><a href="mailto:yoruminn@naver.com"><img src="../../images/icon_mail.png" alt="mail" /></a></button>
            </div>
            </div>
      </section>      
    </div>
  )
}

export default Home;