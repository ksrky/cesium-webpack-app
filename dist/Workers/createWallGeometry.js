define(["./when-54335d57","./Cartesian2-8646c5a1","./Transforms-79117a7b","./ComponentDatatype-1a100acd","./Check-24483042","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./IndexDatatype-82ceea78","./Math-d6182036","./VertexFormat-81ec7207","./WallGeometryLibrary-0e5f04d3","./RuntimeError-88a32665","./WebGLConstants-95ceb4e9","./arrayRemoveDuplicates-3fea1e5f","./PolylinePipeline-3803a6c2","./EllipsoidGeodesic-cc216670","./EllipsoidRhumbLine-2b7999f3","./IntersectionTests-5394f658","./Plane-13ae4b1b"],(function(e,t,a,i,n,r,o,s,m,l,u,p,d,c,y,g,f,h,C){"use strict";var v=new t.Cartesian3,x=new t.Cartesian3,A=new t.Cartesian3,b=new t.Cartesian3,_=new t.Cartesian3,E=new t.Cartesian3,w=new t.Cartesian3;function F(a){var i=(a=e.defaultValue(a,e.defaultValue.EMPTY_OBJECT)).positions,n=a.maximumHeights,r=a.minimumHeights,o=e.defaultValue(a.vertexFormat,l.VertexFormat.DEFAULT),s=e.defaultValue(a.granularity,m.CesiumMath.RADIANS_PER_DEGREE);a=e.defaultValue(a.ellipsoid,t.Ellipsoid.WGS84),this._positions=i,this._minimumHeights=r,this._maximumHeights=n,this._vertexFormat=l.VertexFormat.clone(o),this._granularity=s,this._ellipsoid=t.Ellipsoid.clone(a),this._workerName="createWallGeometry",i=1+i.length*t.Cartesian3.packedLength+2,e.defined(r)&&(i+=r.length),e.defined(n)&&(i+=n.length),this.packedLength=i+t.Ellipsoid.packedLength+l.VertexFormat.packedLength+1}F.pack=function(a,i,n){var r;n=e.defaultValue(n,0);var o=a._positions,s=o.length;for(i[n++]=s,r=0;r<s;++r,n+=t.Cartesian3.packedLength)t.Cartesian3.pack(o[r],i,n);var m=a._minimumHeights;if(s=e.defined(m)?m.length:0,i[n++]=s,e.defined(m))for(r=0;r<s;++r)i[n++]=m[r];var u=a._maximumHeights;if(s=e.defined(u)?u.length:0,i[n++]=s,e.defined(u))for(r=0;r<s;++r)i[n++]=u[r];return t.Ellipsoid.pack(a._ellipsoid,i,n),n+=t.Ellipsoid.packedLength,l.VertexFormat.pack(a._vertexFormat,i,n),i[n+=l.VertexFormat.packedLength]=a._granularity,i};var L=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),k=new l.VertexFormat,H={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:L,vertexFormat:k,granularity:void 0};return F.unpack=function(a,i,n){i=e.defaultValue(i,0);for(var r,o,s=a[i++],m=new Array(s),u=0;u<s;++u,i+=t.Cartesian3.packedLength)m[u]=t.Cartesian3.unpack(a,i);if(0<(s=a[i++]))for(r=new Array(s),u=0;u<s;++u)r[u]=a[i++];if(0<(s=a[i++]))for(o=new Array(s),u=0;u<s;++u)o[u]=a[i++];var p=t.Ellipsoid.unpack(a,i,L);i+=t.Ellipsoid.packedLength;var d=l.VertexFormat.unpack(a,i,k),c=a[i+=l.VertexFormat.packedLength];return e.defined(n)?(n._positions=m,n._minimumHeights=r,n._maximumHeights=o,n._ellipsoid=t.Ellipsoid.clone(p,n._ellipsoid),n._vertexFormat=l.VertexFormat.clone(d,n._vertexFormat),n._granularity=c,n):(H.positions=m,H.minimumHeights=r,H.maximumHeights=o,H.granularity=c,new F(H))},F.fromConstantHeights=function(t){var a=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions,i=t.minimumHeight,n=t.maximumHeight,r=e.defined(i),o=e.defined(n);if(r||o)for(var s=a.length,m=r?new Array(s):void 0,l=o?new Array(s):void 0,u=0;u<s;++u)r&&(m[u]=i),o&&(l[u]=n);return new F({positions:a,maximumHeights:l,minimumHeights:m,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},F.createGeometry=function(n){var l=n._positions,p=n._minimumHeights,d=n._maximumHeights,c=n._vertexFormat,y=n._granularity,g=n._ellipsoid;if(d=u.WallGeometryLibrary.computePositions(g,l,d,p,y,!0),e.defined(d)){for(var f=d.bottomPositions,h=d.topPositions,C=(p=d.numCorners,h.length),F=(y=2*C,c.position?new Float64Array(y):void 0),L=c.normal?new Float32Array(y):void 0,k=c.tangent?new Float32Array(y):void 0,H=c.bitangent?new Float32Array(y):void 0,V=c.st?new Float32Array(y/3*2):void 0,G=0,D=0,P=0,T=0,z=0,O=w,R=E,S=_,I=!0,N=0,M=1/((C/=3)-p-1),W=0;W<C;++W){var B,U=3*W,q=t.Cartesian3.fromArray(h,U,v),J=t.Cartesian3.fromArray(f,U,x);c.position&&(F[G++]=J.x,F[G++]=J.y,F[G++]=J.z,F[G++]=q.x,F[G++]=q.y,F[G++]=q.z),c.st&&(V[z++]=N,V[z++]=0,V[z++]=N,V[z++]=1),(c.normal||c.tangent||c.bitangent)&&(B=t.Cartesian3.clone(t.Cartesian3.ZERO,b),J=t.Cartesian3.subtract(q,g.geodeticSurfaceNormal(q,x),x),W+1<C&&(B=t.Cartesian3.fromArray(h,3+U,b)),I&&(U=t.Cartesian3.subtract(B,q,A),J=t.Cartesian3.subtract(J,q,v),O=t.Cartesian3.normalize(t.Cartesian3.cross(J,U,O),O),I=!1),t.Cartesian3.equalsEpsilon(q,B,m.CesiumMath.EPSILON10)?I=!0:(N+=M,c.tangent&&(R=t.Cartesian3.normalize(t.Cartesian3.subtract(B,q,R),R)),c.bitangent&&(S=t.Cartesian3.normalize(t.Cartesian3.cross(O,R,S),S))),c.normal&&(L[D++]=O.x,L[D++]=O.y,L[D++]=O.z,L[D++]=O.x,L[D++]=O.y,L[D++]=O.z),c.tangent&&(k[T++]=R.x,k[T++]=R.y,k[T++]=R.z,k[T++]=R.x,k[T++]=R.y,k[T++]=R.z),c.bitangent&&(H[P++]=S.x,H[P++]=S.y,H[P++]=S.z,H[P++]=S.x,H[P++]=S.y,H[P++]=S.z))}d=new o.GeometryAttributes,c.position&&(d.position=new r.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),c.normal&&(d.normal=new r.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:L})),c.tangent&&(d.tangent=new r.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:k})),c.bitangent&&(d.bitangent=new r.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H})),c.st&&(d.st=new r.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V}));var Y=y/3,Z=s.IndexDatatype.createTypedArray(Y,y-=6*(p+1)),j=0;for(W=0;W<Y-2;W+=2){var K=W,Q=W+2,X=t.Cartesian3.fromArray(F,3*K,v),$=t.Cartesian3.fromArray(F,3*Q,x);t.Cartesian3.equalsEpsilon(X,$,m.CesiumMath.EPSILON10)||($=W+3,Z[j++]=W+1,Z[j++]=K,Z[j++]=$,Z[j++]=$,Z[j++]=K,Z[j++]=Q)}return new r.Geometry({attributes:d,indices:Z,primitiveType:r.PrimitiveType.TRIANGLES,boundingSphere:new a.BoundingSphere.fromVertices(F)})}},function(a,i){return(a=e.defined(i)?F.unpack(a,i):a)._ellipsoid=t.Ellipsoid.clone(a._ellipsoid),F.createGeometry(a)}}));