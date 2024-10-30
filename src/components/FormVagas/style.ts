import styled from 'styled-components'

export const FormData = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--corSecundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const Button = styled.button`
  background-color: var(--corPrimaria);
  border: 1px solid var(--corPrimaria);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--corSecundaria);
  margin-left: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0px;
  }
`

export const Inpunt = styled.input`
  padding: 0 16px;
  outline-color: var(--corPrimaria);
`
