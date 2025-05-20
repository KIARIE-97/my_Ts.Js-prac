interface Job {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
	roles?: string[]; // If you have a separate roles array
}

let selectedFilters: string[] = [];
let jobData: Job[] = [];

const fetchJobs = async (): Promise<void> => {
	const res = await fetch("./data.json");
	jobData = await res.json();
	renderData();
};

function filterData(filters: string[]): void {
	selectedFilters = filters;
	renderData();
}

function renderData(): void {
	const jobListingsContainer =
		document.querySelector<HTMLDivElement>(".cards_container");
	if (!jobListingsContainer) return;
	jobListingsContainer.innerHTML = "";

	const filteredData =
		selectedFilters.length === 0
			? jobData
			: jobData.filter(
					({ role, level, languages, tools }) =>
						selectedFilters.includes(role) ||
						selectedFilters.includes(level) ||
						languages.some((language) => selectedFilters.includes(language)) ||
						tools.some((tool) => selectedFilters.includes(tool))
			  );

	filteredData.forEach((job) => {
		const jobCard = document.createElement("div");
		jobCard.className = `cards ${job.featured ? "featured-card" : ""}`;
		if (job.featured) {
			jobCard.style.borderLeft = "5px solid lightskyblue";
		}

		const roles = job.roles || [];
		const languages = job.languages || [];
		const tools = job.tools || [];

		const jobCardHTML = `
        <div class="cards">
          <div class="card_info">
            <div class="images">
              <img src="${job.logo}" alt="">
            </div>
            <div class="company">
              <p>${job.company}</p>
            </div>
            <h2>${job.position}</h2>
            <div class="time">
              ${job.postedAt}
              <ul>
                <li>${job.contract}</li>
              </ul>
              <ul>
                <li>${job.location}</li>
              </ul>
            </div>
          </div>
          <div class="card_roles">
            ${roles
							.map((role) => `<button class="role">${role}</button>`)
							.join("")}
            <button class="level">${job.level}</button>
            ${languages
							.map(
								(language) => `<button class="language">${language}</button>`
							)
							.join("")}
            ${tools
							.map((tool) => `<button class="tool">${tool}</button>`)
							.join("")}
          </div>
        </div>
      `;

		jobCard.innerHTML = jobCardHTML;
		jobListingsContainer.appendChild(jobCard);
	});
}

fetchJobs();

//display the products from the database
// async function displayProducts() {
// 	const db = new DatabaseService();
// 	await db.initDatabase();
  
// 	const products = await db.getAllProducts();
// 	const dessertCardsContainer = document.querySelector('.dessert_cards') as HTMLDivElement;
  
// 	products.forEach(product => {
// 	  const card = document.createElement('div');
// 	  card.className = `dessert_card card-${product.id}`;
// 	  card.innerHTML = `
// 		<h2>${product.name}</h2>
// 		<p>${product.category}</p>
// 		<p>$${product.price.toFixed(2)}</p>
// 		<button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
// 	  `;
// 	  dessertCardsContainer.appendChild(card);
// 	});
//   }
