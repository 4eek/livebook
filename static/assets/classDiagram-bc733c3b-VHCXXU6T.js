import{a as X,b as L,c as Y}from"./chunk-FSTX3WCY.js";import{b as h}from"./chunk-CX2EDEBX.js";import{a as W,b as H}from"./chunk-SNBUI7SF.js";import"./chunk-EM767CKZ.js";import{b as $,c as B,da as a,h as g,na as y,oa as Z,z as v}from"./chunk-Y2SMFNMK.js";import{h as k}from"./chunk-3X664NSF.js";var _=k($(),1),q=k(B(),1),K=k(v(),1);var u={},m=20,p=function(e){let i=Object.entries(u).find(x=>x[1].label===e);if(i)return i[0]},A=function(e){e.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),e.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),e.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),e.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},C=function(e,i,x,n){let c=y().class;u={},a.info("Rendering diagram "+e);let E=y().securityLevel,b;E==="sandbox"&&(b=g("#i"+i));let w=E==="sandbox"?g(b.nodes()[0].contentDocument.body):g("body"),o=w.select(`[id='${i}']`);A(o);let r=new W({multigraph:!0});r.setGraph({isMultiGraph:!0}),r.setDefaultEdgeLabel(function(){return{}});let l=n.db.getClasses(),D=Object.keys(l);for(let t of D){let d=l[t],s=h.drawClass(o,d,c,n);u[s.id]=s,r.setNode(s.id,s),a.info("Org height: "+s.height)}n.db.getRelations().forEach(function(t){a.info("tjoho"+p(t.id1)+p(t.id2)+JSON.stringify(t)),r.setEdge(p(t.id1),p(t.id2),{relation:t},t.title||"DEFAULT")}),n.db.getNotes().forEach(function(t){a.debug(`Adding note: ${JSON.stringify(t)}`);let d=h.drawNote(o,t,c,n);u[d.id]=d,r.setNode(d.id,d),t.class&&t.class in l&&r.setEdge(t.id,p(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")}),H(r),r.nodes().forEach(function(t){t!==void 0&&r.node(t)!==void 0&&(a.debug("Node "+t+": "+JSON.stringify(r.node(t))),w.select("#"+(n.db.lookUpDomId(t)||t)).attr("transform","translate("+(r.node(t).x-r.node(t).width/2)+","+(r.node(t).y-r.node(t).height/2)+" )"))}),r.edges().forEach(function(t){t!==void 0&&r.edge(t)!==void 0&&(a.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(r.edge(t))),h.drawEdge(o,r.edge(t),r.edge(t).relation,c,n))});let f=o.node().getBBox(),M=f.width+m*2,S=f.height+m*2;Z(o,S,M,c.useMaxWidth);let N=`${f.x-m} ${f.y-m} ${M} ${S}`;a.debug(`viewBox ${N}`),o.attr("viewBox",N)},G={draw:C},P={parser:X,db:L,renderer:G,styles:Y,init:e=>{e.class||(e.class={}),e.class.arrowMarkerAbsolute=e.arrowMarkerAbsolute,L.clear()}};export{P as diagram};