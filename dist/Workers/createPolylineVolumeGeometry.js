define(["./when-54335d57","./Cartesian2-8646c5a1","./arrayRemoveDuplicates-3fea1e5f","./BoundingRectangle-07202124","./Transforms-79117a7b","./ComponentDatatype-1a100acd","./PolylineVolumeGeometryLibrary-4d0ebb44","./Check-24483042","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./GeometryPipeline-571ff4c9","./IndexDatatype-82ceea78","./Math-d6182036","./PolygonPipeline-97a7160d","./VertexFormat-81ec7207","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./EllipsoidTangentPlane-325a8e68","./IntersectionTests-5394f658","./Plane-13ae4b1b","./PolylinePipeline-3803a6c2","./EllipsoidGeodesic-cc216670","./EllipsoidRhumbLine-2b7999f3","./AttributeCompression-10c27d9c","./EncodedCartesian3-bf827957"],(function(e,t,n,i,r,a,o,l,s,p,d,c,u,g,y,m,h,f,v,b,E,P,_,x,k){"use strict";var C={};function V(t,n){e.defined(C[t])||(C[t]=!0,console.warn(e.defaultValue(n,t)))}function L(n){var i=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).polylinePositions,r=n.shapePositions;this._positions=i,this._shape=r,this._ellipsoid=t.Ellipsoid.clone(e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84)),this._cornerType=e.defaultValue(n.cornerType,o.CornerType.ROUNDED),this._vertexFormat=y.VertexFormat.clone(e.defaultValue(n.vertexFormat,y.VertexFormat.DEFAULT)),this._granularity=e.defaultValue(n.granularity,u.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",i=1+i.length*t.Cartesian3.packedLength,i+=1+r.length*t.Cartesian2.packedLength,this.packedLength=i+t.Ellipsoid.packedLength+y.VertexFormat.packedLength+2}V.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",V.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",V.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",V.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",L.pack=function(n,i,r){var a;r=e.defaultValue(r,0);var o=n._positions,l=o.length;for(i[r++]=l,a=0;a<l;++a,r+=t.Cartesian3.packedLength)t.Cartesian3.pack(o[a],i,r);var s=n._shape;for(l=s.length,i[r++]=l,a=0;a<l;++a,r+=t.Cartesian2.packedLength)t.Cartesian2.pack(s[a],i,r);return t.Ellipsoid.pack(n._ellipsoid,i,r),r+=t.Ellipsoid.packedLength,y.VertexFormat.pack(n._vertexFormat,i,r),r+=y.VertexFormat.packedLength,i[r++]=n._cornerType,i[r]=n._granularity,i};var w=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),F=new y.VertexFormat,T={polylinePositions:void 0,shapePositions:void 0,ellipsoid:w,vertexFormat:F,cornerType:void 0,granularity:void 0};L.unpack=function(n,i,r){i=e.defaultValue(i,0);for(var a=n[i++],o=new Array(a),l=0;l<a;++l,i+=t.Cartesian3.packedLength)o[l]=t.Cartesian3.unpack(n,i);a=n[i++];var s=new Array(a);for(l=0;l<a;++l,i+=t.Cartesian2.packedLength)s[l]=t.Cartesian2.unpack(n,i);var p=t.Ellipsoid.unpack(n,i,w);i+=t.Ellipsoid.packedLength;var d=y.VertexFormat.unpack(n,i,F);i+=y.VertexFormat.packedLength;var c=n[i++],u=n[i];return e.defined(r)?(r._positions=o,r._shape=s,r._ellipsoid=t.Ellipsoid.clone(p,r._ellipsoid),r._vertexFormat=y.VertexFormat.clone(d,r._vertexFormat),r._cornerType=c,r._granularity=u,r):(T.polylinePositions=o,T.shapePositions=s,T.cornerType=c,T.granularity=u,new L(T))};var G=new i.BoundingRectangle;return L.createGeometry=function(e){var l=e._positions,u=n.arrayRemoveDuplicates(l,t.Cartesian3.equalsEpsilon),y=e._shape;if(y=o.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(y),!(u.length<2||y.length<3))return g.PolygonPipeline.computeWindingOrder2D(y)===g.WindingOrder.CLOCKWISE&&y.reverse(),l=i.BoundingRectangle.fromPoints(y,G),function(e,t,n,i){var o=new p.GeometryAttributes;i.position&&(o.position=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var l,u,y,m,h,f=t.length,v=e.length/3,b=(v-2*f)/(2*f),E=g.PolygonPipeline.triangulate(t),P=(b-1)*f*6+2*E.length,_=c.IndexDatatype.createTypedArray(v,P),x=2*f,k=0;for(R=0;R<b-1;R++){for(l=0;l<f-1;l++)h=(u=2*l+R*f*2)+x,m=(y=u+1)+x,_[k++]=y,_[k++]=u,_[k++]=m,_[k++]=m,_[k++]=u,_[k++]=h;m=(y=1+(u=2*f-2+R*f*2))+x,h=u+x,_[k++]=y,_[k++]=u,_[k++]=m,_[k++]=m,_[k++]=u,_[k++]=h}if(i.st||i.tangent||i.bitangent){for(var C,L,w=new Float32Array(2*v),F=1/(b-1),T=1/n.height,G=n.height/2,A=0,R=0;R<b;R++){for(L=T*(t[0].y+G),w[A++]=C=R*F,w[A++]=L,l=1;l<f;l++)L=T*(t[l].y+G),w[A++]=C,w[A++]=L,w[A++]=C,w[A++]=L;L=T*(t[0].y+G),w[A++]=C,w[A++]=L}for(l=0;l<f;l++)L=T*(t[l].y+G),w[A++]=C=0,w[A++]=L;for(l=0;l<f;l++)L=T*(t[l].y+G),w[A++]=C=(b-1)*F,w[A++]=L;o.st=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(w)})}var D=v-2*f;for(R=0;R<E.length;R+=3){var I=E[R]+D,O=E[R+1]+D,S=E[R+2]+D;_[k++]=I,_[k++]=O,_[k++]=S,_[k++]=S+f,_[k++]=O+f,_[k++]=I+f}if(e=new s.Geometry({attributes:o,indices:_,boundingSphere:r.BoundingSphere.fromVertices(e),primitiveType:s.PrimitiveType.TRIANGLES}),i.normal&&(e=d.GeometryPipeline.computeNormal(e)),i.tangent||i.bitangent){try{e=d.GeometryPipeline.computeTangentAndBitangent(e)}catch(e){V("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(e.attributes.tangent=void 0),i.bitangent||(e.attributes.bitangent=void 0),i.st||(e.attributes.st=void 0)}return e}(o.PolylineVolumeGeometryLibrary.computePositions(u,y,l,e,!0),y,l,e._vertexFormat)},function(n,i){return(n=e.defined(i)?L.unpack(n,i):n)._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),L.createGeometry(n)}}));