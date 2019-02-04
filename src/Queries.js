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
