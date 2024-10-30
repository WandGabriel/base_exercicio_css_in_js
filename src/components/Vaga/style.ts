import styled from 'styled-components'

export const ListVacancy = styled.li`
  border: 1px solid var(--corPrimaria);
  background-color: var(--corSecundaria);
  color: var(--corPrimaria);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: var(--corPrimaria);
    color: var(--corSecundaria);
  }

  :hover a {
    border-color: var(--corPrimaria);
    background-color: var(--corSecundaria);
    color: var(--corPrimaria);
  }

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: var(--corSecundaria);
    background-color: var(--corPrimaria);
    color: var(--corSecundaria);
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
