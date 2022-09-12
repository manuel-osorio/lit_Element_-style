import{html, css, LitElement} from 'lit';
import{buttonStyle} from './_module-Style';
export class sharingStyles extends  LitElement{
    static get styles(){
        return [
            buttonStyle,
            css`
            :host{
                display:block;
                border:1px solid black;
            }`
        ]
    }
    render(){
        return html`
        <button class= "blue-button">click</button>
        <button class= "blue-button" disabled> no click</button>
        
        
        `;
    }
} 