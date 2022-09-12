import { SuperElemento } from './src/superElemento.js';
import{HerenciaElemento } from './src/herenciaElemento.js';
import{sharingStyles} from './src/sharingStyle.js';
import{shadowTreeStyle} from './src/shadowTreeStyle'
import{HostElements } from './src/hostElement.js';


window.customElements.define('elem-supe',HerenciaElemento );
window.customElements.define('sharing-style',sharingStyles);
window.customElements.define('shadow-tree',shadowTreeStyle);
window.customElements.define('host-element',HostElements )
