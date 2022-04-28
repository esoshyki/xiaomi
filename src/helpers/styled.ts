import prodStyled from "styled-components";
import devStyled from 'styled-components/macro'

export const styled = process.env.NODE_ENV !== "production" ? devStyled : prodStyled