import { Flex, Heading, Section } from '@radix-ui/themes';
import NavBar from '../NavBar';

const HeaderComponent = () => {
  return (
    <header>
      <Section py={{ initial: '1', sm: '3' }} style={{ backgroundColor: 'var(--olive-a2)' }}>
        <Flex justify={'between'}>
          <Heading as="h1" m={0} size={{ initial: '2', sm: '6' }}>
            Created by UKostiantyn
          </Heading>
          <NavBar />
        </Flex>
      </Section>
    </header>
  );
};

export default HeaderComponent;
