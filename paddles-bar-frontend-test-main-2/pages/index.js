import { _classes } from '../utilities/helpers';
import { useState, useEffect } from 'react';
import styles from '../styles/modules/Home.module.scss';
import HoursSection from '../components/HoursSection';
import Image from 'next/image';

const cl = _classes(styles);

function Home(props) {

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

  console.log('props', props);
  const page = {};

  const renderFaqs = () => (
    <div preset={'fadeup'} className={cl('faqs')}>
      <h1>FAQ</h1>
      <ol>
        {pageData.fieldgroup2.map((item, index) => {
          return (
            <li key={index}>
              <h2 className={cl('question')}>{item.h1}</h2>
              <div
                className={cl('answer')}
                dangerouslySetInnerHTML={{ __html: item.h2 }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
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
      <div className={cl('faqs__section')}>
        <div className={cl('container')}>{renderFaqs()}</div>
      </div>
      <div className={cl('hours__section')}>
        <HoursSection />
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/items/1');
//   const page = await res.json();

//   return {
//     props: {
//       page,
//     },
//   };
// }

export default Home;
