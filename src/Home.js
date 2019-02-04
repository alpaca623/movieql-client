import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./Queries";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, data, error }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return data.movies.map(movie => (
        <h2 key={movie.id}>
          <span>
            {movie.title} / {movie.rating}
          </span>
        </h2>
      ));
    }}
  </Query>
);
export default Home;
