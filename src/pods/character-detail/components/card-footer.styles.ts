import { css } from 'emotion';

export const quoteContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50rem;
  padding: 2rem;
  color: white;
  background-color: #949494;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const quote = css`
  margin: 0;
  font-size: 1.2rem;
  font-style: italic;
`;

export const editButton = css`
  width: 2.7rem;
  height: 2.7rem;
  margin-left: 1rem;
  border-radius: 50%;
  background-color: #f5e7e7;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #b3b3b3;
  }
  &:disabled {
    background-color: #b3b3b3;
  }
`;

export const editIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #6372a1;
`;

export const addIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #86ffee;
  &:disabled {
    color: #949494;
  }
`;

export const deleteIcon = css`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  color: #5f003d;
`;

export const iconContainer = css`
  display: flex;
  align-items: center;
`;

export const updateInput = css`
  width: 100%;
  padding: 0.1rem 1rem;
  font-style: italic;
  color: #6372a1;
  background-color: white;
  border-radius: 0.5rem;
`;