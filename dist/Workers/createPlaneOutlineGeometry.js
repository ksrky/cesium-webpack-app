define(["./when-54335d57","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./Math-d6182036","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9"],(function(e,t,n,r,a,i,o,u,c,s){"use strict";function y(){this._workerName="createPlaneOutlineGeometry"}y.packedLength=0,y.pack=function(e,t){return t},y.unpack=function(t,n,r){return e.defined(r)?r:new y};var m=new n.Cartesian3(-.5,-.5,0),p=new n.Cartesian3(.5,.5,0);return y.createGeometry=function(){var e=new o.GeometryAttributes,r=new Uint16Array(8),u=new Float64Array(12);return u[0]=m.x,u[1]=m.y,u[2]=m.z,u[3]=p.x,u[4]=m.y,u[5]=m.z,u[6]=p.x,u[7]=p.y,u[8]=m.z,u[9]=m.x,u[10]=p.y,u[11]=m.z,e.position=new i.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:u}),r[0]=0,r[1]=1,r[2]=1,r[3]=2,r[4]=2,r[5]=3,r[6]=3,r[7]=0,new i.Geometry({attributes:e,indices:r,primitiveType:i.PrimitiveType.LINES,boundingSphere:new t.BoundingSphere(n.Cartesian3.ZERO,Math.sqrt(2))})},function(t,n){return e.defined(n)&&(t=y.unpack(t,n)),y.createGeometry(t)}}));