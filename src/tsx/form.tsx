import { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {Picker} from '@react-native-picker/picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import services from '../../assets/data_Select';

export default function Form(props:any) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      kmNewValue: '',
      newService: '',
    }
  });
  const onSubmit = (data: any) => {
    console.log(data)
    props.handleResult(data.kmNewValue)

  };
  const variavel = props.handleText;
  const [selectedService, setSelectedService] = useState('adicionar servico');
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View
    style={{width:300, borderWidth:1, borderColor:'yellow'}}>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            maxLength={6}
          />
        )}
        name="kmNewValue"
        />
      {errors.kmNewValue && <Text>This is required.</Text>}
      <BouncyCheckbox
      text="Adicionar servico?"  
      fillColor="green"
      size={30}    
      iconStyle={{borderColor: 'green'}}
      >
      </BouncyCheckbox>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Picker
            prompt="Escolha um servico"
            selectedValue={selectedService}
            onValueChange={(itemValue, itemIndex) => {
              onChange(itemValue)
              setSelectedService(itemValue)}}
          >
            <Picker.Item label="servico" value='' />
            <Picker.Item label='fuel-tank' value='abastecimento do tanque' />
            <Picker.Item label='oil-change' value='troca de oleo' />
            <Picker.Item label='oil-level' value='nivelamento do oleo' />
            <Picker.Item label='pump-up' value='calibragem dos pneus' />
          </Picker> 
        )}
        name="newService"
      />
      {errors.newService && <Text>This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}