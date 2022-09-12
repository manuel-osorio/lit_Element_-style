import { html, css, LitElement } from 'lit';

export class SuperElemento extends LitElement {
  static get style(){
    return css`
    button{
      width:300px;
      font-style:italic;
    }
    `;
  }
  render(){
    return html `
    <button>click</button>
    `
  }
  
}