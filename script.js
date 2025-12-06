const data = [
  { name: "Laptop", category: "Electronics", type: "Device" },
  { name: "Shampoo", category: "Cosmetics", type: "Daily Use" },
  { name: "Keyboard", category: "Electronics", type: "Accessory" },
  { name: "Rice", category: "Grocery", type: "Food" },
  { name: "Milk", category: "Grocery", type: "Food" },
  { name: "Perfume", category: "Cosmetics", type: "Luxury" },
];

const tableBody = document.getElementById("tableBody");
const nameFilter = document.getElementById("nameFilter");
const categoryFilter = document.getElementById("categoryFilter");

// Render full table initially
renderTable(data);

function renderTable(records) {
  tableBody.innerHTML = "";
  records.forEach(item => {
    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.type}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

function applyFilters() {
  const nameVal = nameFilter.value.toLowerCase();
  const categoryVal = categoryFilter.value.toLowerCase();

  const filtered = data.filter(item => {
    return (
      item.name.toLowerCase().includes(nameVal) &&
      item.category.toLowerCase().includes(categoryVal)
    );
  });

  renderTable(filtered);
}

nameFilter.addEventListener("input", applyFilters);
categoryFilter.addEventListener("input", applyFilters);
