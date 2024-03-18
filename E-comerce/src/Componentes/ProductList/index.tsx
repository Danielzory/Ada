import { FC, useState, useEffect, useRef } from 'react';
import useApi from './useApi'; 
import { Modal } from '../ProductDetails';
import { CardProps } from './types';
import './card.css'
import { Search } from '../Search';



const Card: FC = () => {
    const [data, setData] = useState<CardProps[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const refProducts = useRef(data)
    const [isModalOpenArray, setIsModalOpenArray] = useState<boolean[]>([]); // Array de estados para controlar o modal de cada card

    useEffect(() => {
        useApi()
            .then(apiData => {
                setData(apiData); 
                refProducts.current = data;
                setLoading(false); 
                // Inicializar o array de estados para controlar o modal de cada card
                setIsModalOpenArray(new Array(apiData.length).fill(false));
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
        
            });
    }, []); 

    // Manipulador de evento para abrir o modal de um card específico
    const handleModalOpen = (index: number) => {
        setIsModalOpenArray(prevState => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    // Manipulador de evento para fechar o modal de um card específico
    const handleModalClose = (index: number) => {
        setIsModalOpenArray(prevState => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    const filterProduct = (filterData: string) => {
        setData(()=>[... refProducts.current].filter((product)=>{
            return product.title.toLocaleUpperCase().includes(filterData.toLocaleUpperCase())
        }))

    }

    if (loading) {
        return <p className='loading'>Carregando...</p>;
    }

    return (
        <>
            <div className='search'><Search onInput={filterProduct} /></div>   
                <div className='cardContainer'> 
                {data.map((item, index) => (
              
                <div key={index} className='card'>
                    <img src={item.image} alt={item.title} className='cardImg'></img>
                    <div  className='infoCard'>
                        <h3>{item.title}</h3>
                        {isModalOpenArray[index] && (
                          <Modal description={item.description} onClose={() => handleModalClose(index)} />
                        )}
                        <button onClick={() => handleModalOpen(index)}>Ver descrição completa</button>
                        <div className='priceContainer'>
                          <h3 className='price'>Preço: ${item.price}</h3>
                        </div>
                    </div>     
                </div>
                ))}     
            </div>   
        </>
    );
}

export default Card;