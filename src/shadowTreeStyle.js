import{html, css, LitElement, render} from 'lit';
export class shadowTreeStyle extends LitElement{
    static get styles(){
        return css`
        *{color:render;}
        p{
            font-family:sans-serif;
        }
        .myclass{margin:100px;}
        #main{
            padding:30px;
            color:blue;
        }
        h1{
            font-family:4em;
            color:red;
        }
        `
    }
    render(){
        return html`
        <p>lorean</p>
        <p class="myclass">parrafo 1</p>
        <p id ="main">Parrafo 2</p>
        <h1>T  i  t u  l o</h1>
    
        `

    }
}