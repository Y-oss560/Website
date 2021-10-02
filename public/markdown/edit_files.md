### 编辑/查看文件

地址

```
/api/files?uuid={{new_instance_uuid}}&remote_uuid={{service_uuid}}&apikey={{apikey}}
```

请求方式

```
PUT
Content-Type: application/json; charset=utf-8
```

请求参数

```json
{
    "target":"eula.txt"
}
```

响应

```json
{
    "status":200,
    "data":"eula=true",     // 文件内容
    "time":1633185763950
}
```