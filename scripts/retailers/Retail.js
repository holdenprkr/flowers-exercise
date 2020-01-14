export const Retail = (retail, dis, nurseArray, flowerArray) => {
  return `
  <div class="retailCard">
  <h3>Name: ${retail.name}</h3>
  <p>Location: ${retail.city}, ${retail.state}</p>
  <p>Distributor: ${dis.name}</p>
  <p>Nurseries ${dis.name} Purchases From:</p> 
    <ul class="nurseriesUl">
      ${nurseArray.map(obj => {
          return `<li>${obj.name}</li>`
        }).join("")
      }
    </ul>
  <p>Available Flowers:</p>
    <ul class="flowersUl">
      ${flowerArray.map(item => {
        return item.map(obj => {
          return `<li>${obj.commonName}</li>`
        }).join("")
      }).join("")}
    </ul>

  </div>`
}