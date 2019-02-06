import _ from 'lodash';
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './config/key';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null,
			term: ''
		};

		this.videoSearch(this.state.term);
	}

	videoSearch(term) {
		YTSearch({key:API_KEY,term:term},(videos) => {
			this.setState({ 
				videos:videos,
				selectedVideo:videos[0],
				term: term
			}); 
			console.log(videos);
		});
	}

	render() {
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
					heading = { this.state.term ==='' ? 'Trending' : `Search Results : ${this.state.term}` }
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos={ this.state.videos } />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));