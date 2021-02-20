const links = [
	{
		label: "Week 01",
		url: "LocalStorage/week1.html"
	},
	{
		label: "Week 02 Notes",
		url: "ProgrammingBasics/week2.html"
	},
	{
		label: "Week 03 Notes",
		url: "ObjectDomEvents/week3.html"
	},
	{
		label: "Week 04 Notes",
		url: "FormsOopMj/week4.html"
	},
	{
		label: "Week 05 Notes",
		url: "TestDeb/week5.html"
	},
	{
		label: "Challenge one: To-Do",
		url: "todoProject/todo.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity/index-F.html"
	}
];

const ol = document.querySelector("ol");

for (const item of links) {
	const li = document.createElement("li");
	const a = document.createElement("a");
	a.setAttribute("href", item.url);
	a.textContent = item.label;
	li.appendChild(a);

	ol.appendChild(li);
}
