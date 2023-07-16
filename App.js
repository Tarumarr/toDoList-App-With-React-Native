import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);
  const createTask = () => {
    setTaskItem([...taskItem, task]);
    setTask(null);
  };
  const deleteTask = (index) => {
    let deleteTask = [...taskItem];
    deleteTask.splice(index, 1);
    setTaskItem(deleteTask);
  };

  return (
    <ScrollView style={{ backgroundColor: "black" }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Yapılacaklar Listesi</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="bugün ..."
            placeholderTextColor="#ccc"
            value={task}
            onChangeText={setTask}
          />
        </View>
        <TouchableOpacity onPress={() => createTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Ekle</Text>
          </View>
        </TouchableOpacity>
        {taskItem.map((item, index) => {
          return (
            <View key={index} style={styles.taskContent}>
              <Text style={styles.task}>{item}</Text>
              <TouchableOpacity
                style={styles.deleteContent}
                onPress={() => deleteTask(index)}
              >
                <Text style={styles.delete}>Sil</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#ccc",
    fontWeight: "bold",
    fontSize: 17,
  },
  input: {
    height: 40,
    margin: 12,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  addWrapper: {
    padding: 12,
    alignItems: "center",
    marginRight: "70%",
    marginLeft: 10,
    marginBottom: 30,
    borderRadius: 50,
    backgroundColor: "forestgreen",
  },
  addText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  taskContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 15,
    paddingVertical: 10,
    borderLeftWidth: 0.7,
    borderColor: "#999",
    borderRadius: 10,
    paddingLeft: 15,
  },
  task: {
    marginRight: "30%",
    color: "#ccc",
  },
  deleteContent: {
    position: "absolute",
    right: 1,
    margin: 3,
  },
  delete: {
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 50,
    backgroundColor: "tomato",
    fontWeight: "bold",
    color: "white",
  },
});
