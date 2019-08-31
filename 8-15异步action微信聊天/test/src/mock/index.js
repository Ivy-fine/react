import Mock from 'mockjs'
Mock.mock('/getlist','get',{
    "status":200,
    "list|15":[{
        "id|+1":1,
        "avatar":"@image(50x50)",
        "text":"@csentence"
    }]
})