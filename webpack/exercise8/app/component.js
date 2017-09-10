export default (text = "123w123wwddd!!!", class1, class2) =>{
	const element = document.createElement('div');
	element.innerHTML = text;
	element.className = class1;

	setTimeout(() => {
		console.log(123)
	}, 1000);

	const p = document.createElement('p');
	p.innerText = 'p line';
	p.className = class2;
	element.append(p);

	return element;
}