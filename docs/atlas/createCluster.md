# Create a Cluster

Creates a cluster.

**URI** : `/atlas/createCluster/`

**Method:**: `POST`

**Auth required**: Yes

Authorization: [Stitch User ID](http://stitch-sdks.s3-website-us-east-1.amazonaws.com/stitch-sdks/js/4/interfaces/stitchuser.html#id)

## Payload Example

```json
{
    "clusterName": "BrianDevCluster3",
    "clusterDescription": "Development Prototype",
    "instanceSizeName": "M10",
    "diskSizeGB": 10,
    "mongoDBVersion": "4.2"
}
```

## Success Response

**Code**: `200 OK`

**Response example**

```json
{
    "autoScaling": {
        "autoIndexingEnabled": false,
        "compute": {
            "enabled": false,
            "scaleDownEnabled": false
        },
        "diskGBEnabled": true
    },
    "backupEnabled": false,
    "biConnector": {
        "enabled": false,
        "readPreference": "secondary"
    },
    "clusterType": "REPLICASET",
    "connectionStrings": {},
    "createDate": "2020-12-01T20:05:41Z",
    "diskSizeGB": {
        "$numberDouble": "10"
    },
    "encryptionAtRestProvider": "NONE",
    "groupId": "5f7481e97097205dd59ee728",
    "id": "5fc6a21501e6ed117327fa78",
    "labels": [
        {
            "key": "clusterDescription",
            "value": "Development Prototype"
        },
        {
            "key": "clusterOwner",
            "value": "Brian Leonard - brian.leonard@mongodb.com"
        },
        {
            "key": "dateCreated",
            "value": "2020-12-01"
        }
    ],
    "links": [
        {
            "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDevCluster3",
            "rel": "self"
        },
        {
            "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDevCluster3/restoreJobs",
            "rel": "http://cloud.mongodb.com/restoreJobs"
        },
        {
            "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDevCluster3/snapshots",
            "rel": "http://cloud.mongodb.com/snapshots"
        }
    ],
    "mongoDBMajorVersion": "4.2",
    "mongoDBVersion": "4.2.10",
    "mongoURIUpdated": "2020-12-01T20:05:41Z",
    "name": "BrianDevCluster3",
    "numShards": {
        "$numberInt": "1"
    },
    "paused": false,
    "pitEnabled": false,
    "providerBackupEnabled": false,
    "providerSettings": {
        "providerName": "GCP",
        "autoScaling": {
            "compute": {
                "maxInstanceSize": null,
                "minInstanceSize": null
            }
        },
        "instanceSizeName": "M10",
        "regionName": "NORTH_AMERICA_NORTHEAST_1"
    },
    "replicationFactor": {
        "$numberInt": "3"
    },
    "replicationSpec": {
        "NORTH_AMERICA_NORTHEAST_1": {
            "analyticsNodes": {
                "$numberInt": "0"
            },
            "electableNodes": {
                "$numberInt": "3"
            },
            "priority": {
                "$numberInt": "7"
            },
            "readOnlyNodes": {
                "$numberInt": "0"
            }
        }
    },
    "replicationSpecs": [
        {
            "id": "5fc6a21501e6ed117327fa71",
            "numShards": {
                "$numberInt": "1"
            },
            "regionsConfig": {
                "NORTH_AMERICA_NORTHEAST_1": {
                    "analyticsNodes": {
                        "$numberInt": "0"
                    },
                    "electableNodes": {
                        "$numberInt": "3"
                    },
                    "priority": {
                        "$numberInt": "7"
                    },
                    "readOnlyNodes": {
                        "$numberInt": "0"
                    }
                }
            },
            "zoneName": "Zone 1"
        }
    ],
    "stateName": "CREATING"
}
```