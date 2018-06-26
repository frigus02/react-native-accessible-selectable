// @flow
import React from "react";
import type { ComponentType } from "react";
import { findNodeHandle, NativeModules } from "react-native";

const { RNAccessibleSelectable } = NativeModules;

const makeSelectable = <Props: {}>(
    Component: ComponentType<Props>
): ComponentType<Props> =>
    class SelectableComponent extends React.PureComponent<Props> {
        static displayName = `makeSelectable(${Component.displayName ||
            Component.name})`;

        componentDidMount() {
            RNAccessibleSelectable.makeSelectable(
                findNodeHandle(this.componentRef.current)
            );
        }

        // $FlowFixMe
        componentRef = React.createRef();

        render() {
            return <Component {...this.props} ref={this.componentRef} />;
        }
    };

export default makeSelectable;
