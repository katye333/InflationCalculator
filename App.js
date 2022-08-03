/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import Crashes from 'appcenter-crashes';
 import {
   Button,
   StyleSheet,
   View
 } from 'react-native';
  
 export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.checkPreviousSession();
    }

    // check if app crashed in previous session
    async checkPreviousSession() {
        const didCrash = await Crashes.hasCrashedInLastSession();
        if (didCrash) {
            const report = await Crashes.lastSessionCrashReport();
            alert("Sorry about that crash, we're working on a solution");
        }
    }
  
    render() {
        return (
            <View style={styles.container}>
                <Button title="Crash"
                    onPress={() => Crashes.generateTestCrash()} />
            </View>
        );
    }
 };
 
 const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 16
    },
 });
 