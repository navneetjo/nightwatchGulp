module.exports = {
  'Demo test1' : function (client) {
    client
      .url('http://localhost:5050/EmployeeApplicationSprint4-1.0-SNAPSHOTn/list')
      .assert.urlEquals('http://localhost:5050/EmployeeApplicationSprint4-1.0-SNAPSHOTn/list')
	  .assert.elementPresent('table.data')
	  .assert.visible("body > div.smart-green > table > tbody > tr:nth-child(36) > td:nth-child(1)");
  
	  
  }
}