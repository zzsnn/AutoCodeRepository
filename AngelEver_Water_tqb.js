/*
 TG: https://t.me/tom_ww
 脚本地址：https://raw.githubusercontent.com/AngelEver/AutoCodeRepository/main/AngelEver_Water_tqb.js
 1. 变量有三个,本地自己抓，tqbtoken、tqbuserid、tqbua（UA不抓默认随机生成,有能力自己抓）
 2. 脚本内置邀请，介意勿跑,谢谢
 3. 脚本目前写了一半，陆续会加上剩余
 4. 青龙暂时还有点问题，跑的话先用v2p吧

 青龙面板：
 多账号@分隔
 example:
 export tqbtoken='f9eb9debb47xxxxxb9d418429eac7ec40c581bfa895d'
 export tqbuserid='123dsf233'
 拉脚本新增任务命令(每天一次，持续更新，时间不限)：ql raw https://raw.githubusercontent.com/AngelEver/AutoCodeRepository/main/AngelEver_Water_tqb.js

 v2p:
 1.暂时不支持自动抓包，需要手动抓上面的两个key，很简单！
 2.抓好存一下然后添加一下task就可以执行了。
 3.多账号@分隔
 */

const $ = new Env('TQB');

let tqbtoken= $.isNode() ? (process.env.tqbtoken ? process.env.tqbtoken : "") : ($.getdata('tqbtoken') ? $.getdata('tqbtoken') : "");
let tqbtokenArr = []
let tqbtokens = ""

let tqbuserid= $.isNode() ? (process.env.tqbuserid ? process.env.tqbuserid : "") : ($.getdata('tqbuserid') ? $.getdata('tqbuserid') : "");
let tqbuseridArr = []
let tqbuserids = ""

let tqbua= $.isNode() ? (process.env.tqbua ? process.env.tqbua : "") : ($.getdata('tqbua') ? $.getdata('tqbua') : "");

if(!tqbua){
    tqbua = `iPhone;4.9.4;14.6;${randomWord(false,40,40)};network/wifi;model/iPhone9,2;appBuild/100579;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/1;hasOCPay/0;supportBestPay/0;session/936;pap/JA2019_3111800;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E200`;
    console.log("检测环境变量中没有UA,可以手动抓取,将key为tqbua存到ql或v2p,目前采取生成随机UA的方式")
}

if (!tqbtoken) {
    console.log(`tqbtoken空的呀兄弟\n`)
    $.done()
}
else if (tqbtoken.indexOf("@") == -1 && tqbtoken.indexOf("@") == -1) {
    tqbtokenArr.push(tqbtoken)
}
else if (tqbtoken.indexOf("@") > -1) {
    tqbtokens = tqbtoken.split("@")
}
else if (process.env.tqbtoken && process.env.tqbtoken.indexOf('@') > -1) {
    tqbtokenArr = process.env.tqbtoken.split('@');
    console.log(`您选择的是用"@"隔开\n`)
}
else {
    tqbtokens = [process.env.tqbtoken]
};
Object.keys(tqbtokens).forEach((item) => {
    if (tqbtokens[item]) {
    tqbtokenArr.push(tqbtokens[item])
}
})

if (!tqbuserid) {
    console.log(`tqbuserid空的呀兄弟\n`)
    $.done()
}
else if (tqbuserid.indexOf("@") == -1 && tqbuserid.indexOf("@") == -1) {
    tqbuseridArr.push(tqbuserid)
}
else if (tqbuserid.indexOf("@") > -1) {
    tqbuserids = tqbuserid.split("@")
}
else if (process.env.tqbuserid && process.env.tqbuserid.indexOf('@') > -1) {
    tqbuseridArr = process.env.tqbuserid.split('@');
    console.log(`您选择的是用"@"隔开\n`)
}
else {
    tqbuserids = [process.env.tqbuserid]
};
Object.keys(tqbuserids).forEach((item) => {
    if (tqbuserids[item]) {
    tqbuseridArr.push(tqbuserids[item])
}
})


var commonHeader = {
    "Host": "api.taoquanbaapp.com",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": tqbua
}
var postcommonHeader = {
    "Host": "api.taoquanbaapp.com",
    "Content-Type": "application/x-www-form-urlencoded",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "User-Agent": tqbua
}
var tokenTemp=''
var userIdTemp=''

!(async () => {
    if (typeof $request !== "undefined") {
    console.log('1111')
    $.done()
} else {
    for (let k = 0; k < tqbtokenArr.length; k++) {
        console.log(`--------第 ${k + 1} 个账号收益查询中--------\n`)
        tokenTemp=tqbtokenArr[k];
        userIdTemp=tqbuseridArr[k];
        await catRest()
        await resPxi()
        await flxTpq()
        await getList()
        await engTt()
        await getScoi()
        await fexJct()
        await moQxi()
        await postFsi()
        await postInnS()
        var arr = ["1", "2", "3", "0", "4"];
        let num="1";
        for (var i = 0; i < arr.length; i++) {
            num = arr[i];
            await signRsd(num);
            await $.wait(65000);
        }
        var arr = ["101", "102", "103"];
        let task="101";
        for (var i = 0; i < arr.length; i++) {
            task = arr[i];
            await getWarda(task);
            await $.wait(65000);
        }
        await $.wait(30000);
        console.log("\n\n")
    }

}
})()
    .catch((e) => $.logErr(e))
.finally(() => $.done())


function catRest(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/user/profit/stat?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                console.log('\n今日预估收益为:'+result.msg.dayMoney)
        } catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}


function engTt(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/sign/new?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n今日签到任务,结果为:'+result.msg.errorMsg)}else {console.log('\n账号获取总金币为:'+result.userGarden.goldAll)
        console.log('\n账号可用总金币为:'+result.userGarden.goldAvailable)}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}


function getList(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://apiback.taoquanbaapp.com/AppFanlishop/api/v1/user/referer/bind?buildVersion=9.2&refererId=8925613&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
            } catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function resPxi(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/small?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n定时收取猫猫首页金币,结果为:'+result.msg.errorMsg)}else {console.log('\n定时收取猫猫首页金币:'+result.msg.gold+'个')
        console.log('\n账号可用总金币为:'+result.userGarden.goldAvailable)}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function flxTpq(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/small/flush?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                console.log('\n定时收取猫猫首页金币进行任务刷新')
        } catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function getScoi(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/award/tree?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n定时收取猫猫框里的金币,结果为:'+result.msg.errorMsg)}else {console.log('\n定时收取猫猫框里的金币成功')}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function fexJct(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/quick/tree?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                //console.log(data)
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n喂猫,结果为:'+result.msg.errorMsg)}else {console.log('\n喂猫成功')}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function signRsd(position,timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/userSign/sign/red?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp+'&position='+position,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n拆红包,结果为:'+result.msg.errorMsg)}else {console.log('\n拆红包,结果为:'+result.msg.award);console.log('\n拆红包,收益为:'+result.msg.redPoint);}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function moQxi(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/user/garden/gold/order?buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
                headers: commonHeader,
                method: 'GET',
            }
            $.get(url, async (err, resp, data) => {
            try {
            } catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function postFsi(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/garden/task/sign',
                headers: postcommonHeader,
                body: 'buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
            }
            $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n猫粮签到,结果为:'+result.msg.errorMsg)}else {console.log('\n猫粮签到,结果为:'+result.msg.catFood);console.log('\n猫粮签到,签到天数为:'+result.msg.catSignDay)}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function postInnS(timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/userSign/sign',
                headers: postcommonHeader,
                body: 'buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp,
            }
            $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n非金币签到,结果为:'+result.msg.errorMsg)}else {console.log('\n非金币签到成功:')}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}

function getWarda(taskId,timeout = 0) {
    return new Promise((resolve) => {
            let url = {
                url: 'http://api.taoquanbaapp.com/AppFanlishop/api/v1/public/garden/task/award',
                headers: postcommonHeader,
                body: 'buildVersion=9.2&os=0&version=7.54&token='+tokenTemp+'&userId='+userIdTemp+'&taskId='+taskId,
            }
            $.post(url, async (err, resp, data) => {
            try {
                const result = JSON.parse(data)
                if(result.status==0){console.log('\n猫粮任务,结果为:'+result.msg.errorMsg)}else {console.log('\n猫粮任务完成')}
} catch (e) {
    } finally {
        resolve()
    }
},timeout)
})
}



function randomWord(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

