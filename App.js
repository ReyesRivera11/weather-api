import { View, Text, Alert, ActivityIndicator, FlatList, Image, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
// import { estilos } from './Estilos'

const App = () => {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110&q=huejutla&days=3&aqi=no&alerts=no&lang=es')
            .then(res => res.json())
            .then(obj => {
                setData(obj)
                setLoad(true)
            })
            .catch(err => Alert.alert('Error inesperado : ' + err))
    }, [])

    const UScreen = () => {
        return (
            <View>
                <ActivityIndicator size={'large'} color={'darkblue'} />
                <Text>Cargando datos</Text>
            </View>
        )
    }

    const LScreen = () => {
        return (
            <View style={styles.head}>
                <View>
                    <Text style={styles.location}>{data.location.name}</Text>
                    <Text style={styles.temp}>{data.current.temp_c}°</Text>
                </View>
                <View style={styles.textMinMax}>
                    <Text style={styles.textWhite}>
                        {data.current.condition.text}
                    </Text>
                    <Text style={styles.textWhite}>
                        {data.forecast.forecastday[0].day.maxtemp_c}°
                    </Text>
                    <Text style={styles.textWhite}>/</Text>
                    <Text style={styles.textWhite}>
                        {data.forecast.forecastday[0].day.mintemp_c}°
                    </Text>
                </View>
                <View style={styles.lastThreeDays}>
                    <FlatList
                        data={data.forecast.forecastday}
                        renderItem={({ item }) => <Card
                            condicion={item.day.condition.text}
                            date={item.date}
                            max={item.day.maxtemp_c}
                            min={item.day.mintemp_c}
                            iko={item.day.condition.icon} />}

                    />
                </View>
            </View>
        )
    }

    const Card = ({ condicion, max, min, iko, date }) => {
        return (
            <View style={styles.contentDay}>
                <Text style={styles.textWhite}>{date}</Text>

                <Text style={styles.textCondition} numberOfLines={1} ellipsizeMode="tail">{condicion}</Text>
                <Text style={styles.textWhite}>{max}°C</Text>
                <Image style={{ height: 30, width: 30 }} source={{ uri: 'https:' + iko }} />
                <Text style={styles.textWhite}>{min}°C</Text>
                
            </View>
        )
    }

    return (
        <ImageBackground
            source={require("./assets/gradient.png")}
            style={styles.container}>
            {load ? LScreen() : UScreen()}
        </ImageBackground>
    )
}

export default App