import React from 'react';
import Styles from './projectDetail.module.css';

const Fourth = () => {
    const handleClickGithub = () => {
      const url = "https://github.com/yeoleummoon/PaintAPP";
      window.open(url);
    }
    const handleClickSite = () => {
      const url = "https://friendly-bavarois-a76654.netlify.app/";
      window.open(url);
    }
    return (
      <div className={Styles.container}>
        <div className={Styles.image}>
        <img src="../../images/paintjs.png" alt="paint" />
        </div>
      <div className={Styles.index}>
          <h2>Paint-App</h2>
          <p>기술스택🔥 HTML / CSS / JavaScript</p>
          <ul>
            <li>
              🟡그림그리기(PAINT)
                <li>
                컬러픽커에서 컬러를 선택한 후, 마우스 드래그로 그리기처리
                </li>
            </li>
            <li>🟡그림채우기(FILL)
                <li>
                FILL버튼 클릭, 원하는 컬러를 선택한 뒤에 캔버스 클릭하면 선택컬러를 채우기처리.
                FILL버튼은 클릭시, PAINT 버튼으로 바뀌게 됨
                </li>
            </li>
            <li>🟡그림저장하기(SAVE)
                <li>
                SAVE버튼 클릭시, 현재 캔버스의 그림을 저장처리. 저장된 파일명은 "painJS[🎨].png"  
                </li>
            </li>
            <li>🟡그림전체삭제(DESTROY)
                <li>
                DESTROY버튼 클릭시, 현재 캔버스의 그림을 한번에 삭제처리  
                </li>
            </li>
            <li>🟡그림지우기(ERASE)
                <li>
                ERASE버튼을 클릭시, 선택한 부분 지우기처리
                그림채우기 기능을 사용한 뒤, ERASE버튼을 클릭하게 되면 PAINT버튼이 FILL버튼으로 바뀌게 됨
                </li>
            </li>
            <li>🟡이미지업로드
                <li>
                파일선택 버튼을 클릭시, 원하는 이미지 업로드
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

export default Fourth;