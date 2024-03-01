// assets
import wave from '../assets/wave.svg';

function Footer() {
	return (
		<div className='footer'>
			<img src={wave} alt='' />
			<div className='footer-content'>
				<a href='https://yuriranier.com/recent-projects/' target='_blank' rel='nofollow'>
					yuriranier.com
				</a>
			</div>
		</div>
	);
}

export default Footer;
