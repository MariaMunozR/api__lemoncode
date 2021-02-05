import { css } from 'emotion';

export const card = css`
  display: flex;
  justify-content: space-between;
  width: 50rem;
  height: min-content;
  margin-top: 2rem;
  padding: 2rem;
  background-color: #eee;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
`;

export const image = css`
  border-radius: 1rem;
`;

export const textContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 2px solid #ccc;
`;

export const characterName = css`
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  font-weight: 200;
`;

export const textDetail = css`
  margin: 0 0 0.5rem 0;
  color: #6372a1;
`;

export const aliveStatus = css`
  color: #86ffee;
`;

export const deadStatus = css`
  color: #5f003d;
`;