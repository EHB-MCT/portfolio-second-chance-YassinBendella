# Endpoints
## /layerdata/:id
Type: GET
Parameters: ID - the id of the layer to fetch the data for
Return: 
```json
{
    "id":1499337861306,
    "layer":"1",
    "name":[
        {"name":"FogAndDust"},
        {"name":"NeonRoom2"},
        {"name":"IntoTheGlow"},
        {"name":"NoHopeJustFear"},
        {"name":"IntoTheGlow"}
        ],
    "numclips":5,
    "clips":[
        {"path":"C:\\Program Files\\Resolume Arena\\media\\Shop74\\FogAndDust_3.mov"},
        {"path":"C:\\Program Files\\Resolume Arena\\media\\Shop74\\NeonRoom2_32.mov"},
        {"path":"C:\\Program Files\\Resolume Arena\\media\\Shop74\\IntoTheGlow_21.mov"},
        {"path":"C:\\Program Files\\Resolume Arena\\media\\Shop74\\NoHopeJustFear_44.mov"},
        {"path":"C:\\Program Files\\Resolume Arena\\media\\Shop74\\IntoTheGlow_21.mov"}]}
```

## /clipdata
Type: GET
Parameters: /
Return:
```JSON
{
    "clipid":1621342719981,
    "name":"SpaceUniverse"
}
```

## /setselected/:layerid/:clipid
Type: POST
Parameters: 
    - layerid: The id of the layer in which the clip lies
    - clipid: The id of the clip to set as active (selected)
Return: Empty Json