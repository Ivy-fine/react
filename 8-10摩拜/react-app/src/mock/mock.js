import Mock from 'mockjs';
Mock.mock("/getlist",'get',{
    "status":200,
    "list|10":[{
        "id":"@id",
        "money|0-5":0,
        "times|5-60":0,
        "kCal|0-300":0,
        "distance|1-5000":0,
        "carbon|10-200":0
    }]
})