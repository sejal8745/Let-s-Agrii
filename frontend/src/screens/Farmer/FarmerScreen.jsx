import React from "react";
import { Container, Row, CardDeck, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Meta from "../../components/Helmet/Meta";
import "./FarmerStyle.css";

const FarmerScreen = () => {
  return (
    <div>
      <Meta title="Let's Agrii | Farmers" />
      <Container className="farmerContainer">
        <h1 className="title">FARMER</h1>
        <h4 className="farmer-title">
          If you are a farmer then you are at perfect platfrom from where you
          can order all of your farming related products and you can sell your
          production also.
        </h4>
        <Row className="row-one justify">
          <CardDeck>
            <Card style={{ width: "25rem", border: "#91C788 2px solid" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                  Purchase Seeds, Pesticides & Fertilizer
                </Card.Title>
                <LinkContainer to="/farmers/purchaseSeeds">
                  <Button
                    style={{ backgroundColor: "#91C788", border: "none" }}
                    className="btn-explore btn-md m-2"
                  >
                    EXPLORE MORE
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "#91C788 2px solid" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                  Sell Your Producing Material through Us
                </Card.Title>
                <LinkContainer to="/login?redirect=supplier">
                  <Button
                    style={{ backgroundColor: "#91C788", border: "none" }}
                    className="btn-explore btn-md m-2"
                  >
                    EXPLORE MORE
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "#91C788 2px solid" }}>
              <Card.Body>
                <Card.Title className="card-titile">
                  Lend All of Heavy Machine And Tractros
                </Card.Title>
                <LinkContainer to="/farmers/lendMachines">
                  <Button
                    style={{ backgroundColor: "#91C788", border: "none" }}
                    className="btn-explore btn-md m-2"
                  >
                    EXPLORE MORE
                  </Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default FarmerScreen;
