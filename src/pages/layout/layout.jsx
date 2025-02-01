import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import ScrollToTop from '@lib/ScrollToTop';
import ChatWidget from '../../components/ChatWidget/ChatWidget';

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default Layout;
