import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyCb4r7s1fSl7QYFU_cabMxuV8lHnDaf1SU";


class APP extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch('cricket');
  }

  videoSearch(searchText){
    YTSearch( {key: API_KEY , term : searchText}, (videos) =>{
      this.setState({
        videos : videos,
        selectedVideo : videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce( (searchText) => { this.videoSearch(searchText) }  , 300);

    return (
      <div>
        <SearchBar
          onSearchChange = {videoSearch}
        />
        <div className="col-md-12">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect = { (selectedVideo) => { this.setState({ selectedVideo  }) } }
            videos={this.state.videos} />
        </div>
      </div>
    );
  }

}

// place component in HTML DOM
ReactDom.render(<APP />, document.querySelector('.container') );
