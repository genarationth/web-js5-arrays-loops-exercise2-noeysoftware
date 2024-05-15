//There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan.
//Create an array that has these three names in order.

const peoplewaiting = ['Sofia', 'David', 'Juan'];

//Two more people get added to the back of the line - Sara and Augustin.
//The first person in line is called to the teller.
//What does the queue look like?

peoplewaiting.splice(3, 0, 'Sara', 'Augustin');
peoplewaiting.shift();
console.log(peoplewaiting);

//It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line.
//What does the queue look like? 

peoplewaiting.splice(1, 0, 'Renata');
peoplewaiting.push('Elena');
console.log(peoplewaiting);