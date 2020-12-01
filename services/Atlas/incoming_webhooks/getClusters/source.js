/*
 * GET getClusters
 *
 * Query Parameters
 * 
 * None
 *
 * Response - Currently all values documented at https://docs.atlas.mongodb.com/reference/api/clusters-get-all/
 *
 */
 exports = async function(payload, response) { 

  var results = [];
  
  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
  
  var clusterName =  '';
    
  response = await context.functions.execute("getOneCluster", username, password, projectID, clusterName);
  
  results = response.results;
  
  console.log(context.activeuser);
  
  console.log(EJSON.stringify(results));


  return results;

};
  
    
    
    
