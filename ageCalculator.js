function ageCalculator(name, yearOfBirth, currentYear){
	var age=currentYear - yearOfBirth;
	return name + " is " + age + " years old.";
}

console.log(ageCalculator("Roger", 1968, 2017));