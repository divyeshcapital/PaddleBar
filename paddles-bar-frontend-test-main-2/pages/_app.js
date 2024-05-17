import MainLayout from '../components/layouts/MainLayout';
import Layout from '../components/layouts/MainLayout';
import '../styles/main.scss';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
