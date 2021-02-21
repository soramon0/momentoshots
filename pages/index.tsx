import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Momento Shots</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<ComingSoon />
			</main>
		</div>
	);
}
