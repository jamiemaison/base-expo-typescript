import * as React from 'react';
import { View } from 'react-native';
import { Component } from './component';

interface ContainerProps {}

interface ContainerState {}

export default class Container extends React.Component<ContainerProps, ContainerState> {
    public render() {
        return (
          <View style={{ marginTop: 50 }}>
            <Component />
          </View>
        );
    }

    public componentWillMount() {
        console.log('componentWillMount'); // tslint:disable-line no-console
    }

    public componentWillUnmount() {
        console.log('componentWillUnmount'); // tslint:disable-line no-console
    }

    public componentDidMount() {
        console.log('componentDidMount'); // tslint:disable-line no-console
    }
}
