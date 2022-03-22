const PORT = "http://localhost:5000";

// Warehouse APIs
export const GET_WAREHOUSES_API_URL = PORT + "/warehouses";

// Inventory APIs
export const GET_INVENTORIES_API_URL = PORT + "/inventories";
export const GET_SINGLE_INVENTORY_API_URL = (id) => PORT + `/inventories/` + id;
