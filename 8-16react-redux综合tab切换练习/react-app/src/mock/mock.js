import Mock from 'mockjs'
Mock.mock("/getlist",'get',{
    "status":200,
    "list|5":[{
        "type":"@ctitle",
        "cont|10":[{
            "id":'@id',
            "pic":'@image(200x200,@color)',
            "title":'@ctitle(8,11)',
            "price|20-99":0
        }]
    }]
})
