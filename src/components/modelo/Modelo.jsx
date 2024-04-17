import './modelo.css'

export default props=>{
    const estilo={
        backgroundColor: props.cor || '#f00',
    }


    return(
        <div className="cartao">
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        
        </div>
    )
}