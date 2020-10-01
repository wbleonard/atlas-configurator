/*
 * POST createCluster
 *
 * Body Parameters
 * 
 * clusterName - Name of the cluster as it appears in Atlas. Once the cluster is created, its name cannot be changed.
 * instanceSizeName - Cluster tier (e.g., M20)
 * diskSizeGB - Capacity, in gigabytes, of the host’s root volume.
 *
 */
 exports = async function(payload, response) {
   
  // Example Console input for testing
  // exports({body: BSON.Binary.fromText('{"clusterName": "testCluster1", "clusterDescription": "Dev Prototype", "instandeSizeName" : "M10","diskSizeGB": 10  }')})

  var result = {};
  
  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
    
  if (payload.body) {
    
    // Parse the body to get the config document...
    config = EJSON.parse(payload.body.text());
    console.log("Parsed Payload body: ", JSON.stringify(config));

    console.log(config.clusterDescription);
    const clusterDescription = "'"+ config.clusterDescription + "'"
    
    body = {
        "name": config.clusterName,
        "diskSizeGB": config.diskSizeGB,
        "numShards": 1,
        "providerSettings": {
            "providerName": "GCP",
            "instanceSizeName": "M10",
            "regionName": "NORTH_AMERICA_NORTHEAST_1"
        },
        "providerBackupEnabled": false,
        "autoScaling": {
            "diskGBEnabled": true
        },
      "labels": [
         {
           "key": "clusterDescription",
           "value": clusterDescription
         }
       ]
    };
  
    result = await context.functions.execute("createCluster", username, password, projectID, body);
    console.log(EJSON.stringify(result));
    console.log("Result status: " + result.status);

    if (result.statusCode == 201) {
      
      // Store the cluster configuration
      
      // Get a reference to the configs database and collection...
      var collection = context.services.get("mongodb-atlas").db("configurator").collection("configs");
      
      // The response body is a BSON.Binary object. Parse it
      var body = EJSON.parse(result.body.text());
      console.log("Cluster ID:"  + body.id)
      
      // Add the cluster id to the config
      config.id = body.id;
    
      // Insert the new config...
      collection.insertOne(config);      
      
      // return "Cluster " + config.clusterName + " creating..."
      return EJSON.parse(result.body.text());
      
    } else {
      throw result; 
    }
  }
  
  return result;
  
};