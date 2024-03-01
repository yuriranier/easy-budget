import { Form } from 'react-router-dom';

//Library
import { UserPlusIcon } from '@heroicons/react/24/solid';

// Assets
import illustration from '../assets/illustration.jpg';

function Intro() {
	return (
		<div className='intro'>
			<div>
				<h1>
					Take Control of <span className='accent'>Your Money</span>
				</h1>
				<p>
					Personal budgeting is the secret to financial freedom. Start your journey today.
				</p>
				<Form method='post'>
					<input type='hidden' name='_action' value='newUser' />
					<input
						type='text'
						name='userName'
						required
						placeholder="What's your name?"
						aria-label='Your name'
						autoComplete='given-name'
					/>
					<button type='submit' className='btn btn--dark'>
						<span>Create Account</span>
						<UserPlusIcon width={20} />
					</button>
				</Form>
			</div>
			<img src={illustration} alt='Person with money' width={600} />
		</div>
	);
}

export default Intro;
