let{closeSession}=require("../controllers/closeSession");async function pCloseSession(e,s){e=e.cookies,e=await closeSession(e.userType,e.token,e.sessionID);"Doc session deleted"==e.result?(s.cookie("userType","business",{maxAge:0,httpOnly:!0}),s.cookie("token","expired",{maxAge:0,httpOnly:!0}),s.cookie("sessionID","expired",{maxAge:0,httpOnly:!0}),s.cookie("eventStream","expired",{maxAge:0,httpOnly:!0}),s.cookie("idEmission","expired",{maxAge:0,httpOnly:!1}),s.redirect("https://ayacuchoseguro.herokuapp.com/logout/business")):s.redirect("/emission")}module.exports.pCloseSession=pCloseSession;