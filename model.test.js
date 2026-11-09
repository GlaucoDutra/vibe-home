import {test} from 'node:test';
import assert from 'node:assert/strict';
import {safeUrl,validateProjects} from './model.js';
const project={id:'one',name:'Project',links:[],liveUrl:'https://example.com',testUrl:''};
test('blocks executable and malformed URLs',()=>{for(const url of ['javascript:alert(1)','data:text/html,test','file:///etc/passwd','not a url'])assert.equal(safeUrl(url),null);assert.equal(safeUrl('https://example.com'),'https://example.com/');});
test('validates imports and environment separation',()=>{const p={...project,links:[{env:'live',category:'Database',provider:'Supabase',url:'https://supabase.com/dashboard'},{env:'test',category:'Database',provider:'AWS',url:'https://console.aws.amazon.com'}]};assert.equal(validateProjects([p])[0].links[1].env,'test');assert.throws(()=>validateProjects([project,project]));assert.throws(()=>validateProjects([{...project,liveUrl:'javascript:alert(1)'}]));assert.throws(()=>validateProjects([{...p,links:[{...p.links[0],env:'production'}]}]));assert.throws(()=>validateProjects([{...project,name:'  '}]));});
