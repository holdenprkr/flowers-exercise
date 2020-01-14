export const Flower = (flower) => {
  return `
  <section class="flower">
  <h3>Flower Name: ${flower.commonName}</h3>
  <p>Color: ${flower.color}</p>
  </section>`
}