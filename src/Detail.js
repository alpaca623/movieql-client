import React from "react";
import { Query } from "react-apollo";
import {MOVIE_DETAILS} from './Queries';

const Detail = ({
  match: {
    params: { movieId }
  }
}) => <Query query={MOVIE_DETAILS} variables={{movieId}}>
  {({loading, error, data}) => {
    if(loading) return "loading...";
    if(error) return `error!! ${error}`;
    return(
      <React.Fragment>
        {data.movie.title}
        {data.movie.rating}
        {data.movie.description_intro}
        {data.movie.language}
      </React.Fragment>
    )
  }}
</Query>

export default Detail;
