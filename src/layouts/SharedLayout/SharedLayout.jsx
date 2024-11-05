import { Container, Section } from '@radix-ui/themes';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import FooterPage from '../../pages/FooterPage/Footer';

const SharedLayout = () => {
  return (
    <Container size={{ initial: '1', sm: '4' }} px={'2'}>
      <HeaderComponent />
      <main>
        <Section
          py={{ initial: '1', sm: '3' }}
          style={{ backgroundColor: 'var(--olive-a2)' }}
          minHeight={{ initial: '60vh', sm: '80vh' }}
        >
          <Outlet />
        </Section>
      </main>
      <FooterPage />
    </Container>
  );
};

export default SharedLayout;
