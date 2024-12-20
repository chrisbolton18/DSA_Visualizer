(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{9818:function(e,t,r){Promise.resolve().then(r.bind(r,5209))},5209:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(7437),n=r(2265),a=r(1396),l=r.n(a),i=r(5754),o=r(5179),d=r(7815),c=r(7956),u=r(8291),x=r(9883),m=r(4891),f=r(1291);function h(){let[e,t]=(0,n.useState)(null),[r,a]=(0,n.useState)(""),[h,p]=(0,n.useState)(""),[g,b]=(0,n.useState)("end"),[N,v]=(0,n.useState)("");(0,n.useEffect)(()=>{console.log("Current list state:",e)},[e]);let y=r=>{t({value:r,next:e})},j=r=>{let s={value:r,next:null};if(!e){t(s);return}let n=e;for(;null!==n.next;)n=n.next;n.next=s,t({...e})},w=(r,s)=>{if(s<=0||!e){y(r);return}let n=e,a=null,l=0;for(;null!==n&&l<s;)a=n,n=n.next,l++;let i={value:r,next:n};a?(a.next=i,t({...e})):t(i)};return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12",children:(0,s.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,s.jsxs)("header",{className:"text-center mb-16",children:[(0,s.jsx)("h1",{className:"text-5xl font-extrabold text-indigo-900 mb-6",children:"Linked Lists"}),(0,s.jsx)("p",{className:"text-xl text-indigo-700 max-w-3xl mx-auto",children:"Explore the dynamic and flexible nature of linked data structures"})]}),(0,s.jsxs)("div",{className:"grid md:grid-cols-2 gap-12",children:[(0,s.jsxs)(d.Zb,{className:"bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300",children:[(0,s.jsxs)(d.Ol,{className:"bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8",children:[(0,s.jsx)(d.ll,{className:"text-3xl font-bold mb-4",children:"What is a Linked List?"}),(0,s.jsx)(d.SZ,{className:"text-indigo-100 text-lg",children:"A dynamic data structure with connected nodes"})]}),(0,s.jsxs)(d.aY,{className:"p-8",children:[(0,s.jsx)("p",{className:"text-gray-700 mb-6 text-lg",children:"A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory locations, allowing for efficient insertion and deletion at any position."}),(0,s.jsx)("p",{className:"text-gray-800 font-semibold mb-4 text-lg",children:"Key characteristics of linked lists:"}),(0,s.jsxs)("ul",{className:"list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg",children:[(0,s.jsx)("li",{children:"Dynamic size (can grow or shrink at runtime)"}),(0,s.jsx)("li",{children:"Efficient insertion and deletion of elements at any position"}),(0,s.jsx)("li",{children:"No random access (must traverse from the head)"}),(0,s.jsx)("li",{children:"Requires extra memory for storing references"}),(0,s.jsx)("li",{children:"Can be singly-linked (next only) or doubly-linked (next and previous)"})]})]})]}),(0,s.jsxs)(d.Zb,{className:"bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300",children:[(0,s.jsxs)(d.Ol,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8",children:[(0,s.jsx)(d.ll,{className:"text-3xl font-bold mb-4",children:"Linked List Simulator"}),(0,s.jsx)(d.SZ,{className:"text-purple-100 text-lg",children:"Add and remove elements to see how a linked list works"})]}),(0,s.jsxs)(d.aY,{className:"p-8",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-4 mb-8",children:[(0,s.jsxs)("div",{className:"flex space-x-4",children:[(0,s.jsx)(o.I,{type:"number",value:r,onChange:e=>a(e.target.value),placeholder:"Enter a number",className:"flex-grow text-lg py-3 bg-white"}),(0,s.jsxs)(c.Ph,{value:g,onValueChange:b,children:[(0,s.jsx)(c.i4,{className:"w-[180px]",children:(0,s.jsx)(c.ki,{placeholder:"Insert position"})}),(0,s.jsxs)(c.Bw,{children:[(0,s.jsx)(c.Ql,{value:"beginning",children:"At beginning"}),(0,s.jsx)(c.Ql,{value:"end",children:"At end"}),(0,s.jsx)(c.Ql,{value:"custom",children:"Custom position"})]})]})]}),"custom"===g&&(0,s.jsx)(o.I,{type:"number",value:N,onChange:e=>v(e.target.value),placeholder:"Enter position (0-based index)",className:"w-full text-lg py-3"}),(0,s.jsxs)(i.z,{onClick:()=>{let e=parseInt(r);if(!isNaN(e)){switch(g){case"beginning":y(e);break;case"end":j(e);break;case"custom":let t=parseInt(N);isNaN(t)||w(e,t)}a(""),v("")}},className:"bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6",children:[(0,s.jsx)(x.Z,{className:"mr-2 h-5 w-5"})," Add Node"]}),(0,s.jsx)("div",{className:"flex space-x-4",children:(0,s.jsx)(o.I,{type:"number",value:h,onChange:e=>p(e.target.value),placeholder:"Enter value to remove",className:"flex-grow text-lg py-3 bg-white"})}),(0,s.jsxs)(i.z,{onClick:()=>{let e=parseInt(h);if(isNaN(e)){console.error("Invalid input for removal");return}t(t=>{if(!t)return console.log("List is empty, nothing to remove"),null;if(t.value===e)return console.log("Removed node with value ".concat(e)),t.next;let r=t;for(;null!==r.next;){if(r.next.value===e)return console.log("Removed node with value ".concat(e)),r.next=r.next.next,t;r=r.next}return console.log("Value ".concat(e," not found in the list")),t}),p("")},className:"bg-red-500 hover:bg-red-600 text-lg py-3 px-6",children:[(0,s.jsx)(m.Z,{className:"mr-2 h-5 w-5"})," Remove Node"]})]}),(0,s.jsx)("div",{className:"p-6 bg-gray-100 rounded-lg",children:e?(()=>{let t=[],r=e,n=0;for(;null!==r;)t.push((0,s.jsxs)("div",{className:"flex items-center mb-4 mr-4",children:[(0,s.jsxs)("div",{className:"bg-white border-2 border-purple-300 rounded-lg px-4 py-3 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200",children:[(0,s.jsxs)("span",{className:"text-sm text-purple-600 font-semibold mb-2",children:["Node ",n]}),(0,s.jsx)("span",{className:"text-xl font-bold text-gray-800",children:r.value})]}),r.next&&(0,s.jsx)("div",{className:"flex items-center ml-2",children:(0,s.jsx)(u.Z,{className:"text-purple-500"})})]},"node-".concat(n,"-").concat(r.value))),r=r.next,n++;return(0,s.jsx)("div",{className:"flex flex-wrap",children:t})})():(0,s.jsx)("p",{className:"text-gray-500 italic text-lg text-center",children:"Add elements to visualize the linked list"})})]})]})]}),(0,s.jsx)("div",{className:"mt-16 text-center",children:(0,s.jsxs)(l(),{href:"/data-structures",className:"inline-flex items-center text-indigo-600 hover:text-indigo-800 text-xl font-semibold transition-colors duration-200",children:[(0,s.jsx)(f.Z,{className:"mr-2 h-6 w-6"}),"Back to Data Structures"]})})]})})}},5754:function(e,t,r){"use strict";r.d(t,{z:function(){return l}});var s=r(7437),n=r(2265);let a=(0,r(6061).j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef((e,t)=>{let{className:r,variant:n,size:l,asChild:i=!1,...o}=e;return(0,s.jsx)("button",{className:a({variant:n,size:l,className:r}),ref:t,...o})});l.displayName="Button"},7815:function(e,t,r){"use strict";r.d(t,{Ol:function(){return l},SZ:function(){return o},Zb:function(){return a},aY:function(){return d},ll:function(){return i}});var s=r(7437),n=r(2265);let a=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:"rounded-lg border bg-white shadow-sm ".concat(r),...n})});a.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:"flex flex-col space-y-1.5 p-6 ".concat(r),...n})});l.displayName="CardHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("h3",{ref:t,className:"text-2xl font-semibold leading-none tracking-tight ".concat(r),...n})});i.displayName="CardTitle";let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("p",{ref:t,className:"text-sm text-gray-500 ".concat(r),...n})});o.displayName="CardDescription";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:"p-6 ".concat(r),...n})});d.displayName="CardContent",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)("div",{ref:t,className:"flex items-center p-6 pt-0 ".concat(r),...n})}).displayName="CardFooter"},5179:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var s=r(7437);let n=r(2265).forwardRef((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ".concat(r),ref:t,...a})});n.displayName="Input"},7956:function(e,t,r){"use strict";r.d(t,{Ph:function(){return u},Bw:function(){return f},Ql:function(){return h},i4:function(){return m},ki:function(){return x}});var s=r(7437),n=r(2265),a=r(7038),l=r(3523),i=r(2442),o=r(7042),d=r(4769);function c(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,d.m6)((0,o.W)(t))}let u=a.fC;a.ZA;let x=a.B4,m=n.forwardRef((e,t)=>{let{className:r,children:n,...i}=e;return(0,s.jsxs)(a.xz,{ref:t,className:c("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),...i,children:[n,(0,s.jsx)(a.JO,{asChild:!0,children:(0,s.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=a.xz.displayName;let f=n.forwardRef((e,t)=>{let{className:r,children:n,position:l="popper",...i}=e;return(0,s.jsx)(a.h_,{children:(0,s.jsx)(a.VY,{ref:t,className:c("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-900 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:l,...i,children:(0,s.jsx)(a.l_,{className:c("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n})})})});f.displayName=a.VY.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.__,{ref:t,className:c("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...n})}).displayName=a.__.displayName;let h=n.forwardRef((e,t)=>{let{className:r,children:n,...l}=e;return(0,s.jsxs)(a.ck,{ref:t,className:c("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 hover:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(a.eT,{children:n})]})});h.displayName=a.ck.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(a.Z0,{ref:t,className:c("-mx-1 my-1 h-px bg-muted",r),...n})}).displayName=a.Z0.displayName}},function(e){e.O(0,[250,146,971,938,744],function(){return e(e.s=9818)}),_N_E=e.O()}]);