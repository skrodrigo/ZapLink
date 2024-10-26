import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	logo: {
		width: 150,
		height: 50,
		resizeMode: "contain",
		marginBottom: 20,
		marginTop: 150,
	},

	title: {
		color: "white",
		fontSize: 16,
		textAlign: "center",
		marginBottom: 20,
	},

	label: {
		color: "white",
		alignSelf: "flex-start",
		marginLeft: 10,
		marginBottom: 5,
	},

	input: {
		backgroundColor: "white",
		width: "100%",
		borderRadius: 10,
		padding: 10,
		marginBottom: 15,
	},

	messageInput: {
		height: 80,
		textAlignVertical: "top",
	},

	button: {
		backgroundColor: "#333",
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderRadius: 10,
		marginTop: 10,
		width: "100%",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
	},

	buttonText: {
		color: "#25D366",
		fontWeight: "bold",
		fontSize: 16,
	},

	footer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},

	textFooter: {
		color: "white",
		fontSize: 12,
	},
});
