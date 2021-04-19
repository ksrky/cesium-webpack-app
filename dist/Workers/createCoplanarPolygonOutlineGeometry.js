define(["./arrayRemoveDuplicates-3fea1e5f","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./CoplanarPolygonGeometryLibrary-32520d7a","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./GeometryInstance-6aa9010a","./GeometryPipeline-571ff4c9","./IndexDatatype-82ceea78","./PolygonGeometryLibrary-2a7648d9","./Math-d6182036","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./OrientedBoundingBox-eb360dc3","./EllipsoidTangentPlane-325a8e68","./IntersectionTests-5394f658","./Plane-13ae4b1b","./AttributeCompression-10c27d9c","./EncodedCartesian3-bf827957","./ArcType-2b58731c","./EllipsoidRhumbLine-2b7999f3","./PolygonPipeline-97a7160d"],(function(e,t,r,n,o,a,i,y,l,c,p,s,u,d,m,g,f,h,b,P,G,v,L,C,T){"use strict";function E(e){e=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy,this._polygonHierarchy=e,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(e)+1}E.fromPositions=function(e){return new E({polygonHierarchy:{positions:(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).positions}})},E.pack=function(e,t,r){return r=i.defaultValue(r,0),t[r=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,r)]=e.packedLength,t};var k={polygonHierarchy:{}};return E.unpack=function(e,t,r){t=i.defaultValue(t,0);var n=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);return t=n.startingIndex,delete n.startingIndex,t=e[t],(r=i.defined(r)?r:new E(k))._polygonHierarchy=n,r.packedLength=t,r},E.createGeometry=function(n){var i=n._polygonHierarchy;if(n=i.positions,!((n=e.arrayRemoveDuplicates(n,r.Cartesian3.equalsEpsilon,!0)).length<3)&&a.CoplanarPolygonGeometryLibrary.validOutline(n)){var d=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(i,!1);if(0!==d.length){for(var m=[],g=0;g<d.length;g++){var f=new c.GeometryInstance({geometry:function(e){for(var t=e.length,r=new Float64Array(3*t),n=s.IndexDatatype.createTypedArray(t,2*t),a=0,i=0,c=0;c<t;c++){var p=e[c];r[a++]=p.x,r[a++]=p.y,r[a++]=p.z,n[i++]=c,n[i++]=(c+1)%t}var u=new l.GeometryAttributes({position:new y.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r})});return new y.Geometry({attributes:u,indices:n,primitiveType:y.PrimitiveType.LINES})}(d[g])});m.push(f)}return n=p.GeometryPipeline.combineInstances(m)[0],i=t.BoundingSphere.fromPoints(i.positions),new y.Geometry({attributes:n.attributes,indices:n.indices,primitiveType:n.primitiveType,boundingSphere:i})}}},function(e,t){return(e=i.defined(t)?E.unpack(e,t):e)._ellipsoid=r.Ellipsoid.clone(e._ellipsoid),E.createGeometry(e)}}));