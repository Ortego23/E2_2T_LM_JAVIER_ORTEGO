
  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => {
        var characters = data.results;
        var characterList = '';

        characters.forEach(function(character) {
          characterList += `
            <div class="card character-card">
              <img src="${character.image}" class="card-img-top character-image" alt="${character.name}">
              <div class="card-body character-info">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text"><strong>Specie:</strong> ${character.species}</p>
                <p class="card-text"><strong>Status:</strong> ${character.status}</p>
                <p class="card-text"><strong>Location:</strong> ${character.location.name}</p>
                <p class="card-text"><strong>Origin:</strong> ${character.origin.name}</p>
              </div>
            </div>
          `;
        });

        document.getElementById('characters').innerHTML = characterList;
      })
      .catch(error => {
        console.error('Error al obtener datos de la API de Rick and Morty', error);
      });
  });