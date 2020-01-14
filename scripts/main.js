import FlowerListComponent from "./flowers/FlowerListComponent.js";
import { getFlowers } from "./flowers/FlowerDataProvider.js";
import { getRetailers } from "./retailers/RetailDataProvider.js";
import RetailListComponent from "./retailers/RetailListComponent.js";
import { getDistributors } from "./distributors/DistributorDataProvider.js";
import { getFlowerNurseries, getDistNurs, getNurseries, getColors } from "./nurseries/NurseryDataProvider.js";

getFlowers()
.then(getRetailers)
.then(getDistributors)
.then(getNurseries)
.then(getFlowerNurseries)
.then(getDistNurs)
.then(getColors)
.then(FlowerListComponent)
.then(RetailListComponent)