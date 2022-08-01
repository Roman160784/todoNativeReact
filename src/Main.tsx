import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem, Dimensions } from "react-native";
import { WIDTH, PADDING, TEXT, BODY, CARD, CONTENT } from "./consts";


type TasksType = {
    id: number
    title: string
    isDone: boolean
}


export const Main = () => {

    const [tasks, setTasks] = useState<TasksType[]>([
        { id: 1, title: 'HTML', isDone: true },
        { id: 2, title: 'CSS', isDone: true },
        { id: 3, title: 'React', isDone: true },
        { id: 4, title: 'React Native', isDone: false },
    ])

    const render : ListRenderItem<TasksType> = ({item}) => {
        return <View style = {styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.check}>{item.isDone? 'true' : 'false'}</Text>
        </View>
    }

    // const keyExtactor = (item, index) => {item.id.toString()}

    return (
        <View>
            <FlatList
            data={tasks}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        width: WIDTH - (PADDING * 2),
        marginTop: 10,
        borderColor: 'black',
        backgroundColor: CARD,
        paddingHorizontal: PADDING,
        paddingVertical: 5,
        borderRadius: PADDING / 4,
    },
    title: {
        color: TEXT,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
    },
    check: {
        color: CONTENT,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
    }
})