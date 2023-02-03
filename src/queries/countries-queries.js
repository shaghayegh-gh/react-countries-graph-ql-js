import { gql } from "@apollo/client";

export const LIST_COUNTRIES = gql`
  query ($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      continent {
        name
      }
      capital
      currency
      languages {
        name
      }
      emoji
      emojiU
    }
  }
`;
