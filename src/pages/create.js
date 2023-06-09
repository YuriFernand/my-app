import Head from "next/head";
import Link from "next/link";
import Footer from '@/companes/Footer';
import {useState} from "react"
import {addCampaign} from "../service/Web3sevice"

export default function Create (){


    const [campaign, setCampaign] = useState({});
    const [message, setMessage] = useState("");

    function onInputChange(evt){
        setCampaign(prevState =>({... prevState, [evt.target.id]: evt.target.value}));
    }

    function btnSaveClick(){
        alert(JSON.stringify(campaign));
    }

    return (
       <>
            <Head>
                <title>Donate Crypto | Criar campanha</title>
                <meta charSet= 'utf-8' />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Donate Cripto</h1>
                <p>Preencha os campos para incluir sua campanha na plataforma</p>
                <hr className="mb-4"/>
                <div className="col-6 mb-3">
                    <div className="form-floating mb-3">
                        <input type="text" id="title" className="form-control" value={campaign.title} onChange={onInputChange} />
                        <label for="title">Titulo:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea  id="description" className="form-control" value={campaign.description} onChange={onInputChange}/>
                        <label for="description">Descrição:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" id="imageUrl" className="form-control" value={campaign.imageURL} onChange={onInputChange}/>
                        <label for="imageUrl">URL da image:</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" id="vidioUrl" className="form-control" value={campaign.videoUrl}onChange={onInputChange}/>
                        <label for="videoUrl">URL do vidio :</label>
                    </div>
                    <div className="col-6 mb-3">
                        <input type="button" className="btn btn-primary col-12 p-3" value="Salvar campanha" onClick={btnSaveClick}></input>
                    </div>
                    <div className="col-6 mb-3">
                        <Link href="/" className="btn btn-secondary col-12 p-3">Volta</Link>
                    </div>
                </div>
                <Footer/>
            </div>               
       </>
    )
}