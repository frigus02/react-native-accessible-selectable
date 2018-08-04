import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Checkbox</Text>
                <Checkbox delay={50}>
                    <Text>1</Text>
                </Checkbox>
                <Checkbox delay={75}>
                    <Text>2</Text>
                </Checkbox>
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
