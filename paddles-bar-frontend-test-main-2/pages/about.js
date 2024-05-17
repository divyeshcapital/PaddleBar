import { useState, useEffect } from 'react';
import { _classes } from '../utilities/helpers';
import Image from 'next/image';
import Intro from '../components/Intro';
import styles from '../styles/pages/About.module.scss';
const cl = _classes(styles);

function AboutUs() {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch('../db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }

        return response.json();
      })
      .then((json) => {
        console.log('json', json);
        setPageData(json.items[1]);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!pageData) {
    return <p>No Data</p>;
  }

  return (
    <div className={cl('_')}>
      <div className={cl('hero')}>
        <Image
          src={pageData.fieldgroup1[0].image1}
          alt=""
          width={1300}
          height={850}
        />
      </div>

      <div id="about">
        <Intro
          title={pageData.h2 || 'This is the intro title'}
          meme={pageData.h3 || 'Meme Text Here'}
          content={pageData.blurb1 || 'This is the intro content'}
          cta={pageData.buttonlink1}
        />
      </div>
    </div>
  );
}

export default AboutUs;
