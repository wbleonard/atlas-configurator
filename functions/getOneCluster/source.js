/*
 * Gets information about the requested cluster 
 * See https://docs.atlas.mongodb.com/reference/api/clusters-get-one
 *
 */
exports = async function(username, password, projectID, clusterName) {
  
  const arg = { 
    scheme: 'https', 
    host: 'cloud.mongodb.com', 
    path: 'api/atlas/v1.0/groups/' + projectID + '/clusters/' + clusterName, 
    username: username, 
    password: password,
    headers: {'Content-Type': ['application/json'], 'Accept-Encoding': ['bzip, deflate']}, 
    digestAuth:true
  };
  
  // The response body is a BSON.Binary object. Parse it and return.
  response = await context.http.get(arg);

  return EJSON.parse(response.body.text()); 
};