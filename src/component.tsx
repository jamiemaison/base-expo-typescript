import * as React from 'react';
import { Text } from 'react-native';

interface ComponentProps {}

interface ComponentState {}

export class Component extends React.Component<ComponentProps, ComponentState> {
    public render() {
        return (
            <Text>Hello world!</Text>
        );
    }
}
