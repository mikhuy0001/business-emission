let{app}=require("../app");const{root}=require("./root"),{pSignInBusinessServer}=require("./pSignInBusinessServer"),{gEmission}=require("./gEmission"),{pCloseSession}=require("./pCloseSession");app.get("/",root),app.post("/signInBusinessServer",pSignInBusinessServer),app.get("/emission",gEmission),app.post("/closeSession",pCloseSession),app.get("*",function(e,s){s.redirect("/")});