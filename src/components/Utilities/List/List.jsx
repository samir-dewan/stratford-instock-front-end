/** @format */

//IMPORT MODULES
import React, { useState, useEffect } from "react";
import axios from "axios";

//IMPORT COMPONENTS
import Container from "../Container/Container";
import ListHeader from "./ListHeader/ListHeader";
import ListCard from "./ListCard/ListCard";

const List = (title, itemType, apiUrl) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(apiUrl)
			.then((res) => setData(res.data))
			.catch(console.log("Trouble connecting with the server"));
	}, [apiUrl]);

	return (
		<>
			<Container>
				{/* Gives a title e.g. Warehouses and an item type e.g. warehouse */}
				<ListHeader title={title} itemType={itemType} />
				{/* Creates a card for every item */}
				{data.map((dataItem) => (
					<ListCard data={dataItem} />
				))}
			</Container>
		</>
	);
};

export default List;
