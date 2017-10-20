var http = require('http');
var url = require('url');
var data ="true";
var srv = http.createServer(function (req, res) {
  
  if (req.method.toUpperCase() == 'GET') {
	var query = url.parse(req.url, true).query;
	 console.log(query.username);
	if(query.username=="tangyan")
	{
		data ="false";
	}
	else
	{
 		data ="true";
	}
  	
  }


  res.writeHead(200, {'Content-Type': 'application/json', 
		'Access-Control-Allow-Origin':'*',
        	'Access-Control-Allow-Credentials':'true',
    		'Access-Control-Allow-Methods':'OPTION, POST, GET',
    		'Access-Control-Allow-Headers':'X-Requested-With, Content-Type'}
  );

  res.end(data);
  //res.end(JSON.stringify(data));
});
srv.listen(8080, function() {
  console.log('listening on localhost:8080');
});