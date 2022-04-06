import React from "react";

import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

import { Stacks } from "./conhecimentos-style";
import { Titulo } from "../../4-gerais/titulo/titulo-style";
import { Subtitulo } from "../../4-gerais/titulo/subtitulo-style";
import { Icon } from "../../4-gerais/icons-stack/icons-style";
import { Textstack } from "./text-stack/text-stack-style";


function Conhecimentos(){
  return(
    <Stacks>
      <Titulo>Conhecimentos <span>.</span></Titulo>

      <Textstack> 
        <div>
          <Subtitulo borderColor={'#3072AA'}>Python</Subtitulo>
          <p>
            Python é uma linguagem de programação dinâmica, multiplataforma, utilizada desde machine learning até web.
          </p>
        </div>

        <Icon color={'#3072AA'}>
          <DiPython/>
        </Icon>
      </Textstack>
      
      <Textstack> 
        <div>
          <Subtitulo borderColor={'#EFD81D'}>JavaScript</Subtitulo>
          <p>
            JavaScript é uma linguagem de programação dinâmica que é usada para 
            desenvolvimento web.
          </p>
        </div>

        <Icon color={'#EFD81D'}>
          {/* <SiJavascript/> */}
          <DiJavascript1/>
        </Icon>
      </Textstack>

      <Textstack> 
        <div>
          <Subtitulo borderColor={'#f24f00'}>HTML</Subtitulo>
          <p>
            HyperText Markup Language é uma linguagem de marcação utilizada na 
            construção de páginas na Web.
          </p>
        </div>

        <Icon color={'#f24f00'}>
          <DiHtml5/>
        </Icon>
      </Textstack>

      <Textstack> 
        <div>
          <Subtitulo borderColor={'#234FE4'}>CSS</Subtitulo>
          <p>
            Cascading Style Sheets é uma maneira de dar estilo ao código criado 
            por linguagens de marcação.
          </p>
        </div>

        <Icon color={'#234FE4'}>
          <DiCss3/>
        </Icon>
      </Textstack>

      <Textstack> 
        <div>
          <Subtitulo borderColor={'#61DBFB'}>React JS</Subtitulo>
          <p>
            O React é uma biblioteca JavaScript declarativa, eficiente e flexível para
            criar interfaces com o usuário.
          </p>
        </div>

        <Icon color={'#61DBFB'}>
          <DiReact/>
        </Icon>
      </Textstack>

      <Textstack> 
        <div>
          <Subtitulo borderColor={'#9C4388'}>Styled Components</Subtitulo>
          <p>
            Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS.
          </p>
        </div>

        <Icon color={'#9C4388'}>
          <SiStyledcomponents/>
        </Icon>
      </Textstack>

    </Stacks>
  )
}

export default Conhecimentos;