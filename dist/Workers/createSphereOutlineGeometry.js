define(["./when-54335d57","./Cartesian2-8646c5a1","./Check-24483042","./EllipsoidOutlineGeometry-b505f2ae","./Math-d6182036","./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./RuntimeError-88a32665","./ComponentDatatype-1a100acd","./WebGLConstants-95ceb4e9","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78"],(function(e,i,t,r,n,a,s,o,d,l,u,c,m){"use strict";function p(t){var n=e.defaultValue(t.radius,1);t={radii:new i.Cartesian3(n,n,n),stackPartitions:t.stackPartitions,slicePartitions:t.slicePartitions,subdivisions:t.subdivisions},this._ellipsoidGeometry=new r.EllipsoidOutlineGeometry(t),this._workerName="createSphereOutlineGeometry"}p.packedLength=r.EllipsoidOutlineGeometry.packedLength,p.pack=function(e,i,t){return r.EllipsoidOutlineGeometry.pack(e._ellipsoidGeometry,i,t)};var y=new r.EllipsoidOutlineGeometry,G={radius:void 0,radii:new i.Cartesian3,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0};return p.unpack=function(t,n,a){return n=r.EllipsoidOutlineGeometry.unpack(t,n,y),G.stackPartitions=n._stackPartitions,G.slicePartitions=n._slicePartitions,G.subdivisions=n._subdivisions,e.defined(a)?(i.Cartesian3.clone(n._radii,G.radii),a._ellipsoidGeometry=new r.EllipsoidOutlineGeometry(G),a):(G.radius=n._radii.x,new p(G))},p.createGeometry=function(e){return r.EllipsoidOutlineGeometry.createGeometry(e._ellipsoidGeometry)},function(i,t){return e.defined(t)&&(i=p.unpack(i,t)),p.createGeometry(i)}}));