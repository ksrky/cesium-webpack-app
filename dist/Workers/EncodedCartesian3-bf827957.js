define(["exports","./Cartesian2-8646c5a1","./Check-24483042","./when-54335d57"],(function(e,n,i,o){"use strict";function h(){this.high=n.Cartesian3.clone(n.Cartesian3.ZERO),this.low=n.Cartesian3.clone(n.Cartesian3.ZERO)}h.encode=function(e,n){var i;return o.defined(n)||(n={high:0,low:0}),0<=e?(i=65536*Math.floor(e/65536),n.high=i,n.low=e-i):(i=65536*Math.floor(-e/65536),n.high=-i,n.low=e+i),n};var a={high:0,low:0};h.fromCartesian=function(e,n){var i=(n=o.defined(n)?n:new h).high,r=n.low;return h.encode(e.x,a),i.x=a.high,r.x=a.low,h.encode(e.y,a),i.y=a.high,r.y=a.low,h.encode(e.z,a),i.z=a.high,r.z=a.low,n};var r=new h;h.writeElements=function(e,n,i){h.fromCartesian(e,r);var o=r.high;e=r.low,n[i]=o.x,n[i+1]=o.y,n[i+2]=o.z,n[i+3]=e.x,n[i+4]=e.y,n[i+5]=e.z},e.EncodedCartesian3=h}));