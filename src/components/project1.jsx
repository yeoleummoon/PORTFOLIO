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
        <p>κΈ°μ μ€νπ₯ HTML / CSS / JavaScript / WeatherAPI</p>
        <ul>
          <li>
            π‘λλ€μ
              <li>
              inputμ°½μ μ΄λ¦μ λ£κ³  μν° ν΄λ¦­μ,
              λ©μΈνλ©΄μ μ’νλ¨μ μλ νλ‘ννμ 
              </li>
          </li>
          <li>π‘λλ€νλ‘ν
              <li>
              μλ‘κ³ μΉ¨ ν  λλ§λ€ λλ€ νλ‘ν νμ
              </li>
          </li>
          <li>π‘λ μ§μ νμ¬μκ°
              <li>
              νμ¬ λ μ§μ μκ°μ νμ
              </li>
          </li>
          <li>π‘ν¬λλ¦¬μ€νΈ 
              <li>
              ν¬λλ¦¬μ€νΈ μΆκ°,μ­μ  κΈ°λ₯
              </li>
          </li>
          <li>π‘λλ°μ΄μΉ΄μ΄ν°
              <li>
              2023λκΉμ§ λ¨μ λλ°μ΄νμ
              </li>
          </li>
          <li>π‘νμ¬λ μ¨
            <li>
            λ μ¨APIλ₯Ό μ΄μ©ν΄μ νμ¬μμΉμ λ μ¨λ₯Ό νμ
            </li>
          </li>
          <li>π‘λ½λͺ¨λλ‘ νμ΄λ¨Έ
            <li>
            μμλ²νΌμ λλ₯΄λ©΄ 25λΆ νμ΄λ¨Έ μ€ν,
            νμ΄λ¨Έ μ’λ£ν μλμ΄ μΈλ¦¬κ³  μ¬μλ²νΌ μμ±,
            λ€μ μμ±λ μ¬μλ²νΌμ λλ₯΄λ©΄ 5λΆ νμ΄λ¨Έ μ€ν,
            μ’λ£ν μλ
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