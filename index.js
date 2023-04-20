import express from "express";
const app = express();
const students = [
{
	id: 1,
	name:'tamem',
	city:'cairo',
},
{
	id: 2,
	name:'aya',
	city:'tanta',
},
{
	id: 3,
	name:'yara',
	city:'cairo',
},
{
	id: 4,
	name:'salma',
	city:'alex',
},
{
	id: 5,
	name:'ahmed',
	city:'alex',
}


];
const studentfunction = (req ,res) => {
	let output = '<ul>';

	for (let i =0 ;i<students.length;i++) {
	   const student = students[i];
	   output += "<li>" + student.name + "</li>";
	
	
	}




	output += '</ul'
	res.send(output);
};
app.listen(3000);


app.get('/students',studentfunction)