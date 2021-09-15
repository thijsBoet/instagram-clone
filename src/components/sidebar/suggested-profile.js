import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { updateLoggedInUserFollowing,  updateFollowsUserFollowers} from '../../services/firebase'

export default function SuggestedProfile({
	profileDocId,
	userDocId,
	username,
	profileId,
	userId,
	loggedInUserDocId
}) {
	const [followed, setFollowed] = useState(false);

	async function handleFollowUser() {
		setFollowed(true);

		await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);

		await updateFollowsUserFollowers(profileDocId, userId, false);
	}

	return !followed ? (
		<div className='flex flex-row items-center align-items justify-between'>
			<div className='flex items-center justify-between'>
				<img
					className='rounded-full w-8 flex mr-3'
					src={`/images/avatars/${username}.jpg`}
					alt={`${username} profile`}
				/>
				<Link to={`/p/${username}`}>
					<div className="font-bold text-sm">{username}</div>
				</Link>
			</div>
			<button
				className="text-xs font-bold text-blue-medium"
				type="button"
				onClick={() => console.log("follow ", username)}
			>
				Follow
			</button>
		</div>
	) : null;
}


SuggestedProfile.propTypes = {
	profileDocId: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	profileId: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
};
