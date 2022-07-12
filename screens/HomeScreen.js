import React from 'react';
import { FlatList, Text, View } from 'react-native';
import itemList from '../items';

export default function HomeScreen() {
    function renderTodo(todoItem) {
        return (
            <View style={{ marginBottom: 15 }}>
                <Text>{todoItem.item.title}</Text>
                <Text>{todoItem.item.subtitle}</Text>
            </View>
        );
    }

    return <FlatList data={itemList.items} renderItem={renderTodo} />;
}