let sessionClosed;async function socketBusiness(e,o,n,c){sessionClosed=!1,e.on(o,function(s){e.broadcast.emit(o,s)}),e.on("disconnect",()=>{if(!sessionClosed){let s=n.map(s=>s.clientID),e=0;s.forEach(s=>{c.sockets.connected[s].disconnect(),e++}),sessionClosed=!0}})}module.exports.socketBusiness=socketBusiness;