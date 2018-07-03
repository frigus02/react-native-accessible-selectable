import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default class CheckBox extends React.Component {
    state = {
        checked: false
    };

    onPress = () => {
        this.setState({ checked: !this.state.checked });
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
                <Text>CheckBox</Text>
                {this.props.children}
                <Text accessibilityLabel="">
                    ({checked ? "checked" : "not checked"})
                </Text>
            </TouchableOpacity>
        );
    }
}
