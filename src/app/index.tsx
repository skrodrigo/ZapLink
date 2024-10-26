import { SendHorizontal } from "lucide-react-native";
import React, { useState } from "react";
import {
	Alert,
	Image,
	Linking,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { styles } from "./styles/styles";

export default function Index() {
	const [number, setNumber] = useState("");
	const [message, setMessage] = useState("");

	const handleSend = () => {
		if (number.startsWith("55") && number.length >= 11) {
			const whatsappUrl = `https://web.whatsapp.com/send?phone=${number}&text=${message}`;
			Linking.openURL(whatsappUrl);
		} else {
			Alert.alert(
				'Número inválido! Por favor insira um número que comece com "55" e tenha pelo menos 11 caracteres.',
			);
		}
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/logo.png")}
				style={styles.logo}
			/>
			<Text style={styles.title}>
				Crie uma mensagem personalizada para o Whatsapp!
			</Text>

			<Text style={styles.label}>Digite o Número:</Text>
			<TextInput
				placeholder="55 88 9 9253-9323"
				style={styles.input}
				keyboardType="phone-pad"
				value={number}
				onChangeText={setNumber}
			/>

			<Text style={styles.label}>Digite Sua Mensagem:</Text>
			<TextInput
				placeholder="Olá, Mundo!"
				style={[styles.input, styles.messageInput]}
				multiline
				value={message}
				onChangeText={setMessage}
			/>

			<TouchableOpacity style={styles.button} onPress={handleSend}>
				<Text style={styles.buttonText}>Enviar Mensagem</Text>
				<SendHorizontal size={20} color="#25D366" />
			</TouchableOpacity>
			<View style={styles.footer}>
				<Text style={styles.textFooter}>@ Copyright 2024</Text>
			</View>
		</View>
	);
}
