import { useEffect, useState } from "react"
import BakedGood from "./BakedGood";
import { Col, Container, Row } from "react-bootstrap";

export default function BadgerBakery() {

    const [bakedGoods, setBakedGoods] = useState([]);
    const [fItem, setFItem] = useState(<p>Loading...</p>);

    useEffect(() => {
        fetch("https://cs571.org/api/f23/hw3/all-baked-goods", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBakedGoods(data);
        })
        fetch("https://cs571.org/api/f23/hw3/featured-baked-good", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => setFItem(<p className="feature">Today's featured item is {data.name} for ${data.price}!</p>))
    }, [])

    return <div style={{backgroundColor:"black", color:"snow"}}>
        <h1 style={{fontFamily:"Impact", fontSize:"80px", backgroundColor:"maroon"}}>Badger Bakery</h1>
        <p>Welcome to our small-town bakery located in Madison, WI!</p>
        <br></br>
        {fItem}
        <br></br>
        <Container>
            <Row className="justify-content-center">
            {
                bakedGoods.map(bakedGood => {
                    return <Col key={bakedGood.name} xs={12} md={6} lg={4} xl={3}>
                        <BakedGood
                            name={bakedGood.name}
                            description={bakedGood.description}
                            price={bakedGood.price}
                            featured={bakedGood.featured}
                        />
                    </Col>
                })
            }
            </Row>
        </Container>
        <br></br>
    </div>
}