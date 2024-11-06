import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      kmNewValue: '',
      addService: ''
    }
  });
  const onSubmit = data => console.log(data);

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

      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Service"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="addService"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}