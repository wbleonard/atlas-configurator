/*
 * PATCH modifyCluster
 *
 * Body Parameters
 * 
 * clusterName - the name of the cluster to pause
 * paused - true to pause, false to resume
 *
 */
 exports = async function(payload, response) {
   
  // Example Console input for testing
  // exports({body: BSON.Binary.fromText('{"clusterName": "testCluster","instandeSizeName" : "M10","diskSizeGB": 10  }')})

  var result = {};
  
  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
    
  if (payload.body) {
    
    // Parse the body to get the config document...
    config = EJSON.parse(payload.body.text());
    console.log("Parsed Payload body: ", JSON.stringify(config));
    
    body = {"diskSizeGB": config.diskSizeGB,
            "providerSettings": {
                "providerName": "GCP",
                "instanceSizeName": config.instanceSizeName,
                "regionName": "NORTH_AMERICA_NORTHEAST_1"
            }
    };
    
    
  
    result = await context.functions.execute("modifyCluster", username, password, projectID, config.clusterName, body);
    console.log(EJSON.stringify(result));

    if (result.error) { 
      throw result;
    }
  }

  return config.clusterName + " updating...";
  
}