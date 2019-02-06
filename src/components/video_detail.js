import React from 'react';
import { Link } from 'react-router';

const VideoDetail = ({video}) => {

	if(!video) {
		return (
			<div>
				<h2>Loading Content....</h2>
			</div>
		);
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const youtubelink = `https://www.youtube.com/channel/${video.snippet.channelId}`;

	return (

		<div className = "col-md-8 video-detail">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} frameBorder="0" allowFullScreen>
				</iframe>
			</div>
			<div className="details">
				<div><h4>{video.snippet.title}</h4></div>
				<div>
					<a className="youtubelinktag" target="_blank" href={youtubelink}><h5>YouTube Channel : { video.snippet.channelTitle }</h5></a>
					<p>Description : </p>
					<p>{video.snippet.description}</p>
				</div>
			</div>
		</div>

	);

}


export default VideoDetail;