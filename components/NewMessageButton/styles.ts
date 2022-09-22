import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    width: 50,
    height: 50 ,
    borderRadius: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
  },
  
});

export default styles;
