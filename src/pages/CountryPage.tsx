import { useParams } from "react-router-dom"

export const CountryPage = () => {
  const { countryName } = useParams<{ countryName: string }>();

  return (
    <div>{countryName}</div>
  )
}