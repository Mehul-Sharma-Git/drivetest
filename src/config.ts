function getConfig() {
	return {
            apikey:
                process.env.GOOGLE_DRIVE_API_KEY||"AIzaSyAb2TFu5zTkt5XEBn0hx5TW60j7pv0m3tg",
            clientId:
                process.env.GOOGLE_DRIVE_CLIENT_ID||"761684470596-iu5u78ibli1aj989ug30lsjpcta8pre3.apps.googleusercontent.com",
            rootFolder:
                process.env.ROOT_FOLDER || "1OdP6dmxvf-EPYkJqN6wGNOvmOKx2AX2l"
};
}

export default getConfig();