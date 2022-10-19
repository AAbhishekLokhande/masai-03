reg user= abhi@gmail.com;
reg pass= abc123;
//login
input user = abhi@gmail.com;
input pass = abc123;
if (reg user==input user && reg pass==input pass){
console.log("login successfully ");
}
else if (reg user!=input user){
  console.log("no user found");
}
else{
console.log("wrong crendential");
}
