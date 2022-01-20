import { NETWORKS } from "./features/constant";

const network = NETWORKS.find(n => window.location.hash.startsWith('#' + n.hash));

if (!network) {
  window.location.hash = NETWORKS[0].hash;
  window.location.reload();
} else {
  window.REACT_APP_NETWORK_ID = network.id;
}

export default network;
