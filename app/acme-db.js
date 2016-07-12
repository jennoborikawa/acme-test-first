
function AcmeDb (){
	this.employees = []; 
}

AcmeDb.prototype.getEmployees = function (){
	return this.employees; 
};

AcmeDb.prototype.addEmployee = function (name, id){
	var emp = new Employee (name, id); 
	this.employees.unshift(emp); 

};

AcmeDb.prototype.getEmployee = function (id){
	for(var i=0; i<this.employees.length; i++){
		for(var key in this.employees[i]){
			if (this.employees[i][key] === id){
				return this.employees[i].name;  
			}
		}
	}

};

AcmeDb.prototype.deleteEmployee = function (name){
	for(var i=0; i<this.employees.length; i++){
		for(var key in this.employees[i]){
			if (this.employees[i][key] === name){
				this.employees.splice(i,1);
				console.log(this.employees); 
			}
		}
	}

};

//Employee obj 
function Employee (name, id){
	this.name = name; 
	this.id = id; 
}

var acmeDb = new AcmeDb(); 


acmeDb.addEmployee("moe", 5); 
acmeDb.addEmployee('larry', 6);


console.log (acmeDb.employees);
acmeDb.deleteEmployee("moe"); 





