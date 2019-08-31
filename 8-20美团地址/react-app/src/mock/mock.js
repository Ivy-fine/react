import Mock from 'mockjs'
Mock.mock("/getlist",'get',{
    "status":200,
    "list|3":[{
        "id|+1":1,
        "name":"@cname",
        "tel|18311111111-18399999999":1,
        "address":"@county(true)"
    }]
})