import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem } from "react-native";

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
    ])

    const render : ListRenderItem<TasksType> = ({item}) => {
        return <View>
            <Text>{item.title}</Text>
            <Text>{item.isDone? 'true' : 'false'}</Text>
        </View>
    }

    return (
        <View>
            <Text>App</Text>
            <FlatList
            data={tasks}
            renderItem={render}
            />
        </View>
    )
}