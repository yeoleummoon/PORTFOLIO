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
            <p>κΈ°μ μ€νπ₯ HTML / CSS / React.js / YoutubeAPI</p>
            <ul>
            <li>
            π‘ννλ©΄
              <li>
              μ νλΈAPIλ₯Ό μ΄μ©ν΄, νκ΅­μμ κ°μ₯ μΈκΈ°μλ λμμ 25κ°λ₯Ό νμ.
              κ° λμμλ³λ‘ νμ΄ν,μ±λλͺ,μ‘°νμ νμ
              </li>
          </li>
          <li>π‘μμΈνμ΄μ§
              <li>
              ννλ©΄μ μλ νμ΄ν ν΄λ¦­μ, μμΈνμ΄μ§ νλ©΄ νμ.
              λμμ μ¬μ, νμ΄νκ³Ό μμμ κ΄λ ¨λ μ λ³΄ νμ
              </li>
          </li>
          <li>π‘μ νλΈ νμ΄ν
              <li>
              μ νλΈ νμ΄ν ν΄λ¦­μ, ννλ©΄μΌλ‘ μ΄λ
              </li>
          </li>
          <li>π‘κ²μμ°½
              <li>
              κ²μμ΄λ₯Ό μλ ₯μ, κ²μμ΄μ κ΄λ ¨λ κ°μ₯ μΈκΈ°μλ λμμ 25κ°λ₯Ό νμ.
              κ° λμμ λ³λ‘ νμ΄ν, μ±λλͺ νμ
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