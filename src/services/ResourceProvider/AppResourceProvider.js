import ResourceProviderService from "./ResourceProvider"
import lightsaberHandle from "static/assets/ui/LightsaberHandle.png"

const resources = {
  lightsaberHandle,
}

export default class AppResourceProvider extends ResourceProviderService {
  get(resourceName) {
    return resources[resourceName]
  }
}
