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
  projectID = context.values.get("projectID");;
  
  var clusterName = payload.query.clusterName || 'AtlasAutomationCluster';
    
  result = await context.functions.execute("deleteCluster", username, password, projectID, clusterName);
  
  console.log(EJSON.stringify(result));

  return result;

};
  
    
    
    
