### 获取计划任务列表#

地址

```
/api/protected_schedule/?uuid={{instance_uuid}}&remote_uuid={{service_uuid}}&apikey={{apikey}}
```

请求方式

```
GET
Content-Type: application/json; charset=utf-8
```

响应
```json
{
    "status": 200,
    "data": true,
    "time": 1633486903384
}
```