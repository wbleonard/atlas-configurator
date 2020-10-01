/*
 * PATCH pauseCluster
 *
 * Body Parameters
 * 
 * clusterName - the name of the cluster to pause
 * paused - true to pause, false to resume
 *
 */
 exports = async function(payload, response) {
   
  // Example Console input for testing
  // exports({body: BSON.Binary.fromText('{"clusterName": "testCluster", "paused": false}')})

  var result = {};
  
  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
    
  if (payload.body) {
    
    // Parse the body to get the config document...
    config = EJSON.parse(payload.body.text());
    console.log("Parsed Payload body: ", JSON.stringify(config));
    
    body = {paused: config.paused};
    
    
  
    result = await context.functions.execute("modifyCluster", username, password, projectID, config.clusterName, body);
    console.log(EJSON.stringify(result));
    console.log("Result status: " + result.status);
    
    if (result.error) { 
      throw result;
    }
  }

  return config.clusterName + ((config.paused) ? ' paused' : ' resumed')
  
}