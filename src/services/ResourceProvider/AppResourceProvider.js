import ResourceProviderService from "./ResourceProvider"
import lightsaberHandle from "../../media/img/LightsaberHandle.png"

const resources = {
  lightsaberHandle,
}

export default class AppResourceProvider extends ResourceProviderService {
  get(resourceName) {
    return resources[resourceName]
  }
}
