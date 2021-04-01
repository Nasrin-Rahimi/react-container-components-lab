import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends React.Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          reviews: []
        };
      }

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => {
            this.setState({reviews: reviews.results})
          })
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h1>Latest reviews</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
