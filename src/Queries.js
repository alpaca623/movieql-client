import gql from "graphql-tag";

export const HOME_PAGE = gql`
    query{
        movies(limit:20, rating:7){
            id
            title
            rating
            genres
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query getMovieDetail($movieId:Int!){
        movie(id:$movieId){
            id
            title
            rating
            description_intro
            language
            medium_cover_image
            genres
        }
        suggestions(id:$movieId){
            id
            title
            rating
            description_intro
            language
            medium_cover_image
            genres
        }
    }
`;