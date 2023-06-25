const os =require('os');

const userinfo = os.userInfo();
const condition = os.uptime();

console.log(userinfo);
console.log(`the system is on for ${condition} seconds`);

const currentOS = {
    type : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemen : os.freemem()
}

console.log(currentOS);