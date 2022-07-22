export function PokemonListCard({children}){
    return (
        <div style={{
            display : "flex",
            justifyContent : "center",
            flexDirection : "column",
            // background : "radial-gradient(circle at 50% 35% , #f6fef4 40% ,  rgb(178, 232, 91) 40%)",
            border: "1px solid black",
            boxShadow : "rgba(0, 0, 0, 0.4) 0px 3px 8px",
            borderRadius : "15px",
            width:"130px" ,
            height:"200px" ,
        }}> {children} </div>
    )
}

export function PokemonImage({src}){
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
        }}>
            <img src={src} style={{width : "100px"}} alt="" />
        </div>
    )
}

export function PokemonId({children}){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>#{children}</div>
    )
}

export function PokemonName ({children}){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
        }}>
            {children}
        </div>
    )
}