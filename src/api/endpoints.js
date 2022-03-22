const PORT = "http://localhost:5000";

// Warehouse APIs
export const GET_WAREHOUSES_API_URL = PORT + "/warehouses";
export const GET_SINGLE_WAREHOUSE_API_URL = (id) => `${PORT}/warehouse/${id}`;
export const GET_INVENTORY_BY_WAREHOUSE_API_URL = (id) => {
	console.log(id);
	return `${PORT}/inventories/warehouse/${id}`;
};

// Inventory APIs
export const GET_INVENTORIES_API_URL = PORT + "/inventories";
