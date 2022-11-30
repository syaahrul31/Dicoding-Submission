import Lottie from 'lottie-react';
import { LottieError } from '../../assets/lottie';

function NotFound() {
	return (
		<Lottie
			animationData={LottieError}
			style={{ height: '70vh', margin: 'auto' }}
		/>
	);
}

export default NotFound;
