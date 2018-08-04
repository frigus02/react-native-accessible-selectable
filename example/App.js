import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "./CheckBox";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CheckBox</Text>
                <CheckBox delay={50}>
                    <Text>1</Text>
                </CheckBox>
                <CheckBox delay={75}>
                    <Text>2</Text>
                </CheckBox>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});
