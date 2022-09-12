import {css} from 'lit';
import { SuperElemento } from './superElemento.js';
export class HerenciaElemento extends SuperElemento{
    static  get style(){
        return [
            super.style, 
            css`button{color:red; }`
        ];
    }
}