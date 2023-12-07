import { useEffect, useState } from 'react';
import { fetchCars } from 'components/Api';
import { CatalogContainer, SettingsContainer, LoadMore, Container } from './Catalog.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from 'storage/Slice';
import { LuHeart } from "react-icons/lu";

export const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [visibleCars, setVisibleCars] = useState(12);
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const listFavoriteCar = useSelector(state => state.favorite);
    const dispatch = useDispatch();
    // const [isClicked, setIsClicked] = useState(false);

    const models = [
        "Buick",
        "Volvo",
        "HUMMER",
        "Subaru",
        "Mitsubishi",
        "Nissan",
        "Lincoln",
        "GMC",
        "Hyundai",
        "MINI",
        "Bentley",
        "Mercedes-Benz",
        "Aston Martin",
        "Pontiac",
        "Lamborghini",
        "Audi",
        "BMW",
        "Chevrolet",
        "Mercedes-Benz",
        "Chrysler",
        "Kia",
        "Land"
    ];

   const priceArr = [30, 40, 50, 60, 70, 80];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const carsData = await fetchCars();
                setCars(carsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleModelChange = (event) => {
        setSelectedModel(event.target.value);
    };

    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };

    const handleLoadMore = () => {
        setVisibleCars((prevVisibleCars) => prevVisibleCars + 12);
    };

    const handleFavoriteClick = (car) => {
     dispatch(addToFavorites(car));
  };



    return (
        <Container>
            <SettingsContainer>
            <p>Car brand</p>
            <p>Price/1 hour</p>
                <p>Car mileage/km</p>
                </SettingsContainer>
            <SettingsContainer>
                
                <label htmlFor="carModel"></label>
                <select id="carModel" value={selectedModel} onChange={handleModelChange}>
                    <option value="">Enter the text</option>
                    {models.map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                    ))}
                </select>
                
                
                 <label htmlFor="price"></label>
                <select id="price" value={selectedPrice} onChange={handlePriceChange}>
                    <option value="">To</option>
                    {priceArr.map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                    ))}
                </select>
            
            <label htmlFor="">
                <input type="text" placeholder='from' />
            </label>
             <label htmlFor="">
                <input type="text" placeholder='to' />
                </label>

                <button>Search</button>
                </SettingsContainer>

            <CatalogContainer>
                 {cars.slice(0, visibleCars).map((car) => (
                     <div className="car-info" key={car.id}>
                         
                         {car.img ? (
                             <div className="car-img" style={{ position: 'relative', display: 'inline-block' }}>
                                 <LuHeart style={{ position:'absolute', top: 8, right: 6}}  onClick={() => handleFavoriteClick(car)} />
                                  <img src={car.img} alt={car.make} 
                                        />
                             </div> 
                        ) : (
                            <div>Sorry we don't have this picture</div>
                         )}
                         
                      
                        <p>{car.make}</p>
                        <p>{car.year}</p>
                        <p>{car.rentalPrice}</p>
                        <p>{car.model}</p>
                        <p>{car.address}</p>
                        <p>{car.rentalCompany}</p>
                         <button>Learn More</button>
                       
                     </div>
                     
                ))}
            </CatalogContainer>
            {visibleCars < cars.length && (
               
                 <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
                
            )}
        </Container>
    )
};