import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync('dist/index.html','utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
for(const [,script] of scripts)new vm.Script(script);
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(x=>x[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs');
for(const [,target] of html.matchAll(/href="#([^"]+)"/g))if(!ids.includes(target))throw Error('Missing anchor: '+target);
const script=scripts[0][1].split('const canvas=')[0];
const elements=new Map();
function el(id){if(!elements.has(id))elements.set(id,{value:id==='hours'?'20':id==='cost'?'25':id==='business'?'Empresa ejemplo':id==='goal'?'Automatizar mi operación':'',textContent:'',setAttribute(){},addEventListener(type,fn){this[type]=fn},classList:{toggle(){return true},remove(){}},focus(){}});return elements.get(id)}
const tabs=[el('tab0'),el('tab1'),el('tab2')];
const context={document:{getElementById:el,querySelector:s=>el(s),querySelectorAll:s=>s==='[data-flow]'?tabs:[],createElement:()=>({click(){context.downloaded=true}})},Intl,Blob,URL:{createObjectURL:()=>'',revokeObjectURL(){}},setTimeout:()=>{}};
vm.createContext(context);vm.runInContext(script,context);
if(el('savedHours').textContent!=='56 h')throw Error('ROI hours');
el('hours').value='40';el('hours').input();if(el('savedHours').textContent!=='112 h')throw Error('ROI update');
tabs[1].click();el('simulate').click();if(!el('flowResult').textContent.includes('pedido validado'))throw Error('Flow interaction');
el('brief').submit({preventDefault(){}});if(!context.downloaded)throw Error('Brief download');
console.log('Passed: JavaScript syntax, unique IDs, navigation anchors, ROI updates, flow switching and brief download.');
