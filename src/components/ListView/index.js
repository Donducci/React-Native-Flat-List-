import {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ListView = props => {
  const [carInput, setCarInput] = useState({
    year: '',
    name: '',
    model: '',
    transmission: '',
    color: '',
    bodyType: '',
  });

  const [carList, setCarList] = useState([]);

  const addCar = () => {
    const {year, name, model, transmission, color, bodyType} = carInput;
    if ((year && name && model && transmission, color, bodyType)) {
      setCarList([
        ...carList,
        {year, name, model, transmission, color, bodyType},
      ]);
      setCarInput({
        year: '',
        name: '',
        model: '',
        transmission: '',
        color: '',
        bodyType: '',
      });
    }
  };

  const navigateToDetailView = carDetails => {
    console.log(carDetails);
    props.navigation.navigate('DetailView', {carDetails});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'lightgray', borderColor: 'black',  borderWidth: 1,
                borderColor: 'black', borderRadius: 20, padding:30}}>
        <TextInput
          placeholder="Year"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, year: text})}
          value={carInput.year}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Name"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, name: text})}
          value={carInput.name}
        />
        <TextInput
          placeholder="Model"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, model: text})}
          value={carInput.model}
        />
        <TextInput
          placeholder="Transmission"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, transmission: text})}
          value={carInput.transmission}
        />
        <TextInput
          placeholder="Color"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, color: text})}
          value={carInput.color}
        />
        <TextInput
          placeholder="Body Type"
          style={{
            backgroundColor: 'lightgreen',
            height: 45,
            margin: 2,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onChangeText={text => setCarInput({...carInput, bodyType: text})}
          value={carInput.bodyType}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'lightgreen',
            height: 45,
            marginHorizontal: 70,
            marginTop:30,
            padding: 8,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'black',
          }}
          onPress={addCar}>
          <Text style={{ fontWeight: 'bold' }}>Add Car</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={carList}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigateToDetailView(item)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgreen',
                height: 60,
                margin: 10,
                padding: 8,
                borderRadius: 40,
                borderWidth: 1,
                borderColor: 'black',
              }}>
              <Text>{item.year}</Text>
              <Text>{item.name}</Text>
              <Text>{item.model}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center'}}
        onPress={() => {
          props.navigation.navigate('DetailView');
        }}>
        <Text>Go to DetailView</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListView;
