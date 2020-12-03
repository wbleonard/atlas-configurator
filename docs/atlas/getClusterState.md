# Get Cluster State

Get's the state of a cluster. The possible states are:
* IDLE
* CREATING
* UPDATING
* DELETING
* DELETED
* REPAIRING


**URI** : `/atlas/getClusterState/?clusterName=:cn`

**Method:**: `GET`

**Auth required**: Yes

Authorization: [Stitch User ID](http://stitch-sdks.s3-website-us-east-1.amazonaws.com/stitch-sdks/js/4/interfaces/stitchuser.html#id)

## Success Response

**Code**: `200 OK`

**Response example**

```json
"CREATING"