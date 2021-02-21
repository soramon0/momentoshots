import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';

export default function Home() {
	return (
		<div className='h-screen bg-gray-100'>
			<Head>
				<title>Momento Shots</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='h-full flex justify-center items-center'>
				<ComingSoon />
			</main>
		</div>
	);
}
