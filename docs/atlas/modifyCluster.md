# Get Clusters

Get a list of all the deployed clusters/

**URI** : `/atlas/modifyCluster/`

**Method:**: `PATCH`

**Auth required**: Yes

Authorization: [Stitch User ID](http://stitch-sdks.s3-website-us-east-1.amazonaws.com/stitch-sdks/js/4/interfaces/stitchuser.html#id)

## Payload Example

```json
{
    "clusterName": "BrianDevCluster3",
    "instandeSizeName": "M10",
    "diskSizeGB": 20
}
```

## Success Response

**Code**: `200 OK`

**Response example**

```json
"BrianDevCluster3 updating..."
```