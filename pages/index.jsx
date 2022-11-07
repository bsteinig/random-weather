import { Container, Divider, Text, Title } from "@mantine/core";


export const apiKey = {
  weatherKey: process.env.NEXT_PUBLIC_WEATHER_API_KEY
}

export default function IndexPage() {

  const linkage = ['and', 'but' ]

  // use the api key to fetch data from the weather api
  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey.weatherKey}`,
    fetcher
  )
  console.log(data)


  return (
    <Container fluid sx={(theme) => ({ backgroundColor: theme.colors.blue[4], height: "100vh", padding: '0' })}>
      <Container fluid sx={(theme) => ({ backgroundColor: theme.colors.cyan[4], height: "50vh" })}>
      </Container>
      <Divider mt={0} label={<Title order={3} m={0}>{linkage[0]}</Title>} labelPosition="center" sx={(theme) => ({ position: "absolute", top: "calc(50% - 20.6px / 2)", left: 0, width: "100vw" })} />
      <Container fluid sx={(theme) => ({ backgroundColor: theme.colors.violet[4], height: "50vh" })}>

      </Container>
    </Container>
  );
}
