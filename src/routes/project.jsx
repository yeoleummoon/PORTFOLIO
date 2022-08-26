import { useState } from 'react';
import styles from './project.module.css';
import First from '../components/project1'
import Second from '../components/project2'
import Third from '../components/project3';
import Fourth from '../components/project4';
import { MAIN_DATA } from '../main_data';

function Project (){
  const [content, setContent] = useState();
  const handleClickButton = e => {
    const { name } = e.target;
    setContent(name);
  };
  const selectComponent = {
    first: <First />,
    second: <Second />,
    third: <Third />,
    fourth: <Fourth />,
  }
  return(
    <div className={styles.container}>
      <div className={styles.button}>
      {MAIN_DATA.map(data => {
        return(
          <button
            onClick={handleClickButton}
            key={data.id}
            name={data.name}
            >
            {data.text}
          </button>
        )
      })}
      </div>
      {content && <div>{selectComponent[content]}</div>}
      </div>
  )
}

export default Project;
