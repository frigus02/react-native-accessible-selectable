import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default class Checkbox extends React.Component {
    state = {
        checked: false
    };

    onPress = () => {
        setTimeout(() => {
            this.setState({ checked: !this.state.checked });
        }, this.props.delay || 75);
    };

    render() {
        const { checked } = this.state;
        return (
            <TouchableOpacity
                accessibilityTraits={
                    checked ? ["button", "selected"] : ["button"]
                }
                onPress={this.onPress}
                style={{ width: "50%", margin: 4 }}
            >
                <Text>Checkbox</Text>
                {this.props.children}
                <Text accessibilityLabel="">
                    ({checked ? "checked" : "not checked"})
                </Text>
            </TouchableOpacity>
        );
    }
}
