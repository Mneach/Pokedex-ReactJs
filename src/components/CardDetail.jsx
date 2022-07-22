import { usePokemonDetailContext } from "../lib/context/PokemonDetailContext"

export function PokemonCardDetail({ children }) {

    const pokemonDetailData = usePokemonDetailContext()
    const typeName = pokemonDetailData.PokemonDetailData.types[0].type.name

    console.log(typeName)
    const CardDetailBackground = () => {
        if(typeName === "grass"){
            return "radial-gradient(circle at 50% -10% , #88CC33 40% , #ffffff 40%)"
        }else if(typeName === "fire"){
            return "radial-gradient(circle at 50% -10% , #F1580E 40% , #ffffff 40%)"
        }else if(typeName === "poison"){
            return "radial-gradient(circle at 50% -10% , #4C5270 40% , #ffffff 40%)"
        }else if(typeName === "water"){
            return "radial-gradient(circle at 50% -10% , #41729F 40% , #ffffff 40%)"
        }else if(typeName === "bug"){
            return "radial-gradient(circle at 50% -10% , #81B622 40% , #ffffff 40%)"
        }else{
            return "radial-gradient(circle at 50% -10% , white 40% , #ffffff 40%)"
        }        
    }

    return (
        <div style={{
            width: "100%",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 3px 8px",
            background: CardDetailBackground(),
            padding: "10px 10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
        }}>
            {children}
        </div>
    )
}

export function PokemonType({ pokemonType, key }) {

    const backgroundColorType = () => {
        if(pokemonType === "grass"){
            return "#88CC33"
        }else if(pokemonType === "fire"){
            return "#F1580E"
        }else if(pokemonType === "poison"){
            return "#4C5270"
        }else if(pokemonType === "water"){
            return "#41729F"
        }else if(pokemonType === "bug"){
            return "#81B622"
        }else{
            return "white"
        }
    }

    return (
        <div style={{
            backgroundColor: backgroundColorType(),
            padding: "12px 7px",
            borderRadius: " 10px",
            color : "white"
        }} key={key}>
            {pokemonType}
        </div>
    )
}