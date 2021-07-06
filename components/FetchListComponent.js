import React, {useEffect} from "react";
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {COUNTRIES, GET_USERS_URL} from "../const";

const FetchListComponent = () => {

    const [users,setUsers] = React.useState({});
    const [msg,setMsg] = React.useState("");
    const [amount,setAmount] = React.useState(2)

    /*Henter mine users når componenten loader*/
    useEffect( () => {
        loadUsers();
    },[amount])

    const loadUsers = async () =>{
        try {
            let response = await fetch(GET_USERS_URL+amount);
            let json = await response.json();
            setUsers(json.results);
        } catch (error) {
            setMsg(error)
        }
    }

    return(
        users.length > 0 && (
            <View style={styles.container}>
                {/* Title med styling*/ }
                <Text style={{ fontSize: 20, textAlign:'center',paddingTop:40 }}>
                    3 Brugere i liste: {users.length} - Fetch Object list
                </Text>
                <TextInput
                    style={{borderWidth:1,borderColor:"black",width:"70%",padding:4}}
                    onChangeText={setAmount}
                    value={amount.toString()}
                    placeholder={`default antal: 1`}
                    keyboardType={"numeric"}
                />
                <ScrollView bounces={true} style={{height:250,width:"60%"}}>
                        {/* Map funktion, som looper igemmen arrayet ( personlig favorit )*/}
                        {
                            users.map((user,index)=>{
                                return(
                                    <View key={index}>
                                        <Text>Navn: {user.name.first} {user.name.last}</Text>
                                        <Image source={{uri:user.picture.medium}} style={{width:100,height:100}}/>
                                    </View>
                                )
                            })
                        }
                </ScrollView>
                <Text>{msg ? msg :""}</Text>
            </View>
        )
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



export default FetchListComponent;
