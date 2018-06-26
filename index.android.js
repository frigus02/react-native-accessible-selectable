// @flow
import React from "react";
import type { ComponentType } from "react";
import { findNodeHandle, UIManager } from "react-native";

type State = {
    accessibleComponentType: "radiobutton_checked" | "radiobutton_unchecked"
};

const makeSelectable = <Props: {}>(
    Component: ComponentType<Props>
): ComponentType<Props> =>
    class SelectableComponent extends React.PureComponent<Props, State> {
        static displayName = `makeSelectable(${Component.displayName ||
            Component.name})`;

        state = {
            accessibleComponentType: "radiobutton_unchecked"
        };

        static getDerivedStateFromProps(nextProps: Props, prevState: State) {
            if (
                nextProps.accessibleComponentType &&
                nextProps.accessibleComponentType !==
                    prevState.accessibleComponentType
            ) {
                return {
                    accessibleComponentType: nextProps.accessibleComponentType
                };
            }
        }

        onPress = () => {
            const newType =
                this.state.accessibleComponentType === "radiobutton_checked"
                    ? "radiobutton_unchecked"
                    : "radiobutton_checked";

            this.setState({
                accessibleComponentType: newType
            });

            if (newType === "radiobutton_checked") {
                UIManager.sendAccessibilityEvent(
                    findNodeHandle(this),
                    UIManager.AccessibilityEventTypes.typeViewClicked
                );
            }

            if (this.props.onPress) {
                // $FlowFixMe
                this.props.onPress();
            }
        };

        render() {
            return (
                <Component
                    {...this.props}
                    accessibleComponentType={this.state.accessibleComponentType}
                    onPress={this.onPress}
                />
            );
        }
    };
