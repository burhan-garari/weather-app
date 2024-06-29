import React from "react";
import { View, Text, Image } from "react-native";

function WeatherCard({imgPath, day}) {
    return (
        <View key={"day-1"}
        className="flex justify-center items-center w-24 h-36 rounded-3xl bg-blue-300 m-1">
            <Image source={imgPath} className="w-11 h-11"/>
            <Text className="text-white">{day}</Text>
        </View>
    )

}

export default WeatherCard;