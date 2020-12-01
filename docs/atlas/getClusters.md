# Get Clusters

Get a list of all the deployed clusters/

**URI** : `/atlas/getClusters/`

**Method:**: `GET`

**Auth required**: Yes

## Success Response

**Code**: `200 OK`

**Response example**

```json
[
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
        "connectionStrings": {
            "standardSrv": "mongodb+srv://briandemocluster.z4rif.mongodb.net",
            "standard": "mongodb://briandemocluster-shard-00-00.z4rif.mongodb.net:27017,briandemocluster-shard-00-01.z4rif.mongodb.net:27017,briandemocluster-shard-00-02.z4rif.mongodb.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-5w7h1b-shard-0"
        },
        "createDate": "2020-11-19T16:41:33Z",
        "diskSizeGB": {
            "$numberDouble": "10"
        },
        "encryptionAtRestProvider": "NONE",
        "groupId": "5f7481e97097205dd59ee728",
        "id": "5fb6a03d9e2953552f13b4e3",
        "labels": [
            {
                "key": "clusterDescription",
                "value": ""
            },
            {
                "key": "clusterOwner",
                "value": "Brian Leonard - brian.leonard@mongodb.com"
            },
            {
                "key": "dateCreated",
                "value": "2020-11-19"
            }
        ],
        "links": [
            {
                "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDemoCluster",
                "rel": "self"
            },
            {
                "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDemoCluster/restoreJobs",
                "rel": "http://cloud.mongodb.com/restoreJobs"
            },
            {
                "href": "https://cloud.mongodb.com/api/atlas/v1.0/groups/5f7481e97097205dd59ee728/clusters/BrianDemoCluster/snapshots",
                "rel": "http://cloud.mongodb.com/snapshots"
            }
        ],
        "mongoDBMajorVersion": "4.2",
        "mongoDBVersion": "4.2.10",
        "mongoURI": "mongodb://briandemocluster-shard-00-00.z4rif.mongodb.net:27017,briandemocluster-shard-00-01.z4rif.mongodb.net:27017,briandemocluster-shard-00-02.z4rif.mongodb.net:27017",
        "mongoURIUpdated": "2020-11-19T16:50:21Z",
        "mongoURIWithOptions": "mongodb://briandemocluster-shard-00-00.z4rif.mongodb.net:27017,briandemocluster-shard-00-01.z4rif.mongodb.net:27017,briandemocluster-shard-00-02.z4rif.mongodb.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-5w7h1b-shard-0",
        "name": "BrianDemoCluster",
        "numShards": {
            "$numberInt": "1"
        },
        "paused": true,
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
                "id": "5fb6a03c9e2953552f13b4de",
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
        "srvAddress": "mongodb+srv://briandemocluster.z4rif.mongodb.net",
        "stateName": "IDLE"
    }
]
```
