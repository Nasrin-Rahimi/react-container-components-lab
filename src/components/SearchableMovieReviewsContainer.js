import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
//This component is not complete. You should add search form!
class SearchableMovieReviewsContainer extends React.Component{
    constructor(){
        super()

        this.state = {
            reviews: [],
            searchTerm: ""
        }
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
            <div className="searchable-movie-reviews">
                <h1>Searchable Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
