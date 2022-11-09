import {Center, Container, Divider, Text, Title} from '@mantine/core';
import useSWR from 'swr'
import { useState, useEffect } from 'react'

export const apiKey = {
	weatherKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
};

export default function IndexPage() {
	const fetcher = (...args) => fetch(...args).then(res => res.json())
	const linkage = ['and', 'but'];


	// navigator.geolocation.getCurrentPosition(pos => {
	// 	console.log("Latitude is :", pos.coords.latitude);
	// 	console.log("Longitude is :", pos.coords.longitude);
	// 	let input = {latitude: pos.coords.latitude, longitude: pos.coords.longitude}
	// 	const { data, error } = useSWR(`${weather_api.base}lat=${input.latitude}&lon=${input.longitude}&units=imperial&appid=${apiKey.weatherKey}`)
	// });


	console.log('api-key',apiKey.weatherKey);
	// use the api key to fetch data from the weather api
	const {data, error} = useSWR(
		`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey.weatherKey}`,
		fetcher,
	);
	console.log(data);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<Container
			fluid
			sx={(theme) => ({
				backgroundColor: theme.colors.blue[5],
				height: '100vh',
				padding: '0',
			})}>
			<Container
				fluid
				sx={(theme) => ({
					backgroundColor: theme.colors.blue[3],
					height: '50vh',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',

				})}>
						<Title order={1} color="gray.2">Weather App</Title>
				</Container>
			
			<Container
				fluid
				sx={(theme) => ({
					backgroundColor: theme.colors.red[3],
					height: '50vh',
				})}></Container>
		</Container>
	);
}
