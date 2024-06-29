import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon} from "react-native-heroicons/outline";

function WeatherCard({imgPath, day}) {
    return (
        <View key={"day-1"}
        className="flex justify-center items-center w-24 h-36 rounded-xl bg-blue-300 m-1">
            <Image source={imgPath} className="w-11 h-11"/>
            <Text className="text-white">{day}</Text>
        </View>
    )
}

function HomeScreen() {
    const [showSearch, setShowSearch] = useState(false);
    const [locations, setLocations] = useState([1,2,3]);

    return (
        <View className="flex-1 relative h-full w-full bg-blue-400 pb-4">
            <StatusBar style="light" />
            <SafeAreaProvider>
                <SafeAreaView className="flex flex-1">
                    <View className="mx-4 relative z-50" style={{height: '7%'}}>
                        <View className="rounded-md my-5 flex-row justify-end p-1">
                            {
                                !showSearch ? <></> :
                                <TextInput 
                                    placeholder="Search City" 
                                    placeholderTextColor={'gray'}
                                    className="pl-6 h-10 flex-1 text-base bg-slate-100 rounded-md"
                                />
                            }
                            <TouchableOpacity
                                onPress={() => setShowSearch(!showSearch)}
                                className="rounded-full p-0 m-1 text-black"
                            >
                               <MagnifyingGlassIcon size="25" color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        locations?.length > 0 && showSearch ? 
                        (
                            <View className="absolute w-full bg-slate-100 top-28 rounded-3xl z-2">

                                {
                                    locations.map((loc, index) => {
                                        return (
                                            <TouchableOpacity key={index}
                                                className={`flex-row items-center border-0 p-2 ${index === locations.length-1 ? '': 'border-b-2 border-b-black rounded-xl mx-1'}`}
                                            >
                                                <MapPinIcon size={"20"} color={"gray"} />
                                                <Text className={"ml-1"}>Place-{loc}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }

                            </View>
                        )
                        : <></>
                    }
                    <View className="mx-4 flex-col items-center justify-center flex-1 mb-0" style={{zIndex:-1}}>
                        <Text className="text-white text-center text-2xl font-bold">
                            Hyderabad,
                        </Text>
                        <Text className=" ml-1 text-xl font-semibold text-gray-300">
                            Telangana
                        </Text>

                    </View>
                    <View className="flex-row justify-center" style={{zIndex: -1}}>
                        <Image 
                            source={require('../assets/images/partlycloudy.png')}
                            className="w-52 h-52"
                        />
                    </View>
                    <View className="space-y-2">
                        <Text className="text-center font-bold text-xl">
                            23 Degrees
                        </Text>
                        <Text className="text-center font-bold text-white text-2xl ml-5">
                            Partly Cloudy
                        </Text>
                    </View>
                    <View className="flex-row justify-between mx-4 my-2">
                        <View className="flex-row space-x-2 items-center">
                            <Image 
                                source={require('../assets/icons/wind.png')}
                                className="w-6 h-6"
                            />
                            <Text className="text-white font-semibold text-base">
                                22km
                            </Text>
                        </View>
                        <View className="flex-row space-x-2 items-center">
                            <Image 
                                source={require('../assets/icons/drop.png')}
                                className="w-6 h-6"
                            />
                            <Text className="text-white font-semibold text-base">
                                25%
                            </Text>
                        </View>
                        <View className="flex-row space-x-2 items-center">
                            <Image 
                                source={require('../assets/icons/sun.png')}
                                className="w-6 h-6"
                            />
                            <Text className="text-white font-semibold text-base">
                                45%
                            </Text>
                        </View>
                    </View>
                    <View className="mb-2 space-y-3">
                        <View className="flex-row justify-start items-center ml-2">
                            <CalendarDaysIcon size={"22"} color="white" />
                            <Text className="text-white text-base"> Daily Forcast </Text>
                        </View>
                    </View>
                    <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false}>
                        <WeatherCard
                            imgPath={require('../assets/images/fullStar.png')}
                            day={"Monday"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/sun.png')}
                            day={"Tuesday"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/moderaterain.png')}
                            day={"Wed"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/partlycloudy.png')}
                            day={"Thursday"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/sun.png')}
                            day={"Friday"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/mist.png')}
                            day={"Saturday"}
                        />
                        <WeatherCard
                            imgPath={require('../assets/images/heavyrain.png')}
                            day={"Sunday"}
                        />
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )

}

export default HomeScreen;