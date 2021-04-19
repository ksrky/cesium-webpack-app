define(["./AttributeCompression-10c27d9c","./Cartesian2-8646c5a1","./IndexDatatype-82ceea78","./Math-d6182036","./createTaskProcessorWorker","./Check-24483042","./when-54335d57","./WebGLConstants-95ceb4e9"],(function(a,e,t,r,s,n,i,o){"use strict";var d=32767,l=Math.cos(r.CesiumMath.toRadians(150)),c=new e.Cartographic,h=new e.Cartesian3,f=new e.Cartographic,u=new e.Cartographic;function C(a){var e=8*a,r=3*e,s=4*e;this.startEllipsoidNormals=new Float32Array(r),this.endEllipsoidNormals=new Float32Array(r),this.startPositionAndHeights=new Float32Array(s),this.startFaceNormalAndVertexCornerIds=new Float32Array(s),this.endPositionAndHeights=new Float32Array(s),this.endFaceNormalAndHalfWidths=new Float32Array(s),this.vertexBatchIds=new Uint16Array(e),this.indices=t.IndexDatatype.createTypedArray(e,36*a),this.vec3Offset=0,this.vec4Offset=0,this.batchIdOffset=0,this.indexOffset=0,this.volumeStartIndex=0}var p=new e.Cartesian3,m=new e.Cartesian3;function A(a,t,r,s,n){var i=e.Cartesian3.subtract(r,t,m);return r=e.Cartesian3.subtract(t,a,p),e.Cartesian3.normalize(i,i),e.Cartesian3.normalize(r,r),e.Cartesian3.dot(i,r)<l&&(r=e.Cartesian3.multiplyByScalar(r,-1,p)),e.Cartesian3.add(i,r,n),e.Cartesian3.equals(n,e.Cartesian3.ZERO)&&(n=e.Cartesian3.subtract(a,t)),e.Cartesian3.cross(n,s,n),e.Cartesian3.cross(s,n,n),e.Cartesian3.normalize(n,n),n}var w=[0,2,6,0,6,4,0,1,3,0,3,2,0,4,5,0,5,1,5,3,1,5,7,3,7,5,4,7,4,6,7,6,2,7,2,3],v=w.length,b=new e.Cartesian3,g=new e.Cartesian3,N=new e.Cartesian3,y=new e.Cartesian3,k=new e.Cartesian3;C.prototype.addVolume=function(a,t,r,s,n,i,o,d,l,c){for(var h=e.Cartesian3.add(t,l,b),f=c.geodeticSurfaceNormal(h,g),u=(h=e.Cartesian3.add(r,l,b),c.geodeticSurfaceNormal(h,y)),C=A(a,t,r,f,N),p=A(s,r,t,u,k),m=this.startEllipsoidNormals,I=this.endEllipsoidNormals,x=this.startPositionAndHeights,E=this.startFaceNormalAndVertexCornerIds,F=this.endPositionAndHeights,H=this.endFaceNormalAndHalfWidths,O=this.vertexBatchIds,P=this.batchIdOffset,S=this.vec3Offset,D=this.vec4Offset,M=0;M<8;M++)e.Cartesian3.pack(f,m,S),e.Cartesian3.pack(u,I,S),e.Cartesian3.pack(t,x,D),x[D+3]=n,e.Cartesian3.pack(r,F,D),F[D+3]=i,e.Cartesian3.pack(C,E,D),E[D+3]=M,e.Cartesian3.pack(p,H,D),H[D+3]=o,O[P++]=d,S+=3,D+=4;this.batchIdOffset=P,this.vec3Offset=S,this.vec4Offset=D;var B=this.indices,R=this.volumeStartIndex,U=this.indexOffset;for(M=0;M<v;M++)B[U+M]=w[M]+R;this.volumeStartIndex+=8,this.indexOffset+=v};var I=new e.Rectangle,x=new e.Ellipsoid,E=new e.Cartesian3,F=new e.Cartesian3,H=new e.Cartesian3,O=new e.Cartesian3,P=new e.Cartesian3;return s((function(s,n){var i=new Uint16Array(s.positions),o=new Uint16Array(s.widths),l=new Uint32Array(s.counts),p=new Uint16Array(s.batchIds),m=I,A=x,w=E,v=0,b=(N=new Float64Array(s.packedBuffer))[v++],g=N[v++];e.Rectangle.unpack(N,2,m),v+=e.Rectangle.packedLength,e.Ellipsoid.unpack(N,v,A),v+=e.Ellipsoid.packedLength,e.Cartesian3.unpack(N,v,w),s=i.length/3;var N=i.subarray(0,s),y=(v=i.subarray(s,2*s),i.subarray(2*s,3*s));a.AttributeCompression.zigZagDeltaDecode(N,v,y),function(a,t,r,s){for(var n=s.length,i=a.length,o=new Uint8Array(i),d=f,l=u,c=0,h=0;h<n;h++){for(var C=s[h],p=C,m=1;m<C;m++){var A=c+m,w=A-1;l.longitude=a[A],l.latitude=t[A],d.longitude=a[w],d.latitude=t[w],e.Cartographic.equals(l,d)&&(p--,o[w]=1)}s[h]=p,c+=C}for(var v=0,b=0;b<i;b++)1!==o[b]&&(a[v]=a[b],t[v]=t[b],r[v]=r[b],v++)}(N,v,y,l);for(var k=l.length,S=0,D=0;D<k;D++)S+=l[D]-1;var M=new C(S),B=function(a,t,s,n,i,o,l,f){for(var u=a.length,C=new Float32Array(3*u),p=0;p<u;++p){var m=a[p],A=t[p],w=s[p];m=r.CesiumMath.lerp(n.west,n.east,m/d),A=r.CesiumMath.lerp(n.south,n.north,A/d),w=r.CesiumMath.lerp(i,o,w/d),w=e.Cartographic.fromRadians(m,A,w,c),w=l.cartographicToCartesian(w,h),w=e.Cartesian3.subtract(w,f,h),e.Cartesian3.pack(w,C,3*p)}return C}(N,v,y,m,b,g,A,w),R=0,U=0;for(D=0;D<k;D++){for(var T=l[D]-1,V=.5*o[D],W=p[D],q=R,z=0;z<T;z++){var L=e.Cartesian3.unpack(B,R,H),_=e.Cartesian3.unpack(B,R+3,O),G=y[U],Z=y[U+1];G=r.CesiumMath.lerp(b,g,G/d),Z=r.CesiumMath.lerp(b,g,Z/d),U++;var Y,j,J,K=F,Q=P;0===z?(j=e.Cartesian3.unpack(B,Y=q+3*T,F),e.Cartesian3.equals(j,L)?e.Cartesian3.unpack(B,Y-3,K):(J=e.Cartesian3.subtract(L,_,F),K=e.Cartesian3.add(J,L,F))):e.Cartesian3.unpack(B,R-3,K),z===T-1?(J=e.Cartesian3.unpack(B,q,P),e.Cartesian3.equals(J,_)?e.Cartesian3.unpack(B,q+3,Q):(J=e.Cartesian3.subtract(_,L,P),Q=e.Cartesian3.add(J,_,P))):e.Cartesian3.unpack(B,R+6,Q),M.addVolume(K,L,_,Q,G,Z,V,W,w,A),R+=3}R+=3,U++}return m=M.indices,n.push(M.startEllipsoidNormals.buffer),n.push(M.endEllipsoidNormals.buffer),n.push(M.startPositionAndHeights.buffer),n.push(M.startFaceNormalAndVertexCornerIds.buffer),n.push(M.endPositionAndHeights.buffer),n.push(M.endFaceNormalAndHalfWidths.buffer),n.push(M.vertexBatchIds.buffer),n.push(m.buffer),{indexDatatype:2===m.BYTES_PER_ELEMENT?t.IndexDatatype.UNSIGNED_SHORT:t.IndexDatatype.UNSIGNED_INT,startEllipsoidNormals:M.startEllipsoidNormals.buffer,endEllipsoidNormals:M.endEllipsoidNormals.buffer,startPositionAndHeights:M.startPositionAndHeights.buffer,startFaceNormalAndVertexCornerIds:M.startFaceNormalAndVertexCornerIds.buffer,endPositionAndHeights:M.endPositionAndHeights.buffer,endFaceNormalAndHalfWidths:M.endFaceNormalAndHalfWidths.buffer,vertexBatchIds:M.vertexBatchIds.buffer,indices:m.buffer}}))}));