import{h as x}from"./chunk-3QLLRM5L.js";var c={aggregation:18,extension:18,composition:18,dependency:6,lollipop:13.5,arrow_point:4};function d(n,r){if(n===void 0||r===void 0)return{angle:0,deltaX:0,deltaY:0};n=t(n),r=t(r);let[s,e]=[n.x,n.y],[a,i]=[r.x,r.y],o=a-s,y=i-e;return{angle:Math.atan(y/o),deltaX:o,deltaY:y}}x(d,"calculateDeltaAndAngle");var t=x(n=>Array.isArray(n)?{x:n[0],y:n[1]}:n,"pointTransformer"),T=x(n=>({x:x(function(r,s,e){let a=0,i=t(e[0]).x<t(e[e.length-1]).x?"left":"right";if(s===0&&Object.hasOwn(c,n.arrowTypeStart)){let{angle:l,deltaX:g}=d(e[0],e[1]);a=c[n.arrowTypeStart]*Math.cos(l)*(g>=0?1:-1)}else if(s===e.length-1&&Object.hasOwn(c,n.arrowTypeEnd)){let{angle:l,deltaX:g}=d(e[e.length-1],e[e.length-2]);a=c[n.arrowTypeEnd]*Math.cos(l)*(g>=0?1:-1)}let o=Math.abs(t(r).x-t(e[e.length-1]).x),y=Math.abs(t(r).y-t(e[e.length-1]).y),f=Math.abs(t(r).x-t(e[0]).x),w=Math.abs(t(r).y-t(e[0]).y),h=c[n.arrowTypeStart],u=c[n.arrowTypeEnd],p=1;if(o<u&&o>0&&y<u){let l=u+p-o;l*=i==="right"?-1:1,a-=l}if(f<h&&f>0&&w<h){let l=h+p-f;l*=i==="right"?-1:1,a+=l}return t(r).x+a},"x"),y:x(function(r,s,e){let a=0,i=t(e[0]).y<t(e[e.length-1]).y?"down":"up";if(s===0&&Object.hasOwn(c,n.arrowTypeStart)){let{angle:l,deltaY:g}=d(e[0],e[1]);a=c[n.arrowTypeStart]*Math.abs(Math.sin(l))*(g>=0?1:-1)}else if(s===e.length-1&&Object.hasOwn(c,n.arrowTypeEnd)){let{angle:l,deltaY:g}=d(e[e.length-1],e[e.length-2]);a=c[n.arrowTypeEnd]*Math.abs(Math.sin(l))*(g>=0?1:-1)}let o=Math.abs(t(r).y-t(e[e.length-1]).y),y=Math.abs(t(r).x-t(e[e.length-1]).x),f=Math.abs(t(r).y-t(e[0]).y),w=Math.abs(t(r).x-t(e[0]).x),h=c[n.arrowTypeStart],u=c[n.arrowTypeEnd],p=1;if(o<u&&o>0&&y<u){let l=u+p-o;l*=i==="up"?-1:1,a-=l}if(f<h&&f>0&&w<h){let l=h+p-f;l*=i==="up"?-1:1,a+=l}return t(r).y+a},"y")}),"getLineFunctionsWithOffset");export{T as a};
