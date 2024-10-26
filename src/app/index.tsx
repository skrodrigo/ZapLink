import { SendHorizontal } from "lucide-react-native";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/styles";

export default function Index() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/logo.svg")}
				style={styles.logo}
			/>
			<Text style={styles.title}>
				Crie uma mensagem personalizada para o Whatsapp!
			</Text>

			<Text style={styles.label}>Digite o Número:</Text>
			<TextInput
				placeholder="(88) 99253-9323"
				style={styles.input}
				keyboardType="phone-pad"
			/>

			<Text style={styles.label}>Digite Sua Mensagem:</Text>
			<TextInput
				placeholder="Olá, Mundo!"
				style={[styles.input, styles.messageInput]}
				multiline
			/>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Enviar Mensagem</Text>
				<SendHorizontal size={20} color="#25D366" />
			</TouchableOpacity>
			<View style={styles.footer}>
				<Text style={styles.textFooter}>@ Copyright 2024</Text>
			</View>
		</View>
	);
}
