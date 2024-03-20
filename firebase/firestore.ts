import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import "dotenv/config";

const serviceAccount = {
	type: "service_account",
	project_id: "watcher-owl",
	private_key_id: process.env.PRIVATE_KEY_ID,
	private_key: process.env.PRIVATE_KEY,
	client_email: process.env.CLIENT_EMAIL,
	client_id: process.env.CLIENT_ID,
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
	universe_domain: "googleapis.com",
};

initializeApp({
	credential: cert(serviceAccount as string | ServiceAccount),
	databaseURL: "https://watcher-owl.firebaseio.com",
});

const firestore = getFirestore();

export { firestore };
