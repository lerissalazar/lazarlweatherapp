import '../App.css';
import React, { useState } from 'react';
import { Container, Navbar, Card, Row, Col, Button } from 'react-bootstrap';
import WeatherIcon from '../images/weatherimg.png'
// import StarIcon from '../images/staricon.png'
import { WeatherApp } from '../Data/DataService';
import { ForecastApp } from '../Data/DataService';

export default function MainComponent() {
    //weather card
    const [inputWeather, setInputWeather] = useState("");
    const [grabCity, setGrabCity] = useState("");
    const [grabTemp, setGrabTemp] = useState("");
    const [grabFeelsLike, setGrabFeelsLike] = useState("");
    const [grabWind, setGrabWind] = useState("");
    const [grabHumidity, setGrabHumidity] = useState("");
    const [grabMax, setGrabMax] = useState("");
    const [grabMin, setGrabMin] = useState("");
    const [grabMon, setGrabMon] = useState("");
    const [grabTues, setGrabTues] = useState("");
    const [grabWed, setGrabWed] = useState("");
    const [grabThurs, setGrabThurs] = useState("");
    const [grabFri, setGrabFri] = useState("");
    const [grabSat, setGrabSat] = useState("");
    const [grabSund, setGrabSund] = useState("");

    //icons
    const [grabIcon, setGrabIcon] = useState("");

    //deafult texts
    // const [text, setText] = useState("City");

    const GetFetch = async () => {
        //Weather Card Info
        let weatherApiVar = await WeatherApp(inputWeather);
        let forecastApiVar = await ForecastApp(inputWeather);

        //Setting it to an object in weather
        setGrabCity(weatherApiVar.name);
        setGrabTemp(weatherApiVar.main.temp);
        setGrabFeelsLike(weatherApiVar.main.feels_like);
        setGrabWind(weatherApiVar.wind.speed);
        setGrabHumidity(weatherApiVar.main.humidity);
        setGrabMax(weatherApiVar.main.temp_max);
        setGrabMin(weatherApiVar.main.temp_min);

        //Setting it to an object in forecast
        setGrabMon(forecastApiVar.list[0].main.temp);
        setGrabTues(forecastApiVar.list[1].main.temp);
        setGrabWed(forecastApiVar.list[2].main.temp);
        setGrabThurs(forecastApiVar.list[3].main.temp);
        setGrabFri(forecastApiVar.list[4].main.temp);
        setGrabSat(forecastApiVar.list[5].main.temp);
        setGrabSund(forecastApiVar.list[6].main.temp);

        //Setting it to the icon object
        setGrabIcon(weatherApiVar.weather[200].icon)

        //Setting texts
        // setText();
    };

    //Date
    const dateBuild = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <>
            <div>
                <Navbar className="navbarBg">
                    <Container>
                        <Navbar.Brand className='weatherTitle'>
                            <img
                                alt=""
                                src={WeatherIcon}
                                width="110"
                                height="110"
                            />
                            Weather Forecast
                        </Navbar.Brand>
                    </Container>
                    <div className='searchDiv'>
                        <input className='searchBar' placeholder='SEARCH CITY OR ZIPCODE'
                            onChange={(e) => {
                                setInputWeather(e.target.value);
                                console.log(inputWeather);
                            }}
                        />
                    </div>
                    <Button className='btn' onClick={GetFetch}>🔍</Button>
                </Navbar>
            </div>
            <div className='cardDiv'>
                <Card className='weatherCard'>
                    <Card.Header className='locationCard'>{grabCity} | {dateBuild (new Date())}
                        {/* <a className='starIcon' href=" "><img src={StarIcon} alt=""></img></a> */}
                        {/* <Button className='starBtn'><img className='starIcon' src={StarIcon} alt=" " /></Button> */}
                    </Card.Header>
                    <Card.Body className='weatherBody'>
                        <Row>
                            <Col>
                                <Card.Text className='weatherTemp'>{grabTemp}</Card.Text>
                                <Card.Text className='weatherText'> Max Temp | {grabMax}</Card.Text>
                                <Card.Text className='weatherText'>Min Temp | {grabMin}</Card.Text>
                            </Col>
                            <Col>
                                <p>{grabIcon}</p>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className='forecastCard'>
                <Card className='forecastFont' style={{ width: '50rem' }}>
                    <Card.Body className='forecastBody'>
                        <Card.Text className="forecastTitle">Today's Forecast</Card.Text>
                        <div className='forecastDiv'>
                            <Row className='forecastRow'>
                                <Col>
                                    <h1 className='ForecastText'>Feels Like</h1>
                                    <h2 className='tempText'>{grabFeelsLike}</h2>
                                </Col>
                                <Col className='middleCol'>
                                    <h1 className='middleText'>Wind Speed</h1>
                                    <h2 className='tempText'>{grabWind}</h2>
                                </Col>
                                <Col>
                                    <h1 className='ForecastText'>Humidity</h1>
                                    <h2 className='tempText'>{grabHumidity}%</h2>
                                </Col>
                            </Row>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='fiveDayDiv'>
                <Card className='fiveDayCardMain'>
                    <Card.Body className='fiveDayCard'>
                        <Card.Text className='fiveDayTitleTxt'>Five Day Forecast</Card.Text>
                        <Row className='fiveDayRow'>
                            <Col>
                                <Card.Text className='fiveDayTempTitle'>Sunday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabSund}</Card.Text>
                            </Col>
                            <Col className='lineCol'>
                                <Card.Text className='fiveDayTempTitle'>Monday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabMon}</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className='fiveDayTempTitle'>Tuesday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabTues}</Card.Text>
                            </Col>
                            <Col className='lineCol'>
                                <Card.Text className='fiveDayTempTitle'>Wednesday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabWed}</Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className='fiveDayTempTitle'>Thursday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabThurs}</Card.Text>
                            </Col>
                            <Col className='lineCol'>
                                <Card.Text className='fiveDayTempTitle'>Friday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabFri}</Card.Text>
                            </Col>
                            <Col className='satLineCol'>
                                <Card.Text className='fiveDayTempTitleSat'>Saturday</Card.Text>
                                <Card.Text className='fiveDayTemp'>{grabSat}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className='bottomNavDiv'>
                    <Container>
                        <Navbar.Brand className='weatherTitleBottom'>
                            <img
                                alt=""
                                src={WeatherIcon}
                                width="110"
                                height="110"
                            />
                        </Navbar.Brand>
                    </Container>
            </div>
        </>
    )
}
