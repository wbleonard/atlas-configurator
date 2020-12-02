# Atlas Configurator

A prototype MongoDB Realm application that demonstrates how the Atlas APIs can be used to Configure Atlas.

For an example frontend see [Minimal Atlas](https://github.com/esteininger/minimal-atlas).

This BaaS exposes the following APIs:

* [Get Clusters](./docs/atlas/getClusters.md) : `GET /atlas/getClusters/`
* [Create a Cluster](./docs/atlas/createCluster.md) : `POST /atlas/getClusters/`
* [Get Cluster State](./docs/atlas/getClusterState.md): `GET /atlas/getClusterState?clusterName:cn`
* [Modify a Cluster](./docs/atlas/modifyCluster.md) : `PATCH /atlas/modifyCluster`
* [Pause or Resume Cluster](./docs/atlas/pauseCluster.md) : `POST /atlas/pauseCluster`
* [Delete a Cluster](./docs/atlas/deleteCluster.md) : `DELETE /atlas/deleteCluster?clusterName:cn`


