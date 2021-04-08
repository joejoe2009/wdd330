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
		label: "Week 07 Notes",
		url: "FFAjax/week7.html"
	},
	{
		label: "Week 08 Notes",
		url: "TTCSDD/week8.html"
	},
	{
		label: "Week 09 Notes",
		url: "WOHA/week9.html"
	},
	{
		label: "Week 10 Notes",
		url: "ValUfetch/week10.html"
	},
	{
		label: "Challenge one: To-Do",
		url: "todoProject/todo.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity/wk03.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity1/wk02.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity2/wk04.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity3/wk05.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivty5/wk8.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity7/index.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity10/index.html"
	},
	{
		label: "Team Activity",
		url: "TeamActivity11/client/week11.html"
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
