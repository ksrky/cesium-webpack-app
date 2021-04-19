define(["exports","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./when-54335d57","./AttributeCompression-10c27d9c","./ComponentDatatype-1a100acd","./Math-d6182036"],(function(t,e,i,r,a,n,o,s){"use strict";function m(t,e){this._ellipsoid=t,this._cameraPosition=new i.Cartesian3,this._cameraPositionInScaledSpace=new i.Cartesian3,this._distanceToLimbInScaledSpaceSquared=0,a.defined(e)&&(this.cameraPosition=e)}Object.defineProperties(m.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(t){var e=this._ellipsoid.transformPositionToScaledSpace(t,this._cameraPositionInScaledSpace),r=i.Cartesian3.magnitudeSquared(e)-1;i.Cartesian3.clone(t,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=r}}});var c=new i.Cartesian3;m.prototype.isPointVisible=function(t){return S(this._ellipsoid.transformPositionToScaledSpace(t,c),this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)},m.prototype.isScaledSpacePointVisible=function(t){return S(t,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var u=new i.Cartesian3;m.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(t,e){var i,r=this._ellipsoid;return e=a.defined(e)&&e<0&&r.minimumRadius>-e?((i=u).x=this._cameraPosition.x/(r.radii.x+e),i.y=this._cameraPosition.y/(r.radii.y+e),i.z=this._cameraPosition.z/(r.radii.z+e),i.x*i.x+i.y*i.y+i.z*i.z-1):(i=this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared),S(t,i,e)},m.prototype.computeHorizonCullingPoint=function(t,e,i){return f(this._ellipsoid,t,e,i)};var d=i.Ellipsoid.clone(i.Ellipsoid.UNIT_SPHERE);m.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(t,e,i,r){return f(h(this._ellipsoid,i,d),t,e,r)},m.prototype.computeHorizonCullingPointFromVertices=function(t,e,i,r,a){return C(this._ellipsoid,t,e,i,r,a)},m.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(t,e,i,r,a,n){return C(h(this._ellipsoid,a,d),t,e,i,r,n)};var l=[];m.prototype.computeHorizonCullingPointFromRectangle=function(t,r,a){var n=i.Rectangle.subsample(t,r,0,l);if(t=e.BoundingSphere.fromPoints(n),!(i.Cartesian3.magnitude(t.center)<.1*r.minimumRadius))return this.computeHorizonCullingPoint(t.center,n,a)};var p=new i.Cartesian3;function h(t,e,r){return a.defined(e)&&e<0&&t.minimumRadius>-e&&(e=i.Cartesian3.fromElements(t.radii.x+e,t.radii.y+e,t.radii.z+e,p),t=i.Ellipsoid.fromCartesian3(e,r)),t}function f(t,e,r,n){a.defined(n)||(n=new i.Cartesian3);for(var o=P(t,e),s=0,m=0,c=r.length;m<c;++m){var u=M(t,r[m],o);if(u<0)return;s=Math.max(s,u)}return g(o,s,n)}var x=new i.Cartesian3;function C(t,e,r,n,o,s){a.defined(s)||(s=new i.Cartesian3),n=a.defaultValue(n,3),o=a.defaultValue(o,i.Cartesian3.ZERO);for(var m=P(t,e),c=0,u=0,d=r.length;u<d;u+=n){x.x=r[u]+o.x,x.y=r[u+1]+o.y,x.z=r[u+2]+o.z;var l=M(t,x,m);if(l<0)return;c=Math.max(c,l)}return g(m,c,s)}function S(t,e,r){return t=i.Cartesian3.subtract(t,e,c),e=-i.Cartesian3.dot(t,e),!(r<0?0<e:r<e&&e*e/i.Cartesian3.magnitudeSquared(t)>r)}var y=new i.Cartesian3,b=new i.Cartesian3;function M(t,e,r){var a=t.transformPositionToScaledSpace(e,y);return t=i.Cartesian3.magnitudeSquared(a),e=Math.sqrt(t),a=i.Cartesian3.divideByScalar(a,e,b),t=Math.max(1,t),e=1/(e=Math.max(1,e)),1/(i.Cartesian3.dot(a,r)*e-i.Cartesian3.magnitude(i.Cartesian3.cross(a,r,a))*(Math.sqrt(t-1)*e))}function g(t,e,r){if(!(e<=0||e===1/0||e!=e))return i.Cartesian3.multiplyByScalar(t,e,r)}var T=new i.Cartesian3;function P(t,e){return i.Cartesian3.equals(e,i.Cartesian3.ZERO)?e:(t.transformPositionToScaledSpace(e,T),i.Cartesian3.normalize(T,T))}var z=Object.freeze({NONE:0,BITS12:1}),E=new i.Cartesian3,v=new i.Cartesian3,N=new i.Cartesian2,I=new e.Matrix4,B=new e.Matrix4,_=Math.pow(2,12);function w(t,r,n,o,s,m){var c,u,d,l,p,h=z.NONE;a.defined(t)&&a.defined(r)&&a.defined(n)&&a.defined(o)&&(l=t.minimum,u=t.maximum,p=i.Cartesian3.subtract(u,l,v),d=n-r,h=Math.max(i.Cartesian3.maximumComponent(p),d)<_-1?z.BITS12:z.NONE,c=t.center,u=e.Matrix4.inverseTransformation(o,new e.Matrix4),d=i.Cartesian3.negate(l,E),e.Matrix4.multiply(e.Matrix4.fromTranslation(d,I),u,u),(d=E).x=1/p.x,d.y=1/p.y,d.z=1/p.z,e.Matrix4.multiply(e.Matrix4.fromScale(d,I),u,u),d=e.Matrix4.clone(o),e.Matrix4.setTranslation(d,i.Cartesian3.ZERO,d),o=e.Matrix4.clone(o,new e.Matrix4),l=e.Matrix4.fromTranslation(l,I),p=e.Matrix4.fromScale(p,B),p=e.Matrix4.multiply(l,p,I),e.Matrix4.multiply(o,p,o),e.Matrix4.multiply(d,p,d)),this.quantization=h,this.minimumHeight=r,this.maximumHeight=n,this.center=c,this.toScaledENU=u,this.fromScaledENU=o,this.matrix=d,this.hasVertexNormals=s,this.hasWebMercatorT=a.defaultValue(m,!1)}w.prototype.encode=function(t,r,a,o,m,c,u){var d,l,p=o.x,h=o.y;return this.quantization===z.BITS12?((a=e.Matrix4.multiplyByPoint(this.toScaledENU,a,E)).x=s.CesiumMath.clamp(a.x,0,1),a.y=s.CesiumMath.clamp(a.y,0,1),a.z=s.CesiumMath.clamp(a.z,0,1),d=this.maximumHeight-this.minimumHeight,l=s.CesiumMath.clamp((m-this.minimumHeight)/d,0,1),i.Cartesian2.fromElements(a.x,a.y,N),o=n.AttributeCompression.compressTextureCoordinates(N),i.Cartesian2.fromElements(a.z,l,N),d=n.AttributeCompression.compressTextureCoordinates(N),i.Cartesian2.fromElements(p,h,N),l=n.AttributeCompression.compressTextureCoordinates(N),t[r++]=o,t[r++]=d,t[r++]=l,this.hasWebMercatorT&&(i.Cartesian2.fromElements(u,0,N),l=n.AttributeCompression.compressTextureCoordinates(N),t[r++]=l)):(i.Cartesian3.subtract(a,this.center,E),t[r++]=E.x,t[r++]=E.y,t[r++]=E.z,t[r++]=m,t[r++]=p,t[r++]=h,this.hasWebMercatorT&&(t[r++]=u)),this.hasVertexNormals&&(t[r++]=n.AttributeCompression.octPackFloat(c)),r},w.prototype.decodePosition=function(t,r,o){if(a.defined(o)||(o=new i.Cartesian3),r*=this.getStride(),this.quantization!==z.BITS12)return o.x=t[r],o.y=t[r+1],o.z=t[r+2],i.Cartesian3.add(o,this.center,o);var s=n.AttributeCompression.decompressTextureCoordinates(t[r],N);return o.x=s.x,o.y=s.y,r=n.AttributeCompression.decompressTextureCoordinates(t[r+1],N),o.z=r.x,e.Matrix4.multiplyByPoint(this.fromScaledENU,o,o)},w.prototype.decodeTextureCoordinates=function(t,e,r){return a.defined(r)||(r=new i.Cartesian2),e*=this.getStride(),this.quantization===z.BITS12?n.AttributeCompression.decompressTextureCoordinates(t[e+2],r):i.Cartesian2.fromElements(t[e+4],t[e+5],r)},w.prototype.decodeHeight=function(t,e){return e*=this.getStride(),this.quantization!==z.BITS12?t[e+3]:n.AttributeCompression.decompressTextureCoordinates(t[e+1],N).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},w.prototype.decodeWebMercatorT=function(t,e){return e*=this.getStride(),this.quantization===z.BITS12?n.AttributeCompression.decompressTextureCoordinates(t[e+3],N).x:t[e+6]},w.prototype.getOctEncodedNormal=function(t,e,r){return t=t[e=(e+1)*this.getStride()-1]/256,e=Math.floor(t),i.Cartesian2.fromElements(e,256*(t-e),r)},w.prototype.getStride=function(){var t=this.quantization===z.BITS12?3:6;return this.hasWebMercatorT&&++t,this.hasVertexNormals&&++t,t};var A={position3DAndHeight:0,textureCoordAndEncodedNormals:1},q={compressed0:0,compressed1:1};w.prototype.getAttributes=function(t){var e,i=o.ComponentDatatype.FLOAT,r=o.ComponentDatatype.getSizeInBytes(i);if(this.quantization===z.NONE){var a=2;return this.hasWebMercatorT&&++a,this.hasVertexNormals&&++a,[{index:A.position3DAndHeight,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:e=(4+a)*r},{index:A.textureCoordAndEncodedNormals,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:a,offsetInBytes:4*r,strideInBytes:e}]}var n=3;return a=0,(this.hasWebMercatorT||this.hasVertexNormals)&&++n,this.hasWebMercatorT&&this.hasVertexNormals?(++a,[{index:q.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n,offsetInBytes:0,strideInBytes:e=(n+1)*r},{index:q.compressed1,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:1,offsetInBytes:n*r,strideInBytes:e}]):[{index:q.compressed0,vertexBuffer:t,componentDatatype:i,componentsPerAttribute:n}]},w.prototype.getAttributeLocations=function(){return this.quantization===z.NONE?A:q},w.clone=function(t,r){return(r=a.defined(r)?r:new w).quantization=t.quantization,r.minimumHeight=t.minimumHeight,r.maximumHeight=t.maximumHeight,r.center=i.Cartesian3.clone(t.center),r.toScaledENU=e.Matrix4.clone(t.toScaledENU),r.fromScaledENU=e.Matrix4.clone(t.fromScaledENU),r.matrix=e.Matrix4.clone(t.matrix),r.hasVertexNormals=t.hasVertexNormals,r.hasWebMercatorT=t.hasWebMercatorT,r},t.EllipsoidalOccluder=m,t.TerrainEncoding=w}));