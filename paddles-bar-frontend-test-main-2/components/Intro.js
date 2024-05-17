import { _classes, parse } from '../utilities/helpers';
import styles from '../styles/modules/Intro.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cl = _classes(styles);

export default function Intro({ title, meme, content, cta }) {
  return (
    <section className={cl('_')}>
      <div className={cl('container')}>
        <div className={cl('content')}>
          <div className={cl('illustration_wrapper')}>
            <Image
              type="element"
              alt=""
              src={'/images/gorilla-white.svg'}
              className={cl('illustration')}
              width={300}
              height={300}
            />
          </div>

          <h1 className={cl('main__title')}>{title}</h1>
          <p className={cl('meme__text')}>{meme}</p>
          <div
            className={cl('main__content')}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {cta && (
            <Link href={parse(cta).link} className={cl('link')}>
              {parse(cta).text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
