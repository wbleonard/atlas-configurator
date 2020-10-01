/*
 * Creates the cluster as defined by the body parameter. 
 * See https://docs.atlas.mongodb.com/reference/api/clusters-create-one/
 *
 */
exports = async function(username, password, projectID, body) {
  
  const arg = { 
    scheme: 'https', 
    host: 'cloud.mongodb.com', 
    path: 'api/atlas/v1.0/groups/' + projectID + '/clusters', 
    username: username, 
    password: password,
    headers: {'Content-Type': ['application/json'], 'Accept-Encoding': ['bzip, deflate']}, 
    digestAuth:true,
    body: JSON.stringify(body)
  };
  
  // The response body is a BSON.Binary object. Parse it and return.
  response = await context.http.post(arg);
  
  readableResponse = JSON.stringify(response);
  
  console.log(readableResponse);

  if (response.status == "201 Created") {
    return response; 
  } else {
    throw response;
  }

};