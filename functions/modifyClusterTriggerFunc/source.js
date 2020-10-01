exports = async function(changeEvent) {

  const fullDocument = changeEvent.fullDocument;
  
  console.log (fullDocument.clusterName + " update Triggered");
  
  const username = context.values.get("username");
  const password = context.values.get("apiKey");
  projectID = context.values.get("projectID");
  
  result = await context.functions.execute("modifyCluster", username, password, projectID, fullDocument.clusterName, fullDocument);
  console.log(EJSON.stringify(result));

  if (result.error) { 
    throw result;
  }

  return fullDocument.clusterName + " updating...";

} 
