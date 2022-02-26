import { StyleSheet, Text, View, StatusBar, Button, Alert, Modal, TextInput, ScrollView, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import TodoItem from './component/TodoItem';
import { useEffect, useState } from 'react';

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export default function Todo() {

  const [task, setTask] = useState(null);
  const [taskItems, setTaskItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  //Adding the Task 
  const handleAddTask = () => {
    if (!task) {
      Alert.alert('Enter the task first.')
    }
    else {
      setModalVisible(false)
      setTaskItems([...taskItems, task])
      setTask(null);
    }
  }

  //Deleting the Task
  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style={['auto', styles.barStyle]} animated={true} />
      <View>
        <Text style={styles.Header}>Simple Todo</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <View style={styles.items}>
            {
              taskItems.length !== 0 ?
                taskItems.map((item, index) => {
                  return (
                    <TodoItem text={item} key={index} deleteTask={deleteTask} />
                  )
                }) : (<View style={styles.noTaskStyle}><Text style={{ color: 'black', fontSize: 18 }}>No Tasks Available...</Text></View>)
            }
          </View>
        </View>
      </ScrollView>

      {/* Modal for Input the Todo  */}
      <Modal
        animationType="slide"
        visible={modalVisible}
        style={{ height: '50%' }}

        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ padding: 16, height: '50%' }}>
          <Text style={{ fontSize: 24, marginVertical: 10 }}>New Todo Item</Text>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(text) => setTask(text)} />
          <Text style={styles.addButton} onPress={handleAddTask} >Add Task</Text>
        </View>
      </Modal>
      {/* Button to add a Task */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  noTaskStyle: {
    flex: 1, justifyContent: 'center', alignSelf: 'center',
    marginTop: 250,
    backgroundColor: 'white'
  },
  addButton: {
    backgroundColor: '#00B4D8',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 16

  },
  Header: {
    width: '100%',
    height: 50,
    paddingLeft: 12,
    fontSize: 20,
    textAlignVertical: 'center',
    elevation: 10,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  items: {
    marginTop: 10,
  },
  barStyle: {
    height: STATUSBAR_HEIGHT,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  container: {
    marginTop: 10,
    padding: 10
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#00B4D8',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginLeft: '80%',
    marginBottom: 20
  },
  addText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  }
});
