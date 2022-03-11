import {ButtonStyle} from './ButtonStyle'

function Button(props) {
  return(
    <ButtonStyle>{props.children}</ButtonStyle>
  )
}

export default Button