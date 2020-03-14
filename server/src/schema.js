const { gql } = require('apollo-server');

const typeDefs = gql`
    type Launch {
        id: ID!
        site: String
        mision: Mission
        rocket: rocket
        isBooked: Boolean!
    }
`;

module.exports = typeDefs;