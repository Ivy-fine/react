import Mock from 'mockjs'
Mock.mock("/login",'post',(opt)=>{
    let {username,pwd} = JSON.parse(opt.body);
    if(username === "fff" && pwd === "123"){
        return {status:200,info:{username,pwd,avatar:'/images/logo.jpg'}}
    }else{
        return {status:400,msg:'用户名或密码错误'}
    }
})