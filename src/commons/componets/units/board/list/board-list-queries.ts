import { gql } from "@apollo/client";

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoardsCount(search: $search, endDate: $endDate, startDate: $startDate)
  }
`;

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      endDate: $endDate
      startDate: $startDate
    ) {
      _id
      title
      writer
      createdAt
    }
  }
`;
