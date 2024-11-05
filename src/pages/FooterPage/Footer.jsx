import { Heading, Link, Section } from '@radix-ui/themes';

const FooterPage = () => {
  return (
    <footer>
      <Section
        py={{ initial: '1', sm: '3' }}
        px={{ initial: '1', sm: '3' }}
        style={{ backgroundColor: 'var(--olive-a2)' }}
      >
        <Heading as="h5" size={{ initial: '5', sm: '5' }} mb={{ initial: '1', sm: '3' }}>
          Contacts
        </Heading>
        <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
          <li>
            <Link href="tel:+38 093 677 90 01" size={{ initial: '1', sm: '3' }}>
              Call me
            </Link>
          </li>
          <li>
            <Link href="https://t.me/ukostiantyn" size={{ initial: '1', sm: '3' }}>
              Send a message via Telegram
            </Link>
          </li>
          <li>
            <Link href="mailto:umaneck@gmail.com" size={{ initial: '1', sm: '3' }}>
              Email me
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/kostiantyn-fullstack-developer"
              size={{ initial: '1', sm: '3' }}
            >
              My LinkedIn
            </Link>
          </li>
        </ul>
      </Section>
    </footer>
  );
};

export default FooterPage;
