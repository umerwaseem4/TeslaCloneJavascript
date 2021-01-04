import styled from 'styled-components'
import { LogoSVG } from './IconSVG'
import { motion } from 'framer-motion'

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;
`

export const Logo = styled(LogoSVG)`
  height: 17px;
  display: flex;
  flex-direction: column;
  width: 10%;
  cursor: pointer;
`

export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    li {
      list-style: none;

      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-bottom: 38px;

    ul {
      flex-direction: row;
      li + li {
        margin: 0 0 0 30px;
      }
    }
    
  }
`
