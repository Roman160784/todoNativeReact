import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ListRenderItem, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { WIDTH, PADDING, TEXT, CARD, CONTENT, RADIUS } from "./consts";


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

    const [value, setValue] = useState('')

    const addTask = () => {
        const newTask: TasksType = {id: tasks.length + 1, title: value, isDone: false }
        setTasks([newTask, ...tasks]),
        setValue('')
    }

    const removeTasks = (id: number) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    const changeCtatus = (id: number) => {
        setTasks(tasks.map((t) => t.id === id ? {...t, isDone: !t.isDone} : t))
    }

    const render : ListRenderItem<TasksType> = ({item}) => {
        return <View style = {styles.item}>
            <View style = {styles.box}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.remove} onPress={() => {removeTasks(item.id)}}>X</Text>
            </View>
            <Text style={item.isDone === true ? styles.checked : styles.check} onPress={() => {changeCtatus(item.id)}}>
                {item.isDone? 'completed' : 'in progress...'}
            </Text>
        </View>
    }

    // const keyExtactor = (item, index) => {item.id.toString()}

    return (
        <View>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} 
                placeholder={'write something'} 
                value={value} 
                onChangeText={setValue}/>
                <TouchableOpacity onPress={addTask}> 
                    <Text style={styles.button}>ADD</Text>
                </TouchableOpacity>
            </View>
            <FlatList
            data={tasks}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: WIDTH - (PADDING * 2) - 50, 
        height: 39,
        borderWidth: 2, 
        borderRadius: RADIUS,
        marginTop: 10,
    },
    button: {
        fontSize: 20,
        fontWeight: '500',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    remove: {
        color: 'orange',
        fontSize: 20,
    },

    item: {
        width: WIDTH - (PADDING * 2),
        marginTop: 10,
        borderColor: 'black',
        backgroundColor: CARD,
        paddingHorizontal: PADDING,
        paddingVertical: 5,
        borderRadius: RADIUS,
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
    },
    checked: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20, 
    }
    
})