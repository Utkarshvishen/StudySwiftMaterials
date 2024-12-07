function openMaterials(className) {
  const materialsSection = document.getElementById('materials');
  materialsSection.innerHTML = `<h2>${className} Study Materials</h2>
                                <p>Find all resources and materials for ${className} here.</p>`;
}

function searchMaterials() {
  const query = document.getElementById('search').value.toLowerCase();
  const items = document.querySelectorAll('#materials-list li');

  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}
