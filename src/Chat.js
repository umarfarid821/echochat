import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Image } from 'react-native';
import Task from '../components/task';

const Chat = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    const itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const deleteAll = () => {
    setTaskItems([]);
  };

  return (
    <View style={styles.container}>
      

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.removeAll} onPress={deleteAll}>
          <Text style={styles.removeAllText}>Remove All</Text>
        </TouchableOpacity>

        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.todoCard} onPress={() => completeTask(index)}>
              <Image source={require('../images/delete.jpg')} style={styles.deleteIcon} />
              <Task  style={styles.taskText}text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView style={styles.writeTaskWrapper} behavior="padding" enabled>
      <TextInput
      style={styles.inputBox}
      placeholder={'Enter your task'}
      value={task}
      onChangeText={(text) => setTask(text)}
      multiline={true} 
      numberOfLines={4} 
    />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Image source={require('../images/add.jpg')} style={styles.addIcon} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#00e4d0',
    paddingVertical: 15,
  },
  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  removeAllText: {
    fontSize: 17,
    fontWeight: '700',
    backgroundColor: 'red',
    color: 'white',
    width: 100,
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 15,
     
  },
  removeAll: {
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    margin: 10,
  },
  items: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#e3e3e3', // Background color for the individual task card
    borderRadius: 8, // Border radius for the task card
    padding: 12, // Padding for the task card
  },
  
  deleteIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  taskText: {
    fontSize: 16,
    color: '#333', // Text color for the task
    flex: 1, // Allow the text to take up remaining space
  },
  writeTaskWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputBox: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#00e4d0',
    marginRight: 20,
    fontSize: 16,
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#00e4d0',
    padding: 10,
    borderRadius: 5,
  },
  addIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

export default Chat;
