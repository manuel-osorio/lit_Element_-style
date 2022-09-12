import { html, css, LitElement } from 'lit';

export class HostElements extends LitElement {
    static get styles() {
        return css`
        :host{
            display:block;
            background-color: azure;
        }
        :host([hidden]){
            display:none;
        }
        :host(.blue){
            background-color:aliceblue;
            color:blue;
        }
        p{
            font-family:fantasy;
        }
        
        `;
    }
    render() {
        return html`
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
        ç a, esse dolores alias eos facere provident vitae corrupti autem
         quia doloremque quam aspernatur laboriosam. Molestiae est voluptatibus
          itaque hic consequatur?
        </p>
        `;
    }
}
