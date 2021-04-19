define(["exports","./GeometryOffsetAttribute-718fa138","./Transforms-79117a7b","./Cartesian2-8646c5a1","./Check-24483042","./ComponentDatatype-1a100acd","./when-54335d57","./GeometryAttribute-374f805d","./GeometryAttributes-caa08d6c","./VertexFormat-81ec7207"],(function(t,e,a,n,r,i,o,m,u,s){"use strict";var y=new n.Cartesian3;function p(t){var e=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).minimum,a=t.maximum,r=o.defaultValue(t.vertexFormat,s.VertexFormat.DEFAULT);this._minimum=n.Cartesian3.clone(e),this._maximum=n.Cartesian3.clone(a),this._vertexFormat=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createBoxGeometry"}p.fromDimensions=function(t){var e=(t=o.defaultValue(t,o.defaultValue.EMPTY_OBJECT)).dimensions;return e=n.Cartesian3.multiplyByScalar(e,.5,new n.Cartesian3),new p({minimum:n.Cartesian3.negate(e,new n.Cartesian3),maximum:e,vertexFormat:t.vertexFormat,offsetAttribute:t.offsetAttribute})},p.fromAxisAlignedBoundingBox=function(t){return new p({minimum:t.minimum,maximum:t.maximum})},p.packedLength=2*n.Cartesian3.packedLength+s.VertexFormat.packedLength+1,p.pack=function(t,e,a){return a=o.defaultValue(a,0),n.Cartesian3.pack(t._minimum,e,a),n.Cartesian3.pack(t._maximum,e,a+n.Cartesian3.packedLength),s.VertexFormat.pack(t._vertexFormat,e,a+2*n.Cartesian3.packedLength),e[a+2*n.Cartesian3.packedLength+s.VertexFormat.packedLength]=o.defaultValue(t._offsetAttribute,-1),e};var x,c=new n.Cartesian3,f=new n.Cartesian3,A=new s.VertexFormat,l={minimum:c,maximum:f,vertexFormat:A,offsetAttribute:void 0};p.unpack=function(t,e,a){e=o.defaultValue(e,0);var r=n.Cartesian3.unpack(t,e,c),i=n.Cartesian3.unpack(t,e+n.Cartesian3.packedLength,f),m=s.VertexFormat.unpack(t,e+2*n.Cartesian3.packedLength,A);return e=t[e+2*n.Cartesian3.packedLength+s.VertexFormat.packedLength],o.defined(a)?(a._minimum=n.Cartesian3.clone(r,a._minimum),a._maximum=n.Cartesian3.clone(i,a._maximum),a._vertexFormat=s.VertexFormat.clone(m,a._vertexFormat),a._offsetAttribute=-1===e?void 0:e,a):(l.offsetAttribute=-1===e?void 0:e,new p(l))},p.createGeometry=function(t){var r=t._minimum,s=t._maximum,p=t._vertexFormat;if(!n.Cartesian3.equals(r,s)){var x,c,f,A,l=new u.GeometryAttributes;return p.position&&(p.st||p.normal||p.tangent||p.bitangent)?(p.position&&((A=new Float64Array(72))[0]=r.x,A[1]=r.y,A[2]=s.z,A[3]=s.x,A[4]=r.y,A[5]=s.z,A[6]=s.x,A[7]=s.y,A[8]=s.z,A[9]=r.x,A[10]=s.y,A[11]=s.z,A[12]=r.x,A[13]=r.y,A[14]=r.z,A[15]=s.x,A[16]=r.y,A[17]=r.z,A[18]=s.x,A[19]=s.y,A[20]=r.z,A[21]=r.x,A[22]=s.y,A[23]=r.z,A[24]=s.x,A[25]=r.y,A[26]=r.z,A[27]=s.x,A[28]=s.y,A[29]=r.z,A[30]=s.x,A[31]=s.y,A[32]=s.z,A[33]=s.x,A[34]=r.y,A[35]=s.z,A[36]=r.x,A[37]=r.y,A[38]=r.z,A[39]=r.x,A[40]=s.y,A[41]=r.z,A[42]=r.x,A[43]=s.y,A[44]=s.z,A[45]=r.x,A[46]=r.y,A[47]=s.z,A[48]=r.x,A[49]=s.y,A[50]=r.z,A[51]=s.x,A[52]=s.y,A[53]=r.z,A[54]=s.x,A[55]=s.y,A[56]=s.z,A[57]=r.x,A[58]=s.y,A[59]=s.z,A[60]=r.x,A[61]=r.y,A[62]=r.z,A[63]=s.x,A[64]=r.y,A[65]=r.z,A[66]=s.x,A[67]=r.y,A[68]=s.z,A[69]=r.x,A[70]=r.y,A[71]=s.z,l.position=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A})),p.normal&&((x=new Float32Array(72))[0]=0,x[1]=0,x[2]=1,x[3]=0,x[4]=0,x[5]=1,x[6]=0,x[7]=0,x[8]=1,x[9]=0,x[10]=0,x[11]=1,x[12]=0,x[13]=0,x[14]=-1,x[15]=0,x[16]=0,x[17]=-1,x[18]=0,x[19]=0,x[20]=-1,x[21]=0,x[22]=0,x[23]=-1,x[24]=1,x[25]=0,x[26]=0,x[27]=1,x[28]=0,x[29]=0,x[30]=1,x[31]=0,x[32]=0,x[33]=1,x[34]=0,x[35]=0,x[36]=-1,x[37]=0,x[38]=0,x[39]=-1,x[40]=0,x[41]=0,x[42]=-1,x[43]=0,x[44]=0,x[45]=-1,x[46]=0,x[47]=0,x[48]=0,x[49]=1,x[50]=0,x[51]=0,x[52]=1,x[53]=0,x[54]=0,x[55]=1,x[56]=0,x[57]=0,x[58]=1,x[59]=0,x[60]=0,x[61]=-1,x[62]=0,x[63]=0,x[64]=-1,x[65]=0,x[66]=0,x[67]=-1,x[68]=0,x[69]=0,x[70]=-1,x[71]=0,l.normal=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:x})),p.st&&((c=new Float32Array(48))[0]=0,c[1]=0,c[2]=1,c[3]=0,c[4]=1,c[5]=1,c[6]=0,c[7]=1,c[8]=1,c[9]=0,c[10]=0,c[11]=0,c[12]=0,c[13]=1,c[14]=1,c[15]=1,c[16]=0,c[17]=0,c[18]=1,c[19]=0,c[20]=1,c[21]=1,c[22]=0,c[23]=1,c[24]=1,c[25]=0,c[26]=0,c[27]=0,c[28]=0,c[29]=1,c[30]=1,c[31]=1,c[32]=1,c[33]=0,c[34]=0,c[35]=0,c[36]=0,c[37]=1,c[38]=1,c[39]=1,c[40]=0,c[41]=0,c[42]=1,c[43]=0,c[44]=1,c[45]=1,c[46]=0,c[47]=1,l.st=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:c})),p.tangent&&((c=new Float32Array(72))[0]=1,c[1]=0,c[2]=0,c[3]=1,c[4]=0,c[5]=0,c[6]=1,c[7]=0,c[8]=0,c[9]=1,c[10]=0,c[11]=0,c[12]=-1,c[13]=0,c[14]=0,c[15]=-1,c[16]=0,c[17]=0,c[18]=-1,c[19]=0,c[20]=0,c[21]=-1,c[22]=0,c[23]=0,c[24]=0,c[25]=1,c[26]=0,c[27]=0,c[28]=1,c[29]=0,c[30]=0,c[31]=1,c[32]=0,c[33]=0,c[34]=1,c[35]=0,c[36]=0,c[37]=-1,c[38]=0,c[39]=0,c[40]=-1,c[41]=0,c[42]=0,c[43]=-1,c[44]=0,c[45]=0,c[46]=-1,c[47]=0,c[48]=-1,c[49]=0,c[50]=0,c[51]=-1,c[52]=0,c[53]=0,c[54]=-1,c[55]=0,c[56]=0,c[57]=-1,c[58]=0,c[59]=0,c[60]=1,c[61]=0,c[62]=0,c[63]=1,c[64]=0,c[65]=0,c[66]=1,c[67]=0,c[68]=0,c[69]=1,c[70]=0,c[71]=0,l.tangent=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:c})),p.bitangent&&((f=new Float32Array(72))[0]=0,f[1]=1,f[2]=0,f[3]=0,f[4]=1,f[5]=0,f[6]=0,f[7]=1,f[8]=0,f[9]=0,f[10]=1,f[11]=0,f[12]=0,f[13]=1,f[14]=0,f[15]=0,f[16]=1,f[17]=0,f[18]=0,f[19]=1,f[20]=0,f[21]=0,f[22]=1,f[23]=0,f[24]=0,f[25]=0,f[26]=1,f[27]=0,f[28]=0,f[29]=1,f[30]=0,f[31]=0,f[32]=1,f[33]=0,f[34]=0,f[35]=1,f[36]=0,f[37]=0,f[38]=1,f[39]=0,f[40]=0,f[41]=1,f[42]=0,f[43]=0,f[44]=1,f[45]=0,f[46]=0,f[47]=1,f[48]=0,f[49]=0,f[50]=1,f[51]=0,f[52]=0,f[53]=1,f[54]=0,f[55]=0,f[56]=1,f[57]=0,f[58]=0,f[59]=1,f[60]=0,f[61]=0,f[62]=1,f[63]=0,f[64]=0,f[65]=1,f[66]=0,f[67]=0,f[68]=1,f[69]=0,f[70]=0,f[71]=1,l.bitangent=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:f})),(f=new Uint16Array(36))[0]=0,f[1]=1,f[2]=2,f[3]=0,f[4]=2,f[5]=3,f[6]=6,f[7]=5,f[8]=4,f[9]=7,f[10]=6,f[11]=4,f[12]=8,f[13]=9,f[14]=10,f[15]=8,f[16]=10,f[17]=11,f[18]=14,f[19]=13,f[20]=12,f[21]=15,f[22]=14,f[23]=12,f[24]=18,f[25]=17,f[26]=16,f[27]=19,f[28]=18,f[29]=16,f[30]=20,f[31]=21,f[32]=22,f[33]=20,f[34]=22,f[35]=23):((A=new Float64Array(24))[0]=r.x,A[1]=r.y,A[2]=r.z,A[3]=s.x,A[4]=r.y,A[5]=r.z,A[6]=s.x,A[7]=s.y,A[8]=r.z,A[9]=r.x,A[10]=s.y,A[11]=r.z,A[12]=r.x,A[13]=r.y,A[14]=s.z,A[15]=s.x,A[16]=r.y,A[17]=s.z,A[18]=s.x,A[19]=s.y,A[20]=s.z,A[21]=r.x,A[22]=s.y,A[23]=s.z,l.position=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:A}),(f=new Uint16Array(36))[0]=4,f[1]=5,f[2]=6,f[3]=4,f[4]=6,f[5]=7,f[6]=1,f[7]=0,f[8]=3,f[9]=1,f[10]=3,f[11]=2,f[12]=1,f[13]=6,f[14]=5,f[15]=1,f[16]=2,f[17]=6,f[18]=2,f[19]=3,f[20]=7,f[21]=2,f[22]=7,f[23]=6,f[24]=3,f[25]=0,f[26]=4,f[27]=3,f[28]=4,f[29]=7,f[30]=0,f[31]=1,f[32]=5,f[33]=0,f[34]=5,f[35]=4),s=n.Cartesian3.subtract(s,r,y),r=.5*n.Cartesian3.magnitude(s),o.defined(t._offsetAttribute)&&(s=A.length,A=new Uint8Array(s/3),s=t._offsetAttribute===e.GeometryOffsetAttribute.NONE?0:1,e.arrayFill(A,s),l.applyOffset=new m.GeometryAttribute({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:A})),new m.Geometry({attributes:l,indices:f,primitiveType:m.PrimitiveType.TRIANGLES,boundingSphere:new a.BoundingSphere(n.Cartesian3.ZERO,r),offsetAttribute:t._offsetAttribute})}},p.getUnitBox=function(){return x=o.defined(x)?x:p.createGeometry(p.fromDimensions({dimensions:new n.Cartesian3(1,1,1),vertexFormat:s.VertexFormat.POSITION_ONLY}))},t.BoxGeometry=p}));