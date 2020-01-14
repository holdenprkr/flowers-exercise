import { useFlowers } from "./FlowerDataProvider.js";
import { Flower } from "./Flower.js";


const contentTarget = document.querySelector(".flowers")

const FlowerListComponent = () => {
  const flowers = useFlowers()

  const render = () => {
    contentTarget.innerHTML = `${flowers.map(flower => Flower(flower)).join("")}`
  }
  render()
}

export default FlowerListComponent
