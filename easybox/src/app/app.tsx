import React, { Component } from 'react'
import AppNavigator from './app.navigator'
import { createAppContainer } from 'react-navigation';

export default function initialize() {
    return createAppContainer(AppNavigator)
} 