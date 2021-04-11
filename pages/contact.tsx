import Head from 'next/head';
import Link from 'next/link';

function ContactPage() {
  return (
    <main>
      <Head>
        <title>Momento Shots - Contact Us</title>
      </Head>
      <div className='text-center p-4'>
        <Link href='/'>Back Home</Link>
      </div>
    </main>
  );
}

export default ContactPage;
