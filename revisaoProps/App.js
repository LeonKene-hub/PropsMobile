import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  const peopleList = [
    { id: 1, name: "Carlos", age: 37 },
    { id: 2, name: "Pedro", age: 20 },
    { id: 3, name: "Gabriel", age: 17 },
    { id: 4, name: "Kamile", age: 22 },
    { id: 5, name: "Matheus", age: 12 },
    { id: 6, name: "Ana", age: 40 },
  ]
  return (
    <SafeAreaView style={{ paddingTop: 80 }}>
      <StatusBar />

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <Person name={item.name} age={item.age} />
        )}
      />

    </SafeAreaView>
  );
}


