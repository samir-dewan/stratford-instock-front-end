/** @format */

//IMPORT MODULES
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.scss";

//IMPORT COMPONENTS
import ListHeader from "./ListHeader/ListHeader";
import ListCard from "./ListCard/ListCard";
import ListWarehouseColumns from "./ListWarehouseColumns/ListWarehouseColumns";

const List = ({ title, itemType, apiUrl, url }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err, "Trouble connecting with the server"));
	}, [apiUrl]);

	return (
		<div className="container">
			{/* Gives a title e.g. Warehouses and an item type e.g. warehouse */}
			<ListHeader title={title} itemType={itemType} />
			{/* Conditional import of Column Names */}
			<ListWarehouseColumns />
			{/* Creates a card for every item */}
			{data.map((dataItem, cardIndex) => (
				<ListCard
					key={data.id}
					cardIndex={cardIndex}
					cardType={title}
					data={dataItem}
					url={url}
				/>
			))}
		</div>
	);
};

export default List;
