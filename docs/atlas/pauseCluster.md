# Pause or Resume a Cluster

Pause or resume a cluster.

**URI** : `/atlas/pauseCluster/`

**Method:**: `POST`

**Auth required**: Yes

Authorization: [Stitch User ID](http://stitch-sdks.s3-website-us-east-1.amazonaws.com/stitch-sdks/js/4/interfaces/stitchuser.html#id)

## Payload Example

```json
{
    "clusterName": "BrianDevCluster3",
    "paused": false
}
```

## Success Response

**Code**: `200 OK`

**Response example**

```json
"BrianDevCluster3 resumed"
```