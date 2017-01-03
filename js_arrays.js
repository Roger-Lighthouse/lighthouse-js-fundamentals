var mack=[];

mack.push('nut');
mack.push('jack');
mack.push('syrena');
mack.push('spike');


console.log(mack.join());
console.log('Length is '+mack.length);


var client1 = {
	valid: true,
	honorific: ["Mr", "Mrs", "Ms", "Dr"],
	property: ["house", "apt"]
};

console.log(client1.honorific[2]);

client1.sex='Female';
console.log(client1.sex);

console.log("valid" in client1);

delete client1.property;

console.log("property" in client1);

console.log(typeof client1);

var director='Steven Spielberg';
var films=['ET', 'Jaws', 'Ghost'];

films[2]='Moon';
films.pop();
films.push("Ghost");
console.log(films);



