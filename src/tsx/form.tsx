import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import SelectDropdown from 'react-native-select-dropdown';

import services from '../../assets/data_Select';
import { useState } from "react";

export default function Form() {
  const [ servico , setServico ] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      kmNewValue: '',
      newService: '',
    }
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="-------km-------"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="numeric"
          />
        )}
        name="kmNewValue"
      />
      {errors.kmNewValue && <Text>This is required.</Text>}
          <SelectDropdown
            data={services}
            onSelect={(item: any, index: any)=> setServico(item.description)}
            renderButton={(a: any, b: any) => {
                return (
                  <View>
                    <Text>{(a && b) || 'Adicionar servico'}</Text>
                  </View>
                )
            }}
            renderItem={(item: any, index: any, isSelected: any) => {
              const now = (a: any) => setServico(a)
              now(item.title)
              console.log('servico: '+servico)
              return (
                <View>
                  <Text>{item.title}</Text>
                </View>
              );
            }}
          />
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          value = servico,
          <TextInput
            placeholder="servico"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            // keyboardType=""
          />
        )}
        name="newService"
      />
      {errors.newService && <Text>which one - - - This is required.</Text>}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}