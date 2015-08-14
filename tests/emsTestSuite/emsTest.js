module.exports = {
  'Test for EMS-APPLICATION' : function (client) {
    client
      .url('http://localhost:5050/EmployeeApplicationSprint4-1.0-SNAPSHOTn/jsp/add.jsp')
      .waitForElementVisible('body', 1000)
      .assert.title('Employee Application')
      .assert.visible('input')
      .setValue('input[name=code]', '4445')
	  .setValue('input[name=name]', 'Navin')
	  .setValue('input[name=city]', 'chennai')
      .waitForElementVisible('button[id=SubmitEmployee]', 1000)
      .click('button[id=SubmitEmployee]')
      
  },
  'List of Employees' : function(client,browser){
	  client
	  .url('http://localhost:5050/EmployeeApplicationSprint4-1.0-SNAPSHOTn/list')
	  .waitForElementVisible('body', 1000)
	  .assert.title('Employee List')
	/*
	.getText(('body > div.smart-green > table > tbody >', function(result) {
		result.value.forEach(function(name){
			console.log(name)
		})
	})
  
	  .assert.visible('body > div.smart-green > table > tbody > tr:nth-child(41) > td:nth-child(1)' )
	  .assert.elementPresent('body > div.smart-green > table > tbody > tr:nth-child(41) > td:nth-child(1)')
	 .assert.value('body > div.smart-green > table > tbody > tr:nth-child(n) > td:nth-child(1)',5555)
	  var length =body > div.smart-green > table > tbody > tr:nth-child(n).length(); */
	
	.getText('body > div.smart-green > table > tbody > tr:nth-child(58) > td:nth-child(3)', function(result) {
    this.assert.equal(result.value, 'banglore')
	
	
})
	  
	  
	 // .assert.attributeEquals('body','table','Manoj1')
	  .end();
  }
}
//.pause(1000)
 //     .end();