import { Retail } from "./Retail.js";
import { useRetailers } from "./RetailDataProvider.js";
import { useDistributors } from "../distributors/DistributorDataProvider.js";
import { useFlowerNurseries, useNurseries, useDistNurs, useColors } from "../nurseries/NurseryDataProvider.js";
import FlowerListComponent from "../flowers/FlowerListComponent.js";
import { useFlowers } from "../flowers/FlowerDataProvider.js";

const contentTarget = document.querySelector(".retailers")

const RetailListComponent = () => {
  const retailers = useRetailers()
  const distributors = useDistributors()
  const nurseries = useNurseries()
  const flowers = useFlowers()
  const distNurs = useDistNurs()
  const flowNurs = useFlowerNurseries()
  const colors = useColors()
  
  const render = () => {
    contentTarget.innerHTML = retailers.map(retail => {
      const distributor = distributors.find(dist => dist.id === retail.distributorId)
      
      const relatedNDist = distNurs.filter(nd => nd.distributorId === distributor.id)
      
      const nurseDistArray = relatedNDist.map(obj => {
        const foundNurse = nurseries.find(nurse => nurse.id === obj.nurserieId)
        return foundNurse
      })

      const nurseFlowerArray = nurseDistArray.map(nfa => {
        const relationNF = flowNurs.filter(nf => nf.nurserieId === nfa.id)

        const foundFlower = relationNF.map(ff => {
          let flowerFind = flowers.find(flow => flow.id === ff.flowerId)
          return flowerFind
        })
        return foundFlower
       })

    const foundColor = nurseFlowerArray.map(flowObj => {
      const color = flowObj.map(flowerObj => {
        const flowerColor = colors.find(colo => flowerObj.colorId === colo.id)
        return flowerColor
      })
      return color
    })
      return Retail(retail, distributor, nurseDistArray, nurseFlowerArray)
    }).join("")
    }
  render()
}

export default RetailListComponent