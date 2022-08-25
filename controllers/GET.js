const API = 'http://localhost:3000/api/products';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const productos = await fetchData(API);
    let view = `
    ${productos.items.map(productos => `

      <div class="productos">
			<ul class="list-group">
				<li class="list-group-item">${productos.snippet.codigo}</li>
				<li class="list-group-item">${productos.snippet.producto}</li>
				<li class="list-group-item">${productos.snippet.precio}</li>
			</ul>
		</div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch {
    console.log(error);
  }
})();