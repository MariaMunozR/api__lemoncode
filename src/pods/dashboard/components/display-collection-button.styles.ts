import { css } from 'emotion';

export const btnContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const showBtn = css`
  background-color: #86ffee;
  &:hover {
    background-color: #005f52;
  }
`;

export const hideBtn = css`
  background-color: #f19aff;
  &:hover {
    background-color: #5f003d;
  }
`;