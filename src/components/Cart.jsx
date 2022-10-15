import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cart() {

  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const getProduct = async () =>{
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);
    }
    getProduct();
  },[]);

  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    </div>
  )
}
