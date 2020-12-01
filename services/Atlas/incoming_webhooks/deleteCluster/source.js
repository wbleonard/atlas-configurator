/*
 * DELETE deleteCluster
 *
 * Query Parameters
 * 
 * clusterName - Name of the cluster as it appears in Atlas. 
 *
 * Response - 202 Accepted
 *
 */
 exports = async function(payload, response) {

  // Example Console input for testing
  // exports({query: {clusterName: 'testCluster'}})

  var result = {};

  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
  
  var clusterName = payload.query.clusterName || '';
  console.log("Deleting cluster: " + clusterName);
    
  result = await context.functions.execute("deleteCluster", username, password, projectID, clusterName);
  
  console.log(EJSON.stringify(result));

  // If result is {} (as expected)
  if (Object.keys(result).length == 0) {
    
      // Move the record to the configs_history collection (should wrap in a transaction)...
      var db = context.services.get("mongodb-atlas").db("configurator");
      
      configCollection = db.collection("configs");
      
      // Get the config..
      var configDoc = await configCollection.findOne({"clusterName":clusterName});
      console.log(EJSON.stringify(configDoc));
      
      // Delete the config...
      await configCollection.deleteOne({"clusterName": clusterName});      

      // Record the history...
      configs_history = db.collection("configs_history");
      await configs_history.insertOne(configDoc);
      
      return clusterName + " deleting..."
  }
  return result;
};
